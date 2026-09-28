export interface Pick {
  id: string;
  title: { zh: string; en: string };
  url: string;
  source: string;
  date: string;
  tags: string[];
  whyItMatters: { zh: string; en: string };
}

export const picks: Pick[] = [];
