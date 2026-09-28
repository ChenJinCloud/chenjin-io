import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'instacloud.com',
  description: '陈今目前负责 instacloud.com 从 0 到 1。',
  alternates: { canonical: '/projects/instacloud' },
};

export default function Page() {
  return (
    <PageLayout back={{ to: '/projects', label: { zh: '返回项目', en: 'Back to Projects' } }}>
      <span className="mb-6 block text-xs font-medium uppercase tracking-widest text-accent">
        NOW · 进行中
      </span>

      <h1 className="mb-6 font-serif text-4xl font-light leading-tight md:text-5xl">
        instacloud.com
      </h1>

      <p className="max-w-2xl text-muted-foreground">
        目前负责 instacloud.com 从 0 到 1 的推进。这是一段正在进行的实践，随着阶段性结果出现会持续更新这个页面。
      </p>

      <div className="mt-10 rounded-lg border border-dashed border-border p-6">
        <p className="text-sm text-muted-foreground">
          [PLACEHOLDER — 待补充具体进展、阶段性结果与可公开的细节]
        </p>
      </div>
    </PageLayout>
  );
}
