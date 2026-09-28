import { useLanguage } from '@/contexts/LanguageContext';
import PageLayout from '@/components/PageLayout';
import Heading from '@/components/Heading';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Experience = () => {
  const { language, t } = useLanguage();
  const isZh = language === 'zh';

  const items = t.journey.items;

  return (
    <PageLayout back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <Heading className="mb-6">{isZh ? '经历' : 'Experience'}</Heading>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12 max-w-2xl"
          >
            {isZh
              ? '一条完整的时间线——每一站背后的决策、收获与反思。'
              : 'A full timeline — the decisions, lessons, and reflections behind each stop.'}
          </motion.p>

          <div className="grid gap-4">
            {items.map((item, i) => (
              <motion.div
                key={`${item.period}-${item.company}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link
                  to={`/experience/${encodeURIComponent(item.company.toLowerCase())}`}
                  className="group block p-6 border border-border rounded-lg hover:border-foreground/30 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <span className="text-xs font-medium tracking-widest uppercase text-accent mb-2 block">
                        {item.period}
                      </span>
                      <h3 className="font-medium text-foreground text-lg mb-1">{item.role}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all flex-shrink-0 mt-2" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
    </PageLayout>
  );
};

export default Experience;
