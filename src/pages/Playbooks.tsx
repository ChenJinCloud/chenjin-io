import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen } from 'lucide-react';

const Playbooks = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const playbooks = [
    {
      code: '101',
      title: isZh ? 'AI 编程 101' : 'AI Coding 101',
      desc: isZh
        ? '从零到第一个上线产品：环境、工具链、提示词、Claude Code / Cursor 工作流、部署'
        : 'From zero to your first shipped product: environment, toolchain, prompting, Claude Code / Cursor workflow, deploy',
      chapters: isZh ? '12 章节计划中' : '12 chapters planned',
      comingSoon: true,
    },
    {
      code: '201',
      title: isZh ? 'AI 增长 101' : 'AI Growth 101',
      desc: isZh
        ? '面向 AI 原生产品的增长方法：从冷启到分发、从内容到社区、从数据到决策'
        : 'Growth methods for AI-native products: cold start to distribution, content to community, data to decisions',
      chapters: isZh ? '10 章节计划中' : '10 chapters planned',
      comingSoon: true,
    },
    {
      code: 'LOG',
      title: isZh ? 'Vibe Coding 学习日志' : 'Vibe Coding — Build-in-Public Log',
      desc: isZh
        ? '我从产品运营转向独立开发者的实时记录——不写结论，写过程'
        : 'Real-time log of my transition from product ops to independent developer — process over conclusions',
      chapters: isZh ? '持续更新' : 'Ongoing',
      comingSoon: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isZh ? '返回首页' : 'Back to Home'}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif text-4xl md:text-5xl font-light mb-6"
          >
            {isZh ? '方法手册' : 'Playbooks'}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12 max-w-2xl"
          >
            {isZh
              ? '系统化的主题输出。和博客的随笔不同，方法手册是我在 AI 编程、增长、公开构建等领域沉淀的可复用 playbook。'
              : 'Structured, thematic output. Unlike blog essays, playbooks are reusable frameworks I\'ve distilled from AI coding, growth, and building in public.'}
          </motion.p>

          <div className="grid gap-4">
            {playbooks.map((pb, i) => (
              <motion.div
                key={pb.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="p-6 border border-border rounded-lg hover:border-foreground/30 transition-colors"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-4 h-4 text-accent" />
                    <span className="text-xs font-medium tracking-widest uppercase text-accent">
                      {pb.code}
                    </span>
                  </div>
                  {pb.comingSoon && (
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                      {isZh ? '即将推出' : 'Coming Soon'}
                    </span>
                  )}
                </div>
                <h3 className="font-medium text-foreground text-lg mb-2">{pb.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{pb.desc}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {pb.chapters}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Playbooks;
