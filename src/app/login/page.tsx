import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = { title: '登录', robots: { index: false, follow: false } };

export default function LoginPage() {
  return (
    <PageLayout back={{ to: '/', label: { zh: '返回官网', en: 'Back to website' } }}>
      <h1 className="mb-6 font-display text-4xl">登录与对话记录</h1>
      <p className="max-w-xl leading-8 text-muted-foreground">账号认证和数据库正在接入。当前预览只提供公开内容查询，尚不能保存或同步聊天记录。</p>
    </PageLayout>
  );
}
