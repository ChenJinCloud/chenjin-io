import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';

const ROTATION_INTERVAL = 2500;

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordWidth, setWordWidth] = useState<number | 'auto'>('auto');
  const [chatMessage, setChatMessage] = useState('');
  const [chatFileName, setChatFileName] = useState('');
  const chatFileRef = useRef<HTMLInputElement>(null);
  const chatTextareaRef = useRef<HTMLTextAreaElement>(null);
  const measureRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const words = t.hero.rotatingWords;

  const measureWord = useCallback((index: number) => {
    const el = measureRefs.current[index];
    if (el) {
      setWordWidth(el.offsetWidth + 4);
    }
  }, []);

  useEffect(() => {
    measureWord(0);
  }, [measureWord]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % words.length;
        measureWord(next);
        return next;
      });
    }, ROTATION_INTERVAL);
    return () => clearInterval(interval);
  }, [words.length, measureWord]);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 pt-28 pb-20 2xl:pt-36 2xl:pb-24 relative overflow-hidden">
      {/* Background gradient mesh — light: jade-cyan noise (v1) / dark: jade-on-dark glow (v2) */}
      {/* Mask fades the bottom 28% into background, eliminating Hero/About hard cut */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, black 0%, black 72%, transparent 100%)',
        }}
      >
        <div
          className="absolute inset-0 opacity-70 dark:hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 55% at 22% 28%, hsl(170 55% 55% / 0.32), transparent 60%),
              radial-gradient(ellipse 60% 50% at 78% 32%, hsl(155 45% 65% / 0.26), transparent 60%),
              radial-gradient(ellipse 80% 50% at 50% 78%, hsl(28 45% 70% / 0.22), transparent 65%),
              radial-gradient(ellipse 45% 40% at 88% 82%, hsl(180 35% 55% / 0.20), transparent 60%)
            `,
          }}
        />
        <div
          className="absolute inset-0 hidden dark:block"
          style={{
            background: `
              radial-gradient(ellipse 65% 50% at 28% 32%, hsl(170 60% 50% / 0.34), transparent 60%),
              radial-gradient(ellipse 55% 45% at 76% 70%, hsl(190 55% 45% / 0.26), transparent 60%),
              radial-gradient(ellipse 90% 60% at 50% 100%, hsl(155 35% 35% / 0.20), transparent 70%)
            `,
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-[0.045] mix-blend-overlay dark:opacity-[0.06] dark:mix-blend-screen" aria-hidden="true">
          <filter id="heroNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#heroNoise)" />
        </svg>
      </div>

      <div className="max-w-5xl 2xl:max-w-[88rem] [@media(min-width:2400px)]:max-w-[110rem] mx-auto w-full text-center relative z-10">
        {/* H1 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl md:text-6xl lg:text-[5.5rem] 2xl:text-[6.5rem] [@media(min-width:2400px)]:text-[8rem] font-display font-medium leading-[0.95] tracking-tight mb-6 md:mb-8 2xl:mb-10"
          style={{ color: 'hsl(var(--headline))' }}
        >
          {t.hero.headline}
        </motion.h1>

        {/* Rotating line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl md:text-4xl lg:text-5xl 2xl:text-[3.5rem] [@media(min-width:2400px)]:text-[4.5rem] font-display font-light text-foreground/80 leading-tight mb-10 md:mb-14 2xl:mb-16 flex items-baseline justify-center flex-wrap gap-x-[0.3em]"
        >
          <span>{t.hero.rotatingPrefix}</span>

          <span
            aria-hidden="true"
            className="absolute invisible pointer-events-none text-2xl md:text-4xl lg:text-5xl 2xl:text-[3.5rem] [@media(min-width:2400px)]:text-[4.5rem] italic font-bold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {words.map((word, i) => (
              <span
                key={word}
                ref={(el) => { measureRefs.current[i] = el; }}
                className="inline-block whitespace-nowrap"
              >
                {word}
              </span>
            ))}
          </span>

          <motion.span
            className="inline-block relative align-baseline overflow-hidden pb-[0.2em]"
            animate={{ width: wordWidth }}
            transition={{ type: 'spring', stiffness: 120, damping: 20 }}
          >
            <span className="invisible whitespace-nowrap italic font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
              {words[0]}
            </span>
            <AnimatePresence mode="popLayout">
              <motion.span
                key={currentIndex}
                className="inline-block absolute left-0 top-0 whitespace-nowrap italic font-bold text-accent"
                style={{ fontFamily: "'Playfair Display', serif" }}
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                exit={{ y: '-100%', opacity: 0, transition: { duration: 0.25 } }}
                transition={{
                  y: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
              >
                {words[currentIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.span>

          {t.hero.rotatingSuffix && <span>{t.hero.rotatingSuffix}</span>}
        </motion.div>

        {/* Chat input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="w-full max-w-2xl 2xl:max-w-3xl [@media(min-width:2400px)]:max-w-4xl mx-auto"
        >
          {/* Guide text */}
          <p className="text-base md:text-lg 2xl:text-xl font-display italic text-accent mb-5 2xl:mb-7 text-center">
            {t.hero.chatGuide}
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!chatMessage.trim()) return;
              // TODO: connect to backend
              setChatMessage('');
              setChatFileName('');
              if (chatFileRef.current) chatFileRef.current.value = '';
              if (chatTextareaRef.current) chatTextareaRef.current.style.height = 'auto';
            }}
            className="relative rounded-[28px] border border-accent/25 bg-card/90 backdrop-blur-sm shadow-[0_8px_28px_-8px_hsl(var(--accent)/0.18)] focus-within:border-accent/50 focus-within:shadow-[0_10px_36px_-6px_hsl(var(--accent)/0.28)] transition-all duration-300"
          >
            {chatFileName && (
              <div className="flex items-center gap-2 px-5 pt-3">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-accent/10 text-xs text-accent">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  {chatFileName}
                </span>
                <button
                  type="button"
                  onClick={() => { setChatFileName(''); if (chatFileRef.current) chatFileRef.current.value = ''; }}
                  className="text-muted-foreground/50 hover:text-foreground text-xs"
                >
                  ✕
                </button>
              </div>
            )}

            <div className="flex items-end gap-2 px-2.5 py-2">
              {/* Attach button */}
              <button
                type="button"
                onClick={() => chatFileRef.current?.click()}
                aria-label={t.hero.chatUpload}
                className="shrink-0 grid place-items-center w-10 h-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-accent/8 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <input
                ref={chatFileRef}
                type="file"
                onChange={(e) => { const f = e.target.files?.[0]; if (f) setChatFileName(f.name); }}
                className="hidden"
              />

              <textarea
                ref={chatTextareaRef}
                value={chatMessage}
                onChange={(e) => {
                  setChatMessage(e.target.value);
                  e.target.style.height = 'auto';
                  e.target.style.height = `${Math.min(e.target.scrollHeight, 200)}px`;
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    if (chatMessage.trim()) {
                      e.currentTarget.form?.requestSubmit();
                    }
                  }
                }}
                placeholder={t.hero.chatPlaceholder}
                rows={1}
                className="flex-1 self-center bg-transparent text-foreground text-[15px] font-light placeholder:text-muted-foreground/40 resize-none focus:outline-none px-1 py-2 leading-6 max-h-[200px] overflow-y-auto"
              />

              {/* Send button */}
              <button
                type="submit"
                aria-label={t.hero.chatSend}
                className="shrink-0 grid place-items-center w-10 h-10 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity disabled:bg-muted disabled:text-muted-foreground/40 disabled:cursor-not-allowed"
                disabled={!chatMessage.trim()}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="19" x2="12" y2="5" />
                  <polyline points="5 12 12 5 19 12" />
                </svg>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Quick topic pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex items-center justify-center gap-2 flex-wrap mt-5"
        >
          {t.hero.chatTopics.map((topic, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setChatMessage(String(topic));
                requestAnimationFrame(() => {
                  const el = chatTextareaRef.current;
                  if (!el) return;
                  el.style.height = 'auto';
                  el.style.height = `${Math.min(el.scrollHeight, 200)}px`;
                  el.focus();
                });
              }}
              className="px-4 py-1.5 rounded-full border border-border text-xs font-light text-muted-foreground hover:text-foreground hover:border-accent/40 hover:bg-accent/5 transition-all hover:-translate-y-px"
            >
              {topic}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
