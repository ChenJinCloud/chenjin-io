import PageLayout from '@/components/PageLayout';
import Seo from '@/components/Seo';
import { publishedBlogPosts } from '@/content/blog/posts';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogContent = () => (
  <PageLayout containerSize="wide" back={{ to: '/', label: { zh: '返回首页', en: '返回首页' } }}>
    <Seo
      title="写作｜陈今"
      description="陈今关于 AI 产品增长、Agent 工作流、个人知识系统与真实实践的文章。"
      path="/writing"
    />

    <div className="mb-14 flex flex-wrap items-end justify-between gap-x-8 gap-y-4 md:mb-20">
      <h1 className="font-display text-5xl font-medium tracking-tight md:text-7xl">写作</h1>
      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <Link to="/writing/picks" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
          精选
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
        <Link to="/writing/bookshelf" className="inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
          书架
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </div>

    <div className="border-t border-border">
      {publishedBlogPosts.map((post) => (
        <Link
          key={post.id}
          to={`/writing/${post.id}`}
          className="group grid gap-3 border-b border-border py-7 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:items-baseline md:py-8"
        >
          <span className="text-sm text-muted-foreground">{post.date}</span>
          <h2 className="text-xl leading-8 text-foreground transition-colors group-hover:text-accent md:text-2xl">
            {post.title.zh}
          </h2>
          <ArrowUpRight
            className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block"
            aria-hidden="true"
          />
        </Link>
      ))}
    </div>
  </PageLayout>
);

export default BlogContent;
