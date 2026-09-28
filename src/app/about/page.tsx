import type { Metadata } from 'next';
import PageLayout from '@/components/PageLayout';
import { Building2, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: '关于',
  description: '陈今的身份、经历与方法论溯源。',
  alternates: { canonical: '/about' },
};

interface TimelineItem {
  type: 'work' | 'education';
  period: string;
  title: string;
  subtitle: string;
}

// Real work/education history migrated from the orphaned ExperienceDetail.tsx
// dataset. Detailed descriptions were empty there too — still pending the
// user's full resume (see the placeholder callout below).
const timeline: TimelineItem[] = [
  { type: 'work', period: '2025.10', title: '产品运营', subtitle: 'Deepwisdom (MetaGPT) · MGX/Atoms' },
  { type: 'work', period: '2025.06', title: '领队', subtitle: '高端定制长线入境游 25 人团' },
  { type: 'work', period: '2025.03-04', title: '社区运营', subtitle: '706 数字游民社区 · 杭州良渚' },
  { type: 'work', period: '2024.04-06', title: '独立家教', subtitle: '系统定制家教服务' },
  { type: 'work', period: '2024.01-03', title: '运营实习生', subtitle: '广东穗和实业控股有限公司' },
  { type: 'work', period: '2023.07 至今', title: '线上心理咨询师', subtitle: '广东省 12355 青少年综合服务平台' },
  { type: 'education', period: '2021-2025', title: '广东金融学院', subtitle: '社会工作专业' },
  { type: 'education', period: '2018-2021', title: '广州市第六中学', subtitle: '' },
  { type: 'education', period: '2015-2018', title: '广州市天河区御景小学', subtitle: '' },
];

export default function Page() {
  return (
    <PageLayout containerSize="narrow" back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <h1 className="mb-6 font-serif text-4xl font-light md:text-5xl">陈今 / Chen Jin</h1>

      <p className="mb-4 max-w-2xl text-lg leading-8 text-muted-foreground">
        面向 AI / Agent / DevTool / Infra 产品与从业者，把模糊的增长、内容、合作和 AI 工作流问题拆成可执行系统，
        用文档、工具和实作推进落地。
      </p>

      <p className="mb-16 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        判断者 · 实践者 · 系统构建者 · 关系维护者。InsForge 的增长经历是这套方法论里最强的一段证据，不是身份本身——
        详见 <a href="/projects/insforge-launch-week" className="text-accent underline underline-offset-4">Launch Week 1</a>
        {' '}和正在进行的 <a href="/projects/instacloud" className="text-accent underline underline-offset-4">instacloud.com</a>。
      </p>

      <section className="mb-16">
        <h2 className="mb-6 text-xl font-medium text-foreground">经历</h2>
        <div className="space-y-4">
          {timeline.map((item) => (
            <div key={`${item.period}-${item.title}`} className="flex items-start gap-4 border-b border-border pb-4">
              <div className="mt-1 text-muted-foreground">
                {item.type === 'work' ? <Building2 className="h-4 w-4" /> : <GraduationCap className="h-4 w-4" />}
              </div>
              <div className="flex-1">
                <span className="mb-1 block text-xs font-medium uppercase tracking-widest text-accent">{item.period}</span>
                <h3 className="font-medium text-foreground">{item.title}</h3>
                {item.subtitle && <p className="text-sm text-muted-foreground">{item.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-lg border border-dashed border-border p-6">
        <p className="text-sm text-muted-foreground">
          [PLACEHOLDER — 完整履历、每段经历的详细描述与公开表达边界待补充。
          当前时间线为已有真实记录，尚未补齐细节。]
        </p>
      </div>
    </PageLayout>
  );
}
