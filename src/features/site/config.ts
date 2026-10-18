export const siteConfig = {
  canonicalOrigin: 'https://chenjin.io',
  workspacePath: '/app/chat',
  loginPath: '/login',
  /** Navigation links are discovery links; these are the two conversion intents. */
  actions: {
    conversation: { href: '/chat', label: { zh: '对话', en: 'Chat' } },
    contact: { href: '/#contact', label: { zh: '联系', en: 'Contact' } },
  },
} as const;

export const pageNavItems = [
  { href: '/writing', label: { zh: '写作', en: 'Writing' } },
  { href: '/projects', label: { zh: '项目', en: 'Projects' } },
  { href: '/resources', label: { zh: '资源', en: 'Resources' } },
  { href: '/work-with-me', label: { zh: '合作', en: 'Work with me' } },
  { href: '/about', label: { zh: '关于', en: 'About' } },
] as const;
