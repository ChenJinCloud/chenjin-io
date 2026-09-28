'use client';

import PageLayout from '@/components/PageLayout';
import Heading from '@/components/Heading';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, MessageCircle } from 'lucide-react';
import { trackOutboundClick } from '@/lib/analytics';

const offers = [
  {
    title: '咨询服务',
    price: '¥199',
    unit: '/ 45min–1h',
    desc: '一对一交流，聊 AI 产品增长、Launch 打法、个人从 0 到 1 转型或 AI 工作流搭建的具体问题。',
  },
  {
    title: '产品推广商单',
    price: '¥500',
    unit: '/ 条',
    desc: '在站内内容或社媒渠道为你的产品/服务做一条推广，会先了解产品再决定是否合适、如何呈现。',
  },
  {
    title: '增长调研报告（成品）',
    price: '¥299',
    unit: '/ 份',
    desc: '已完成的调研报告，覆盖特定领域、产品或赛道的增长打法与信号梳理。',
  },
  {
    title: '增长调研报告（定制）',
    price: '¥599',
    unit: '/ 份',
    desc: '按你的具体产品或问题定制调研，交付结构化的问题地图与可执行的下一步建议。',
  },
];

const freeOffers = [
  {
    title: 'Global Growth OS',
    desc: '正在构建的知识与方法系统，现阶段免费开放交流。',
  },
  {
    title: '经验分享',
    desc: 'AI 产品增长、Launch 操盘、个人品牌搭建的经验交流，现阶段免费。',
  },
];

const WorkWithMeClient = () => {
  return (
    <PageLayout back={{ to: '/', label: { zh: '返回首页', en: 'Back to Home' } }}>
      <Heading className="mb-6">与我合作</Heading>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-16 max-w-2xl text-muted-foreground"
      >
        这是全站唯一的商业入口。内容页不会散落“预约咨询”的按钮——想合作，从这里开始。
        以下是目前作为起步阶段的定价，会随实际交付经验持续调整。
      </motion.p>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-10"
      >
        <h2 className="mb-6 text-xl font-medium text-foreground">服务与定价</h2>
        <div className="grid gap-4">
          {offers.map((offer) => (
            <div key={offer.title} className="rounded-lg border border-border p-6 transition-colors hover:border-foreground/30">
              <div className="mb-2 flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-medium text-foreground">{offer.title}</h3>
                <span className="whitespace-nowrap font-display text-lg text-accent">
                  {offer.price}
                  <span className="ml-1 text-sm text-muted-foreground">{offer.unit}</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{offer.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-xl font-medium text-foreground">现阶段免费</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {freeOffers.map((offer) => (
            <div key={offer.title} className="rounded-lg border border-dashed border-border p-6">
              <h3 className="mb-1 font-medium text-foreground">{offer.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{offer.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="mb-6 text-xl font-medium text-foreground">联系我</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="mailto:jiaqichen6252@gmail.com"
            onClick={() => trackOutboundClick('mailto:jiaqichen6252@gmail.com', { source: 'work_with_me' })}
            className="flex items-center justify-between rounded-lg border border-border p-6 transition-colors hover:border-foreground/30"
          >
            <div>
              <h3 className="mb-1 font-medium text-foreground">邮箱</h3>
              <p className="text-sm text-muted-foreground">jiaqichen6252@gmail.com</p>
            </div>
            <Mail className="h-4 w-4 text-muted-foreground" />
          </a>
          <div className="flex items-center justify-between rounded-lg border border-border p-6">
            <div>
              <h3 className="mb-1 font-medium text-foreground">微信</h3>
              <p className="text-sm text-muted-foreground">添加微信交流</p>
            </div>
            <MessageCircle className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>

        <div className="mt-6 rounded-lg border border-border bg-muted/20 p-6">
          <p className="text-sm text-muted-foreground">
            联系时简短说一下你是谁、想做什么、预期时间线——能帮我更快给出有用的回应。
          </p>
        </div>

        <a
          href="https://www.linkedin.com/in/jiaqi-chen-b414582aa/"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackOutboundClick('https://www.linkedin.com/in/jiaqi-chen-b414582aa/', { source: 'work_with_me', channel: 'linkedin' })}
          className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          LinkedIn
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </motion.section>
    </PageLayout>
  );
};

export default WorkWithMeClient;
