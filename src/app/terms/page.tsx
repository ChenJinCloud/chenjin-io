import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: '服务条款',
  description: 'chenjin.io 的服务条款。',
  alternates: { canonical: '/terms' },
  robots: { index: false },
};

export default function Page() {
  return (
    <PageLayout containerSize="narrow" back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <h1 className="mb-6 font-serif text-4xl font-light md:text-5xl">服务条款</h1>
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
        <p>本站内容仅代表作者个人观点，不构成专业建议。</p>
        <p>[PLACEHOLDER — 完整服务条款待补充。]</p>
      </div>
    </PageLayout>
  );
}
