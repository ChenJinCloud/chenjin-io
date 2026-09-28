import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Global Growth OS',
  description: '支撑 chenjin.io 写作与工具产出的核心知识与产品化引擎，正在构建中。',
  alternates: { canonical: '/projects/global-growth-os' },
};

export default function Page() {
  return (
    <PageLayout back={{ to: '/projects', label: { zh: '返回项目', en: 'Back to Projects' } }}>
      <span className="mb-6 block text-xs font-medium uppercase tracking-widest text-accent">
        BUILDING · 构建中
      </span>

      <h1 className="mb-6 font-serif text-4xl font-light leading-tight md:text-5xl">
        Global Growth OS
      </h1>

      <p className="max-w-2xl text-muted-foreground">
        核心知识与产品化引擎，正在构建中。它承接 <code className="rounded bg-muted px-1.5 py-0.5 text-sm">/writing</code> 的方法沉淀，
        把可复用的判断、框架和实战案例转化成工具与工作流。它是 chenjin.io 内部的重点项目，不代表整个个人品牌本身——
        只有当它形成独立的用户任务、持续需求和复访之后，才会考虑独立域名或子品牌。
      </p>

      <div className="mt-10 rounded-lg border border-dashed border-border p-6">
        <p className="text-sm text-muted-foreground">
          [PLACEHOLDER — 待补充第一个公开形态、范围边界与上线时间]
        </p>
      </div>
    </PageLayout>
  );
}
