
'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import { getDownloadUrl } from '@/lib/utils';

export function DisplayImage({ imageKey, alt, ...props }: { imageKey?: string, alt: string } & Omit<React.ComponentProps<typeof Image>, 'src' | 'alt'>) {
    const [url, setUrl] = useState<string | null>(null);

    useEffect(() => {
        let isCancelled = false;
        if (imageKey && imageKey.trim() !== '' && imageKey !== '""') {
            getDownloadUrl(imageKey).then(downloadUrl => {
                if (!isCancelled) setUrl(downloadUrl);
            }).catch(error => {
                console.warn('Could not load image:', error);
                if (!isCancelled) setUrl(null);
            });
        } else {
            setUrl(null);
        }
        return () => { isCancelled = true };
    }, [imageKey]);

    if (!imageKey || imageKey.trim() === '' || imageKey === '""' || !url) return null;

    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image src={url} alt={alt} {...props} />;
}
