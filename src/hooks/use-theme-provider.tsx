
"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { useAuth } from './use-auth';

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
];

interface ThemeContextType {
    theme: string;
    setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [theme, setThemeState] = useState<string>('light');

  useEffect(() => {
    // Set theme from user profile if it exists, otherwise default
    if (user?.theme) {
      setThemeState(user.theme);
    } else {
      // Fallback or default theme
      setThemeState('light');
    }
  }, [user]);

  useEffect(() => {
    // Apply theme to the document body
    document.documentElement.classList.remove(...themes.map(t => t.class));
    document.documentElement.classList.remove('light', 'dark');
    
    if(theme) {
        document.documentElement.classList.add(theme);
    }
  }, [theme]);


  const setTheme = async (newTheme: string) => {
    setThemeState(newTheme);
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          theme: newTheme
        });
      } catch (error) {
        console.error("Failed to save theme preference:", error);
      }
    }
  };

  const value = useMemo(() => ({ theme, setTheme }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
