import { useLanguage } from '@/contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef, useEffect, useCallback } from 'react';

// Atoms-precise design tokens
const TYPE_STYLES: Record<string, { accent: string; browserGradient: string; mockupElements: React.ReactNode }> = {
  Project: {
    accent: 'hsl(170 55% 55%)',
    browserGradient: 'linear-gradient(135deg, hsl(170 45% 55% / 0.20) 0%, hsl(195 40% 50% / 0.14) 100%)',
    mockupElements: (
      <>
        {/* Dashboard-style mockup */}
        <div className="absolute inset-0 p-5 md:p-6">
          {/* Top bar */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              <div className="w-8 h-2 rounded-full bg-foreground/10" />
              <div className="w-12 h-2 rounded-full bg-foreground/7" />
            </div>
            <div className="w-16 h-5 rounded-md bg-foreground/6" />
          </div>
          {/* Stats cards row */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            {[1, 2, 3].map((n) => (
              <div key={n} className="rounded-lg bg-foreground/4 p-2.5">
                <div className="w-6 h-1.5 rounded-full bg-foreground/10 mb-1.5" />
                <div className="w-10 h-2.5 rounded bg-foreground/8" />
              </div>
            ))}
          </div>
          {/* Chart area */}
          <div className="rounded-lg bg-foreground/3 p-4 h-[calc(100%-80px)]">
            <div className="flex items-end gap-1.5 h-full pb-1">
              {[40, 65, 45, 80, 55, 70, 90, 60, 75, 50, 85, 68].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t bg-foreground/8"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </>
    ),
  },
  Blog: {
    accent: 'hsl(28 70% 65%)',
    browserGradient: 'linear-gradient(135deg, hsl(28 60% 62% / 0.20) 0%, hsl(12 50% 55% / 0.14) 100%)',
    mockupElements: (
      <>
        {/* Article-style mockup */}
        <div className="absolute inset-0 p-5 md:p-6">
          {/* Header image */}
          <div className="w-full h-16 rounded-lg bg-foreground/6 mb-4" />
          {/* Title */}
          <div className="w-[70%] h-3 rounded-full bg-foreground/12 mb-2" />
          <div className="w-[45%] h-2 rounded-full bg-foreground/7 mb-4" />
          {/* Body text */}
          <div className="space-y-2">
            <div className="w-full h-1.5 rounded-full bg-foreground/5" />
            <div className="w-[92%] h-1.5 rounded-full bg-foreground/5" />
            <div className="w-[85%] h-1.5 rounded-full bg-foreground/5" />
            <div className="w-[78%] h-1.5 rounded-full bg-foreground/5" />
          </div>
        </div>
      </>
    ),
  },
  Tutorial: {
    accent: 'hsl(58 60% 70%)',
    browserGradient: 'linear-gradient(135deg, hsl(58 50% 65% / 0.20) 0%, hsl(82 38% 55% / 0.14) 100%)',
    mockupElements: (
      <>
        {/* Code editor mockup */}
        <div className="absolute inset-0 p-5 md:p-6">
          {/* Editor tabs */}
          <div className="flex gap-1 mb-3">
            <div className="px-3 py-1 rounded-t bg-foreground/8 text-[8px] text-foreground/30 font-mono">app.tsx</div>
            <div className="px-3 py-1 rounded-t bg-foreground/3 text-[8px] font-mono">utils.ts</div>
          </div>
          {/* Code lines */}
          <div className="rounded-lg bg-foreground/3 p-3 font-mono space-y-1.5">
            <div className="flex gap-2">
              <span className="w-4 h-1.5 rounded bg-foreground/4 shrink-0" />
              <span className="w-[30%] h-1.5 rounded bg-foreground/10" />
            </div>
            <div className="flex gap-2">
              <span className="w-4 h-1.5 rounded bg-foreground/4 shrink-0" />
              <span className="w-[50%] h-1.5 rounded bg-foreground/8" />
            </div>
            <div className="flex gap-2">
              <span className="w-4 h-1.5 rounded bg-foreground/4 shrink-0" />
              <span className="w-[40%] h-1.5 rounded bg-foreground/6" />
            </div>
            <div className="flex gap-2 pl-2">
              <span className="w-4 h-1.5 rounded bg-foreground/4 shrink-0" />
              <span className="w-[60%] h-1.5 rounded bg-foreground/10" />
            </div>
            <div className="flex gap-2 pl-2">
              <span className="w-4 h-1.5 rounded bg-foreground/4 shrink-0" />
              <span className="w-[35%] h-1.5 rounded bg-foreground/8" />
            </div>
            <div className="flex gap-2">
              <span className="w-4 h-1.5 rounded bg-foreground/4 shrink-0" />
              <span className="w-[25%] h-1.5 rounded bg-foreground/6" />
            </div>
          </div>
        </div>
      </>
    ),
  },
  Resource: {
    accent: 'hsl(195 28% 58%)',
    browserGradient: 'linear-gradient(135deg, hsl(195 22% 55% / 0.20) 0%, hsl(215 18% 45% / 0.14) 100%)',
    mockupElements: (
      <>
        {/* Map/grid mockup */}
        <div className="absolute inset-0 p-5 md:p-6">
          {/* Toolbar */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-20 h-4 rounded bg-foreground/6" />
            <div className="flex-1" />
            <div className="w-6 h-6 rounded bg-foreground/5" />
            <div className="w-6 h-6 rounded bg-foreground/5" />
          </div>
          {/* Grid */}
          <div className="grid grid-cols-4 grid-rows-3 gap-1.5 h-[calc(100%-40px)]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div
                key={i}
                className="rounded bg-foreground/4"
                style={{ opacity: [0.3, 0.5, 0.7, 0.4, 0.6, 0.8, 0.3, 0.5, 0.6, 0.4, 0.7, 0.5][i] }}
              />
            ))}
          </div>
        </div>
      </>
    ),
  },
};

// Browser title bar — Atoms style
const BrowserTitleBar = () => (
  <div className="flex items-center gap-2 px-3 py-2 bg-muted/12 border-b border-border/15">
    <div className="flex gap-1">
      <span className="w-2 h-2 rounded-full bg-[hsl(0_0%_60%/0.4)]" />
      <span className="w-2 h-2 rounded-full bg-[hsl(45_55%_50%/0.4)]" />
      <span className="w-2 h-2 rounded-full bg-[hsl(120_35%_48%/0.4)]" />
    </div>
  </div>
);

// Preview panel — exact Atoms proportions and style
const PreviewPanel = ({ item, direction }: { item: { type: string; title: string }; direction: 'left' | 'right' }) => {
  const style = TYPE_STYLES[item.type as string] ?? TYPE_STYLES.Resource;
  const slideOffset = direction === 'right' ? 30 : -30;

  return (
    <motion.div
      initial={{ opacity: 0, x: slideOffset }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -slideOffset }}
      transition={{
        x: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
        opacity: { duration: 0.4, ease: 'easeInOut' },
      }}
      // Atoms: aspect-ratio 770/648, border-radius 0 16px 16px 0 on desktop
      className="relative w-full overflow-hidden rounded-[16px] border border-border/30 shadow-[0_8px_24px_-4px_rgba(0,0,0,0.06),0_4px_4px_-1px_rgba(0,0,0,0.03)]"
      style={{ aspectRatio: '770 / 648' }}
    >
      <BrowserTitleBar />
      <div
        className="relative h-[calc(100%-32px)] overflow-hidden"
        style={{ background: style.browserGradient }}
      >
        {style.mockupElements}
        <svg className="absolute inset-0 w-full h-full opacity-[0.025]" aria-hidden="true">
          <filter id={`pn-${item.type}`}>
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
          </filter>
          <rect width="100%" height="100%" filter={`url(#pn-${item.type})`} />
        </svg>
      </div>
    </motion.div>
  );
};

