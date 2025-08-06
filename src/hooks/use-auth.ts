
"use client";

import { useEffect, useState, useContext } from 'react';
import { onAuthStateChanged, type User as FirebaseUser } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '@/lib/firebase';
import type { User as AppUser } from '@/lib/types';
import { AuthContext } from '@/hooks/use-auth-provider';


export type AuthUser = FirebaseUser & AppUser;

export interface AuthState {
    user: AuthUser | null;
    loading: boolean;
    isAdmin: boolean;
}

// This is the hook that will be used by components
export function useAuth(): AuthState {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}


// This is the internal hook that provides the auth state
export function useAuthProvider(): AuthState {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // This listener handles Firebase's auth state changes (login/logout)
    const unsubscribeAuth = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        // If user is logged in, listen for their data in Firestore
        const userDocRef = doc(db, 'users', firebaseUser.uid);
        
        const unsubscribeFirestore = onSnapshot(userDocRef, (userDoc) => {
          if (userDoc.exists()) {
            // Combine auth data and firestore data
            const appUser = userDoc.data() as AppUser;
            setUser({ ...firebaseUser, ...appUser, id: userDoc.id });
          } else {
            // User exists in Auth but not Firestore. This can happen if signup
            // is interrupted. Treat as logged out until profile is created.
            setUser(null);
          }
          // Set loading to false only after we have a result from Firestore
          setLoading(false);
        }, (error) => {
           console.error("Error fetching user data:", error);
           setUser(null);
           setLoading(false);
        });

        // Return the firestore listener so it gets cleaned up on logout
        return unsubscribeFirestore;

      } else {
        // User is signed out. Clear user and stop loading.
        setUser(null);
        setLoading(false);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribeAuth();
  }, []);

  return { 
      user, 
      loading, 
      isAdmin: user?.role === 'admin' 
  };
}
