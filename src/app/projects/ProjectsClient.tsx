'use client';

import PageLayout from '@/components/PageLayout';
import Heading from '@/components/Heading';
import { projects } from '@/content/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { trackEvent, trackOutboundClick } from '@/lib/analytics';

const ProjectsClient = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const renderProjectCard = (project: (typeof projects)[number]) => {
    const isExternal = project.route.startsWith('http');
    const cardContent = (
      <>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-accent">
              {project.kind[language]}
            </p>
            <h2 className="font-display text-2xl font-medium leading-snug text-foreground">
              {project.title[language]}
            </h2>
          </div>
          <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
        </div>

        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
          {project.excerpt[language]}
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            {project.status[language]}
          </span>
          {project.tags.slice(0, 3).map((tag) => (
            <span key={tag} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </>
    );

    const className = 'group block h-full rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50';

    return isExternal ? (
      <a
        href={project.route}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackOutboundClick(project.route, { source: 'projects', id: project.id })}
        className={className}
      >
        {cardContent}
      </a>
    ) : (
      <Link
        href={project.route}
        onClick={() => trackEvent('project_click', { id: project.id, route: project.route })}
        className={className}
      >
        {cardContent}
      </Link>
    );
  };

  return (
    <PageLayout containerSize="wide" back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6 block text-xs font-medium uppercase tracking-widest text-accent"
      >
        {isZh ? '作品与证据' : 'Projects and Evidence'}
      </motion.span>

      <Heading className="mb-5 leading-tight text-foreground">
        {isZh ? '事实证据，不是营销文案。' : 'Evidence, not marketing copy.'}
      </Heading>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12 max-w-2xl text-muted-foreground"
      >
        {isZh
          ? '这里收录已发布的案例、正在推进的实践，以及值得单独引流的独立产品。每一条都能追溯到真实实践。'
          : 'Shipped case studies, work in progress, and independent products worth linking out to. Every entry traces back to real practice.'}
      </motion.p>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12 + index * 0.05 }}
          >
            {renderProjectCard(project)}
          </motion.article>
        ))}
      </div>
    </PageLayout>
  );
};

export default ProjectsClient;
