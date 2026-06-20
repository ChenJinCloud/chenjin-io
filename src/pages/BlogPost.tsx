import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { getBlogPost } from '@/content/blog/posts';
import { motion } from 'framer-motion';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, MessageSquare, ExternalLink } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const BlogPostContent = () => {
  const { id } = useParams<{ id: string }>();
  const { language } = useLanguage();
  const isZh = language === 'zh';

  const post = getBlogPost(id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            {isZh ? '返回博客' : 'Back to Blog'}
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,680px)_320px] justify-center gap-12">
            {/* 文章主体 */}
            <article className="min-w-0 max-w-[680px]">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-3xl md:text-4xl font-light mb-6 leading-tight"
              >
                {post.title}
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-center gap-4 text-sm text-muted-foreground mb-12"
              >
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="article-content"
              >
                <ReactMarkdown
                  components={{
                    h1: ({ children }) => (
                      <h2 className="font-serif text-2xl font-light mt-12 mb-6 text-foreground border-b border-border pb-3">
                        {children}
                      </h2>
                    ),
                    h2: ({ children }) => (
                      <h2 className="font-serif text-2xl font-light mt-12 mb-6 text-foreground border-b border-border pb-3">
                        {children}
                      </h2>
                    ),
                    h3: ({ children }) => (
                      <h3 className="font-serif text-xl font-light mt-8 mb-4 text-foreground">
                        {children}
                      </h3>
                    ),
                    h4: ({ children }) => (
                      <h4 className="mt-7 mb-3 text-lg font-medium leading-snug text-foreground">
                        {children}
                      </h4>
                    ),
                    p: ({ children }) => (
                      <p className="mb-7 text-base leading-[1.85] text-muted-foreground">
                        {children}
                      </p>
                    ),
                    strong: ({ children }) => (
                      <strong className="text-primary font-medium">
                        {children}
                      </strong>
                    ),
                    a: ({ children, href }) => {
                      const linkClassName = 'text-accent underline underline-offset-4';

                      if (href?.startsWith('/')) {
                        return (
                          <Link to={href} className={linkClassName}>
                            {children}
                          </Link>
                        );
                      }

                      return (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer"
                          className={linkClassName}
                        >
                          {children}
                        </a>
                      );
                    },
                    blockquote: ({ children }) => (
                      <blockquote className="my-8 rounded-r-lg border-l-2 border-accent bg-muted/30 py-4 pl-6 pr-4 text-base italic leading-[1.85] text-muted-foreground">
                        {children}
                      </blockquote>
                    ),
                    ul: ({ children }) => (
                      <ul className="my-7 list-disc space-y-3 pl-7 text-base leading-[1.85] text-muted-foreground">
                        {children}
                      </ul>
                    ),
                    ol: ({ children }) => (
                      <ol className="my-7 list-decimal space-y-3 pl-7 text-base leading-[1.85] text-muted-foreground">
                        {children}
                      </ol>
                    ),
                    li: ({ children }) => (
                      <li className="pl-1">
                        {children}
                      </li>
                    ),
                    img: ({ alt, ...props }) => (
                      <img
                        {...props}
                        alt={alt ?? ''}
                        loading="lazy"
                        className="my-8 w-full rounded-lg border border-border object-contain"
                      />
                    ),
                    code: ({ children }) => (
                      <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
                        {children}
                      </code>
                    ),
                    pre: ({ children }) => (
                      <pre className="my-8 overflow-x-auto rounded-lg border border-border bg-muted p-4 text-sm text-foreground">
                        {children}
                      </pre>
                    ),
                    table: ({ children }) => (
                      <div className="my-8 overflow-x-auto">
                        <table className="w-full border-collapse text-sm text-muted-foreground">
                          {children}
                        </table>
                      </div>
                    ),
                    th: ({ children }) => (
                      <th className="border border-border bg-muted px-3 py-2 text-left font-medium text-foreground">
                        {children}
                      </th>
                    ),
                    td: ({ children }) => (
                      <td className="border border-border px-3 py-2 align-top">
                        {children}
                      </td>
                    ),
                    hr: () => (
                      <hr className="my-12 border-t border-border" />
                    ),
                  }}
                >
                  {post.content}
                </ReactMarkdown>
              </motion.div>
            </article>

            {/* 作者批注侧边栏 */}
            <aside className="hidden lg:block">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="sticky top-32"
              >
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-4 h-4 text-accent" />
                  <h3 className="text-sm font-medium text-foreground">
                    {isZh ? '作者批注' : 'Author Notes'}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="p-4 bg-card border border-border rounded-lg"
                  >
                    <div className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {isZh ? (post.sourceAccount === '本站' ? '原题：' : '公众号原题：') : 'Original title: '}{post.sourceTitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                      {isZh ? '来源：' : 'Source: '}{post.sourceAccount}
                    </p>
                    {post.sourceUrl ? (
                      <a
                        href={post.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex items-center gap-1 text-sm text-accent hover:underline"
                      >
                        {isZh ? '查看原文' : 'Open original'}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                        {post.sourceNote}
                      </p>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostContent;
