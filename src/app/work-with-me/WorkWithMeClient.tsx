'use client';

import PageLayout from '@/components/PageLayout';
import Heading from '@/components/Heading';
import { motion } from 'framer-motion';
import { ExternalLink, Mail, MessageCircle } from 'lucide-react';
import { trackOutboundClick } from '@/lib/analytics';

const mvps = [
  {
    title: 'Growth System Diagnosis',
    subtitle: '增长系统诊断',
    desc: '对当前增长系统、证据、渠道与关系链路做结构化诊断——先看清问题地图，再谈优先级和下一步系统设计。',
  },
  {
    title: 'Distribution / Affiliate System',
    subtitle: '分发 / 联盟系统搭建',
    desc: '围绕发布、合作伙伴、联盟与可维护分发机制搭系统，交付可运行的分发与伙伴激活框架。',
  },
  {
    title: 'AI Workflow Audit & Build',
    subtitle: 'AI 工作流审计与搭建',
    desc: '审计高摩擦工作流，并将其转化为可运行的 AI 自动化——交付优先级清单、工作流原型与维护方式。',
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
        目前有三个在验证边界的方向，定价面谈，会随实际交付经验持续调整。
      </motion.p>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-xl font-medium text-foreground">合作方向</h2>
        <div className="grid gap-4">
          {mvps.map((mvp) => (
            <div key={mvp.title} className="rounded-lg border border-border p-6 transition-colors hover:border-foreground/30">
              <div className="mb-2 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display text-lg font-medium text-foreground">{mvp.title}</h3>
                <span className="text-sm text-muted-foreground">{mvp.subtitle}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{mvp.desc}</p>
              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-accent">面谈定价</p>
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
