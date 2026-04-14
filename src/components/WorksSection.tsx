import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const WorksSection = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  return (
    <section id="works" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
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
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-14"
        >
          {t.works.title}
        </motion.h2>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {t.works.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.1 * i }}
            >
              <Link
                to={item.link}
                className="block p-6 md:p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <span className="inline-block px-3 py-1 text-xs font-medium tracking-wide uppercase rounded-full bg-accent/10 text-accent mb-4">
                  {item.type}
                </span>
                <h3 className="text-lg md:text-xl font-display font-medium text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <span className="text-xs text-muted-foreground/70">
                  {item.status}
                </span>
              </Link>
            </motion.div>
          ))}
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
