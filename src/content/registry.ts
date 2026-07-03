import type { Language } from '@/lib/i18n';
import { blogPosts } from '@/content/blog/posts';
import { projects } from '@/content/projects';
import { roadmapItems, roadmapStatusConfig } from '@/features/roadmap/roadmapData';

export type KnowledgeItemType = 'writing' | 'project' | 'playbook' | 'workbench' | 'roadmap' | 'service' | 'recommendation';

export interface KnowledgeItem {
  id: string;
  type: KnowledgeItemType;
  title: string;
  excerpt: string;
  route: string;
  tags: string[];
  priority: number;
  status?: string;
}

const staticKnowledge = [
  {
    id: 'about-chenjin',
    type: 'recommendation' as const,
    route: '/#about',
    priority: 9,
    tags: ['about', 'chen jin', '认识陈今', '了解你', 'who you are', 'personal story', 'background', 'mutual context'],
    title: {
      en: 'Start by understanding Chen Jin',
      zh: '先认识陈今',
    },
    excerpt: {
      en: 'A quick path into who I am, how I work across AI, growth, writing, systems, and why this site exists.',
      zh: '从我是谁、如何在 AI/增长/写作/系统之间工作、以及这个网站为什么存在开始。',
    },
  },
  {
    id: 'workbench-home',
    type: 'workbench' as const,
    route: '/workbench',
    priority: 7,
    tags: ['workbench', 'stack', 'tools', 'ai tools', 'backend', 'shipany', 'idoubi', 'insforge'],
    title: {
      en: 'Workbench: tools, stacks, and backend paths',
      zh: '工作台：工具、技术栈与后端路径',
    },
    excerpt: {
      en: 'Where I organize AI tools, website builders, partner references, backend paths, and practical building notes.',
      zh: '整理 AI 工具、建站器、合作伙伴参考、后端路径和实操构建笔记的入口。',
    },
  },
  {
    id: 'work-with-me',
    type: 'service' as const,
    route: '/work-with-me',
    priority: 8,
    tags: ['consulting', 'growth', 'collaboration', 'contact', 'ai career', 'product growth'],
    title: {
      en: 'Work with me',
      zh: '合作与咨询',
    },
    excerpt: {
      en: 'For 1:1 consulting, AI career transitions, product growth, content systems, and selected collaborations.',
      zh: '适合 1v1 咨询、AI 转型、产品增长、内容系统和精选合作。',
    },
  },
  {
    id: 'gingiris-growth-reference',
    type: 'recommendation' as const,
    route: '/#contact',
    priority: 5,
    tags: ['生姜iris', 'gingiris', 'growth consulting', 'recommendation', 'partner'],
    title: {
      en: 'GingIris / growth consulting reference',
      zh: '生姜 Iris / GingIris 增长咨询参考',
    },
    excerpt: {
      en: 'One of the recommendation and partner references that will be expanded with story, service context, and links.',
      zh: '推荐与伙伴参考之一，后续会补齐 story、服务语境和链接。',
    },
  },
  {
    id: 'youmind-network-reference',
    type: 'workbench' as const,
    route: '/workbench',
    priority: 4,
    tags: ['youmind', 'prompts', 'skills', 'content network', 'sub-sites'],
    title: {
      en: 'YouMind-style sub-site network reference',
      zh: 'YouMind 式子站与内容网络参考',
    },
    excerpt: {
      en: 'A reference model for turning one personal site into a carrier for sub-sites, prompt libraries, projects, and public assets.',
      zh: '参考它如何把主站变成子站、提示词库、项目和公共资产的载体。',
    },
  },
];

export function getKnowledgeRegistry(language: Language): KnowledgeItem[] {
  const staticItems = staticKnowledge.map((item) => ({
    id: item.id,
    type: item.type,
    title: item.title[language],
    excerpt: item.excerpt[language],
    route: item.route,
    tags: item.tags,
    priority: item.priority,
  }));

  const projectItems = projects.map((project) => ({
    id: `project:${project.id}`,
    type: 'project' as const,
    title: project.title[language],
    excerpt: project.excerpt[language],
    route: project.route,
    tags: project.tags,
    priority: project.id === 'chenjin-io' ? 8 : 6,
    status: project.status[language],
  }));

  const writingItems = blogPosts.map((post) => ({
    id: `writing:${post.id}`,
    type: 'writing' as const,
    title: post.title,
    excerpt: post.excerpt,
    route: `/writing/${post.id}`,
    tags: [post.category, post.sourceAccount, post.id],
    priority: post.featured ? 6 : 3,
    status: post.date,
  }));

  const roadmapRegistryItems = roadmapItems.map((item) => ({
    id: `roadmap:${item.id}`,
    type: 'roadmap' as const,
    title: item.title[language],
    excerpt: item.description[language],
    route: item.route ?? '/roadmap',
    tags: item.tags,
    priority: item.status === 'building' ? 8 : 5,
    status: roadmapStatusConfig[item.status][language],
  }));

  return [...staticItems, ...projectItems, ...writingItems, ...roadmapRegistryItems];
}
