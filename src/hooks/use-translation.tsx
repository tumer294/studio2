
"use client";

import React, { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { appStrings, type Language, type AppStrings } from '@/app-strings';
import { useAuth } from './use-auth';
import { db } from '@/lib/firebase';


interface TranslationContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: AppStrings[Language];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    // Set language from user profile if it exists, otherwise default to 'en'
    if(user?.language) {
      setLanguageState(user.language);
    } else {
      setLanguageState('en');
    }
  }, [user]);

  const setLanguage = async (newLanguage: Language) => {
    setLanguageState(newLanguage);
    if (user) {
      try {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          language: newLanguage
        });
      } catch (error) {
        console.error("Failed to save language preference:", error);
        // Optionally, show a toast to the user
      }
    }
  };

  const t = useMemo(() => appStrings[language], [language]);

  return (
    <TranslationContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};
