import type { Metadata } from 'next';
import ChatPageClient from './ChatPageClient';

export const metadata: Metadata = {
  title: '对话',
  description: '和陈今的站内知识库对话，快速定位到最相关的写作、项目或合作入口。',
  alternates: { canonical: '/chat' },
};

export default function Page() {
  return <ChatPageClient />;
}
