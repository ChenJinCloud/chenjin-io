import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIChatButton = () => {
  return (
    <Button
      className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-accent hover:bg-accent/90"
      size="icon"
      aria-label="AI 问答"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default AIChatButton;
