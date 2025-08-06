
import type { Language } from "@/app-strings";
import type { Timestamp } from "firebase/firestore";

export interface User {
  id: string; // This will be the Firebase UID
  uid: string; // This will be the Firebase UID
  name: string;
  username: string;
  email: string;
  avatarUrl?: string; // This is now the object key in R2, not a full URL
  coverPhotoUrl?: string; // This is now the object key in R2, not a full URL
  bio?: string;
  followers: string[]; // Array of user IDs
  following: string[]; // Array of user IDs
  savedPosts?: string[]; // Array of post IDs
  'data-ai-hint'?: string;
  role: 'user' | 'admin';
  createdAt: any; // Firestore Timestamp
  language?: Language;
  theme?: string;
  dailyUploads?: {
    [date: string]: number; // "YYYY-MM-DD": bytes
  };
}

export type PostType = 'text' | 'image' | 'video' | 'link';

export interface Comment {
  id: string;
  userId: string;
  username: string;
  name: string;
  avatarUrl?: string; // Can be object key
  content: string;
  createdAt: string; // Should be an ISO date string
}

export interface Report {
  userId: string;
  reason: string;
  createdAt: any; // Firestore Timestamp
}

export interface Post {
  id: string;
  userId:string;
  type: PostType;
  content: string; // For text post or caption
  mediaUrl?: string; // For image/video/link URL or object key
  createdAt: any; // Firestore Timestamp
  likes: string[]; // Array of user IDs who liked the post
  comments: Comment[];
  'data-ai-hint'?: string;
  reports?: Report[];
  status?: 'active' | 'banned';
  fileSize?: number; // Size of the uploaded media in bytes
}

export interface StorageStats {
    totalStorageUsed: number; // in bytes
    currentCycleStart: any; // Firestore Timestamp
}
