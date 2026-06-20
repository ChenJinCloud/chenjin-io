import { motion } from 'framer-motion';
import { ArrowRight, Database, PenLine, ShieldCheck, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import JikeLogoMark from './JikeLogoMark';

const projectStats = [
  { value: '356', label: '源帖' },
  { value: '1436', label: '小报引用' },
  { value: '1402', label: '原帖详情' },
];

const projectSignals = [
  { icon: Database, text: '从即刻资讯台 2025 日更内容中抽取样本' },
  { icon: PenLine, text: '拆解主题、作者和可复用创作模式' },
  { icon: ShieldCheck, text: '明确边界：不是全站客观排行' },
];

const FeaturedProjectsSection = () => {
  return (
    <section id="featured-projects" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-8 block text-xs font-medium uppercase tracking-widest text-accent"
        >
          Featured project
        </motion.span>

        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="max-w-2xl font-display text-3xl font-medium leading-tight text-foreground md:text-5xl">
              一份关于中文社区高价值内容的年度观察。
            </h2>
            <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              基于即刻资讯台 2025 年日更内容中的“即刻镇小报”样本，整理主题分布、内容形态和可复用的创作模式。
            </p>
            <Link
              to="/projects/jike-best-in-2025"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
            >
              阅读研究
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="overflow-hidden rounded-[28px] border border-border/70 bg-card/70 shadow-[0_22px_70px_-44px_hsl(var(--foreground)/0.45)]"
          >
            <div className="border-b border-border/60 p-6 md:p-8">
              <div className="flex items-start justify-between gap-5">
                <JikeLogoMark />
                <span className="rounded-full border border-[#FFE411]/55 bg-[#FFE411]/20 px-3 py-1 text-xs font-medium text-foreground">
                  Best in 2025
                </span>
              </div>
              <h3 className="mt-8 max-w-xl text-2xl font-semibold leading-tight text-foreground md:text-3xl">
                即刻 Best in 2025
              </h3>
              <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground md:text-base">
                不是收藏夹，也不是全站榜单；这是一个关于“高价值社区内容如何被写出来”的样本库。
              </p>
            </div>

            <div className="grid grid-cols-3 border-b border-border/60">
              {projectStats.map((stat) => (
                <div key={stat.label} className="px-5 py-5 md:px-7">
                  <div className="text-2xl font-semibold tabular-nums text-foreground md:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs font-normal text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="space-y-3 p-6 md:p-8">
              {projectSignals.map((signal) => {
                const Icon = signal.icon;
                return (
                  <div key={signal.text} className="flex items-center gap-3 text-sm text-foreground/80">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-background/70 text-accent">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>{signal.text}</span>
                  </div>
                );
              })}
              <div className="flex items-center gap-2 pt-2 text-sm font-medium text-accent">
                <Sparkles className="h-4 w-4" />
                样本、主题、创作模式三层整理
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
