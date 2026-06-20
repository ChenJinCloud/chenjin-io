export type ReadingNoteKind = '读书笔记' | '摘录' | '读后判断';

export interface ReadingNote {
  id: string;
  title: string;
  bookTitle: string;
  author?: string;
  coverImage?: string;
  coverAlt?: string;
  date: string;
  kind: ReadingNoteKind;
  excerpt: string;
}

export const readingNotes: ReadingNote[] = [];
