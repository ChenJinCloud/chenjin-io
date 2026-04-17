import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Type → 中国传统色 mapping for label pill + mockup gradient
const TYPE_STYLES: Record<string, { pill: string; gradient: string; pattern: string }> = {
  Project: {
    pill: 'bg-[hsl(170_50%_45%/0.14)] text-[hsl(170_50%_30%)] dark:text-[hsl(170_55%_72%)]',
    gradient: 'linear-gradient(135deg, hsl(170 55% 60%) 0%, hsl(195 50% 55%) 100%)',
    pattern: 'radial-gradient(circle at 20% 80%, hsl(170 70% 70% / 0.5), transparent 50%), radial-gradient(circle at 80% 20%, hsl(195 60% 65% / 0.4), transparent 50%)',
  },
  Blog: {
    pill: 'bg-[hsl(28_65%_55%/0.14)] text-[hsl(20_55%_38%)] dark:text-[hsl(28_70%_72%)]',
    gradient: 'linear-gradient(135deg, hsl(28 70% 68%) 0%, hsl(12 60% 60%) 100%)',
    pattern: 'radial-gradient(circle at 30% 30%, hsl(40 80% 75% / 0.55), transparent 55%), radial-gradient(circle at 75% 75%, hsl(8 60% 58% / 0.4), transparent 55%)',
  },
  Tutorial: {
    pill: 'bg-[hsl(58_55%_45%/0.16)] text-[hsl(75_42%_30%)] dark:text-[hsl(58_60%_72%)]',
    gradient: 'linear-gradient(135deg, hsl(58 60% 72%) 0%, hsl(82 45% 60%) 100%)',
    pattern: 'radial-gradient(circle at 25% 70%, hsl(70 60% 75% / 0.55), transparent 50%), radial-gradient(circle at 80% 25%, hsl(48 70% 70% / 0.45), transparent 55%)',
  },
  Resource: {
    pill: 'bg-[hsl(195_22%_50%/0.14)] text-[hsl(200_25%_32%)] dark:text-[hsl(195_30%_72%)]',
    gradient: 'linear-gradient(135deg, hsl(195 28% 60%) 0%, hsl(215 22% 48%) 100%)',
    pattern: 'radial-gradient(circle at 20% 25%, hsl(190 35% 68% / 0.55), transparent 55%), radial-gradient(circle at 80% 75%, hsl(225 20% 50% / 0.45), transparent 55%)',
  },
};

const WorksSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  return (
    <section id="works" className="py-24 md:py-32 2xl:py-40 px-6 md:px-12">
      <div className="max-w-6xl 2xl:max-w-7xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-xs 2xl:text-sm font-medium tracking-widest uppercase text-accent mb-12 block"
        >
          {t.works.label}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl font-display font-medium text-foreground leading-tight mb-14"
        >
          {t.works.title}
        </motion.h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 2xl:gap-8 mb-16">
          {t.works.items.map((item, i) => {
            const style = TYPE_STYLES[item.type as string] ?? TYPE_STYLES.Resource;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: 0.1 * i }}
                className="group h-full"
              >
                <Link
                  to={item.link}
                  className="relative flex flex-col h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-[0_18px_40px_-18px_hsl(var(--accent)/0.32)]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
                >
                  {/* Mockup placeholder area */}
                  <div
                    className="relative h-36 md:h-40 2xl:h-48 overflow-hidden"
                    style={{ background: style.gradient }}
                  >
                    <div
                      className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ background: style.pattern }}
                    />
                    <svg className="absolute inset-0 w-full h-full opacity-[0.08] mix-blend-overlay" aria-hidden="true">
                      <filter id={`worksNoise-${i}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
                        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
                      </filter>
                      <rect width="100%" height="100%" filter={`url(#worksNoise-${i})`} />
                    </svg>
                    {/* Bottom fade into card body */}
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-card to-transparent" />
                  </div>

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-6 md:p-8 2xl:p-10">
                    <span className={`inline-flex self-start px-3 py-1 text-xs 2xl:text-[13px] font-medium tracking-wide uppercase rounded-full mb-4 ${style.pill}`}>
                      {item.type}
                    </span>
                    <h3 className="text-lg md:text-xl 2xl:text-2xl font-display font-medium text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm 2xl:text-base font-light text-muted-foreground leading-relaxed mb-4 flex-1">
                      {item.description}
                    </p>
                    <span className="text-xs 2xl:text-sm text-muted-foreground/70">
                      {item.status}
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
