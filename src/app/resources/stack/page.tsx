import type { Metadata } from 'next';
import StackClient from './StackClient';

export const metadata: Metadata = {
  title: '工具清单',
  description: '不是工具榜单，而是陈今如何构建、增长、分发、管理基础设施的个人操作系统。',
  alternates: { canonical: '/resources/stack' },
};

export default function Page() {
  return <StackClient />;
}
