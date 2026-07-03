import { useLanguage } from '@/contexts/LanguageContext';
import ChatGateway from '@/features/chat/ChatGateway';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FloatingChat = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Hide button when Hero chat input is visible on home page
  useEffect(() => {
    if (!isHome) {
      setShowButton(true);
      return;
    }

    const handleScroll = () => {
      // Show after scrolling past ~80% of viewport (Hero area)
      setShowButton(window.scrollY > window.innerHeight * 0.8);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <>
      {/* Floating button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: showButton && !open ? 1 : 0,
          scale: showButton && !open ? 1 : 0.8,
        }}
        transition={{ duration: 0.25 }}
        onClick={() => setOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-accent-foreground shadow-lg shadow-accent/20 flex items-center justify-center hover:scale-110 transition-transform ${!showButton || open ? 'pointer-events-none' : ''}`}
        aria-label="Open chat"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-foreground/5 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none md:pointer-events-none"
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-lg"
            >
              <div className="rounded-2xl border-2 border-accent/30 bg-card shadow-2xl shadow-accent/10 overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                  <p className="text-sm font-display italic text-accent">
                    {t.hero.chatGuide}
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </div>

                <ChatGateway variant="floating" autoFocus />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
