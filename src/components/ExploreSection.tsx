import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ExploreSection = () => {
  const { t } = useLanguage();

  const cardAccents = [
    'from-accent/20 to-accent/5',
    'from-accent/15 to-accent/5',
    'from-accent/10 to-accent/5',
    'from-accent/20 to-accent/5',
  ];

  return (
    <section id="explore" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-widest uppercase text-accent mb-12 block"
        >
          {t.explore.label}
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-14"
        >
          {t.explore.title}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {t.explore.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.4,
                delay: 0.12 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02 }}
            >
              <Link
                to={item.link}
                className="group relative block p-8 rounded-3xl border border-border bg-card overflow-hidden h-full transition-shadow duration-400 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)]"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cardAccents[i]} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />

                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                    <span className="text-2xl">{item.icon}</span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-display font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <span className="opacity-0 group-hover:opacity-100 inline-block group-hover:translate-x-0 -translate-x-2 transition-all duration-300 text-accent">
                      →
                    </span>
                  </div>

                  <p className="text-[15px] font-light text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 h-px w-0 group-hover:w-full bg-gradient-to-r from-accent/40 to-transparent transition-all duration-500" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
