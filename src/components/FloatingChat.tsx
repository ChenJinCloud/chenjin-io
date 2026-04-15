import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const FloatingChat = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [fileName, setFileName] = useState('');
  const [showButton, setShowButton] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const chatEnabledPaths = ['/work-with-me', '/roadmap'];
  const isChatEnabled = isHome || chatEnabledPaths.includes(location.pathname);

  // Hide button when Hero chat input is visible on home page
  useEffect(() => {
    if (!isChatEnabled) {
      setShowButton(false);
      return;
    }
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
  }, [isHome, isChatEnabled]);

  if (!isChatEnabled) return null;

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
              className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-md"
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

                {/* Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!message.trim()) return;
                    // TODO: connect to backend
                    setMessage('');
                    setFileName('');
                    if (fileRef.current) fileRef.current.value = '';
                  }}
                >
                  {fileName && (
                    <div className="flex items-center gap-2 px-4 pt-3 pb-0">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-accent/10 text-xs text-accent">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                        {fileName}
                      </span>
                      <button
                        type="button"
                        onClick={() => { setFileName(''); if (fileRef.current) fileRef.current.value = ''; }}
                        className="text-muted-foreground/50 hover:text-foreground text-xs"
                      >
                        ✕
                      </button>
                    </div>
                  )}

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        if (message.trim()) e.currentTarget.form?.requestSubmit();
                      }
                    }}
                    placeholder={t.hero.chatPlaceholder}
                    rows={2}
                    autoFocus
                    className="w-full px-5 pt-4 pb-2 bg-transparent text-foreground text-sm font-light placeholder:text-muted-foreground/40 resize-none focus:outline-none"
                  />

                  <div className="flex items-center justify-between px-3 pb-3">
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-light text-muted-foreground hover:text-foreground hover:bg-accent/5 transition-all"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
                      </svg>
                      {t.hero.chatUpload}
                    </button>
                    <input
                      ref={fileRef}
                      type="file"
                      onChange={(e) => { const f = e.target.files?.[0]; if (f) setFileName(f.name); }}
                      className="hidden"
                    />

                    <button
                      type="submit"
                      className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-foreground text-background text-xs font-medium hover:opacity-90 transition-opacity disabled:opacity-30"
                      disabled={!message.trim()}
                    >
                      {t.hero.chatSend}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </button>
                  </div>
                </form>

                {/* Quick topics */}
                <div className="flex items-center gap-2 flex-wrap px-4 pb-4">
                  {t.hero.chatTopics.map((topic, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setMessage(String(topic))}
                      className="px-3 py-1 rounded-full border border-border text-xs font-light text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat;
