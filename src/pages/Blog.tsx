import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { blogPosts } from '@/content/blog/posts';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, BookOpen, Clock } from 'lucide-react';

const BlogContent = () => {
  const { language } = useLanguage();
  const isZh = language === 'zh';

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
            {isZh ? '写作' : 'Writing'}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-10"
          >
            {isZh ? '关于 AI-native 工作、个人系统、增长、认知与真实表达的文章。' : 'Essays on AI-native work, personal systems, growth, cognition, and honest creation.'}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="mb-10"
          >
            <Link to="/writing/bookshelf" className="group flex items-start gap-4 p-6 border border-border rounded-lg hover:border-accent transition-colors">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-border text-accent">
                <BookOpen className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-medium text-foreground">{isZh ? '书架' : 'Bookshelf'}</h2>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-sm text-muted-foreground">
                  {isZh ? '按书籍封面陈列阅读笔记、摘录与读后的判断' : 'Reading notes, excerpts, and judgments arranged by book cover'}
                </p>
              </div>
            </Link>
          </motion.div>

          <div className="grid gap-4">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
              >
                <Link to={`/writing/${post.id}`} className="block p-6 border border-border rounded-lg hover:border-accent transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-medium text-foreground">{post.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {post.date}
                  </div>
                </Link>
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
