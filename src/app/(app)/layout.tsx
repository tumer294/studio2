"use client";

import * as React from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/hooks/use-auth";
import { useIsMobile } from "@/hooks/use-mobile";
import AppSidebar from "@/components/app-sidebar";
import MobileBottomNav from "@/components/mobile-bottom-nav";
import MobileHeader from "@/components/mobile-header";
import { Skeleton } from "@/components/ui/skeleton";
import { getRedirectResult } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp, collection, query, where, orderBy, limit, getDocs, updateDoc } from "firebase/firestore";
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import type { User } from '@/lib/types';
import { useTranslation } from "@/hooks/use-translation";
import { useState, useEffect } from "react";
import { onSnapshot } from "firebase/firestore";
import type { Post } from "@/lib/types";
import WelcomeDialog from "@/components/welcome-dialog";


function AppLoadingSkeleton() {
    return (
        <div className="flex min-h-screen bg-background">
             <div className="hidden md:flex w-64 flex-shrink-0 border-r border-border/60 flex-col p-4 bg-card">
                 <Skeleton className="h-8 w-3/4 mb-8" />
                 <div className="flex-1 space-y-2">
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                    <Skeleton className="h-12 w-full" />
                 </div>
                 <div className="mt-auto space-y-2">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-12 w-full" />
                 </div>
             </div>
             <main className="flex-1 max-w-2xl mx-auto py-8 px-4 space-y-6">
                <Skeleton className="h-24 w-full" />
                <Skeleton className="h-40 w-full" />
                <Skeleton className="h-64 w-full" />
             </main>
        </div>
    )
}


