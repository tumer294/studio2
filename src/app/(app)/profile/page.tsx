
'use client';

import { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from '@/hooks/use-auth';
import { db } from '@/lib/firebase';
import { collection, query, where, getDocs, doc, onSnapshot, updateDoc, arrayUnion, arrayRemove, orderBy, documentId } from 'firebase/firestore';
import type { User, Post } from '@/lib/types';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/post-card";
import { Camera, Loader2 } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { Skeleton } from '@/components/ui/skeleton';
import { useTranslation } from '@/hooks/use-translation';
import { getDownloadUrl } from '@/lib/utils';
import { DisplayImage } from '@/components/display-image';

type PostWithUser = Post & { author: User };

function ProfileSkeleton() {
    return (
        <div className="space-y-6">
            <Card className="overflow-hidden">
                <Skeleton className="h-32 md:h-48 w-full" />
                <div className="p-4 relative">
                    <div className="absolute -top-12 md:-top-16 left-4 md:left-6">
                        <Skeleton className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-card" />
                    </div>
                    <div className="flex justify-end items-center mb-4 h-10">
                        <Skeleton className="h-10 w-24" />
                        <Skeleton className="h-10 w-24 ml-2" />
                    </div>
                    <div className="pt-8 md:pt-12 space-y-2">
                        <Skeleton className="h-8 w-48" />
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-4 w-full mt-2" />
                         <Skeleton className="h-4 w-3/4" />
                    </div>
                    <div className="flex gap-6 mt-4">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-5 w-24" />
                    </div>
                </div>
            </Card>
            <Skeleton className="h-10 w-full" />
            <Skeleton className="h-40 w-full" />
        </div>
    )
}

export default function PersonalProfilePage() {
  const { user: currentUser, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const { t } = useTranslation();
  const router = useRouter();

  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [savedPostsWithUsers, setSavedPostsWithUsers] = useState<PostWithUser[]>([]);
  const [userReplies, setUserReplies] = useState<PostWithUser[]>([]);
  const [likedPosts, setLikedPosts] = useState<PostWithUser[]>([]);
  const [followingUsers, setFollowingUsers] = useState<User[]>([]);
  const [followerUsers, setFollowerUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [isUploading, setIsUploading] = useState< 'avatar' | 'cover' | null >(null);

  const avatarInputRef = useRef<HTMLInputElement>(null);
  const coverInputRef = useRef<HTMLInputElement>(null);

  // Giriş yapmamışsa login sayfasına yönlendir
  useEffect(() => {
    if (!authLoading && !currentUser) {
      router.push('/login');
    }
  }, [currentUser, authLoading, router]);

  useEffect(() => {
    if (!currentUser?.uid) {
      return;
    }

    const postsRef = collection(db, 'posts');
    const postsQuery = query(postsRef, where('userId', '==', currentUser.uid));

    const unsubPosts = onSnapshot(
      postsQuery,
      (postsSnapshot) => {
        let postsData = postsSnapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() }) as Post
        );

        postsData.sort((a,b) => b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime());
        setUserPosts(postsData);
        setLoading(false);
      },
      (error) => {
        toast({
          variant: 'destructive',
          title: t.error,
          description: t.couldNotFetchUserPosts,
        });
        setLoading(false);
      }
    );

    return () => unsubPosts();
  }, [currentUser?.uid, toast, t]);

  useEffect(() => {
    if (!currentUser || !currentUser.savedPosts || currentUser.savedPosts.length === 0) {
        setSavedPostsWithUsers([]);
        return;
    }

    const fetchSavedPosts = async () => {
        const savedPostsIds = [...currentUser.savedPosts].reverse(); 
        if (savedPostsIds.length === 0) return;

        try {
            const postPromises = [];
            for (let i = 0; i < savedPostsIds.length; i += 30) {
                const batchIds = savedPostsIds.slice(i, i + 30);
                const postsRef = collection(db, 'posts');
                const savedPostsQuery = query(postsRef, where(documentId(), 'in', batchIds));
                postPromises.push(getDocs(savedPostsQuery));
            }
            const postSnapshots = await Promise.all(postPromises);
            const postsData = postSnapshots.flatMap(snap => snap.docs.map(doc => ({ id: doc.id, ...doc.data() } as Post)));

            const authorIds = [...new Set(postsData.map(post => post.userId))];
            if (authorIds.length === 0) {
                setSavedPostsWithUsers([]);
                return;
            }

            const authorPromises = [];
            for (let i = 0; i < authorIds.length; i += 30) {
                const batchIds = authorIds.slice(i, i + 30);
                const usersRef = collection(db, 'users');
                const authorsQuery = query(usersRef, where('uid', 'in', batchIds));
                authorPromises.push(getDocs(authorsQuery));
            }

            const authorSnapshots = await Promise.all(authorPromises);
            const authors: Record<string, User> = {};
            authorSnapshots.forEach(snap => snap.forEach(doc => {
                 const user = { id: doc.id, ...doc.data() } as User;
                 authors[user.uid] = user;
            }));

            const populatedPosts = postsData
                .map(post => ({
                    ...post,
                    author: authors[post.userId]
                }))
                .filter(p => p.author)
                .sort((a, b) => savedPostsIds.indexOf(a.id) - savedPostsIds.indexOf(b.id)); 

            setSavedPostsWithUsers(populatedPosts);
        } catch(error) {
            toast({ variant: 'destructive', title: t.error, description: t.couldNotFetchSavedPosts });
        }
    };

    fetchSavedPosts();

  }, [currentUser, toast, t]);

  // Fetch user's replies (posts where user has commented)
  useEffect(() => {
    if (!currentUser?.uid) {
      setUserReplies([]);
      return;
    }

    const fetchUserReplies = async () => {
      try {
        const postsRef = collection(db, 'posts');
        const postsQuery = query(postsRef);

        const unsubReplies = onSnapshot(postsQuery, async (postsSnapshot) => {
          const allPosts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Post);
          
          // Filter posts where user has commented
          const postsWithUserComments = allPosts.filter(post => 
            post.comments && post.comments.some(comment => comment.userId === currentUser.uid)
          );

          if (postsWithUserComments.length === 0) {
            setUserReplies([]);
            return;
          }

          // Get authors for these posts
          const authorIds = [...new Set(postsWithUserComments.map(post => post.userId))];
          const authorPromises = [];
          for (let i = 0; i < authorIds.length; i += 30) {
            const batchIds = authorIds.slice(i, i + 30);
            const usersRef = collection(db, 'users');
            const authorsQuery = query(usersRef, where('uid', 'in', batchIds));
            authorPromises.push(getDocs(authorsQuery));
          }

          const authorSnapshots = await Promise.all(authorPromises);
          const authors: Record<string, User> = {};
          authorSnapshots.forEach(snap => snap.forEach(doc => {
            const user = { id: doc.id, ...doc.data() } as User;
            authors[user.uid] = user;
          }));

          const repliesWithUsers = postsWithUserComments
            .map(post => ({
              ...post,
              author: authors[post.userId]
            }))
            .filter(p => p.author)
            .sort((a, b) => b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime());

          setUserReplies(repliesWithUsers);
        });

        return () => unsubReplies();
      } catch (error) {
        console.error('Error fetching replies:', error);
        setUserReplies([]);
      }
    };

    fetchUserReplies();
  }, [currentUser?.uid]);

  // Fetch liked posts
  useEffect(() => {
    if (!currentUser?.uid) {
      setLikedPosts([]);
      return;
    }

    const fetchLikedPosts = async () => {
      try {
        const postsRef = collection(db, 'posts');
        const postsQuery = query(postsRef);

        const unsubLikes = onSnapshot(postsQuery, async (postsSnapshot) => {
          const allPosts = postsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }) as Post);
          
          // Filter posts that user has liked
          const likedPostsData = allPosts.filter(post => 
            post.likes && post.likes.includes(currentUser.uid)
          );

          if (likedPostsData.length === 0) {
            setLikedPosts([]);
            return;
          }

          // Get authors for these posts
          const authorIds = [...new Set(likedPostsData.map(post => post.userId))];
          const authorPromises = [];
          for (let i = 0; i < authorIds.length; i += 30) {
            const batchIds = authorIds.slice(i, i + 30);
            const usersRef = collection(db, 'users');
            const authorsQuery = query(usersRef, where('uid', 'in', batchIds));
            authorPromises.push(getDocs(authorsQuery));
          }

          const authorSnapshots = await Promise.all(authorPromises);
          const authors: Record<string, User> = {};
          authorSnapshots.forEach(snap => snap.forEach(doc => {
            const user = { id: doc.id, ...doc.data() } as User;
            authors[user.uid] = user;
          }));

          const likedPostsWithUsers = likedPostsData
            .map(post => ({
              ...post,
              author: authors[post.userId]
            }))
            .filter(p => p.author)
            .sort((a, b) => b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime());

          setLikedPosts(likedPostsWithUsers);
        });

        return () => unsubLikes();
      } catch (error) {
        console.error('Error fetching liked posts:', error);
        setLikedPosts([]);
      }
    };

    fetchLikedPosts();
  }, [currentUser?.uid]);

  // Fetch following users
  useEffect(() => {
    if (!currentUser?.following || currentUser.following.length === 0) {
      setFollowingUsers([]);
      return;
    }

    const fetchFollowing = async () => {
      try {
        const followingIds = currentUser.following;
        const userPromises = [];
        
        for (let i = 0; i < followingIds.length; i += 30) {
          const batchIds = followingIds.slice(i, i + 30);
          const usersRef = collection(db, 'users');
          const usersQuery = query(usersRef, where('uid', 'in', batchIds));
          userPromises.push(getDocs(usersQuery));
        }

        const userSnapshots = await Promise.all(userPromises);
        const users: User[] = [];
        userSnapshots.forEach(snapshot => 
          snapshot.forEach(doc => {
            const userData = { id: doc.id, ...doc.data() } as User;
            users.push(userData);
          })
        );

        setFollowingUsers(users);
      } catch (error) {
        console.error('Error fetching following:', error);
      }
    };

    fetchFollowing();
  }, [currentUser?.following]);

  // Fetch followers
  useEffect(() => {
    if (!currentUser?.followers || currentUser.followers.length === 0) {
      setFollowerUsers([]);
      return;
    }

    const fetchFollowers = async () => {
      try {
        const followerIds = currentUser.followers;
        const userPromises = [];
        
        for (let i = 0; i < followerIds.length; i += 30) {
          const batchIds = followerIds.slice(i, i + 30);
          const usersRef = collection(db, 'users');
          const usersQuery = query(usersRef, where('uid', 'in', batchIds));
          userPromises.push(getDocs(usersQuery));
        }

        const userSnapshots = await Promise.all(userPromises);
        const users: User[] = [];
        userSnapshots.forEach(snapshot => 
          snapshot.forEach(doc => {
            const userData = { id: doc.id, ...doc.data() } as User;
            users.push(userData);
          })
        );

        setFollowerUsers(users);
      } catch (error) {
        console.error('Error fetching followers:', error);
      }
    };

    fetchFollowers();
  }, [currentUser?.followers]);

 const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'avatar' | 'cover') => {
    if (!e.target.files || e.target.files.length === 0 || !currentUser) return;
    const file = e.target.files[0];

    setIsUploading(type);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', currentUser.uid);
      formData.append('uploadType', type);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed');
      }

      const { key } = result;

      const userDocRef = doc(db, "users", currentUser.uid);
      const updateData = type === 'avatar' ? { avatarUrl: key } : { coverPhotoUrl: key };
      await updateDoc(userDocRef, updateData);

      // Eski cache'i temizle ve yeni resmi cache'e ekle
      const oldImageKey = type === 'avatar' ? currentUser.avatarUrl : currentUser.coverPhotoUrl;
      if (oldImageKey) {
        const oldCacheKey = `media_cache_${oldImageKey}`;
        localStorage.removeItem(oldCacheKey);
      }

      // Yeni resmi localStorage'a cache'le
      try {
        const newImageUrl = await fetch('/api/download', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ key }),
        }).then(res => res.json()).then(data => data.signedUrl);

        if (newImageUrl) {
          const newCacheKey = `media_cache_${key}`;
          const cacheData = {
            url: newImageUrl,
            timestamp: Date.now()
          };
          localStorage.setItem(newCacheKey, JSON.stringify(cacheData));
        }
      } catch (cacheError) {
        console.warn('Could not cache new image:', cacheError);
      }

      toast({ title: t.success, description: type === 'avatar' ? t.newAvatarSaved : t.newCoverSaved });

    } catch (error: any) {
      console.error(error);
      toast({ variant: 'destructive', title: t.uploadFailed, description: error.message || t.couldNotUploadImage });
    } finally {
      setIsUploading(null);
      if (e.target) e.target.value = '';
    }
  };

  if (loading || authLoading || !currentUser) {
      return <ProfileSkeleton />;
  }

  return (
    <div>
        <Card className="overflow-hidden">
            <div className="h-32 md:h-48 bg-gradient-to-r from-primary/20 to-accent/20 relative group">
                <DisplayImage imageKey={currentUser.coverPhotoUrl} alt="Cover photo" fill={true} style={{objectFit:"cover"}} />
                <>
                  <input type="file" accept="image/*" ref={coverInputRef} onChange={(e) => handleImageUpload(e, 'cover')} className="hidden" />
                  <Button size="sm" variant="outline" className="absolute bottom-2 right-2 bg-background/50 backdrop-blur-sm" onClick={() => coverInputRef.current?.click()} disabled={!!isUploading}>
                      {isUploading === 'cover' ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Camera className="mr-2 h-4 w-4" />} 
                      {isUploading === 'cover' ? 'Yükleniyor...' : 'Kapak Fotoğrafı'}
                  </Button>
                </>
            </div>
            <div className="p-4 relative">
                 <div className="absolute -top-12 md:-top-16 left-4 md:left-6 group">
                    <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-card shadow-md">
                        <DisplayImage imageKey={currentUser.avatarUrl} alt={currentUser.name} className="w-full h-full object-cover" width={128} height={128} />
                        <AvatarFallback className="text-4xl">{currentUser.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                     <>
                       <input type="file" accept="image/*" ref={avatarInputRef} onChange={(e) => handleImageUpload(e, 'avatar')} className="hidden" />
                       <div 
                         className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                         onClick={() => avatarInputRef.current?.click()}>
                         {isUploading === 'avatar' ? <Loader2 className="text-white w-8 h-8 animate-spin" /> : <Camera className="text-white w-8 h-8"/>}
                       </div>
                     </>
                </div>

                <div className="pt-8 md:pt-12">
                    <h2 className="text-2xl font-bold font-headline">{currentUser.name}</h2>
                    <p className="text-muted-foreground">@{currentUser.username}</p>
                    <p className="mt-2 text-foreground/90">{currentUser.bio}</p>
                </div>

                <div className="flex gap-6 mt-4 text-sm">
                    <div>
                        <span className="font-bold">{(currentUser.following || []).length}</span>
                        <span className="text-muted-foreground"> {t.following}</span>
                    </div>
                    <div>
                        <span className="font-bold">{(currentUser.followers || []).length}</span>
                        <span className="text-muted-foreground"> {t.followers}</span>
                    </div>
                </div>
            </div>
        </Card>

        <Tabs defaultValue="posts" className="w-full mt-6">
            <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="posts">{t.posts}</TabsTrigger>
                <TabsTrigger value="replies">{t.replies}</TabsTrigger>
                <TabsTrigger value="likes">{t.likes}</TabsTrigger>
                <TabsTrigger value="saved">{t.saved}</TabsTrigger>
                <TabsTrigger value="following">{t.following}</TabsTrigger>
                <TabsTrigger value="followers">{t.followers}</TabsTrigger>
            </TabsList>
            <TabsContent value="posts" className="mt-4 space-y-4">
                {userPosts.length > 0 ? (
                  userPosts.map(post => (
                    <PostCard key={post.id} post={post} user={currentUser} />
                  ))
                ) : (
                    <div className="text-center py-12 text-muted-foreground rounded-lg border">
                        <p>{t.noPostsYet}</p>
                    </div>
                )}
            </TabsContent>
            <TabsContent value="replies" className="mt-4 space-y-4">
                {userReplies.length > 0 ? (
                  userReplies.map(postWithUser => (
                    <div key={postWithUser.id} className="relative">
                      <div className="absolute left-4 top-4 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded z-10">
                        Yanıtladınız
                      </div>
                      <PostCard post={postWithUser} user={postWithUser.author} />
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground rounded-lg border">
                    <p>{t.youHaventRepliedYet}</p>
                  </div>
                )}
            </TabsContent>
            <TabsContent value="likes" className="mt-4 space-y-4">
                {likedPosts.length > 0 ? (
                  likedPosts.map(postWithUser => (
                    <div key={postWithUser.id} className="relative">
                      <div className="absolute left-4 top-4 text-xs text-muted-foreground bg-secondary px-2 py-1 rounded z-10">
                        Beğendiniz
                      </div>
                      <PostCard post={postWithUser} user={postWithUser.author} />
                    </div>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground rounded-lg border">
                    <p>{t.youHaventLikedYet}</p>
                  </div>
                )}
            </TabsContent>
            <TabsContent value="saved" className="mt-4 space-y-4">
                {savedPostsWithUsers.length > 0 ? (
                    savedPostsWithUsers.map(postWithUser => (
                        <PostCard key={postWithUser.id} post={postWithUser} user={postWithUser.author} />
                    ))
                ) : (
                    <div className="text-center py-12 text-muted-foreground rounded-lg border">
                        <p>{t.youHaventSavedPosts}</p>
                    </div>
                )}
            </TabsContent>
            <TabsContent value="following" className="mt-4 space-y-4">
                {followingUsers.length > 0 ? (
                  followingUsers.map(user => (
                    <Card key={user.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <DisplayImage imageKey={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" width={40} height={40} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-muted-foreground">@{user.username}</p>
                            {user.bio && <p className="text-sm text-muted-foreground mt-1">{user.bio}</p>}
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.location.href = `/profile/${user.username}`}
                        >
                          Profili Gör
                        </Button>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground rounded-lg border">
                    <p>Henüz kimseyi takip etmiyorsunuz</p>
                  </div>
                )}
            </TabsContent>
            <TabsContent value="followers" className="mt-4 space-y-4">
                {followerUsers.length > 0 ? (
                  followerUsers.map(user => (
                    <Card key={user.id} className="p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Avatar>
                            <DisplayImage imageKey={user.avatarUrl} alt={user.name} className="w-full h-full object-cover" width={40} height={40} />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{user.name}</p>
                            <p className="text-sm text-muted-foreground">@{user.username}</p>
                            {user.bio && <p className="text-sm text-muted-foreground mt-1">{user.bio}</p>}
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => window.location.href = `/profile/${user.username}`}
                        >
                          Profili Gör
                        </Button>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="text-center py-12 text-muted-foreground rounded-lg border">
                    <p>Henüz takipçiniz yok</p>
                  </div>
                )}
            </TabsContent>
        </Tabs>
    </div>
  );
}
