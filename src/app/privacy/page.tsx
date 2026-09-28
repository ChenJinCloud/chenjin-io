import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: '隐私政策',
  description: 'chenjin.io 的隐私政策。',
  alternates: { canonical: '/privacy' },
  robots: { index: false },
};

export default function Page() {
  return (
    <PageLayout containerSize="narrow" back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <h1 className="mb-6 font-serif text-4xl font-light md:text-5xl">隐私政策</h1>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>本站使用 PostHog 记录匿名页面访问与外链点击数据，用于了解哪些内容和项目被真正使用，不用于向第三方出售数据。</p>
        <p>联系表单与邮件仅用于回应你的合作或咨询请求。</p>
        <p>[PLACEHOLDER — 完整隐私政策条款待补充。]</p>
      </div>
    </PageLayout>
  );
}
