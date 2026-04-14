import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';

const SourcesContent = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const sources = [
    { name: 'Hacker News', url: 'https://news.ycombinator.com', desc: isZh ? '科技创业新闻' : 'Tech & startup news' },
    { name: 'The Verge', url: 'https://theverge.com', desc: isZh ? '科技与文化' : 'Tech & culture' },
    { name: 'Ars Technica', url: 'https://arstechnica.com', desc: isZh ? '深度技术分析' : 'In-depth tech analysis' },
    { name: 'MIT Tech Review', url: 'https://technologyreview.com', desc: isZh ? 'MIT 技术评论' : 'MIT Technology Review' },
    { name: 'a]6z', url: 'https://a16z.com', desc: isZh ? '风投与创新洞察' : 'VC & innovation insights' },
    { name: '少数派', url: 'https://sspai.com', desc: isZh ? '高质量数字生活' : 'Quality digital life' },
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
            {isZh ? '优质信息源' : 'Quality Sources'}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-12"
          >
            {isZh ? '我常关注的高质量信息来源' : 'High-quality information sources I follow'}
          </motion.p>

          <div className="grid gap-4">
            {sources.map((source, i) => (
              <motion.a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="group flex items-center justify-between p-6 border border-border rounded-lg hover:border-foreground/30 transition-colors"
              >
                <div>
                  <h3 className="font-medium text-foreground">{source.name}</h3>
                  <p className="text-sm text-muted-foreground">{source.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </motion.a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SourcesContent;
