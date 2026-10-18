import { redirect } from 'next/navigation';
import { siteConfig } from '@/features/site/config';
export default function WorkspacePage() { redirect(siteConfig.workspacePath); }