// Trigger card — exact Atoms specs: border-radius 32px, padding 20px 24px
const TriggerCard = ({
  item,
  isActive,
  onClick,
}: {
  item: { type: string; title: string; description: string; status: string; link: string };
  isActive: boolean;
  onClick: () => void;
}) => {
  const style = TYPE_STYLES[item.type as string] ?? TYPE_STYLES.Resource;

  return (
    <Link to={item.link} onClick={onClick} className="block w-fit">
      <div
        className="relative rounded-[32px] px-6 py-5 transition-all duration-300 cursor-pointer"
        style={{
          backgroundColor: isActive ? 'hsl(var(--card))' : 'transparent',
          boxShadow: isActive
            ? '0 8px 24px -4px rgba(0,0,0,0.06), 0 4px 4px -1px rgba(0,0,0,0.03)'
            : 'none',
        }}
      >
        {/* Type pill */}
        <span
          className="inline-block px-2.5 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded-full mb-3"
          style={{
            backgroundColor: style.accent + '1a',
            color: style.accent,
          }}
        >
          {item.type}
        </span>

        {/* Title — Atoms: 18px / 600 / 26px line-height */}
        <h3
          className="text-[18px] font-semibold leading-[26px] mb-1.5 transition-colors duration-300"
          style={{
            color: isActive ? style.accent : 'hsl(var(--foreground))',
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm font-light text-muted-foreground leading-relaxed">
          {item.description}
        </p>

        {/* CTA */}
        <div
          className="inline-flex items-center gap-1.5 mt-3 text-[14px] font-normal leading-6 transition-colors duration-300"
          style={{ color: isActive ? style.accent : 'hsl(var(--muted-foreground) / 0.7)' }}
        >
          Learn more
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
};

const WorksSection = () => {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const items = t.works.items;

  // IntersectionObserver — Atoms scroll-driven activation
  const handleIntersect = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = cardRefs.current.filter(Boolean);
        const idx = cards.indexOf(entry.target);
        if (idx !== -1) {
          setSlideDirection(idx > activeIndex ? 'right' : 'left');
          setActiveIndex(idx);
        }
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length === 0) return;

    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: '-35% 0px -45% 0px',
      threshold: 0,
    });

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [items.length, handleIntersect]);

  const handleCardClick = (index: number) => {
    setSlideDirection(index > activeIndex ? 'right' : 'left');
    setActiveIndex(index);
    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const activeItem = items[activeIndex];

  return (
    <section id="works" className="py-24 md:py-32 2xl:py-40 px-6 md:px-12">
      <div className="max-w-[1346px] mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-widest uppercase text-accent mb-12 block"
        >
          {t.works.label}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-16 md:mb-20"
        >
          {t.works.title}
        </motion.h2>

        {/* ===== Atoms home-value-section-1 exact layout ===== */}
        <div ref={sectionRef} className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

          {/* Left: value-cards — scroll to activate */}
          <div className="w-full lg:w-[42%] flex flex-col gap-6 pb-[50vh]">
            {items.map((item, i) => (
              <div
                key={i}
                ref={(el) => { cardRefs.current[i] = el; }}
              >
                <TriggerCard
                  item={item}
                  isActive={i === activeIndex}
                  onClick={() => handleCardClick(i)}
                />
              </div>
            ))}
          </div>

          {/* Right: sticky preview-card — Atoms style */}
          <div className="hidden lg:block w-[58%] sticky top-[12vh]">
            <AnimatePresence mode="wait" initial={false}>
              <PreviewPanel
                key={activeIndex}
                item={activeItem}
                direction={slideDirection}
              />
            </AnimatePresence>

            {/* Step dots */}
            <div className="flex items-center gap-2 mt-5">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setSlideDirection(i > activeIndex ? 'right' : 'left');
                    setActiveIndex(i);
                    cardRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                  }}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: i === activeIndex
                      ? (TYPE_STYLES[items[i].type as string] ?? TYPE_STYLES.Resource).accent
                      : 'hsl(var(--muted-foreground) / 0.15)',
                    transform: i === activeIndex ? 'scale(1.3)' : 'scale(1)',
                  }}
                />
              ))}
              <span className="ml-3 text-xs font-light text-muted-foreground/40 tabular-nums">
                {String(activeIndex + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-20 lg:mt-28"
        >
          <p className="text-base font-light text-muted-foreground mb-6">
            {t.works.followCta}
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center justify-center gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={t.works.emailPlaceholder}
              className="flex-1 px-5 py-3 rounded-full border border-border bg-background text-foreground text-sm font-light placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-accent/30 transition-all"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-full bg-accent text-accent-foreground text-sm font-medium hover:scale-105 transition-transform"
            >
              {t.works.subscribe}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default WorksSection;
