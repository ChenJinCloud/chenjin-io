import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const JourneySection = () => {
  const { t } = useLanguage();

  return (
    <section id="journey" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-16"
        >
          {t.journey.title}
        </motion.h2>

        {/* Card-based journey — Atoms-inspired */}
        <div className="grid md:grid-cols-2 gap-6">
          {t.journey.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.4,
                delay: 0.15 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.02 }}
              className="group relative p-8 rounded-3xl border border-border bg-card overflow-hidden transition-shadow duration-400 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)]"
            >
              {/* Accent gradient top edge */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Period badge */}
              <span className="inline-block px-3 py-1 text-[11px] font-medium tracking-widest uppercase rounded-full bg-accent/8 text-accent mb-5">
                {item.period}
              </span>

              {/* Role — large, display font */}
              <h3 className="text-2xl md:text-3xl font-display font-medium text-foreground leading-snug mb-2 group-hover:text-accent transition-colors duration-300">
                {item.role}
              </h3>

              {/* Company — muted */}
              <span className="text-sm font-medium text-muted-foreground/60 block mb-5">
                {item.company}
              </span>

              {/* Divider */}
              <div className="w-8 h-px bg-accent/30 mb-5 group-hover:w-16 transition-all duration-400" />

              {/* Description */}
              <p className="text-[15px] font-light text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
