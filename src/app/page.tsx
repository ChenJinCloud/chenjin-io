import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { listPublicArticles } from '@/features/content/public.server';

export const metadata: Metadata = {
  title: '陈今｜AI 产品增长、Agent 工作流与个人知识系统',
  description: '陈今的公开工作索引：AI 产品增长、Agent 工作流、个人知识系统，以及正在形成的作品与写作。',
  alternates: { canonical: '/' },
};

export default function Page() {
  return <HomeClient featuredPosts={listPublicArticles(3)} />;
}
