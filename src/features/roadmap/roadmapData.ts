import type { Language } from '@/lib/i18n';
import type { RoadmapCategory, RoadmapDisplayItem, RoadmapItem, RoadmapStatus } from './roadmapTypes';

export const roadmapStatusConfig: Record<RoadmapStatus, { color: string; en: string; zh: string }> = {
  open: { color: 'bg-muted text-muted-foreground', en: 'Open', zh: '待收集' },
  considering: { color: 'bg-sky-500/15 text-sky-700 dark:text-sky-300', en: 'Considering', zh: '评估中' },
  planned: { color: 'bg-accent/15 text-accent', en: 'Planned', zh: '已规划' },
  building: { color: 'bg-yellow-500/15 text-yellow-700 dark:text-yellow-400', en: 'Building', zh: '构建中' },
  shipped: { color: 'bg-green-500/15 text-green-700 dark:text-green-400', en: 'Shipped', zh: '已发布' },
};

export const roadmapCategoryLabels: Record<RoadmapCategory, { en: string; zh: string }> = {
  build: { en: 'Build', zh: '构建' },
  writing: { en: 'Writing', zh: '写作' },
  playbook: { en: 'Playbook', zh: '手册' },
  experiment: { en: 'Experiment', zh: '实验' },
  request: { en: 'Reader Request', zh: '读者需求' },
};

export const roadmapItems: RoadmapItem[] = [
  {
    id: 'chat-knowledge-backend',
    title: {
      en: 'Chat-first knowledge base backend',
      zh: 'Chat-first 个人知识库后端',
    },
    description: {
      en: 'Replace the local router with a real /api/chat service: intent classification, retrieval over site content, model response, source cards, and next actions.',
      zh: '把当前本地路由替换成真正的 /api/chat：意图识别、站内内容检索、模型回答、来源卡片和后续行动建议。',
    },
    category: 'build',
    status: 'building',
    votes: 44,
    voted: false,
    tags: ['chat', 'llm', 'knowledge base', 'retrieval', 'api'],
    route: '/roadmap',
  },
  {
    id: 'public-roadmap-request-pool',
    title: {
      en: 'Public build plan and request pool',
      zh: '公开开发计划与需求池',
    },
    description: {
      en: 'A place for my own development plan and for readers to ask for articles, playbooks, products, or collaborations they want to see next.',
      zh: '同时承载我自己的开发计划，以及读者希望我输出的文章、手册、产品或合作方向。',
    },
    category: 'request',
    status: 'building',
    votes: 39,
    voted: false,
    tags: ['roadmap', 'requests', 'content plan', 'build in public'],
    route: '/roadmap',
  },
  {
    id: 'jike-best-in-2025',
    title: {
      en: 'Jike Best in 2025',
      zh: '即刻 2025 精选',
    },
    description: {
      en: 'A community-facing curation project that turns high-signal Jike content into a browsable annual collection.',
      zh: '面向即刻社区的内容精选项目，把高信息密度内容整理成可浏览的年度集合。',
    },
    category: 'build',
    status: 'shipped',
    votes: 36,
    voted: false,
    tags: ['jike', 'curation', 'community', 'project'],
    route: '/projects/jike-best-in-2025',
  },
  {
    id: 'ai-growth-workbench',
    title: {
      en: 'AI growth workbench',
      zh: 'AI 增长工作台',
    },
    description: {
      en: 'A practical index of tools, stacks, partner notes, and backend paths around AI-native growth and independent building.',
      zh: '整理 AI-native 增长、独立构建、工具栈、伙伴资源和后端路径的实用索引。',
    },
    category: 'build',
    status: 'planned',
    votes: 31,
    voted: false,
    tags: ['workbench', 'tools', 'shipany', 'idoubi', 'insforge', 'growth'],
    route: '/workbench',
  },
  {
    id: 'vibe-coding-learning-log',
    title: {
      en: 'Vibe Coding learning log',
      zh: 'Vibe Coding 学习日志',
    },
    description: {
      en: 'A build-in-public series documenting the move from product operator to independent developer with AI coding tools.',
      zh: '一个公开构建的教程系列，记录我如何用 AI 编程工具从产品运营走向独立开发。',
    },
    category: 'writing',
    status: 'planned',
    votes: 29,
    voted: false,
    tags: ['ai coding', 'learning', 'writing', 'tutorial'],
    route: '/writing',
  },
  {
    id: 'developer-growth-channel-map',
    title: {
      en: 'Developer growth channel map',
      zh: '开发者增长渠道地图',
    },
    description: {
      en: 'An interactive map of channels that work for developer-facing products, combining research, real data, and operating notes.',
      zh: '面向开发者产品的增长渠道地图，整合调研、真实数据和个人操作笔记。',
    },
    category: 'playbook',
    status: 'considering',
    votes: 27,
    voted: false,
    tags: ['growth', 'developer tools', 'channels', 'playbook'],
    route: '/playbooks',
  },
  {
    id: 'game-hub-puzzle-aggregator',
    title: {
      en: 'Game Hub puzzle aggregator',
      zh: 'Game Hub 益智游戏聚合器',
    },
    description: {
      en: 'A collection of classic puzzle games with accounts, leaderboards, and social sharing once the product direction is clearer.',
      zh: '经典益智游戏合集，等产品方向更清晰后再补登录、排行榜和社交分享。',
    },
    category: 'experiment',
    status: 'considering',
    votes: 24,
    voted: false,
    tags: ['game', 'experiment', 'puzzle', 'product'],
  },
  {
    id: 'rss-newsletter-archive',
    title: {
      en: 'RSS and newsletter archive',
      zh: 'RSS 与邮件归档',
    },
    description: {
      en: 'Make writing subscribable and give longer-form updates a durable archive.',
      zh: '让写作内容可以被订阅，也给长期更新一个稳定归档入口。',
    },
    category: 'writing',
    status: 'open',
    votes: 18,
    voted: false,
    tags: ['rss', 'newsletter', 'writing'],
    route: '/writing',
  },
];

export function getRoadmapDisplayItems(language: Language): RoadmapDisplayItem[] {
  return roadmapItems.map((item) => ({
    ...item,
    title: item.title[language],
    description: item.description[language],
    categoryLabel: roadmapCategoryLabels[item.category][language],
    statusLabel: roadmapStatusConfig[item.status][language],
    statusColor: roadmapStatusConfig[item.status].color,
  }));
}
