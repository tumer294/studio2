
"use client";

import React, { useState, useRef } from 'react';
import type { Post } from "@/lib/types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TextIcon, ImageIcon, Link2Icon, Film, Loader2 } from "lucide-react";
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from '@/hooks/use-translation';
import { useAuth } from '@/hooks/use-auth';
import { DisplayImage } from './display-image';

interface CreatePostProps {
  onPostCreated: () => void;
  handleCreatePost: (post: Omit<Post, 'id' | 'userId' | 'createdAt' | 'likes' | 'comments' | 'reports' | 'status' | 'fileSize'>, fileSize?: number) => Promise<void>;
}

export default function CreatePost({ onPostCreated, handleCreatePost }: CreatePostProps) {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<"text" | "image" | "video" | "link">("text");
  const [postContent, setPostContent] = useState("");
  const [linkUrl, setLinkUrl] = useState(""); 
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const { t } = useTranslation();
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      
      const allowedImageTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      const allowedVideoTypes = ['video/mp4', 'video/webm', 'video/ogg'];

      if (activeTab === 'image' && !allowedImageTypes.includes(selectedFile.type)) {
          toast({ variant: 'destructive', title: t.invalidFile, description: t.invalidImageFile });
          return;
      }
      if (activeTab === 'video' && !allowedVideoTypes.includes(selectedFile.type)) {
          toast({ variant: 'destructive', title: t.invalidFile, description: t.invalidVideoFile });
          return;
      }
      
      setFile(selectedFile);
    }
  };

  const resetState = () => {
    setPostContent("");
    setLinkUrl("");
    setFile(null);
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
    setActiveTab("text");
    setIsUploading(false);
  }

  const handlePost = async () => {
    if ((!postContent.trim() && !file && !linkUrl.trim()) || isUploading || !user) {
        return;
    }
    
    setIsUploading(true);
    
    try {
        let finalMediaUrl = linkUrl;
        let postType: Post['type'] = activeTab;
        let fileSize: number | undefined = undefined;

        if (file) {
            postType = activeTab as 'image' | 'video';
            fileSize = file.size;

            const formData = new FormData();
            formData.append('file', file);
            formData.append('userId', user.uid);
            formData.append('uploadType', 'post');
            
            const uploadResponse = await fetch('/api/upload', {
              method: 'POST',
              body: formData,
            });
            
            const result = await uploadResponse.json();

            if (!uploadResponse.ok) {
              throw new Error(result.error || 'File upload failed');
            }
            
            finalMediaUrl = result.key;
        }

        const newPost: Omit<Post, 'id' | 'userId' | 'createdAt' | 'likes' | 'comments' | 'reports' | 'status' | 'fileSize'> = {
            content: postContent,
            type: postType,
            mediaUrl: finalMediaUrl,
        };
        
        await handleCreatePost(newPost, fileSize);
        
        toast({ title: t.success, description: t.postPublished });
        resetState();
        onPostCreated();

    } catch(error: any) {
        console.error("Upload Error:", error);
        toast({variant: 'destructive', title: t.uploadError, description: error.message || t.couldNotCreatePost})
    } finally {
        setIsUploading(false);
    }
  };
  
  const TABS = [
      { id: 'text', icon: TextIcon, label: 'Text' },
      { id: 'image', icon: ImageIcon, label: t.selectImageToUpload },
      { id: 'video', icon: Film, label: t.selectVideoToUpload },
      { id: 'link', icon: Link2Icon, label: 'Link' },
  ] as const;
  
  const handleTabClick = (tabId: "text" | "image" | "video" | "link") => {
      setFile(null);
      setLinkUrl("");
      if(fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      setActiveTab(tabId);
  }

  const isPostButtonDisabled = (postContent.trim() === "" && !file && (activeTab !== 'link' || linkUrl.trim() === "")) || isUploading;


  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="flex flex-col gap-4">
        <div className="mb-2">
          <p className="text-sm text-muted-foreground">{t.shareWithCommunity}</p>
        </div>
        <div className="flex items-start gap-4">
          <Avatar>
            <DisplayImage imageKey={user.avatarUrl} alt={user.name ?? ''} width={40} height={40} />
            <AvatarFallback>{user.name ? user.name.charAt(0) : user.email?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="w-full">
            <Textarea
              placeholder={t.writePostPlaceholder}
              className="mb-2 min-h-[80px] text-base focus:ring-0 border-0 focus-visible:ring-offset-0 focus-visible:ring-0"
              value={postContent}
              onChange={(e) => setPostContent(e.target.value)}
            />
          </div>
        </div>
        <div>
           {(activeTab === 'image') && (
              <div className="mt-2">
                 <Label htmlFor="image-upload" className="text-sm font-medium text-muted-foreground">{t.selectImageToUpload}</Label>
                <Input 
                  id="image-upload"
                  type="file" 
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="file:text-foreground"
                />
              </div>
            )}
            {(activeTab === 'video') && (
              <div className="mt-2">
                 <Label htmlFor="video-upload" className="text-sm font-medium text-muted-foreground">{t.selectVideoToUpload}</Label>
                <Input 
                  id="video-upload"
                  type="file" 
                  accept="video/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="file:text-foreground"
                />
              </div>
            )}
            {(activeTab === 'link') && (
               <div className="mt-2">
                 <Input type="url" placeholder={t.linkUrlPlaceholder} value={linkUrl} onChange={e => setLinkUrl(e.target.value)} />
              </div>
            )}
        </div>
        <div className="flex justify-between items-center mt-2">
            <div className="flex gap-1">
                {TABS.map(tab => (
                    <Button key={tab.id} variant={activeTab === tab.id ? "secondary" : "ghost"} size="icon" onClick={() => handleTabClick(tab.id)} aria-label={tab.label} disabled={isUploading}>
                        <tab.icon className="w-5 h-5"/>
                    </Button>
                ))}
            </div>
           <div className="flex items-center gap-2">
            <Button onClick={handlePost} disabled={isPostButtonDisabled}>
              {isUploading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {isUploading ? t.posting : t.post}
            </Button>
          </div>
        </div>
    </div>
  );
}
