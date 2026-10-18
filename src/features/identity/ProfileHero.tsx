'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { publicProfile } from './profile';

/** Identity presentation has no dependency on auth, chat, database or model SDKs. */
export default function ProfileHero() {
  const { language } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const topics = publicProfile.rotatingTopics[language];

  useEffect(() => {
    if (reducedMotion) return;
    const timer = setInterval(() => setIndex((value) => (value + 1) % topics.length), 3500);
    return () => clearInterval(timer);
  }, [reducedMotion, topics.length]);

  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(16rem,0.8fr)] md:gap-12 lg:gap-20">
      <div>
        <h1 className="font-display text-[clamp(4.5rem,10vw,8.5rem)] font-medium leading-[0.95] tracking-[-0.055em]">
          {publicProfile.name[language]}
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 md:text-xl md:leading-9">
          {publicProfile.positioning[language]}
        </p>
        <p className="mt-4 max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
          {publicProfile.introduction[language]}
        </p>
        <div className="mt-8 flex min-h-14 items-center gap-3 font-display text-xl text-accent md:text-2xl">
          <span>{language === 'zh' ? '一起探索' : 'Explore together'}</span>
          <span className="relative overflow-hidden" aria-hidden="true">
            <AnimatePresence mode="wait" initial={false}>
              <motion.span key={`${language}-${index}`} className="block"
                initial={{ y: reducedMotion ? 0 : 18, opacity: reducedMotion ? 1 : 0 }}
                animate={{ y: 0, opacity: 1 }} exit={{ y: reducedMotion ? 0 : -18, opacity: reducedMotion ? 1 : 0 }}
                transition={{ duration: 0.3 }}>
                {topics[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="sr-only">{topics.join('，')}</span>
        </div>
      </div>
      <div className="mx-auto w-full max-w-sm md:ml-auto md:max-w-md">
        <div className="aspect-square overflow-hidden rounded-2xl border border-border/60 bg-secondary shadow-[0_20px_60px_-24px_hsl(var(--foreground)/0.25)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={publicProfile.portrait} alt={publicProfile.name[language]} width={900} height={900}
            fetchPriority="high" className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}
