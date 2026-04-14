import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';

const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-32 md:py-48 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-4"
          >
            <span className="text-xs font-light tracking-widest uppercase text-muted-foreground">
              03 — {t.skills.title}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8"
          >
            <div className="space-y-0">
              {t.skills.items.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group py-6 border-t border-border last:border-b"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-xs text-muted-foreground font-light w-6">
                      0{index + 1}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-display text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                        {skill.name}
                      </h3>
                      <p className="text-sm font-light text-muted-foreground leading-relaxed">
                        {skill.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
