import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import { categorySlugs, getPostsByTagSlug, slugToCategory } from '@/content/blog/posts';
import { playbookEntries } from '@/content/playbooks';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

const tagLabels: Record<string, string> = {
  ...Object.fromEntries(Object.entries(categorySlugs).map(([category, slug]) => [slug, category])),
  playbook: '方法手册',
};

export function generateStaticParams() {
  return [...Object.values(categorySlugs), 'playbook'].map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: { params: Promise<{ tag: string }> }): Promise<Metadata> {
  const { tag } = await params;
  const label = tagLabels[tag];
  if (!label) return {};
  return {
    title: `${label}｜写作`,
    description: `陈今写作归档中标记为「${label}」的内容。`,
    alternates: { canonical: `/writing/tag/${tag}` },
  };
}

export default async function Page({ params }: { params: Promise<{ tag: string }> }) {
  const { tag } = await params;
  const label = tagLabels[tag];
  if (!label) notFound();

  if (tag === 'playbook') {
    return (
      <PageLayout back={{ to: '/writing', label: { zh: '返回写作', en: 'Back to Writing' } }}>
        <h1 className="mb-6 font-serif text-4xl font-light md:text-5xl">方法手册</h1>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          系统化的主题输出。和随笔不同，方法手册是在 AI 编程、增长、公开构建等领域沉淀的可复用 playbook。
        </p>
        <div className="grid gap-4">
          {playbookEntries.map((pb) => (
            <div
              key={pb.code}
              className="flex items-start gap-4 rounded-lg border border-border p-6 transition-colors hover:border-foreground/30"
            >
              <span className="mt-1 font-mono text-xs text-accent">{pb.code}</span>
              <div className="flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h2 className="font-medium text-foreground">{pb.title.zh}</h2>
                  {pb.comingSoon && (
                    <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">即将推出</span>
                  )}
                </div>
                <p className="mb-2 text-sm text-muted-foreground">{pb.desc.zh}</p>
                <p className="text-xs text-muted-foreground/70">{pb.chapters.zh}</p>
              </div>
            </div>
          ))}
        </div>
      </PageLayout>
    );
  }

  if (!slugToCategory[tag]) notFound();
  const posts = getPostsByTagSlug(tag);

  return (
    <PageLayout containerSize="wide" back={{ to: '/writing', label: { zh: '返回写作', en: 'Back to Writing' } }}>
      <h1 className="mb-6 font-serif text-4xl font-light md:text-5xl">{label}</h1>
      <p className="mb-12 text-muted-foreground">标签为「{label}」的文章，共 {posts.length} 篇。</p>

      <div className="border-t border-border">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/writing/${post.id}`}
            className="group grid gap-3 border-b border-border py-7 transition-colors sm:grid-cols-[7rem_1fr_auto] sm:items-baseline md:py-8"
          >
            <span className="text-sm text-muted-foreground">{post.date}</span>
            <h2 className="text-xl leading-8 text-foreground transition-colors group-hover:text-accent md:text-2xl">
              {post.title.zh}
            </h2>
            <ArrowUpRight className="hidden h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 sm:block" aria-hidden="true" />
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
