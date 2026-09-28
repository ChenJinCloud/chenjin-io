import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: '资源',
  description: '陈今整理的第三方工具、书籍与精选阅读——聚合导航，不是原创内容。',
  alternates: { canonical: '/resources' },
};

const entries = [
  { href: '/resources/stack', title: '工具清单', desc: '不是工具榜单，而是我如何构建、增长、分发、管理基础设施的个人操作系统。' },
  { href: '/resources/bookshelf', title: '书架', desc: '读过的书、留下的划线和后来形成的判断。' },
  { href: '/resources/picks', title: '精选', desc: '不是链接合集，是我读到之后觉得值得留下来的东西。' },
];

export default function Page() {
  return (
    <PageLayout containerSize="wide" back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <h1 className="mb-6 font-serif text-4xl font-light md:text-5xl">资源</h1>
      <p className="mb-12 max-w-2xl text-muted-foreground">
        我整理的别人的东西——工具、书籍、外部阅读。和 <code className="rounded bg-muted px-1.5 py-0.5 text-sm">/writing</code> 不同，
        这里的内容不是我原创的，只是我维护的来源清单。
      </p>

      <div className="grid gap-5 md:grid-cols-3">
        {entries.map((entry) => (
          <Link
            key={entry.href}
            href={entry.href}
            className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
          >
            <div className="mb-3 flex items-start justify-between gap-3">
              <h2 className="font-display text-xl font-medium text-foreground">{entry.title}</h2>
              <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">{entry.desc}</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
