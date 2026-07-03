import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { projects } from '@/content/projects';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
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
      <a href={project.route} target="_blank" rel="noreferrer" className={className}>
        {cardContent}
      </a>
    ) : (
      <Link to={project.route} className={className}>
        {cardContent}
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="px-6 pb-20 pt-32 md:px-12">
        <div className="mx-auto max-w-5xl">
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            {isZh ? '返回首页' : 'Back to Home'}
          </Link>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-6 block text-xs font-medium uppercase tracking-widest text-accent"
          >
            {isZh ? '作品与载体' : 'Projects and Carriers'}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 font-display text-4xl font-medium leading-tight text-foreground md:text-5xl"
          >
            {isZh ? '我正在把想法做成可访问的东西。' : 'Ideas turned into things people can visit.'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-12 max-w-2xl text-muted-foreground"
          >
            {isZh
              ? '这里会逐步承载我开发的网站、内容产品、公开实验和可以复用的方法手册。入口仍然是聊天，但作品页负责把已经成形的东西放清楚。'
              : 'This is where my sites, content products, public experiments, and reusable playbooks will live. Chat stays the entry point; this page keeps the concrete work easy to inspect.'}
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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
