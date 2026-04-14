import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const experienceIds = {
  work: ['deepwisdom', 'tour-leader', '706-community', 'tutor', 'suihe', '12355'],
  education: ['gduf', 'gz6', 'yujing'],
};

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 md:py-48 px-6 md:px-12">
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
              02 — {t.experience.title}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-8 space-y-16"
          >
            {/* Work Experience */}
            <div>
              <h3 className="text-sm tracking-widest text-muted-foreground mb-8 uppercase">
                {t.experience.work}
              </h3>
              <div className="space-y-8">
                {t.experience.workItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/experience/${experienceIds.work[index]}`}
                      className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 group"
                    >
                      <span className="text-sm text-muted-foreground font-mono">
                        {item.period}
                      </span>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-foreground group-hover:text-accent transition-colors duration-300">
                            {item.role}
                          </h4>
                          <p className="text-muted-foreground text-sm mt-1">
                            {item.company}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 mt-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-sm tracking-widest text-muted-foreground mb-8 uppercase">
                {t.experience.education}
              </h3>
              <div className="space-y-8">
                {t.experience.educationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Link
                      to={`/experience/${experienceIds.education[index]}`}
                      className="grid grid-cols-1 md:grid-cols-[140px_1fr] gap-2 md:gap-8 group"
                    >
                      <span className="text-sm text-muted-foreground font-mono">
                        {item.period}
                      </span>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="text-foreground group-hover:text-accent transition-colors duration-300">
                            {item.school}
                          </h4>
                          {item.major && (
                            <p className="text-muted-foreground text-sm mt-1">
                              {item.major}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:text-accent transition-all duration-300 mt-1" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
