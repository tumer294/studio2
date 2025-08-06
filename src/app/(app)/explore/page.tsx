
"use client";

import { useState, useEffect } from "react";
import { collection, query, onSnapshot, doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Post, User } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";
import { Heart, MessageCircle, Search, TrendingUp, Clock, Image } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useTranslation } from "@/hooks/use-translation";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PostCard from "@/components/post-card";

function ExploreSkeleton() {
    return (
        <div className="space-y-8 p-4 md:p-0">
            <div>
                <Skeleton className="h-8 w-1/3 mb-4" />
                <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                        <Skeleton key={i} className="h-40 w-full rounded-lg" />
                    ))}
                </div>
            </div>
        </div>
    );
}

function PostList({ title, posts, users, icon: Icon }: { 
    title: string, 
    posts: Post[], 
    users: Record<string, User>,
    icon: React.ElementType
}) {
    if (posts.length === 0) {
        return (
            <div className="text-center py-12 text-muted-foreground">
                <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                <p>Bu kategoride henüz gönderi bulunmuyor.</p>
            </div>
        );
    }

    return (
        <section className="space-y-4">
            <div className="flex items-center gap-2">
                 <Icon className="w-6 h-6 text-primary"/>
                 <h2 className="text-xl md:text-2xl font-bold font-headline">{title}</h2>
                 <Separator className="flex-1" />
            </div>
            <div className="space-y-4">
                {posts.map((post) => {
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
            </div>
        </section>
    )
}

export default function ExplorePage() {
    const [mostLikedPosts, setMostLikedPosts] = useState<Post[]>([]);
    const [mostCommentedPosts, setMostCommentedPosts] = useState<Post[]>([]);
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    const [trendingPosts, setTrendingPosts] = useState<Post[]>([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [allPosts, setAllPosts] = useState<Post[]>([]);
    const [users, setUsers] = useState<Record<string, User>>({});
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

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

    useEffect(() => {
        const q = query(collection(db, "posts"));

        const unsubscribe = onSnapshot(q, async (querySnapshot) => {
            const posts: Post[] = [];
            querySnapshot.forEach((doc) => {
                posts.push({ id: doc.id, ...doc.data() } as Post);
            });

            const validPosts = posts.filter(p => p.status !== 'banned');
            setAllPosts(validPosts);

            // En çok beğenilen
            const sortedByLikes = [...validPosts].sort((a, b) => (b.likes?.length || 0) - (a.likes?.length || 0));
            setMostLikedPosts(sortedByLikes.slice(0, 10));

            // En çok yorumlanan
            const sortedByComments = [...validPosts].sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
            setMostCommentedPosts(sortedByComments.slice(0, 10));

            // En yeni
            const sortedByDate = [...validPosts].sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
            setRecentPosts(sortedByDate.slice(0, 10));

            // Trend (son 7 günde en çok etkileşim alan)
            const sevenDaysAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
            const recentInteractions = validPosts.filter(p => 
                (p.createdAt?.seconds || 0) * 1000 > sevenDaysAgo
            );
            const sortedByTrending = [...recentInteractions].sort((a, b) => {
                const scoreA = (a.likes?.length || 0) + (a.comments?.length || 0) * 2;
                const scoreB = (b.likes?.length || 0) + (b.comments?.length || 0) * 2;
                return scoreB - scoreA;
            });
            setTrendingPosts(sortedByTrending.slice(0, 10));

            // Kullanıcı bilgilerini çek
            const userIds = validPosts.map(p => p.userId);
            await fetchUsers(userIds);
            
            setLoading(false);
        }, (error) => {
            console.error("Error fetching posts for explore page: ", error);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (searchQuery.trim()) {
            const filtered = allPosts.filter(post => 
                post.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                users[post.userId]?.name?.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredPosts(filtered.slice(0, 12));
        } else {
            setFilteredPosts([]);
        }
    }, [searchQuery, allPosts, users]);

    if (loading) {
        return <ExploreSkeleton />;
    }

    return (
        <div className="p-4 md:p-0">
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-2xl md:text-3xl">{t.explore}</CardTitle>
                    <p className="text-muted-foreground">{t.exploreDescription}</p>
                    
                    {/* Arama Çubuğu */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input
                            placeholder="Gönderi veya kullanıcı ara..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </CardHeader>
                <CardContent>
                    {searchQuery.trim() && (
                        <div className="mb-8">
                            <div className="flex items-center gap-2 mb-4">
                                <Search className="w-5 h-5 text-primary"/>
                                <h2 className="text-xl font-bold font-headline">Arama Sonuçları</h2>
                                <span className="text-sm text-muted-foreground">({filteredPosts.length} sonuç)</span>
                            </div>
                            {filteredPosts.length > 0 ? (
                                <div className="space-y-4">
                                    {filteredPosts.map((post) => {
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
                                </div>
                            ) : (
                                <div className="text-center py-8 text-muted-foreground">
                                    <p>Arama kriterlerinize uygun gönderi bulunamadı.</p>
                                </div>
                            )}
                            <Separator className="mt-8" />
                        </div>
                    )}

                    <Tabs defaultValue="trending" className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-6">
                            <TabsTrigger value="trending" className="flex items-center gap-2 text-xs md:text-sm">
                                <TrendingUp className="w-4 h-4" />
                                <span className="hidden sm:inline">Trend</span>
                            </TabsTrigger>
                            <TabsTrigger value="liked" className="flex items-center gap-2 text-xs md:text-sm">
                                <Heart className="w-4 h-4" />
                                <span className="hidden sm:inline">Beğenilen</span>
                            </TabsTrigger>
                            <TabsTrigger value="commented" className="flex items-center gap-2 text-xs md:text-sm">
                                <MessageCircle className="w-4 h-4" />
                                <span className="hidden sm:inline">Yorumlanan</span>
                            </TabsTrigger>
                            <TabsTrigger value="recent" className="flex items-center gap-2 text-xs md:text-sm">
                                <Clock className="w-4 h-4" />
                                <span className="hidden sm:inline">Yeni</span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="trending">
                            <PostList title="Bu Hafta Trend Olanlar" posts={trendingPosts} users={users} icon={TrendingUp} />
                        </TabsContent>

                        <TabsContent value="liked">
                            <PostList title={t.mostLikedPosts} posts={mostLikedPosts} users={users} icon={Heart} />
                        </TabsContent>

                        <TabsContent value="commented">
                            <PostList title={t.mostCommentedPosts} posts={mostCommentedPosts} users={users} icon={MessageCircle} />
                        </TabsContent>

                        <TabsContent value="recent">
                            <PostList title="En Yeni Gönderiler" posts={recentPosts} users={users} icon={Clock} />
                        </TabsContent>
                    </Tabs>

                    {mostLikedPosts.length === 0 && mostCommentedPosts.length === 0 && recentPosts.length === 0 && !loading && (
                        <div className="text-center py-12 text-muted-foreground">
                            <Image className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p>{t.noImagePostsToExplore}</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
