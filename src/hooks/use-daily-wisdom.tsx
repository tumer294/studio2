
"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';
import { appStrings, type Language, type AppStrings } from '@/app-strings';


interface TranslationContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: AppStrings[Language];
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

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
