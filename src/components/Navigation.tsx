'use client';

import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { pageNavItems, siteConfig } from '@/features/site/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname() ?? '/';
  const { language } = useLanguage();
  const [open, setOpen] = useState(false);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  const links = pageNavItems.map((item) => (
    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}
      aria-current={isActive(item.href) ? 'page' : undefined}
      className={`px-3 py-2 text-sm hover:text-foreground ${isActive(item.href) ? 'text-foreground' : 'text-muted-foreground'}`}>
      {item.label[language]}
    </Link>
  ));

  return <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
    <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
      <Link href="/" className="font-sans text-sm font-semibold uppercase tracking-[0.18em] hover:text-accent">Chen Jin</Link>
      <div className="flex items-center gap-1 md:gap-4">
        <nav aria-label="网站导航" className="hidden items-center gap-1 lg:flex">{links}</nav>
        <Link href={siteConfig.actions.contact.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground">
          {siteConfig.actions.contact.label[language]}
        </Link>
        <LanguageToggle /><ThemeToggle />
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <button className="grid h-11 w-11 place-items-center lg:hidden" aria-label={language === 'zh' ? '打开菜单' : 'Open menu'}>
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>
          <SheetContent>
            <SheetTitle>{language === 'zh' ? '网站导航' : 'Navigation'}</SheetTitle>
            <nav className="mt-8 flex flex-col gap-3" aria-label="手机导航">
              <Link href="/" onClick={() => setOpen(false)} className="px-3 py-2 text-sm">{language === 'zh' ? '首页' : 'Home'}</Link>
              {links}
              <Link href={siteConfig.actions.conversation.href} onClick={() => setOpen(false)} className="px-3 py-2 text-sm">
                {siteConfig.actions.conversation.label[language]}
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  </header>;
}
