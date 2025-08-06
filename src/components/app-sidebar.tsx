"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Home, Compass, Bell, User, LogOut, PenSquare, Settings, Languages, Palette, Shield, Plus } from "lucide-react";
import { UmmahConnectLogo } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { useAuth, type AuthUser } from "@/hooks/use-auth";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/use-translation";
import { languages } from "@/app-strings";
import { useTheme } from "@/hooks/use-theme-provider";
import { useCreatePost } from "@/hooks/use-create-post";
import { Separator } from "./ui/separator";
import React, { useState, useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";


async function getDownloadUrl(key: string): Promise<string | null> {
    if (!key) return null;
    try {
        const response = await fetch('/api/download', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ key }),
        });
        if (!response.ok) return null;
        const data = await response.json();
        return data.signedUrl;
    } catch (error) {
        console.error("Error getting download URL", error);
        return null;
    }
}

function DisplayAvatar({ user }: { user: AuthUser }) {
    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;
        if (user.avatarUrl) {
            getDownloadUrl(user.avatarUrl).then(downloadUrl => {
                if (!isCancelled) setUrl(downloadUrl);
            });
        }
        return () => { isCancelled = true };
    }, [user.avatarUrl]);

    return (
        <Avatar>
            {url ? (
                <AvatarImage src={url} alt={user.name || 'User Avatar'} data-ai-hint="person portrait" />
            ) : (
                <AvatarImage src={user.photoURL || undefined} alt="User Avatar" data-ai-hint="person portrait" />
            )}
            <AvatarFallback>{user.name ? user.name.charAt(0) : user.email?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
    );
}

const themes = [
    { name: "Islamic Green", class: "theme-default" },
    { name: "Islamic Yellow", class: "theme-islamic-yellow" },
    { name: "Islamic Blue", class: "theme-islamic-blue" },
    { name: "Islamic Purple", class: "theme-islamic-purple" },
    { name: "Islamic Rose", class: "theme-islamic-rose" },
    { name: "Islamic Teal", class: "theme-islamic-teal" },
    { name: "Light", class: "light" },
    { name: "Dark", class: "dark" },
    { name: "Midnight", class: "theme-midnight" },
    { name: "Ocean", class: "theme-ocean" },
]

interface AppSidebarProps {
  trendingTopics?: string[];
  suggestedUsers?: Array<{ name: string; username: string; avatarUrl: string }>;
  recentActivities?: string[];
}

