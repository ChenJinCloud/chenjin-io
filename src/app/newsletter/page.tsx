import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Newsletter',
  description: '订阅陈今的写作更新——辅助订阅入口，不是内容主阵地。',
  alternates: { canonical: '/newsletter' },
};

export default function Page() {
  return (
    <PageLayout back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <div className="mb-6 flex items-center gap-3">
        <Mail className="h-6 w-6 text-accent" />
        <h1 className="font-serif text-4xl font-light md:text-5xl">Newsletter</h1>
      </div>
      <p className="mb-10 max-w-2xl text-muted-foreground">
        订阅不是终点，是维护关系的开始。这里会同步 <Link href="/writing" className="text-accent underline underline-offset-4">写作</Link> 里的新文章更新。
      </p>
      <div className="rounded-lg border border-dashed border-border p-6">
        <p className="text-sm text-muted-foreground">
          [PLACEHOLDER — 订阅表单待接入。内容承诺与更新节奏待确定。]
        </p>
      </div>
    </PageLayout>
  );
}
