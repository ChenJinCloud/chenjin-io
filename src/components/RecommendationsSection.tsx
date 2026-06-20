import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const RecommendationsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="recommendations" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-widest uppercase text-accent mb-12 block"
        >
          {t.recommendations.label}
        </motion.span>

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-start mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight"
          >
            {t.recommendations.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="text-base md:text-lg font-light text-muted-foreground leading-relaxed"
          >
            {t.recommendations.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.recommendations.items.map((item, i) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.45,
                delay: 0.08 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group min-h-[18rem] p-6 md:p-7 rounded-2xl border border-border bg-card flex flex-col overflow-hidden transition-shadow duration-300 hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.08)]"
            >
              <span className="w-fit px-3 py-1 rounded-full bg-accent/8 text-accent text-[11px] font-medium tracking-widest uppercase mb-5">
                {item.type}
              </span>

              <h3 className="text-2xl font-display font-medium text-foreground leading-snug mb-3 group-hover:text-accent transition-colors duration-300">
                {item.name}
              </h3>

              <p className="text-sm font-medium text-muted-foreground mb-6">
                {item.service}
              </p>

              {item.story.trim() ? (
                <p className="text-[15px] font-light text-muted-foreground leading-relaxed">
                  {item.story}
                </p>
              ) : (
                <div className="min-h-[5.5rem]" aria-hidden="true" />
              )}

              <div className="mt-auto pt-6">
                <div className="w-8 h-px bg-accent/30 group-hover:w-14 transition-all duration-300" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationsSection;
