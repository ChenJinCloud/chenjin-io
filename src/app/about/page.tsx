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

// Work/education history — timeline items sourced from the orphaned
// ExperienceDetail.tsx dataset plus the InsForge chapter, cross-checked
// against the user's Feishu case-study doc ("维护者实践路径：从职业转型到增长系统").
const timeline: TimelineItem[] = [
  { type: 'work', period: '2026.02 至今', title: 'AI 产品增长负责人', subtitle: 'InsForge · 操盘 Launch Week 1' },
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

      <section className="mb-16 space-y-5 text-sm leading-relaxed text-muted-foreground">
        <h2 className="mb-2 text-xl font-medium text-foreground">故事</h2>
        <p>
          社会工作专业出身，本科期间做过线上心理咨询。这段背景一直影响着我做事的方式——现在的方向，
          其实是三个追求交汇的结果：对人的追求（社会工作里“人在情境中”的理念）、对知识管理的追求
          （很早就开始用知识库持续积累），以及对全球化的追求。这三条线加起来，变成了“AI 全球化增长”。
        </p>
        <p>
          2024 年 9 月第一次真正进入编程世界：报名了一个即刻上的免费 Cursor 共学营，从装 Node.js 都要
          查文档的状态，一路做出人生第一个 2048 小游戏。那次经历留下一个关键发现——
          <strong className="text-foreground">coding 水平不重要，表达能力才是被记住的原因</strong>。
        </p>
        <p>
          2025 年初，一篇关于个人数据库搭建的公众号文章意外获得 10 万+ 阅读，成了从线上走到线下的跳板，
          由此进入杭州 706 良渚的 AI 社区，开始真正的线下实践。
        </p>
        <p>
          在 Atoms（Deepwisdom / MetaGPT）期间，除了产品运营，也在发版空窗期临时补位用户支持——
          20 天内处理 700+ 用户问题，把首响时间从约 21 小时压缩到 8 小时。这段经历重新定义了我对
          “用户支持”的理解：它不是边角料，而是早期产品最密集的研究现场。
        </p>
        <p>
          2026 年 2 月加入 InsForge，操盘了 Launch Week 1——详见
          {' '}<a href="/projects/insforge-launch-week" className="text-accent underline underline-offset-4">这个案例</a>。
          现在在做的 Global Growth OS，是把这些经历沉淀成方法的尝试：不是一次性的复盘，而是一套
          持续采集、结构化、可被复用的活系统。
        </p>
      </section>

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
          这里是持续更新的经历记录——完整履历会随着新的项目和判断陆续补充。
        </p>
      </div>
    </PageLayout>
  );
}
