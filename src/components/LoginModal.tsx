import { useLanguage } from '@/contexts/LanguageContext';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { Mail } from 'lucide-react';
import { toast } from 'sonner';

interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginModal = ({ open, onOpenChange }: LoginModalProps) => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info(t.login.comingSoon);
    onOpenChange(false);
  };

  const handleWechat = () => {
    toast.info(t.login.comingSoon);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl">
            {t.login.title}
          </DialogTitle>
          <DialogDescription>{t.login.subtitle}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="login-email">{t.login.emailLabel}</Label>
            <Input
              id="login-email"
              type="email"
              placeholder={t.login.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full gap-2">
            <Mail className="w-4 h-4" />
            {t.login.emailButton}
          </Button>
        </form>

        <div className="relative my-2">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              {t.login.or}
            </span>
          </div>
        </div>

        <Button
          variant="outline"
          className="w-full gap-2"
          onClick={handleWechat}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05a6.253 6.253 0 0 1-.248-1.753c0-3.694 3.327-6.69 7.426-6.69.256 0 .504.025.752.044C16.553 4.648 13.074 2.188 8.69 2.188zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm4.082 3.726c-3.559 0-6.443 2.592-6.443 5.79 0 3.2 2.884 5.79 6.443 5.79a7.58 7.58 0 0 0 2.146-.31.636.636 0 0 1 .544.072l1.436.839a.24.24 0 0 0 .122.04.217.217 0 0 0 .214-.217c0-.054-.021-.107-.035-.16l-.297-1.115a.44.44 0 0 1 .157-.497C22.924 18.927 24 17.09 24 15.507c0-3.198-2.884-5.79-6.443-5.79h.123zm-2.666 3.12c.492 0 .89.404.89.902a.896.896 0 0 1-.89.9.896.896 0 0 1-.892-.9c0-.498.4-.902.892-.902zm4.535 0c.492 0 .89.404.89.902a.896.896 0 0 1-.89.9.896.896 0 0 1-.892-.9c0-.498.4-.902.892-.902z" />
          </svg>
          {t.login.wechatButton}
        </Button>

        <p className="text-xs text-center text-muted-foreground mt-2">
          {t.login.terms}
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
