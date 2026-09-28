import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { labTools } from '@/content/lab';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Lab',
  description: '陈今自己做的、能运行的小工具。',
  alternates: { canonical: '/lab' },
};

export default function Page() {
  return (
    <PageLayout containerSize="wide" back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <h1 className="mb-6 font-serif text-4xl font-light md:text-5xl">Lab</h1>
      <p className="mb-12 max-w-2xl text-muted-foreground">
        自己做的、能运行的小工具。这里会随着新工具上线持续增加卡片，导航不会因此变化。
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {labTools.map((tool) => (
          <Link
            key={tool.slug}
            href={`/lab/${tool.slug}`}
            className="group flex items-center justify-between rounded-lg border border-accent/20 bg-card p-6 text-left transition-colors hover:border-accent/50"
          >
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-medium text-foreground">{tool.name}</h2>
                {tool.status === 'live' && (
                  <span className="rounded bg-accent/10 px-1.5 py-0.5 text-xs font-medium text-accent">Live</span>
                )}
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{tool.desc.zh}</p>
            </div>
            <ExternalLink className="h-4 w-4 shrink-0 text-accent/50 transition-colors group-hover:text-accent" />
          </Link>
        ))}

        <div className="flex items-center justify-center rounded-lg border border-dashed border-border p-6 text-sm text-muted-foreground">
          更多工具即将上线
        </div>
      </div>
    </PageLayout>
  );
}
