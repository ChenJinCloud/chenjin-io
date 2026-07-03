import type { KnowledgeItem } from '@/content/registry';

export type ChatIntent = 'roadmap' | 'project' | 'writing' | 'workbench' | 'service' | 'mutual' | 'general';

export interface ChatAction {
  label: string;
  route: string;
}

export interface ChatRouteResult {
  intent: ChatIntent;
  answer: string;
  recommendations: KnowledgeItem[];
  actions: ChatAction[];
}
