import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { subsites } from '@/features/site/subsites';

const site = subsites[0];
export const metadata: Metadata = {
  title: site.name,
  robots: { index: false, follow: false },
};

/** Temporary notice; switch to a permanent redirect only after the sub-site is live. */
export default function Page() {
  return <PageLayout back={{ to: '/projects', label: { zh: '返回项目', en: 'Back to projects' } }}>
    <h1 className="mb-6 font-display text-4xl">InsForge 独立专题站</h1>
    <p className="mb-6 text-xl">insforge.chenjin.io</p>
    <p className="max-w-xl leading-8 text-muted-foreground">资源站面向 InsForge 用户，独立承载产品动态、用例与使用实践。目前处于架构搭建阶段，域名尚未上线。</p>
  </PageLayout>;
}
