import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Global Growth OS',
  description: 'Global Growth OS：面向全球市场的增长方法、研究信源与 AI 工作流。独立用户站正在规划中。',
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
        Global Growth OS 整理面向全球市场的增长方法、研究信源与 AI 工作流。本页介绍项目背景，记录我的贡献与复盘。
        独立用户站规划使用 <code className="rounded bg-muted px-1.5 py-0.5 text-sm">growth.chenjin.io</code>，
        为使用者提供岗位与常识、方法论与信源、Growth Toolkit，以及反馈与共创入口。
      </p>

      <div className="mt-10 rounded-lg border border-dashed border-border p-6">
        <p className="text-sm text-muted-foreground">
          独立用户站尚未实现或上线。公开第一阶段沿用四层内容结构，完整 OS 内部设计保留在项目工作区。
        </p>
      </div>
    </PageLayout>
  );
}
