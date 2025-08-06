"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from "firebase/auth";
import { app } from "@/lib/firebase"; 
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UmmahConnectLogo } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";
import { useTranslation } from "@/hooks/use-translation";

const auth = getAuth(app);

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isResetLoading, setIsResetLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast({ title: t.success, description: t.loggedIn });
      router.push('/');
    } catch (error: any) {
      let errorMessage = error.message;

      // Firebase auth hata kodlarını kontrol et
      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Bu email adresi ile kayıtlı bir hesap bulunamadı. Lütfen kayıt olun.';
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = 'Yanlış şifre. Lütfen tekrar deneyin.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Geçersiz email adresi formatı.';
      } else if (error.code === 'auth/user-disabled') {
        errorMessage = 'Bu hesap devre dışı bırakılmış. Destek ile iletişime geçin.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Çok fazla başarısız giriş denemesi. Lütfen daha sonra tekrar deneyin.';
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = 'Email veya şifre hatalı. Lütfen bilgilerinizi kontrol edin.';
      }

      toast({
        variant: "destructive",
        title: t.loginFailed,
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    if (!email) {
      toast({
        variant: "destructive",
        title: "Email Gerekli",
        description: "Lütfen şifrenizi sıfırlamak için email adresinizi girin.",
      });
      return;
    }

    setIsResetLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      toast({
        title: "Şifre Sıfırlama Emaili Gönderildi",
        description: "Email adresinizi kontrol edin ve şifrenizi sıfırlamak için linke tıklayın.",
      });
      setShowForgotPassword(false);
    } catch (error: any) {
      let errorMessage = error.message;

      if (error.code === 'auth/user-not-found') {
        errorMessage = 'Bu email adresi ile kayıtlı bir hesap bulunamadı.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Geçersiz email adresi formatı.';
      } else if (error.code === 'auth/too-many-requests') {
        errorMessage = 'Çok fazla istek gönderildi. Lütfen daha sonra tekrar deneyin.';
      }

      toast({
        variant: "destructive",
        title: "Şifre Sıfırlama Hatası",
        description: errorMessage,
      });
    } finally {
      setIsResetLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <UmmahConnectLogo className="w-10 h-10 text-primary" />
            <CardTitle className="text-3xl font-headline">UmmahConnect</CardTitle>
          </div>
          <CardDescription>Enter your email below to login to your account</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <form onSubmit={handleLogin} className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading}/>
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <button 
                    type="button"
                    onClick={() => setShowForgotPassword(true)}
                    className="ml-auto inline-block text-sm underline hover:text-primary"
                    disabled={isLoading}
                  >
                    Forgot your password?
                  </button>
                </div>
                <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading}/>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Logging in...' : 'Login'}
              </Button>
            </form>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="underline">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Forgot Password Dialog */}
      {showForgotPassword && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Şifrenizi Sıfırlayın</CardTitle>
              <CardDescription>
                Email adresinizi girin, size şifre sıfırlama linki gönderelim.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="reset-email">Email</Label>
                  <Input 
                    id="reset-email" 
                    type="email" 
                    placeholder="m@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isResetLoading}
                  />
                </div>
                <div className="flex gap-2">
                  <Button 
                    onClick={handleForgotPassword}
                    disabled={isResetLoading}
                    className="flex-1"
                  >
                    {isResetLoading ? 'Gönderiliyor...' : 'Şifre Sıfırlama Linki Gönder'}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => setShowForgotPassword(false)}
                    disabled={isResetLoading}
                  >
                    İptal
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}