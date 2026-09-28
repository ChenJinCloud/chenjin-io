import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'InsForge Launch Week 1',
  description: '陈今作为 POC，推动 InsForge Launch Week 1 从产品定位、发布到全球传播与用户采用。',
  alternates: { canonical: '/projects/insforge-launch-week' },
};

const evidence = [
  { label: 'Product Hunt', value: '#1' },
  { label: 'GitHub Trending', value: '#1' },
  { label: 'X 曝光', value: '1.5M+' },
  { label: '一周新增 GitHub Stars', value: '3,000+' },
  { label: '发布后', value: '团队加入 YC (P26)' },
];

export default function Page() {
  return (
    <PageLayout back={{ to: '/projects', label: { zh: '返回项目', en: 'Back to Projects' } }}>
      <span className="mb-6 block text-xs font-medium uppercase tracking-widest text-accent">
        证据 · Evidence
      </span>

      <h1 className="mb-6 font-serif text-4xl font-light leading-tight md:text-5xl">
        InsForge Launch Week 1
      </h1>

      <p className="mb-10 max-w-2xl text-muted-foreground">
        作为 POC，协调并推动了这场从产品定位、发布到全球传播与用户采用的完整发布周期
        （2026-03-09 至 2026-03-16）。这是团队共同的发布成果，以下证据反映的是 Launch Week 1
        项目本身的结果，不是个人独立完成的战绩。
      </p>

      <div className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
        {evidence.map((item) => (
          <div key={item.label} className="rounded-lg border border-border p-4 text-center">
            <div className="font-display text-2xl font-medium text-foreground">{item.value}</div>
            <div className="mt-1 text-xs text-muted-foreground">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="space-y-6 border-t border-border pt-10">
        <h2 className="font-medium text-foreground">时间线</h2>
        <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li><span className="font-mono text-xs text-accent">03-09</span> — Introducing InsForge 2.0</li>
          <li><span className="font-mono text-xs text-accent">03-10</span> — Introducing InsForge Deployment</li>
          <li><span className="font-mono text-xs text-accent">03-11</span> — Introducing InsForge Realtime</li>
          <li><span className="font-mono text-xs text-accent">03-12</span> — InsForge Now Supports Remote MCP</li>
          <li><span className="font-mono text-xs text-accent">03-13</span> — Skills</li>
        </ul>
      </div>

      <div className="mt-12 rounded-lg border border-border bg-muted/20 p-6">
        <p className="text-sm text-muted-foreground">
          我的角色：从产品定位、发布节奏到全球传播与用户采用的协调与推动（Point of Contact）。
          专注 AI Coding、Agent 工作流与开发者工具的增长实践。
        </p>
      </div>
    </PageLayout>
  );
}
