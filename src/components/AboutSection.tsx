import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { BrainCircuit, Compass, Layers3 } from 'lucide-react';

const aboutSignals = {
  en: {
    label: 'Working model',
    title: 'Research -> build -> publish -> refine',
    items: [
      {
        icon: Compass,
        title: 'Map ambiguity',
        description: 'Turn scattered signals into a clear decision frame.',
      },
      {
        icon: BrainCircuit,
        title: 'Build with AI',
        description: 'Use tools, code, and operations to make ideas testable.',
      },
      {
        icon: Layers3,
        title: 'Compress into systems',
        description: 'Keep what repeats, discard what was only noise.',
      },
    ],
  },
  zh: {
    label: '工作模型',
    title: '研究 -> 构建 -> 发布 -> 迭代',
    items: [
      {
        icon: Compass,
        title: '梳理模糊',
        description: '把散乱信号变成可以判断的结构。',
      },
      {
        icon: BrainCircuit,
        title: '用 AI 构建',
        description: '用工具、代码和运营流程，让想法可测试。',
      },
      {
        icon: Layers3,
        title: '压缩成系统',
        description: '留下会重复发生的东西，去掉一次性的噪音。',
      },
    ],
  },
};

const AboutSection = () => {
  const { t, language } = useLanguage();
  const signals = aboutSignals[language];

  const modelCard = (
    <div className="mx-auto max-w-[420px] rounded-lg border border-accent/15 bg-card/70 p-7 shadow-[0_18px_60px_-34px_hsl(var(--foreground)/0.32)] lg:max-w-none">
      <span className="text-xs font-medium uppercase tracking-widest text-accent">
        {signals.label}
      </span>
      <h3 className="mt-5 font-display text-2xl font-medium leading-tight text-foreground md:text-3xl">
        {signals.title}
      </h3>
      <div className="mt-8 space-y-6">
        {signals.items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex gap-4">
              <span className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-accent/10 text-accent">
                <Icon className="h-4 w-4" />
              </span>
              <div>
                <h4 className="text-base font-medium text-foreground">{item.title}</h4>
                <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-8 border-t border-border/70 pt-5">
        <p className="text-sm font-light leading-relaxed text-muted-foreground">
          {language === 'zh'
            ? '这个网站以作品、方法和可复用系统作为身份入口，而不是以个人形象照作为主视觉。'
            : 'This site leads with work, methods, and reusable systems rather than a portrait-led identity.'}
        </p>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
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
              {t.about.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-10 lg:hidden"
            >
              {modelCard}
            </motion.div>

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

          {/* Work model — right column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:col-span-2 lg:block"
          >
            {modelCard}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
