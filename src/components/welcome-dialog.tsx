
"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Users } from "lucide-react";
import { UmmahConnectLogo } from "@/components/icons";

interface WelcomeDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function WelcomeDialog({ open, onClose }: WelcomeDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto">
        <DialogHeader className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2">
            <UmmahConnectLogo className="w-10 h-10 text-primary" />
            <DialogTitle className="text-2xl font-headline">UmmahConnect</DialogTitle>
          </div>
        </DialogHeader>
        
        <div className="space-y-6 py-4">
          <div className="text-center">
            <Heart className="w-12 h-12 text-red-500 mx-auto mb-3" />
            <h3 className="font-semibold text-lg mb-2">Hoş Geldiniz! 🌙</h3>
            <p className="text-muted-foreground">
              UmmahConnect ailesine katıldığınız için çok mutluyuz. Bu platform, Müslüman kardeşlerimizin bir araya geldiği dini bir topluluktur.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
              <Shield className="w-6 h-6 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-sm">Topluluk Kuralları</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Küfür, müstehcen içerik ve dini değerlere aykırı paylaşımlar kesinlikle yasaktır. Lütfen saygılı bir dil kullanın.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg">
              <Users className="w-6 h-6 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-sm">Sorumluluk</h4>
                <p className="text-xs text-muted-foreground mt-1">
                  Paylaştığınız tüm içeriklerden tamamen sizler sorumlusunuz. İslami değerlere uygun paylaşımlar yapmanızı rica ederiz.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg">
            <p className="text-sm">
              🤲 <strong>Temennilerimiz:</strong> Bu platformda güzel dostluklar kurun, faydalı bilgiler paylaşın ve birbirinizle güzel sohbetler edin. 
              <br /><br />
              <em>Allah kabul etsin, hayırlı paylaşımlar dileriz. 🌟</em>
            </p>
          </div>

          <Button onClick={onClose} className="w-full">
            Anladım, Devam Et
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
