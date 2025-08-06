"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { collection, query, orderBy, onSnapshot, getDoc, doc, limit, startAfter, getDocs, where } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useAuth } from "@/hooks/use-auth";
import DailyWisdom from "@/components/daily-wisdom";
import PostCard from "@/components/post-card";
import type { Post, User } from "@/lib/types";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { PenSquare, Loader2 } from "lucide-react";
import { useCreatePost } from "@/hooks/use-create-post";
import { Card } from "@/components/ui/card";
import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";
import CreatePostDialog from "@/components/create-post-dialog";

function FeedSkeleton() {
    return (
        <div className="space-y-6 p-4 md:p-0">
            <Skeleton className="h-28 w-full" />
            <Skeleton className="h-48 w-full" />
            <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold">Feed</h2>
                <Separator className="flex-1" />
            </div>
            <div className="space-y-4">
                <Skeleton className="h-40 w-full rounded-lg" />
                <Skeleton className="h-64 w-full rounded-lg" />
                <Skeleton className="h-40 w-full rounded-lg" />
            </div>
        </div>
    )
}

export default function FeedPage() {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const { onOpen } = useCreatePost();
  const { t } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [followingPosts, setFollowingPosts] = useState<Post[]>([]);
  const [users, setUsers] = useState<Record<string, User>>({});
  const [dataLoading, setDataLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const lastDocRef = useRef<any>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<'all' | 'following'>('all');

  const POSTS_PER_PAGE = 10;

  const fetchUsers = async (userIds: string[]) => {
    const newUserIds = userIds.filter(id => !users[id]);
    if (newUserIds.length === 0) return;

    try {
      const usersRef = collection(db, "users");
      const userDocsPromises = newUserIds.map(id => getDoc(doc(usersRef, id)));
      const userDocs = await Promise.all(userDocsPromises);

      const newUsersData: Record<string, User> = {};
      userDocs.forEach(userDoc => {
        if (userDoc.exists()) {
          newUsersData[userDoc.id] = { id: userDoc.id, ...userDoc.data() } as User;
        }
      });
      setUsers(prevUsers => ({ ...prevUsers, ...newUsersData }));
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const loadMorePosts = useCallback(async () => {
    // Kayıtlı olmayan kullanıcılar için sayfa sonuna gelindiğinde yükleme yapma
    if (!user && !hasMore) return;
    if (loadingMore || !hasMore) return;


    setLoadingMore(true);
    try {
      let q;
      if (lastDocRef.current) {
        q = query(
          collection(db, "posts"),
          orderBy("createdAt", "desc"),
          startAfter(lastDocRef.current),
          limit(POSTS_PER_PAGE)
        );
      } else {
        q = query(
          collection(db, "posts"),
          orderBy("createdAt", "desc"),
          limit(POSTS_PER_PAGE)
        );
      }

      const querySnapshot = await getDocs(q);
      const newPosts = querySnapshot.docs
        .map(doc => ({ id: doc.id, ...doc.data() } as Post))
        .filter(post => post.status !== 'banned');

      if (newPosts.length < POSTS_PER_PAGE) {
        setHasMore(false);
      }

      if (newPosts.length > 0) {
        lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
        setPosts(prevPosts => [...prevPosts, ...newPosts]);

        // Yeni gönderilerin kullanıcı bilgilerini çek
        const userIds = newPosts.map(p => p.userId);
        await fetchUsers(userIds);
      }
    } catch (error) {
      console.error("Error loading more posts:", error);
      toast({
        variant: 'destructive',
        title: t.error,
        description: t.couldNotFetchPosts
      });
    } finally {
      setLoadingMore(false);
    }
  }, [user, loadingMore, hasMore, toast, t, users]);

  // İlk yükleme ve gerçek zamanlı güncellemeler
  useEffect(() => {
    // Kayıtlı olmayan kullanıcılar için sadece ilk `POSTS_PER_PAGE` kadar gönderiyi yükle
    const initialLimit = user ? POSTS_PER_PAGE : POSTS_PER_PAGE; 

    if (authLoading) return;

    // Kayıt olmayan kullanıcılar için ilk yükleme
    if (!user) {
      const q = query(
        collection(db, "posts"),
        orderBy("createdAt", "desc"),
        limit(initialLimit)
      );

      const unsubscribe = onSnapshot(q, async (querySnapshot) => {
        try {
          const newPosts = querySnapshot.docs
            .map(doc => ({ id: doc.id, ...doc.data() } as Post))
            .filter(post => post.status !== 'banned');

          if (newPosts.length < initialLimit) {
            setHasMore(false);
          } else {
            setHasMore(true);
          }

          if (newPosts.length > 0) {
            lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
          }

          setPosts(newPosts);
          const userIds = newPosts.map(p => p.userId);
          await fetchUsers(userIds);
          setDataLoading(false);
        } catch (error) {
          console.error("Error in real-time posts update (unauthenticated):", error);
          toast({
            variant: 'destructive',
            title: t.error,
            description: t.couldNotFetchPosts
          });
          setDataLoading(false);
        }
      }, (error) => {
        console.error("Error listening to posts (unauthenticated):", error);
        toast({
          variant: 'destructive',
          title: t.error,
          description: t.couldNotFetchPosts
        });
        setDataLoading(false);
      });

      return () => unsubscribe();
    }

    // Kayıtlı kullanıcılar için ilk yükleme ve gerçek zamanlı güncellemeler
    const q = query(
      collection(db, "posts"),
      orderBy("createdAt", "desc"),
      limit(POSTS_PER_PAGE)
    );

    const unsubscribe = onSnapshot(q, async (querySnapshot) => {
      try {
        const newPosts = querySnapshot.docs
          .map(doc => ({ id: doc.id, ...doc.data() } as Post))
          .filter(post => post.status !== 'banned');

        if (newPosts.length < POSTS_PER_PAGE) {
          setHasMore(false);
        } else {
          setHasMore(true);
        }

        if (newPosts.length > 0) {
          lastDocRef.current = querySnapshot.docs[querySnapshot.docs.length - 1];
        }

        setPosts(newPosts);

        // Kullanıcı bilgilerini çek
        const userIds = newPosts.map(p => p.userId);
        await fetchUsers(userIds);

        setDataLoading(false);
      } catch (error) {
        console.error("Error in real-time posts update:", error);
        toast({
          variant: 'destructive',
          title: t.error,
          description: t.couldNotFetchPosts
        });
        setDataLoading(false);
      }
    }, (error) => {
      console.error("Error listening to posts:", error);
      toast({
        variant: 'destructive',
        title: t.error,
        description: t.couldNotFetchPosts
      });
      setDataLoading(false);
    });

    return () => unsubscribe();
  }, [user, authLoading, toast, t]);

  // Intersection Observer için sentinel element
  useEffect(() => {
    if (!sentinelRef.current || dataLoading) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore && !loadingMore) {
          loadMorePosts();
        }
      },
      {
        root: null,
        rootMargin: '200px', // 200px önce tetikle
        threshold: 0.1
      }
    );

    observerRef.current.observe(sentinelRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMorePosts, hasMore, loadingMore, dataLoading]);

  // Kayıtlı olmayan kullanıcılar için skeleton yüklemesi
  if (authLoading) {
    return <FeedSkeleton />;
  }

  if (!user) {
    // Kayıt olmayan kullanıcılar için sadece anasayfayı göster
    return (
      <div className="space-y-6 p-4 md:p-0">
        <DailyWisdom />

        <div className="p-4 bg-card border rounded-lg shadow-sm">
          <p className="text-center text-muted-foreground py-4">
            Daha fazla özellikten yararlanmak için lütfen kayıt olun veya giriş yapın.
          </p>
          <div className="mt-4 flex justify-center gap-2">
            <Button variant="default" onClick={() => window.location.href = '/signup'}>Kayıt Ol</Button>
            <Button variant="outline" onClick={() => window.location.href = '/login'}>Giriş Yap</Button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <h2 className="text-lg font-bold">Feed</h2>
          <Separator className="flex-1" />
        </div>

        {dataLoading ? (
          <div className="space-y-4">
            <Skeleton className="h-40 w-full rounded-lg" />
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        ) : (
          <div className="space-y-4">
            {posts.map((post, index) => {
              const postUser = users[post.userId];
              return postUser ? (
                <PostCard key={post.id} post={post} user={postUser} />
              ) : (
                <Card key={post.id} className="p-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="w-10 h-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                  <Skeleton className="h-20 w-full mt-4" />
                </Card>
              );
            })}

            {/* Sentinel element - görünür olduğunda daha fazla gönderi yükler */}
            {posts.length >= 3 && (
              <div ref={sentinelRef} className="h-10 flex items-center justify-center">
                {loadingMore && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Daha fazla gönderi yükleniyor...</span>
                  </div>
                )}
              </div>
            )}

            {!hasMore && posts.length > 0 && (
              <div className="text-center py-8 text-muted-foreground">
                <p>Tüm gönderiler yüklendi</p>
              </div>
            )}

            {posts.length === 0 && !dataLoading && (
              <div className="text-center py-12 text-muted-foreground">
                <p>Henüz gönderi bulunmuyor</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Kayıtlı kullanıcılar için tam içerik
  return (
    <div className="space-y-6 p-4 md:p-0">
      <DailyWisdom />

      {user && <CreatePostDialog />}

      {user && (
        <div className="flex gap-2 border-b">
          <Button 
            variant={activeTab === 'all' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('all')}
            className="flex-1"
          >
            Tüm Gönderiler
          </Button>
          <Button 
            variant={activeTab === 'following' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('following')}
            className="flex-1"
          >
            Takip Ettiklerim ({user.following?.length || 0})
          </Button>
        </div>
      )}

      {dataLoading ? (
        <div className="space-y-6">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="border rounded-lg p-4 space-y-3">
              <div className="flex items-center space-x-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
              <Skeleton className="h-20 w-full" />
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-6">
          {((user && activeTab === 'following') ? followingPosts : posts).map((post) => {
            const postUser = users[post.userId];
            return postUser ? (
              <PostCard key={post.id} post={post} user={postUser} />
            ) : (
              <Card key={post.id} className="p-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="w-10 h-10 rounded-full" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                </div>
                <Skeleton className="h-20 w-full mt-4" />
              </Card>
            );
          })}
          {((user && activeTab === 'following') ? followingPosts : posts).length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              {user && activeTab === 'following' ? (
                <div>
                  <p>Takip ettiğiniz kişilerden henüz gönderi yok.</p>
                  <p className="mt-2 text-sm">Keşfet sayfasından yeni kişileri takip edebilirsiniz.</p>
                </div>
              ) : (
                <p>{t.noPosts}</p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}