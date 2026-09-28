import type { Metadata } from 'next';
import WorkWithMeClient from './WorkWithMeClient';

export const metadata: Metadata = {
  title: '与我合作',
  description: '全站唯一的商业入口：增长系统诊断、分发/联盟系统搭建、AI 工作流审计与搭建。',
  alternates: { canonical: '/work-with-me' },
};

export default function Page() {
  return <WorkWithMeClient />;
}
