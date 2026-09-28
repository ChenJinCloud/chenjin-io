import type { Metadata } from 'next';
import WritingClient from './WritingClient';

export const metadata: Metadata = {
  title: '写作',
  description: '陈今关于 AI 产品增长、Agent 工作流、个人知识系统与真实实践的文章。',
  alternates: { canonical: '/writing' },
};

export default function Page() {
  return <WritingClient />;
}
