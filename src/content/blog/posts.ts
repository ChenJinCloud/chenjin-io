import aiConfidenceGround from './articles/ai-confidence-ground.md?raw';
import aiSelfInventory from './articles/ai-self-inventory.md?raw';
import amber from './articles/amber.md?raw';
import chasingNewTechAvoidance from './articles/chasing-new-tech-avoidance.md?raw';
import codeIsLeverageDeliveryIsAsset from './articles/code-is-leverage-delivery-is-asset.md?raw';
import dataDrivenProductOperations from './articles/data-driven-product-operations.md?raw';
import feltSense from './articles/felt-sense.md?raw';
import gallupAiHumanConsulting from './articles/gallup-ai-human-consulting.md?raw';
import highCohesionLowCouplingLifeSystem from './articles/high-cohesion-low-coupling-life-system.md?raw';
import honestCreationAiEra from './articles/honest-creation-ai-era.md?raw';
import keepTheBet from './articles/keep-the-bet.md?raw';
import mcpRebuildsAiWorkflow from './articles/mcp-rebuilds-ai-workflow.md?raw';
import personalDatabase from './articles/personal-database.md?raw';
import reconstruction from './articles/reconstruction.md?raw';
import smallDivergentCreation from './articles/small-divergent-creation.md?raw';
import stage from './articles/stage.md?raw';
import systematicPersonalInfluence from './articles/systematic-personal-influence.md?raw';
import voiceOutputThinkingWorkflow from './articles/voice-output-thinking-workflow.md?raw';
import wildGrass from './articles/wild-grass.md?raw';
import writeRealSelfWithAi from './articles/write-real-self-with-ai.md?raw';

export type BlogCategory = '精选' | 'AI-native' | '方法论' | '产品增长';