export default function AppSidebar({ 
  trendingTopics = [], 
  suggestedUsers = [], 
  recentActivities = [] 
}: AppSidebarProps = {}) {
  const pathname = usePathname();
  const router = useRouter();
  const { user, isAdmin } = useAuth();
  const { toast } = useToast();
  const { setLanguage, t } = useTranslation();
  const { setTheme } = useTheme();
  const { onOpen } = useCreatePost();

  const navItems = [
    { href: "/", label: t.home, icon: Home },
    { href: "/explore", label: t.explore, icon: Compass },
    { href: "/notifications", label: t.notifications, icon: Bell },
    { href: "/profile/me", label: t.profile, icon: User },
  ];

  if(isAdmin) {
    navItems.push({ href: "/admin", label: "Admin Panel", icon: Shield });
  }

  


  const handleLogout = async () => {
    try {
      await auth.signOut();
      toast({ title: t.loggedOut, description: t.loggedOutDesc });
      router.push('/login');
    } catch (error) {
      console.error("Logout Error:", error);
      toast({ variant: 'destructive', title: t.error, description: t.logoutError });
    }
  }

  if (!user) {
    return null; // Or a loading skeleton
  }

  return (
    <aside className="w-64 flex-shrink-0 border-r border-border/60 bg-card flex flex-col h-full">
      <div className="flex items-center gap-2 px-4 pt-4">
        <UmmahConnectLogo className="w-8 h-8 text-primary" />
        <h1 className="text-2xl font-headline font-bold text-primary">UmmahConnect</h1>
      </div>

       <div className="flex flex-col gap-2 mt-4 px-4">
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary">
            <DisplayAvatar user={user} />
            <div>
                <p className="font-bold">{user.name || user.displayName}</p>
                <p className="text-sm text-muted-foreground">@{user.username || user.email?.split('@')[0]}</p>
            </div>
        </div>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="justify-start gap-3 text-muted-foreground hover:text-foreground">
                    <Settings className="w-5 h-5" />
                    <span>{t.settings}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>{t.appearance}</DropdownMenuLabel>
                 <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Palette className="mr-2 h-4 w-4" />
                        <span>{t.colorTheme}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            {themes.map(theme => (
                                <DropdownMenuItem key={theme.class} onClick={() => setTheme(theme.class)}>{theme.name}</DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                 <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                        <Languages className="mr-2 h-4 w-4" />
                        <span>{t.language}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                            {languages.map((lang) => (
                                <DropdownMenuItem key={lang.code} onClick={() => setLanguage(lang.code)}>
                                    {lang.name}
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                </DropdownMenuSub>
                 <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>{t.logout}</span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Separator className="my-4" />

      <ScrollArea className="flex-1 px-4">
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-lg font-medium transition-colors",
                pathname === item.href
                  ? "bg-primary text-primary-foreground"
                  : "text-foreground/70 hover:bg-accent hover:text-foreground"
              )}
            >
              <item.icon className="w-6 h-6" />
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-4 space-y-4">
          {/* Mobile sidebar content - only show on small screens */}
          <div className="xl:hidden space-y-4">
            {/* Create Post Button - only show on mobile/tablet */}
            <Button size="lg" className="w-full flex items-center gap-3 justify-center text-lg px-4 py-3 h-auto" onClick={onOpen}>
                <PenSquare className="w-6 h-6" />
                <span>{t.createPost}</span>
            </Button>

            <div className="bg-secondary/50 rounded-lg p-3 border">
              <h3 className="font-semibold text-xs mb-2">{t.trendingTopics || 'Trend Konular'}</h3>
              <div className="space-y-1">
                {trendingTopics.length > 0 ? (
                  trendingTopics.map((topic, index) => (
                    <div key={index} className="text-xs text-muted-foreground">#{topic}</div>
                  ))
                ) : (
                  <>
                    <div className="text-xs text-muted-foreground">#İslam</div>
                    <div className="text-xs text-muted-foreground">#Günlük</div>
                    <div className="text-xs text-muted-foreground">#Sohbet</div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-3 border">
              <h3 className="font-semibold text-xs mb-2">{t.suggestedUsers || 'Önerilen Kullanıcılar'}</h3>
              <div className="space-y-2">
                {suggestedUsers.length > 0 ? (
                  suggestedUsers.slice(0, 2).map((user, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={user.avatarUrl || "/images/default-avatar.png"} alt={user.username} />
                        <AvatarFallback>{user.name?.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="text-xs font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">@{user.username}</div>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-xs font-medium">Ali Ahmed</div>
                        <div className="text-xs text-muted-foreground">@ali_ahmed</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-muted rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-xs font-medium">Fatma Hassan</div>
                        <div className="text-xs text-muted-foreground">@fatma_h</div>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="bg-secondary/50 rounded-lg p-3 border">
              <h3 className="font-semibold text-xs mb-2">{t.recentActivity || 'Son Aktiviteler'}</h3>
              <div className="text-xs text-muted-foreground space-y-1">
                {recentActivities.length > 0 ? (
                  recentActivities.slice(0, 3).map((activity, index) => (
                    <div key={index}>{activity}</div>
                  ))
                ) : (
                  <>
                    <div>3 yeni takipçi</div>
                    <div>5 yeni beğeni</div>
                    <div>2 yeni yorum</div>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Create Post Button - only show on desktop when right sidebar is not visible */}
          <Button size="lg" className="hidden xl:flex w-full items-center gap-3 justify-center text-lg px-4 py-3 h-auto" onClick={onOpen}>
              <PenSquare className="w-6 h-6" />
              <span>{t.createPost}</span>
          </Button>
        </div>
      </ScrollArea>
    </aside>
  );
}