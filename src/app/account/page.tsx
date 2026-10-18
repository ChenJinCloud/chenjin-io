import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/PageLayout';
import { UserCircle } from 'lucide-react';
import { phase2Enabled } from '@/features/site/flags';

export const metadata: Metadata = {
  title: '账号',
  description: '管理你在 chenjin.io 上的评论与对话记录。',
  alternates: { canonical: '/account' },
  robots: { index: false },
};

export default function Page() {
  if (!phase2Enabled) notFound();
  return (
    <PageLayout back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <div className="flex flex-col items-center py-16 text-center">
        <UserCircle className="mb-6 h-12 w-12 text-muted-foreground" />
        <h1 className="mb-3 font-serif text-3xl font-light">账号功能即将上线</h1>
        <p className="max-w-md text-sm text-muted-foreground">
          未来这里会用来管理你的评论和对话记录（会话留存 30 天，可删除）。这是能力层功能，不是导航入口。
        </p>
      </div>
    </PageLayout>
  );
}
