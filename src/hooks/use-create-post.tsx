
"use client";

import React, { createContext, useContext, useState, useMemo } from 'react';

interface CreatePostContextType {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const CreatePostContext = createContext<CreatePostContextType | undefined>(undefined);

export const CreatePostProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  const value = useMemo(() => ({ isOpen, onOpen, onClose }), [isOpen]);

  return (
    <CreatePostContext.Provider value={value}>
      {children}
    </CreatePostContext.Provider>
  );
};

export const useCreatePost = (): CreatePostContextType => {
  const context = useContext(CreatePostContext);
  if (context === undefined) {
    throw new Error('useCreatePost must be used within a CreatePostProvider');
  }
  return context;
};
