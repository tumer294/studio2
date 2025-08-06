
"use client";

import Link from "next/link";
import { UmmahConnectLogo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Settings, Palette, Languages, LogOut, Shield } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "@/hooks/use-translation";
import { languages as appLanguages } from "@/app-strings";
import { auth } from "@/lib/firebase";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { useTheme } from "@/hooks/use-theme-provider";
import { useAuth } from "@/hooks/use-auth";


const themes = [
    { name: "Islamic Green", class: "theme-default" },
    { name: "Islamic Yellow", class: "theme-islamic-yellow" },
    { name: "Light", class: "light" },
    { name: "Dark", class: "dark" },
];


export default function MobileHeader() {
  const { setLanguage, t } = useTranslation();
  const { toast } = useToast();
  const router = useRouter();
  const { setTheme } = useTheme();
  const { isAdmin } = useAuth();

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

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between px-4 py-2 bg-background/80 backdrop-blur-sm border-b">
      <div className="w-10"></div>
      <Link href="/" className="flex items-center gap-2">
        <UmmahConnectLogo className="w-7 h-7 text-primary" />
        <h1 className="text-xl font-headline font-bold text-primary">UmmahConnect</h1>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
           {isAdmin && (
            <>
              <DropdownMenuItem onClick={() => router.push('/admin')}>
                <Shield className="mr-2 h-4 w-4" />
                <span>Admin Panel</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
            </>
          )}
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
                {appLanguages.map((lang) => (
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
    </header>
  );
}
