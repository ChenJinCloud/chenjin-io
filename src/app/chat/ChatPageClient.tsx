'use client';

import PageLayout from '@/components/PageLayout';
import Heading from '@/components/Heading';
import ChatGateway from '@/features/chat/ChatGateway';

const ChatPageClient = () => {
  return (
    <PageLayout containerSize="narrow" back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <Heading className="mb-4 text-center">对话</Heading>
      <p className="mb-12 max-w-xl text-center text-sm text-muted-foreground mx-auto">
        目前是站内知识路由，还没有接入真实 LLM 或记忆——按你的问题匹配到站内最相关的入口。
        带记忆的版本在 <a href="/roadmap" className="text-accent underline underline-offset-4">计划池</a> 里。
      </p>
      <ChatGateway variant="hero" />
    </PageLayout>
  );
};

export default ChatPageClient;
