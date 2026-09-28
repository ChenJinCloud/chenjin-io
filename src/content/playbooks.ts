// Migrated from the old standalone /playbooks page (src/pages/Playbooks.tsx).
// These are series-in-progress, not standalone articles yet — surfaced under
// the `playbook` tag on /writing per the four-species rule (content → /writing,
// series = shared tag, not a new nav item).

export interface PlaybookEntry {
  code: string;
  title: { zh: string; en: string };
  desc: { zh: string; en: string };
  chapters: { zh: string; en: string };
  comingSoon: boolean;
}

export const playbookEntries: PlaybookEntry[] = [
  {
    code: '101',
    title: { zh: 'AI 编程 101', en: 'AI Coding 101' },
    desc: {
      zh: '从零到第一个上线产品：环境、工具链、提示词、Claude Code / Cursor 工作流、部署',
      en: 'From zero to your first shipped product: environment, toolchain, prompting, Claude Code / Cursor workflow, deploy',
    },
    chapters: { zh: '12 章节计划中', en: '12 chapters planned' },
    comingSoon: true,
  },
  {
    code: '201',
    title: { zh: 'AI 增长 101', en: 'AI Growth 101' },
    desc: {
      zh: '面向 AI 原生产品的增长方法：从冷启到分发、从内容到社区、从数据到决策',
      en: 'Growth methods for AI-native products: cold start to distribution, content to community, data to decisions',
    },
    chapters: { zh: '10 章节计划中', en: '10 chapters planned' },
    comingSoon: true,
  },
  {
    code: 'LOG',
    title: { zh: 'Vibe Coding 学习日志', en: 'Vibe Coding — Build-in-Public Log' },
    desc: {
      zh: '我从产品运营转向独立开发者的实时记录——不写结论，写过程',
      en: 'Real-time log of my transition from product ops to independent developer — process over conclusions',
    },
    chapters: { zh: '持续更新', en: 'Ongoing' },
    comingSoon: false,
  },
];
