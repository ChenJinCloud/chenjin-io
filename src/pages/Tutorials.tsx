import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

const TutorialsContent = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const tutorials = [
    {
      title: isZh ? '如何用 AI 提升日常效率' : 'Boost Daily Productivity with AI',
      desc: isZh ? '从零开始的 AI 工具使用指南' : 'A beginner guide to AI tools',
      date: '2025.01',
      comingSoon: true,
    },
    {
      title: isZh ? 'Prompt Engineering 入门' : 'Intro to Prompt Engineering',
      desc: isZh ? '写出高效提示词的技巧' : 'Tips for writing effective prompts',
      date: '2025.01',
      comingSoon: true,
    },
    {
      title: isZh ? '数字游民工作流' : 'Digital Nomad Workflow',
      desc: isZh ? '远程办公的最佳实践' : 'Best practices for remote work',
      date: '2025.02',
      comingSoon: true,
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
            {isZh ? '实践教程' : 'Tutorials'}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12"
          >
            {isZh ? '我的实践经验与教程分享' : 'My practical experiences and tutorials'}
          </motion.p>

          <div className="grid gap-4">
            {tutorials.map((tutorial, i) => (
              <motion.div
                key={tutorial.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="p-6 border border-border rounded-lg"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-foreground">{tutorial.title}</h3>
                  {tutorial.comingSoon && (
                    <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                      {isZh ? '即将推出' : 'Coming Soon'}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-3">{tutorial.desc}</p>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  {tutorial.date}
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

export default TutorialsContent;
