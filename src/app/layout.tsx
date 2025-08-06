import type { Metadata } from "next";
import { Playfair_Display, PT_Sans } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/hooks/use-auth-provider";
import { ThemeProvider } from "@/hooks/use-theme-provider";
import { TranslationProvider } from "@/hooks/use-translation";
import { Toaster } from "@/components/ui/toaster";
import { CreatePostProvider } from '@/hooks/use-create-post';
import CreatePostDialog from '@/components/create-post-dialog';

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-playfair',
});

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: 'UmmahConnect',
  description: 'A social media platform for the Ummah.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ptSans.variable} ${playfairDisplay.variable} font-body antialiased`}>
        <AuthProvider>
          <ThemeProvider>
            <TranslationProvider>
                <CreatePostProvider>
                  <CreatePostDialog />
                  {children}
                  <Toaster />
                </CreatePostProvider>
            </TranslationProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}