import type { Language } from '@/lib/i18n';
import type { KnowledgeItem } from '@/content/registry';
import type { ChatAction, ChatIntent, ChatRouteResult } from './chatTypes';

const intentKeywords: Record<ChatIntent, string[]> = {
  roadmap: ['roadmap', '计划', '路线图', '需求', '想看', '输出', '请求', 'request', 'vote', 'build next', '接下来'],
  project: ['project', 'portfolio', '作品', '项目', '做过', '即刻', 'jike', '案例', 'built', 'ship'],
  writing: ['writing', 'blog', 'article', '文章', '博客', '写作', '认知', '方法论', 'ai-native', '读书', '书架', '内容', '知识', '经验'],
  workbench: ['workbench', 'stack', 'tool', '工具', '技术栈', '后端', 'backend', 'shipany', 'idoubi', 'youmind', 'llm', '个人系统', '知识库', '自动化', '工作流', 'ai coding', '编程', '开发'],
  service: ['contact', 'work with me', 'consulting', '合作', '咨询', '联系', '增长', 'career', '转行', '文社科', 'ai 行业', '能力路径', '全球化', '海外用户', 'global growth', 'iris', 'gingiris'],
  mutual: ['认识你', '了解你', '你是谁', '介绍你自己', '介绍自己', '我的情况', '我的背景', '没有明确问题', '没什么痛点', '共鸣', '聊聊', 'meet you', 'who you are', 'about you', 'my context', 'my background', 'resonate', 'no specific problem'],
  general: [],
};

const intentTypeBoost: Record<ChatIntent, KnowledgeItem['type'][]> = {
  roadmap: ['roadmap'],
  project: ['project'],
  writing: ['writing', 'playbook'],
  workbench: ['workbench'],
  service: ['service', 'recommendation'],
  mutual: ['recommendation', 'service', 'writing'],
  general: [],
};

function normalize(value: string) {
  return value.toLowerCase().replace(/\s+/g, ' ').trim();
}

function detectIntent(message: string): ChatIntent {
  const normalized = normalize(message);
  const ranked = (Object.keys(intentKeywords) as ChatIntent[])
    .filter((intent) => intent !== 'general')
    .map((intent) => ({
      intent,
      score: intentKeywords[intent].reduce((sum, keyword) => (
        normalized.includes(normalize(keyword)) ? sum + 1 : sum
      ), 0),
    }))
    .sort((a, b) => b.score - a.score);

  return ranked[0]?.score ? ranked[0].intent : 'general';
}

function scoreItem(item: KnowledgeItem, message: string, intent: ChatIntent) {
  const haystack = normalize(`${item.title} ${item.excerpt} ${item.tags.join(' ')} ${item.status ?? ''}`);
  const queryParts = normalize(message).split(/[\s,，。.!?？、/]+/).filter(Boolean);
  const queryScore = queryParts.reduce((sum, part) => (
    part.length > 1 && haystack.includes(part) ? sum + 3 : sum
  ), 0);
  const intentScore = intentTypeBoost[intent].includes(item.type) ? 8 : 0;
  const exactIntentScore = intentKeywords[intent].some((keyword) => haystack.includes(normalize(keyword))) ? 3 : 0;

  return queryScore + intentScore + exactIntentScore + item.priority;
}

function buildActions(intent: ChatIntent, language: Language): ChatAction[] {
  const isZh = language === 'zh';
  const labels = {
    projects: isZh ? '看作品集' : 'View projects',
    writing: isZh ? '读文章' : 'Read writing',
    roadmap: isZh ? '看计划池' : 'Open roadmap',
    workbench: isZh ? '打开工作台' : 'Open workbench',
    contact: isZh ? '联系合作' : 'Work with me',
    about: isZh ? '先认识我' : 'Start with about',
  };

  const shared = [{ label: labels.roadmap, route: '/roadmap' }];

  if (intent === 'project') return [{ label: labels.projects, route: '/projects' }, { label: labels.contact, route: '/work-with-me' }];
  if (intent === 'writing') return [{ label: labels.writing, route: '/writing' }, ...shared];
  if (intent === 'workbench') return [{ label: labels.workbench, route: '/workbench' }, ...shared];
  if (intent === 'service') return [{ label: labels.contact, route: '/work-with-me' }, { label: labels.projects, route: '/projects' }];
  if (intent === 'mutual') return [{ label: labels.about, route: '/#about' }, { label: labels.writing, route: '/writing' }, { label: labels.contact, route: '/work-with-me' }];
  if (intent === 'roadmap') return [{ label: labels.roadmap, route: '/roadmap' }, { label: labels.workbench, route: '/workbench' }];
  return [{ label: labels.projects, route: '/projects' }, { label: labels.writing, route: '/writing' }, ...shared];
}

function buildAnswer(intent: ChatIntent, language: Language, count: number) {
  const isZh = language === 'zh';

  if (isZh) {
    const prefix = '我现在先用站内知识库做本地路由，还没有接真实 LLM。';
    const suffix = count > 0 ? '下面这些入口可能最相关。' : '我还没有找到足够匹配的内容，可以先从作品、写作或计划池进入。';
    const intentText: Record<ChatIntent, string> = {
      roadmap: '你问的是计划、需求或想让我输出什么，最适合去计划池继续。',
      project: '你问的是作品或案例，先从项目入口看已经公开和正在构建的东西。',
      writing: '你问的是文章、方法论或认知内容，写作归档会更合适。',
      workbench: '你问的是工具、技术栈或后端路径，工作台会集中整理这些内容。',
      service: '你问的是合作、咨询或具体人/服务连接，合作入口更直接。',
      mutual: '你现在不是带着明确痛点来，更像是想先建立彼此理解。可以从认识我开始，也可以先讲讲你的背景、状态和好奇点。',
      general: '我会先把你的问题映射到站内最接近的内容。',
    };
    return `${prefix}${intentText[intent]}${suffix}`;
  }

  const prefix = 'This is currently a local site-knowledge router, not a live LLM backend yet. ';
  const suffix = count > 0 ? 'These are the most relevant starting points.' : 'I could not find a strong match yet, so start with projects, writing, or the roadmap.';
  const intentText: Record<ChatIntent, string> = {
    roadmap: 'Your question sounds like a plan, request, or future-output prompt. ',
    project: 'Your question sounds project- or portfolio-oriented. ',
    writing: 'Your question sounds writing-, method-, or cognition-oriented. ',
    workbench: 'Your question sounds tool-, stack-, or backend-path oriented. ',
    service: 'Your question sounds collaboration- or consulting-oriented. ',
    mutual: 'You may not have a specific problem yet; this is more about mutual context. Start with who I am, then share your background, current state, and what you are curious about. ',
    general: 'I mapped your question to the closest public material on the site. ',
  };
  return `${prefix}${intentText[intent]}${suffix}`;
}

export function routeChatMessage(message: string, registry: KnowledgeItem[], language: Language): ChatRouteResult {
  const intent = detectIntent(message);
  const recommendations = registry
    .map((item) => ({ item, score: scoreItem(item, message, intent) }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ item }) => item);

  return {
    intent,
    answer: buildAnswer(intent, language, recommendations.length),
    recommendations,
    actions: buildActions(intent, language),
  };
}
