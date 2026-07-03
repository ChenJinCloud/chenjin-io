import { useLanguage } from '@/contexts/LanguageContext';
import ChatGateway from '@/features/chat/ChatGateway';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef, useCallback } from 'react';

const ROTATION_INTERVAL = 2500;

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [wordWidth, setWordWidth] = useState<number | 'auto'>('auto');
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
          className="w-full"
        >
          <ChatGateway variant="hero" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
