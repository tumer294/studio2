import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function getDownloadUrl(key: string): Promise<string | null> {
  if (!key || key.trim() === '' || key === '""') {
    return null;
  }

  const cacheKey = `media_cache_${key}`;

  try {
    const cached = localStorage.getItem(cacheKey);

    if (cached) {
      try {
        const { url, timestamp } = JSON.parse(cached);
        // 30 dakika (1800000 ms) boyunca cache'i geçerli say
        const cacheExpiry = 30 * 60 * 1000;

        if (Date.now() - timestamp < cacheExpiry) {
          // Cache hit - çok hızlı return
          return url;
        } else {
          // Eski cache'i temizle
          localStorage.removeItem(cacheKey);
        }
      } catch (parseError) {
        // Bozuk cache entry'yi temizle
        localStorage.removeItem(cacheKey);
      }
    }

    // Cache miss - API'den al
    const response = await fetch('/api/download', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ key }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Download API error:', response.status, errorText);

      // HTML hatası alıyorsak, bu endpoint problemi demektir
      if (errorText.includes('<!DOCTYPE html>')) {
        console.error('Download endpoint returned HTML instead of JSON - check API configuration');
        return null;
      }

      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    if (!data.signedUrl) {
      throw new Error('No signed URL received from API');
    }

    const downloadUrl = data.signedUrl;

    // Cache'e kaydet
    const cacheData = {
      url: downloadUrl,
      timestamp: Date.now()
    };

    try {
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (storageError) {
      // localStorage dolu olabilir, eski cache'leri temizle
      cleanupExpiredCache();
      try {
        localStorage.setItem(cacheKey, JSON.stringify(cacheData));
      } catch (secondError) {
        console.warn('Could not cache media URL:', secondError);
      }
    }

    return downloadUrl;
  } catch (error) {
    console.error('Failed to get download URL:', error);
    return null;
  }
}

// Eski medya cache'lerini temizle
function clearOldMediaCache() {
  const keysToRemove: string[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('media_cache_')) {
      try {
        const cached = localStorage.getItem(key);
        if (cached) {
          const { timestamp } = JSON.parse(cached);
          // 1 saatten eski cache'leri işaretle
          if (Date.now() - timestamp > 60 * 60 * 1000) {
            keysToRemove.push(key);
          }
        }
      } catch (error) {
        // Geçersiz cache girişi, kaldır
        keysToRemove.push(key);
      }
    }
  }

  // İşaretlenen cache'leri kaldır
  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });
}

// Manuel olarak tüm medya cache'ini temizle
export function clearAllMediaCache() {
  const keysToRemove: string[] = [];

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('media_cache_')) {
      keysToRemove.push(key);
    }
  }

  keysToRemove.forEach(key => {
    localStorage.removeItem(key);
  });

  console.log(`Cleared ${keysToRemove.length} media cache entries`);
}

// Medyaları önceden yükle (opsiyonel)
export async function preloadMedia(keys: string[]) {
  const promises = keys.map(key => getDownloadUrl(key));
  await Promise.allSettled(promises);
}

// Cache istatistikleri
export function getCacheStats() {
  let cacheCount = 0;
  let totalSize = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key.startsWith('media_cache_')) {
      cacheCount++;
      const value = localStorage.getItem(key);
      if (value) {
        totalSize += value.length;
      }
    }
  }

  return {
    cacheCount,
    totalSizeKB: Math.round(totalSize / 1024),
    avgSizePerItemKB: cacheCount > 0 ? Math.round(totalSize / cacheCount / 1024) : 0
  };
}