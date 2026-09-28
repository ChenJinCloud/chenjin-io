import PageLayout from '@/components/PageLayout';
import Seo from '@/components/Seo';
import { getBlogPost } from '@/content/blog/posts';
import { Calendar, Clock } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Link, useParams } from 'react-router-dom';
import NotFound from './NotFound';

const BlogPostContent = () => {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPost(id);

  if (!post) {
    return <NotFound />;
  }

  return (
    <PageLayout back={{ to: '/writing', label: { zh: '返回写作', en: '返回写作' } }}>
      <Seo
        title={`${post.title.zh}｜陈今`}
        description={post.excerpt.zh}
        path={`/writing/${post.id}`}
        type="article"
      />

      <article className="mx-auto max-w-[720px]">
        <h1 className="mb-6 font-display text-3xl font-medium leading-tight tracking-tight text-foreground md:text-5xl">
          {post.title.zh}
        </h1>

        <div className="mb-12 flex items-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4" aria-hidden="true" />
            {post.date}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4" aria-hidden="true" />
            {post.readTime}
          </span>
        </div>

        <div className="article-content">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h2 className="mt-12 mb-6 border-b border-border pb-3 font-display text-2xl font-medium text-foreground">
                  {children}
                </h2>
              ),
              h2: ({ children }) => (
                <h2 className="mt-12 mb-6 border-b border-border pb-3 font-display text-2xl font-medium text-foreground">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-8 mb-4 font-display text-xl font-medium text-foreground">{children}</h3>
              ),
              h4: ({ children }) => (
                <h4 className="mt-7 mb-3 text-lg font-medium leading-snug text-foreground">{children}</h4>
              ),
              p: ({ children }) => (
                <p className="mb-7 text-base leading-[1.9] text-muted-foreground">{children}</p>
              ),
              strong: ({ children }) => <strong className="font-medium text-foreground">{children}</strong>,
              a: ({ children, href }) => {
                const className = 'text-accent underline underline-offset-4';
                const normalizedHref = href?.replace(/^\/blog\//, '/writing/');

                if (normalizedHref?.startsWith('/')) {
                  return <Link to={normalizedHref} className={className}>{children}</Link>;
                }

                return <a href={normalizedHref} target="_blank" rel="noreferrer" className={className}>{children}</a>;
              },
              blockquote: ({ children }) => (
                <blockquote className="my-8 border-l-2 border-accent py-2 pl-6 text-base italic leading-[1.9] text-muted-foreground">
                  {children}
                </blockquote>
              ),
              ul: ({ children }) => <ul className="my-7 list-disc space-y-3 pl-7 text-base leading-[1.9] text-muted-foreground">{children}</ul>,
              ol: ({ children }) => <ol className="my-7 list-decimal space-y-3 pl-7 text-base leading-[1.9] text-muted-foreground">{children}</ol>,
              li: ({ children }) => <li className="pl-1">{children}</li>,
              img: ({ alt, ...props }) => (
                <img {...props} alt={alt ?? ''} loading="lazy" className="my-8 w-full border border-border object-contain" />
              ),
              code: ({ children }) => <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">{children}</code>,
              pre: ({ children }) => <pre className="my-8 overflow-x-auto border border-border bg-muted p-4 text-sm text-foreground">{children}</pre>,
              table: ({ children }) => <div className="my-8 overflow-x-auto"><table className="w-full border-collapse text-sm text-muted-foreground">{children}</table></div>,
              th: ({ children }) => <th className="border border-border bg-muted px-3 py-2 text-left font-medium text-foreground">{children}</th>,
              td: ({ children }) => <td className="border border-border px-3 py-2 align-top">{children}</td>,
              hr: () => <hr className="my-12 border-t border-border" />,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </PageLayout>
  );
};

export default BlogPostContent;
