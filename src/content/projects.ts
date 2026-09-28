import type { LocalizedText } from '@/features/roadmap/roadmapTypes';

export interface ProjectEntry {
  id: string;
  title: LocalizedText;
  excerpt: LocalizedText;
  route: string;
  kind: LocalizedText;
  status: LocalizedText;
  tags: string[];
}

export const projects: ProjectEntry[] = [
  {
    id: 'insforge-launch-week',
    title: {
      en: 'InsForge Launch Week 1',
      zh: 'InsForge Launch Week 1',
    },
    excerpt: {
      en: 'Ran InsForge’s Launch Week 1 — positioning, release, and global distribution for an AI-native backend product.',
      zh: '操盘 InsForge Launch Week 1，推动这场发布从定位、上线到全球传播与用户采用。',
    },
    route: '/projects/insforge-launch-week',
    kind: { en: 'Evidence', zh: '证据' },
    status: { en: 'Shipped', zh: '已发布' },
    tags: ['insforge', 'launch week', 'growth'],
  },
  {
    id: 'instacloud',
    title: {
      en: 'instacloud.com',
      zh: 'instacloud.com',
    },
    excerpt: {
      en: 'Currently driving instacloud.com from zero to one.',
      zh: '目前负责 instacloud.com 从 0 到 1。',
    },
    route: '/projects/instacloud',
    kind: { en: 'Evidence', zh: '证据' },
    status: { en: 'Now', zh: '进行中' },
    tags: ['instacloud', '0-to-1', 'growth'],
  },
  {
    id: 'global-growth-os',
    title: {
      en: 'Global Growth OS',
      zh: 'Global Growth OS',
    },
    excerpt: {
      en: 'The core knowledge-and-productization engine behind this site’s writing and tools. Not the whole personal brand — just its strongest supporting system.',
      zh: '支撑本站写作与工具产出的核心知识与产品化引擎。不是整个个人品牌本身，是其中最强的一段支撑系统。',
    },
    route: '/projects/global-growth-os',
    kind: { en: 'Endorsed Initiative', zh: '重点项目' },
    status: { en: 'Building', zh: '构建中' },
    tags: ['global growth os', 'knowledge system', 'building'],
  },
  {
    id: 'jike-best-in-2025',
    title: {
      en: 'Jike Best in 2025',
      zh: '即刻 2025 精选',
    },
    excerpt: {
      en: 'A community curation project that turns high-signal Jike posts into a browsable annual collection.',
      zh: '把即刻上的高信息密度内容整理成可浏览年度集合的社区内容项目。',
    },
    route: '/projects/jike-best-in-2025',
    kind: { en: 'Content Product', zh: '内容产品' },
    status: { en: 'Shipped', zh: '已发布' },
    tags: ['jike', 'community', 'curation', 'content product'],
  },
  {
    id: 'claude-fable5-newshub',
    title: {
      en: 'Claude Fable 5 Newshub',
      zh: 'Claude Fable 5 资料站',
    },
    excerpt: {
      en: 'An independent static atlas for Claude Fable 5, covering launch history, prompting practices, workflow notes, videos, and source links.',
      zh: '一个已上线的 Claude Fable 5 独立静态资料站，整理发布时间线、提示实践、工作流笔记、视频和来源链接。',
    },
    route: 'https://claude-fable5.chenjin.io/',
    kind: { en: 'Independent Sub-site', zh: '独立子页' },
    status: { en: 'Shipped', zh: '已上线' },
    tags: ['claude', 'fable 5', 'atlas', 'sub-site'],
  },
  {
    id: 'chenjin-io',
    title: {
      en: 'chenjin.io',
      zh: 'chenjin.io',
    },
    excerpt: {
      en: 'My personal site as a chat-first knowledge hub, project carrier, writing archive, and public build system.',
      zh: '我的个人网站：Chat-first 知识入口、作品载体、写作归档和公开构建系统。',
    },
    route: '/',
    kind: { en: 'Personal OS', zh: '个人系统' },
    status: { en: 'Building', zh: '构建中' },
    tags: ['personal website', 'chat', 'knowledge base', 'portfolio'],
  },
  {
    id: 'zero-to-one-personal-website',
    title: {
      en: 'Zero-to-one personal website playbook',
      zh: '从 0 到 1 个人网站手册',
    },
    excerpt: {
      en: 'A developing playbook for people who want to turn personal knowledge, projects, and AI workflows into a real site.',
      zh: '给想把个人知识、项目和 AI 工作流变成真实网站的人准备的建设手册。',
    },
    route: '/writing/tag/playbook',
    kind: { en: 'Playbook', zh: '方法手册' },
    status: { en: 'Drafting', zh: '草稿中' },
    tags: ['personal website', 'playbook', 'ai coding', 'build in public'],
  },
];
