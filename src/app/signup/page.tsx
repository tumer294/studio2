
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore"; 
import { auth, db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UmmahConnectLogo } from "@/components/icons";
import { useToast } from "@/hooks/use-toast";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { useTranslation } from "@/hooks/use-translation";

const googleProvider = new GoogleAuthProvider();

export default function SignupPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { t, language } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) {
      toast({ variant: "destructive", title: t.signupFailed, description: t.passwordLengthError });
      return;
    }
    setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const name = `${firstName} ${lastName}`.trim();
      await updateProfile(user, { displayName: name });

      const username = email.split('@')[0].replace(/[^a-zA-Z0-9]/g, '') || `user${Date.now()}`;
      
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name,
        username,
        email: user.email,
        bio: t.welcomeToUmmahConnect,
        avatarUrl: '',
        coverPhotoUrl: '',
        followers: [],
        following: [],
        createdAt: serverTimestamp(),
        role: email === 'admin@example.com' ? 'admin' : 'user',
        theme: 'light',
        language: language,
      });

      toast({ title: t.success, description: t.accountCreated });
      router.push('/');
    } catch (error: any) {
      let errorMessage = error.message;
      
      // Firebase auth hata kodlarını kontrol et
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = 'Bu email adresi zaten kullanımda. Giriş yapmayı deneyin veya farklı bir email kullanın.';
      } else if (error.code === 'auth/weak-password') {
        errorMessage = 'Şifre çok zayıf. En az 6 karakter olmalıdır.';
      } else if (error.code === 'auth/invalid-email') {
        errorMessage = 'Geçersiz email adresi formatı.';
      }
      
      toast({
        variant: "destructive",
        title: t.signupFailed,
        description: errorMessage,
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleGoogleSignup = async () => {
    setIsGoogleLoading(true);
    signInWithRedirect(auth, googleProvider).catch((error) => {
        console.error("Google Signup Error:", error);
        toast({
            variant: "destructive",
            title: t.signupFailed,
            description: t.googleSignupFailed,
        });
        setIsGoogleLoading(false);
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto max-w-sm w-full">
        <CardHeader className="text-center">
          <div className="flex justify-center items-center gap-2 mb-2">
            <UmmahConnectLogo className="w-10 h-10 text-primary" />
            <CardTitle className="text-3xl font-headline">UmmahConnect</CardTitle>
          </div>
          <CardDescription>Create your account to join the community</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Fatima" required value={firstName} onChange={(e) => setFirstName(e.target.value)} disabled={isLoading || isGoogleLoading} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Al-Fihri" required value={lastName} onChange={(e) => setLastName(e.target.value)} disabled={isLoading || isGoogleLoading} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="m@example.com" required value={email} onChange={(e) => setEmail(e.target.value)} disabled={isLoading || isGoogleLoading}/>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} disabled={isLoading || isGoogleLoading}/>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading || isGoogleLoading}>
              {isLoading ? 'Creating Account...' : 'Create an account'}
            </Button>
          </form>
          <div className="relative mt-4">
            <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>
           <Button variant="outline" className="w-full mt-4" onClick={handleGoogleSignup} disabled={isLoading || isGoogleLoading}>
              {isGoogleLoading ? 'Redirecting to Google...' : 'Sign up with Google'}
            </Button>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
