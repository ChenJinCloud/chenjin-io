import type { Language } from '@/lib/i18n';

export type LocalizedText = Record<Language, string>;

export type RoadmapStatus = 'open' | 'considering' | 'planned' | 'building' | 'shipped';
export type RoadmapFilter = 'all' | RoadmapStatus;
export type RoadmapCategory = 'build' | 'writing' | 'playbook' | 'experiment' | 'request';

export interface RoadmapItem {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  category: RoadmapCategory;
  status: RoadmapStatus;
  votes: number;
  voted: boolean;
  tags: string[];
  route?: string;
}

export interface RoadmapDisplayItem {
  id: string;
  title: string;
  description: string;
  category: RoadmapCategory;
  categoryLabel: string;
  status: RoadmapStatus;
  statusLabel: string;
  statusColor: string;
  votes: number;
  voted: boolean;
  tags: string[];
  route?: string;
}
