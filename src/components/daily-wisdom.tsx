
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { wisdomData, type Wisdom } from "@/data/wisdom";
import { Lightbulb } from "lucide-react";
import { useTranslation } from "@/hooks/use-translation";
import type { Language } from "@/app-strings";

export default function DailyWisdom() {
  const [wisdom, setWisdom] = useState<Wisdom | null>(null);
  const { language } = useTranslation();

  useEffect(() => {
    // This ensures the code only runs on the client after hydration
    // It uses the day of the year to pick a "random" but consistent quote for the day
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);

    const wisdomForLanguage = wisdomData.filter(w => w.lang === language);
    if (wisdomForLanguage.length > 0) {
      const randomIndex = dayOfYear % wisdomForLanguage.length;
      setWisdom(wisdomForLanguage[randomIndex]);
    } else {
      // Fallback to English if no wisdom for selected language
      const fallbackWisdom = wisdomData.filter(w => w.lang === 'en');
      const randomIndex = dayOfYear % fallbackWisdom.length;
      setWisdom(fallbackWisdom[randomIndex]);
    }

  }, [language]);

  if (!wisdom) {
    // You can return a loading skeleton here
    return (
      <Card className="bg-primary/10 border-primary/20">
        <CardContent className="p-4">
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-3 py-1">
              <div className="h-2 bg-primary/20 rounded"></div>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-primary/20 rounded col-span-2"></div>
                  <div className="h-2 bg-primary/20 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-primary/20 rounded"></div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-sm">
      <CardContent className="p-4">
        <div className="flex items-start gap-4">
            <div className="p-2 bg-accent/20 rounded-full">
                <Lightbulb className="w-5 h-5 text-accent-foreground" />
            </div>
            <div>
                <p className="font-headline text-lg italic text-foreground">
                    "{wisdom.text}"
                </p>
                <p className="text-sm font-semibold text-primary mt-2">
                    {wisdom.type}: {wisdom.source}
                </p>
            </div>
        </div>
      </CardContent>
    </Card>
  );
}