export interface BlogPost {
  id: string;
  title: string;
  sourceTitle: string;
  sourceAccount: '陈今AI' | 'MetaxisGrove' | '本站';
  sourceUrl?: string;
  sourceNote?: string;
  date: string;
  sortDate: string;
  readTime: string;
  category: BlogCategory;
  excerpt: string;
  featured?: boolean;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'gallup-ai-human-consulting',
    title: '我用AI读完了盖洛普报告，最后还是被真人咨询改变了。',
    sourceTitle: '我用AI读完了盖洛普报告，最后还是被真人咨询改变了。',
    sourceAccount: '本站',
    sourceNote: '本站首发稿。',
    date: '2026.06.15',
    sortDate: '2026-06-15',
    readTime: '8 分钟阅读',
    category: '精选',
    excerpt: '从一次盖洛普优势咨询出发，重新理解 AI 自我分析、真人反馈、默认反应链和工作系统设计之间的关系。',
    featured: true,
    content: gallupAiHumanConsulting,
  },
  {
    id: 'systematic-personal-influence',
    title: '如何系统化构建 IP 影响力（2025 上半年思考精华）',
    sourceTitle: '如何系统化构建 IP 影响力（2025 上半年思考精华）',
    sourceAccount: '陈今AI',
    sourceUrl: 'https://mp.weixin.qq.com/s/SgaDNFD4J9IU3WeEMtpd3A',
    date: '2026.02.03',
    sortDate: '2026-02-03',
    readTime: '18 分钟阅读',
    category: '精选',
    excerpt: '从中介、场域、定位到行动清单，整理一套更稳定的个人影响力建设方法。',
    featured: true,
    content: systematicPersonalInfluence,
  },
  {
    id: 'personal-database',
    title: '建议大家尽早开始搭建个人数据库',
    sourceTitle: '建议大家尽早开始搭建个人数据库',
    sourceAccount: '陈今AI',
    sourceUrl: 'https://mp.weixin.qq.com/s/1Y3OEVORoRXCf2tfSvTjDQ',
    date: '2025.02.20',
    sortDate: '2025-02-20',
    readTime: '5 分钟阅读',
    category: '精选',
    excerpt: '把碎片记录变成可复用的个人基础设施，降低信息过载和重复劳动。',
    featured: true,
    content: personalDatabase,
  },
  {
    id: 'honest-creation-ai-era',
    title: '如何抵抗AI时代的创作羞耻？',
    sourceTitle: '如何抵抗AI时代的创作羞耻？',
    sourceAccount: '陈今AI',
    sourceUrl: 'https://mp.weixin.qq.com/s/w9vzqQkxbZkz521zPghoQA',
    date: '2025.02.22',
    sortDate: '2025-02-22',
    readTime: '10 分钟阅读',
    category: '精选',
    excerpt: '重新判断原创性、工具边界和内容价值，减少使用 AI 创作时的自我怀疑。',
    featured: true,
    content: honestCreationAiEra,
  },
  {
    id: 'ai-confidence-ground',
    title: 'Vol.10 AI让我更强了，但我的信心却在消失',
    sourceTitle: 'Vol.10 AI让我更强了，但我的信心却在消失',
    sourceAccount: 'MetaxisGrove',
    sourceNote: '本地稿，待补公众号发布日期和原文链接。',
    date: '待补',
    sortDate: '2026-02-18',
    readTime: '8 分钟阅读',
    category: 'AI-native',
    excerpt: '当 AI 成为能力地基，自我效能感也可能被工具外包；这篇文章拆解其中的心理结构。',
    featured: true,
    content: aiConfidenceGround,
  },
  {
    id: 'felt-sense',
    title: 'Vol.1 实感',
    sourceTitle: 'Vol.1 实感',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/Pcb70RAThf3CHvfmSG1UyA',
    date: '2026.01.25',
    sortDate: '2026-01-25',
    readTime: '13 分钟阅读',
    category: '方法论',
    excerpt: '从虚无感、见证欲和发布焦虑出发，重新理解创作如何帮助人确认自己的存在。',
    content: feltSense,
  },
  {
    id: 'wild-grass',
    title: 'Vol.2 野草',
    sourceTitle: 'Vol.2 野草',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/9BZXn3AilV14GR4Z79wGsw',
    date: '2026.01.26',
    sortDate: '2026-01-26',
    readTime: '13 分钟阅读',
    category: '方法论',
    excerpt: '从过度求解和逻辑牢笼中松动出来，允许行动像野草一样先长出来。',
    content: wildGrass,
  },
  {
    id: 'stage',
    title: 'Vol.3 舞台',
    sourceTitle: 'Vol.3 舞台',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/bting6Xk73ecze0yFkCV4A',
    date: '2026.01.27',
    sortDate: '2026-01-27',
    readTime: '12 分钟阅读',
    category: '方法论',
    excerpt: '把表达从自我确认推向关系、交换和公共舞台，重新理解被看见的意义。',
    content: stage,
  },
  {
    id: 'amber',
    title: 'Vol.4 琥珀',
    sourceTitle: 'Vol.4 琥珀',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/bpzjHpnJVI5TMMH0U8bhnA',
    date: '2026.01.28',
    sortDate: '2026-01-28',
    readTime: '11 分钟阅读',
    category: '方法论',
    excerpt: '在作品与产品之间重新判断创作价值，让真实表达穿过时间沉淀成资产。',
    content: amber,
  },
  {
    id: 'reconstruction',
    title: 'Vol.5 重构',
    sourceTitle: 'Vol.5 重构',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/0jbfukHelClzzk21doSWHQ',
    date: '2026.01.31',
    sortDate: '2026-01-31',
    readTime: '10 分钟阅读',
    category: '方法论',
    excerpt: '把经验、作品和自我理解重新组织成可持续更新的内在系统。',
    content: reconstruction,
  },
  {
    id: 'small-divergent-creation',
    title: 'Vol.7 微小的、发散性的创造是一种自救',
    sourceTitle: 'Vol.7 微小的、发散性的创造是一种自救',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/B94ZEUSoqxvfL84mc_SH_A',
    date: '2026.02.06',
    sortDate: '2026-02-06',
    readTime: '4 分钟阅读',
    category: '方法论',
    excerpt: '用微小、发散、低压力的创造，给自己保留恢复和试探世界的入口。',
    content: smallDivergentCreation,
  },
  {
    id: 'keep-the-bet',
    title: 'Vol.9 拒绝平庸的唯一解：保持赌性',
    sourceTitle: 'Vol.9 拒绝平庸的唯一解：保持赌性',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/_iQxON9aK5o3jVdpXEzZJQ',
    date: '2026.02.16',
    sortDate: '2026-02-16',
    readTime: '6 分钟阅读',
    category: '方法论',
    excerpt: '用持续下注而非安全退缩对抗平庸，把选择权重新拿回自己手里。',
    content: keepTheBet,
  },
  {
    id: 'high-cohesion-low-coupling-life-system',
    title: '高内聚低耦合：人生哲学与通用方法论',
    sourceTitle: '高内聚低耦合：人生哲学与通用方法论',
    sourceAccount: '陈今AI',
    sourceUrl: 'https://mp.weixin.qq.com/s/qyYjlXqb5OiktCZ8C4_w7g',
    date: '2024.11.02',
    sortDate: '2024-11-02',
    readTime: '12 分钟阅读',
    category: '方法论',
    excerpt: '把工程里的系统设计原则迁移到人生管理，减少混乱和无意义耦合。',
    content: highCohesionLowCouplingLifeSystem,
  },
  {
    id: 'mcp-rebuilds-ai-workflow',
    title: 'Cursor Meetup广州站速通笔记——MCP重构AI工作流，实现人机共生开发',
    sourceTitle: 'Cursor Meetup广州站速通笔记——MCP重构AI工作流，实现人机共生开发',
    sourceAccount: '陈今AI',
    sourceUrl: 'https://mp.weixin.qq.com/s/_1u5_DCh_rtFvMQHlkaktQ',
    date: '2025.07.20',
    sortDate: '2025-07-20',
    readTime: '25 分钟阅读',
    category: 'AI-native',
    excerpt: '从 Meetup 现场分享里梳理 Cursor、MCP 和人机共生开发的真实工作流变化。',
    content: mcpRebuildsAiWorkflow,
  },
  {
    id: 'ai-self-inventory',
    title: '80% 的人看了也不做的AI+自我盘点方法。（附实操）',
    sourceTitle: '80% 的人看了也不做的AI+自我盘点方法。（附实操）',
    sourceAccount: '陈今AI',
    sourceUrl: 'https://mp.weixin.qq.com/s/5unhZJQRyuC1RJiVPapcXQ',
    date: '2025.03.04',
    sortDate: '2025-03-04',
    readTime: '30 分钟阅读',
    category: 'AI-native',
    excerpt: '把 AI 用成自我理解和决策辅助工具，而不是停留在“看了很多方法但不行动”。',
    content: aiSelfInventory,
  },
  {
    id: 'code-is-leverage-delivery-is-asset',
    title: '代码只是杠杆，交付才是资产',
    sourceTitle: '代码只是杠杆，交付才是资产',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/vkVZ0ghIF6e-PxkKiVjiDw',
    date: '2026.02.17',
    sortDate: '2026-02-17',
    readTime: '5 分钟阅读',
    category: '方法论',
    excerpt: '把“会写代码”和“能交付资产”分开看，重新理解 AI 编程时代的价值位置。',
    content: codeIsLeverageDeliveryIsAsset,
  },
  {
    id: 'chasing-new-tech-avoidance',
    title: 'Vol.8 追逐新技术是一种逃避行为',
    sourceTitle: 'Vol.8 追逐新技术是一种逃避行为',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/2RPUzm9XMAxSdm7fMIQ3cQ',
    date: '2026.02.15',
    sortDate: '2026-02-15',
    readTime: '7 分钟阅读',
    category: '方法论',
    excerpt: '识别技术焦虑背后的行动逃避，把注意力从工具切回真实问题。',
    content: chasingNewTechAvoidance,
  },
  {
    id: 'data-driven-product-operations',
    title: '如何从数据出发，做好产品全周期运营',
    sourceTitle: '如何从数据出发，做好产品全周期运营',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/_3lmHyVoVTCROIwlqMmFeA',
    date: '2025.07.27',
    sortDate: '2025-07-27',
    readTime: '35 分钟阅读',
    category: '产品增长',
    excerpt: '从数据指标、生命周期和运营动作出发，建立更完整的产品增长判断框架。',
    content: dataDrivenProductOperations,
  },
  {
    id: 'write-real-self-with-ai',
    title: '如何借助AI无痛写出真实的自己',
    sourceTitle: '如何借助AI无痛写出真实的自己',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/J95083XCeUoQEx09IM08Jg',
    date: '2026.02.15',
    sortDate: '2026-02-15',
    readTime: '8 分钟阅读',
    category: 'AI-native',
    excerpt: '用 AI 辅助表达，但不让表达变空、变假、变成模板。',
    content: writeRealSelfWithAi,
  },
  {
    id: 'voice-output-thinking-workflow',
    title: '我发现自己完全低估了语音输出（张嘴说）的价值',
    sourceTitle: '我发现自己完全低估了语音输出（张嘴说）的价值',
    sourceAccount: 'MetaxisGrove',
    sourceUrl: 'https://mp.weixin.qq.com/s/gBz6KwkBR4ytG7P2Ym-Fcg',
    date: '2025.08.17',
    sortDate: '2025-08-17',
    readTime: '10 分钟阅读',
    category: 'AI-native',
    excerpt: '把语音输出作为低门槛的思考、整理和表达工作流，而不只是输入方式。',
    content: voiceOutputThinkingWorkflow,
  },
];

export const featuredBlogPosts = blogPosts.filter((post) => post.featured);

export const blogCategories: BlogCategory[] = ['精选', 'AI-native', '方法论', '产品增长'];

export function getBlogPost(id?: string) {
  return blogPosts.find((post) => post.id === id);
}
