import { NextResponse } from 'next/server';
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';

// Basic validation for environment variables
const {
  CLOUDFLARE_R2_ACCESS_KEY_ID,
  CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  CLOUDFLARE_R2_BUCKET_NAME,
  CLOUDFLARE_ACCOUNT_ID,
} = process.env;

console.log('Environment variables check:', {
  hasAccessKey: !!CLOUDFLARE_R2_ACCESS_KEY_ID,
  hasSecretKey: !!CLOUDFLARE_R2_SECRET_ACCESS_KEY,
  hasBucketName: !!CLOUDFLARE_R2_BUCKET_NAME,
  hasAccountId: !!CLOUDFLARE_ACCOUNT_ID
});

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

export async function POST(request: Request) {
  if (!s3Client) {
      return NextResponse.json({ error: 'Server not configured for file operations.' }, { status: 500 });
  }

  try {
    const { key } = await request.json();

    if (!key) {
      return NextResponse.json({ error: 'Missing required field: key' }, { status: 400 });
    }

    const command = new GetObjectCommand({
      Bucket: CLOUDFLARE_R2_BUCKET_NAME,
      Key: key,
    });

    // Generate a pre-signed URL for download, valid for 1 hour
    const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); 

    return NextResponse.json({ signedUrl });

  } catch (error: any) {
    console.error('Error creating signed download URL:', error);
    return NextResponse.json({ error: 'Failed to process download request', details: error.message }, { status: 500 });
  }
}