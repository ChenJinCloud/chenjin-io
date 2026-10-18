/** Public identity only. Never add account/session or company-private data here. */
export const publicProfile = {
  name: { zh: '陈今', en: 'Chen Jin' },
  positioning: {
    zh: 'AI 产品增长、Agent 工作流与个人知识系统',
    en: 'AI product growth, agent workflows and personal knowledge systems',
  },
  introduction: {
    zh: '把模糊的增长、内容、合作和 AI 工作流问题拆成可执行系统，用文档、工具和实作推进落地。',
    en: 'I turn ambiguous growth, content, collaboration and AI workflow problems into working systems through writing, tools and building.',
  },
  rotatingTopics: {
    zh: ['AI 产品增长', 'Agent 工作流', '个人知识系统'],
    en: ['AI product growth', 'Agent workflows', 'Personal knowledge systems'],
  },
  portrait: '/chen-jin-portrait.webp',
  email: 'jiaqichen6252@gmail.com',
  socialLinks: [
    { label: 'GitHub', channel: 'github', href: 'https://github.com/ChenJinCloud' },
    { label: 'X', channel: 'x', href: 'https://x.com/jinchen_ai' },
    { label: 'LinkedIn', channel: 'linkedin', href: 'https://www.linkedin.com/in/jiaqi-chen-b414582aa/' },
  ],
} as const;