export default function AppLayout({ children }: { children: React.ReactNode }) {
  const isMobile = useIsMobile();
  const { user, loading } = useAuth();
  const router = useRouter();
  const { t, language } = useTranslation();
  const [trendingTopics, setTrendingTopics] = useState<string[]>(['İslam', 'Günlük', 'Sohbet', 'Paylaşım', 'Toplum']);
  const [suggestedUsers, setSuggestedUsers] = useState<User[]>([]);
  const [recentActivities, setRecentActivities] = useState<string[]>([]);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(false);


  React.useEffect(() => {
    // This effect only handles redirecting away if the user is NOT authenticated *after* loading is complete.
    // It avoids the race condition of redirecting before the auth state is fully resolved.
    if (!loading && !user) {
      router.replace('/login');
    }
  }, [user, loading, router]);

  React.useEffect(() => {
    const handleRedirectResult = async () => {
        try {
            const result = await getRedirectResult(auth);
            if (result && result.user) {
                const firebaseUser = result.user;
                const userDocRef = doc(db, "users", firebaseUser.uid);
                const userDoc = await getDoc(userDocRef);

                if (!userDoc.exists()) {
                    // Generate a username from email or display name
                    const emailUsername = firebaseUser.email?.split('@')[0].replace(/[^a-zA-Z0-9]/g, '');
                    const nameUsername = firebaseUser.displayName?.replace(/\s/g, '').toLowerCase();
                    const username = emailUsername || nameUsername || `user${Date.now()}`;

                    await setDoc(userDocRef, {
                        uid: firebaseUser.uid,
                        name: firebaseUser.displayName || 'New User',
                        username: username,
                        email: firebaseUser.email,
                        bio: t.welcomeToUmmahConnect,
                        avatarUrl: '', // Let's keep this as an R2 key, so empty string is fine.
                        coverPhotoUrl: '',
                        followers: [],
                        following: [],
                        createdAt: serverTimestamp(),
                        role: 'user',
                        theme: 'light',
                        language: language,
                        welcomeShown: false // Initialize welcomeShown to false
                    });
                    // Set showWelcomeDialog to true for the new user
                    setShowWelcomeDialog(true);
                } else {
                    // If user exists, check if welcome message has been shown
                    const userData = userDoc.data();
                    if (!userData.welcomeShown) {
                        setShowWelcomeDialog(true);
                    }
                }
            }
        } catch (error) {
            console.error("Error handling redirect result:", error);
        }
    };
    handleRedirectResult();
  }, [t, language]);

  // Fetch sidebar data with real-time updates
  React.useEffect(() => {
    if (!user) return;

    const unsubscribes: (() => void)[] = [];

    try {
      // Real-time trending topics - generate from recent posts
      const postsForTrendingRef = collection(db, "posts");
      const qTrendingPosts = query(postsForTrendingRef, orderBy("createdAt", "desc"), limit(50));
      const unsubTrending = onSnapshot(qTrendingPosts, (snapshot) => {
        const recentPosts = snapshot.docs.map(doc => doc.data());

        // Extract hashtags from recent posts
        const hashtags: Record<string, number> = {};
        recentPosts.forEach(post => {
          const content = post.content || '';
          const matches = content.match(/#\w+/g) || [];
          matches.forEach(hashtag => {
            const tag = hashtag.substring(1); // Remove #
            hashtags[tag] = (hashtags[tag] || 0) + 1;
          });
        });

        // Get top trending hashtags
        const trendingList = Object.entries(hashtags)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 5)
          .map(([tag]) => tag);

        // If no hashtags found, use default topics
        if (trendingList.length === 0) {
          setTrendingTopics(['İslam', 'Günlük', 'Sohbet', 'Paylaşım', 'Toplum']);
        } else {
          setTrendingTopics(trendingList);
        }
      });
      unsubscribes.push(unsubTrending);

      // Real-time suggested users
      const usersRef = collection(db, "users");
      const qUsers = query(usersRef, where("uid", "!=", user.uid), limit(3));
      const unsubUsers = onSnapshot(qUsers, (snapshot) => {
        setSuggestedUsers(snapshot.docs.map(doc => ({
          uid: doc.id,
          username: doc.data().username,
          name: doc.data().name,
          avatarUrl: doc.data().avatarUrl
        })));
      });
      unsubscribes.push(unsubUsers);

      // Real-time recent activities
      const postsRef = collection(db, "posts");
      const qPosts = query(postsRef, orderBy("createdAt", "desc"), limit(5));
      const unsubPosts = onSnapshot(qPosts, async (snapshot) => {
        const recentPosts = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const recentActivitiesData = [];

        for (const post of recentPosts.slice(0, 3)) {
          try {
            const userDoc = await getDocs(query(collection(db, "users"), where("uid", "==", post.userId), limit(1)));
            if (!userDoc.empty) {
              const userData = userDoc.docs[0].data();
              recentActivitiesData.push(`${userData.username} yeni gönderi paylaştı`);
            }
          } catch (error) {
            console.error("Error fetching user for post:", error);
          }
        }

        setRecentActivities(recentActivitiesData);
      });
      unsubscribes.push(unsubPosts);

    } catch (error) {
      console.error("Error setting up real-time listeners:", error);
    }

    // Cleanup function
    return () => {
      unsubscribes.forEach(unsubscribe => unsubscribe());
    };
  }, [user]);

  const handleWelcomeClose = async () => {
    setShowWelcomeDialog(false);

    // Mark welcome as shown in user's profile
    if (user && user.uid) {
      try {
        const userRef = doc(db, "users", user.uid);
        await updateDoc(userRef, {
          welcomeShown: true
        });
      } catch (error) {
        console.error("Error updating welcome status:", error);
      }
    }
  };

  // While authentication is in progress, always display a loading skeleton.
  // This is the key to preventing the "flicker" or "redirect loop".
  if (loading || !user) {
    return <AppLoadingSkeleton />;
  }

  // If loading is done and we have a user, render the app.
  return (
    <div className="flex bg-background">
      {isMobile ? (
        <div className="flex flex-col w-full">
          <MobileHeader />
          <main className="flex-1 pb-20">{children}</main>
          <MobileBottomNav />
        </div>
      ) : (
        <>
          <div className="sticky top-0 h-screen w-64 xl:w-72 flex-shrink-0">
            <AppSidebar 
              trendingTopics={trendingTopics}
              suggestedUsers={suggestedUsers}
              recentActivities={recentActivities}
            />
          </div>
          <main className="flex-1 max-w-2xl mx-auto py-8 px-6 lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl xl:px-8">{children}</main>
          {/* Right sidebar - only show on XL screens (1280px+) */}
          <div className="hidden xl:block xl:w-72 2xl:w-80 flex-shrink-0 p-4">
            <div className="sticky top-8 space-y-4">
              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-semibold text-sm mb-3">{t.trendingTopics || 'Trend Konular'}</h3>
                <div className="space-y-2">
                  {trendingTopics.map((topic, index) => (
                    <div key={index} className="text-sm text-muted-foreground">#{topic}</div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-semibold text-sm mb-3">{t.suggestedUsers || 'Önerilen Kullanıcılar'}</h3>
                <div className="space-y-3">
                  {suggestedUsers.slice(0, 2).map((user, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={user.avatarUrl || "/images/default-avatar.png"} alt={user.username} />
                        <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">@{user.username}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card rounded-lg p-4 border">
                <h3 className="font-semibold text-sm mb-3">{t.recentActivity || 'Son Aktiviteler'}</h3>
                <div className="text-xs text-muted-foreground space-y-1">
                  {recentActivities.slice(0, 3).map((activity, index) => (
                    <div key={index}>{activity}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <WelcomeDialog 
        open={showWelcomeDialog} 
        onClose={handleWelcomeClose}
      />
    </div>
  );
}