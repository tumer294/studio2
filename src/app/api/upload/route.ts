import { NextResponse } from 'next/server';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { db } from '@/lib/firebase';
import { doc, getDoc, writeBatch, Timestamp } from 'firebase/firestore';
import type { User, StorageStats } from '@/lib/types';

const {
  CLOUDFLARE_R2_ACCESS_KEY_ID,
  CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  CLOUDFLARE_R2_BUCKET_NAME,
  CLOUDFLARE_ACCOUNT_ID
} = process.env;

const s3Client = CLOUDFLARE_R2_ACCESS_KEY_ID && CLOUDFLARE_R2_SECRET_ACCESS_KEY && CLOUDFLARE_R2_BUCKET_NAME && CLOUDFLARE_ACCOUNT_ID
  ? new S3Client({
      region: 'us-east-1',
      endpoint: `https://${CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
      credentials: {
        accessKeyId: CLOUDFLARE_R2_ACCESS_KEY_ID,
        secretAccessKey: CLOUDFLARE_R2_SECRET_ACCESS_KEY,
      },
      forcePathStyle: true,
    })
  : null;

const MAX_FILE_SIZE_MB = 50;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;
const DAILY_UPLOAD_LIMIT_MB = 200;
const DAILY_UPLOAD_LIMIT_BYTES = DAILY_UPLOAD_LIMIT_MB * 1024 * 1024;
const GLOBAL_STORAGE_LIMIT_GB = 9.9;
const GLOBAL_STORAGE_LIMIT_BYTES = GLOBAL_STORAGE_LIMIT_GB * 1024 * 1024 * 1024;

async function buffer(readable: NodeJS.ReadableStream) {
  const chunks = [];
  for await (const chunk of readable) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}


export async function POST(request: Request) {
  if (!s3Client) {
    return NextResponse.json({ error: 'Server not configured for file operations.' }, { status: 500 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;
    const userId = formData.get('userId') as string | null;
    const uploadType = formData.get('uploadType') as 'post' | 'avatar' | 'cover' | null;

    if (!file || !userId || !uploadType) {
      return NextResponse.json({ error: 'Missing file, user ID, or uploadType in request.' }, { status: 400 });
    }

    const { name: filename, type: contentType, size } = file;

    // 1. Per-file size limit check
    if (size > MAX_FILE_SIZE_BYTES) {
        return NextResponse.json({ error: `File size cannot exceed ${MAX_FILE_SIZE_MB}MB.` }, { status: 400 });
    }

    const userRef = doc(db, 'users', userId);
    const storageStatsRef = doc(db, 'storageStats', 'global');

    const [userDoc, storageStatsDoc] = await Promise.all([
      getDoc(userRef),
      getDoc(storageStatsRef),
    ]);

    if (!userDoc.exists()) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }

    const userData = userDoc.data() as User;
    let storageStatsData = storageStatsDoc.data() as StorageStats | undefined;

    // 2. Global storage limit check
    const now = new Date();
    let currentCycleStart = storageStatsData?.currentCycleStart?.toDate() || new Date(0);

    const oneMonthAgo = new Date(now);
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

    if (currentCycleStart < oneMonthAgo) {
      storageStatsData = { totalStorageUsed: 0, currentCycleStart: Timestamp.fromDate(now) };
    }

    if (!storageStatsData) {
         storageStatsData = { totalStorageUsed: 0, currentCycleStart: Timestamp.fromDate(now) };
    }

    if (storageStatsData.totalStorageUsed + size > GLOBAL_STORAGE_LIMIT_BYTES) {
      const nextResetDate = new Date(currentCycleStart);
      nextResetDate.setMonth(nextResetDate.getMonth() + 1);
      return NextResponse.json({ 
        error: `Global storage limit reached. Please try again after ${nextResetDate.toLocaleDateString()}.` 
      }, { status: 429 });
    }


    // 3. Daily user upload limit check
    const today = now.toISOString().split('T')[0];
    const dailyUploads = userData.dailyUploads || {};
    const todayUploads = dailyUploads[today] || 0;

    if (todayUploads + size > DAILY_UPLOAD_LIMIT_BYTES) {
      return NextResponse.json({ error: `You have reached your daily upload limit of ${DAILY_UPLOAD_LIMIT_MB}MB.` }, { status: 429 });
    }

    const folder = uploadType === 'post' ? 'posts' : (uploadType === 'avatar' ? 'avatars' : 'covers');
    const key = `${folder}/${userId}/${Date.now()}-${filename}`;

    const fileBuffer = await buffer(file.stream());

    // 4. Upload to R2
    await s3Client.send(new PutObjectCommand({
      Bucket: CLOUDFLARE_R2_BUCKET_NAME,
      Key: key,
      Body: fileBuffer,
      ContentType: contentType,
      ContentLength: size,
    }));

    // 5. Update stats in a batch
    const batch = writeBatch(db);

    batch.update(userRef, {
      [`dailyUploads.${today}`]: todayUploads + size
    });

    batch.set(storageStatsRef, {
      totalStorageUsed: (storageStatsData.totalStorageUsed || 0) + size,
      currentCycleStart: storageStatsData.currentCycleStart,
    }, { merge: true });

    await batch.commit();

    return NextResponse.json({ key });

  } catch (error: any) {
    console.error('Error processing upload request:', error);
    return NextResponse.json({ error: 'Failed to process upload request', details: error.message }, { status: 500 });
  }
}