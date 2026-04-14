import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Clock } from 'lucide-react';

const BlogContent = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const posts = [
    {
      id: 'ai-creation-shame',
      title: isZh ? '如何抵抗AI时代的创作羞耻？' : 'How to Resist Creative Shame in the AI Era?',
      desc: isZh ? '关于AI辅助创作的价值、原创性与内容变现的思考' : 'Thoughts on the value, originality, and monetization of AI-assisted creation',
      date: '2025.02.22',
      comingSoon: false,
    },
    {
      id: 'personal-database',
      title: isZh ? '建议大家尽早开始搭建个人数据库' : 'Start Building Your Personal Database Early',
      desc: isZh ? '为什么个人知识管理系统是认知提升的基础设施' : 'Why a personal knowledge system is the infrastructure for cognitive growth',
      date: '2025.02.20',
      comingSoon: false,
    },
    {
      id: 'ai-native',
      title: isZh ? '成为 AI Native 意味着什么' : 'What It Means to Be AI Native',
      desc: isZh ? '对 AI 原生思维的思考' : 'Reflections on AI-native thinking',
      date: '2025.01',
      comingSoon: true,
    },
    {
      id: 'digital-nomad',
      title: isZh ? '数字游民的认知边界' : 'Cognitive Boundaries of Digital Nomads',
      desc: isZh ? '游牧生活中的认知提升' : 'Cognitive growth in nomadic life',
      date: '2025.01',
      comingSoon: true,
    },
    {
      id: 'deep-thinking',
      title: isZh ? '信息过载时代的深度思考' : 'Deep Thinking in the Age of Information Overload',
      desc: isZh ? '如何在信息洪流中保持清醒' : 'Staying clear amid information floods',
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
            {isZh ? '认知提升' : 'Cognitive Blog'}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12"
          >
            {isZh ? '关于认知、思维与成长的思考' : 'Thoughts on cognition, thinking, and growth'}
          </motion.p>

          <div className="grid gap-4">
            {posts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                {post.comingSoon ? (
                  <div className="p-6 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-foreground">{post.title}</h3>
                      <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                        {isZh ? '即将推出' : 'Coming Soon'}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{post.desc}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                ) : (
                  <Link to={`/blog/${post.id}`} className="block p-6 border border-border rounded-lg hover:border-accent transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-medium text-foreground">{post.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{post.desc}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.date}
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogContent;
