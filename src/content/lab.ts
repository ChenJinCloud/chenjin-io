// Self-built, runnable tools — the "工具" species in the four-species model.
// Migrated from Stack.tsx's `myTools` array (status: 'live'); third-party tools
// stayed at /resources/stack.

export interface LabTool {
  slug: string;
  name: string;
  url: string;
  desc: { zh: string; en: string };
  status: 'live' | 'beta' | 'coming';
}

export const labTools: LabTool[] = [
  {
    slug: 'desktop-sticky-card',
    name: 'Desktop Sticky Card',
    url: 'https://github.com/ChenJinCloud/desktop-sticky-card',
    desc: {
      zh: '桌面置顶任务卡片，和 Claude Code 联动写入待办。',
      en: 'Always-on-top desktop task card, syncs TODOs from Claude Code.',
    },
    status: 'live',
  },
];
