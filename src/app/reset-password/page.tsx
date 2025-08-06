
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import { confirmPasswordReset, verifyPasswordResetCode } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UmmahConnectLogo } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

function ResetPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isValidCode, setIsValidCode] = useState(false);
  const [email, setEmail] = useState('');
  const [checkingCode, setCheckingCode] = useState(true);

  const oobCode = searchParams.get('oobCode');

  useEffect(() => {
    if (!oobCode) {
      toast({
        variant: "destructive",
        title: "Geçersiz Link",
        description: "Şifre sıfırlama linki geçersiz veya eksik.",
      });
      router.push('/login');
      return;
    }

    // Verify the password reset code
    verifyPasswordResetCode(auth, oobCode)
      .then((email) => {
        setEmail(email);
        setIsValidCode(true);
      })
      .catch((error) => {
        console.error("Error verifying reset code:", error);
        let errorMessage = "Şifre sıfırlama kodu geçersiz veya süresi dolmuş.";
        
        if (error.code === 'auth/expired-action-code') {
          errorMessage = "Şifre sıfırlama linkinin süresi dolmuş. Lütfen yeni bir link isteyin.";
        } else if (error.code === 'auth/invalid-action-code') {
          errorMessage = "Şifre sıfırlama linki geçersiz. Lütfen yeni bir link isteyin.";
        }
        
        toast({
          variant: "destructive",
          title: "Geçersiz Link",
          description: errorMessage,
        });
        router.push('/login');
      })
      .finally(() => {
        setCheckingCode(false);
      });
  }, [oobCode, router, toast]);

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "Şifreler Eşleşmiyor",
        description: "Lütfen her iki alana da aynı şifreyi girin.",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        variant: "destructive",
        title: "Şifre Çok Kısa",
        description: "Şifre en az 6 karakter olmalıdır.",
      });
      return;
    }

    if (!oobCode) return;

    setIsLoading(true);
    try {
      await confirmPasswordReset(auth, oobCode, password);
      toast({
        title: "Şifre Başarıyla Sıfırlandı",
        description: "Şifreniz başarıyla güncellendi. Artık yeni şifrenizle giriş yapabilirsiniz.",
      });
      router.push('/login');
    } catch (error: any) {
      console.error("Error resetting password:", error);
      let errorMessage = error.message;
      
      if (error.code === 'auth/weak-password') {
        errorMessage = "Şifre çok zayıf. Lütfen daha güçlü bir şifre seçin.";
      } else if (error.code === 'auth/expired-action-code') {
        errorMessage = "Şifre sıfırlama linkinin süresi dolmuş. Lütfen yeni bir link isteyin.";
      } else if (error.code === 'auth/invalid-action-code') {
        errorMessage = "Şifre sıfırlama linki geçersiz. Lütfen yeni bir link isteyin.";
      }
      
      toast({
        variant: "destructive",
        title: "Şifre Sıfırlama Hatası",
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (checkingCode) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="mx-auto max-w-sm w-full">
          <CardContent className="flex items-center justify-center p-8">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p>Link doğrulanıyor...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!isValidCode) {
    return null; // Router.push already called
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <UmmahConnectLogo className="w-10 h-10 text-primary" />
            <CardTitle className="text-3xl font-headline">UmmahConnect</CardTitle>
          </div>
          <CardDescription>
            {email} için yeni şifrenizi belirleyin
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleResetPassword} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">Yeni Şifre</Label>
              <Input 
                id="password" 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                placeholder="En az 6 karakter"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirmPassword">Şifreyi Tekrar Girin</Label>
              <Input 
                id="confirmPassword" 
                type="password" 
                required 
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={isLoading}
                placeholder="Yukarıdaki şifreyi tekrar girin"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Şifre Güncelleniyor...' : 'Şifreyi Güncelle'}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link href="/login" className="underline">
              Giriş sayfasına dön
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-background p-4">
        <Card className="mx-auto max-w-sm w-full">
          <CardContent className="flex items-center justify-center p-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </CardContent>
        </Card>
      </div>
    }>
      <ResetPasswordContent />
    </Suspense>
  );
}
