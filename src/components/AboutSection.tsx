import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-widest uppercase text-accent mb-12 block"
        >
          {t.about.label}
        </motion.span>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Text — left column */}
          <div className="lg:col-span-3">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-foreground leading-tight mb-8"
            >
              {t.about.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-lg md:text-xl font-display italic text-accent/80 leading-relaxed mb-6"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="space-y-5"
            >
              {t.about.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg font-light text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>

          {/* Photo — right column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="aspect-[3/4] rounded-2xl border-2 border-accent/20 bg-accent/5 flex items-center justify-center">
              <span className="text-muted-foreground font-light text-lg">{t.about.photoAlt}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
