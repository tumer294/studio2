
"use client";

import React, { createContext } from 'react';
import { useAuthProvider, type AuthState } from '@/hooks/use-auth';

export const AuthContext = createContext<AuthState | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuthProvider();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
