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

/** Small public projection: excludes article bodies, drafts and source notes. */
export interface ArticleCard {
  id: string;
  date: string;
  title: { zh: string; en: string };
  excerpt: { zh: string; en: string };
}
