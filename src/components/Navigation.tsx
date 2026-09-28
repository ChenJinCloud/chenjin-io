import ThemeToggle from '@/components/ThemeToggle';
import LanguageToggle from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useLocation } from 'react-router-dom';

const pageNavItems = [
  { href: '/writing', label: { zh: '写作', en: 'Writing' }, aliases: ['/blog'] },
  { href: '/projects', label: { zh: '项目', en: 'Projects' } },
  { href: '/workbench', label: { zh: '工具清单', en: 'Workbench' }, aliases: ['/stack'] },
  { href: '/playbooks', label: { zh: '方法手册', en: 'Playbooks' } },
];

const Navigation = () => {
  const { pathname } = useLocation();
  const { language } = useLanguage();
  const isHome = pathname === '/';

  const isActive = (item: (typeof pageNavItems)[number]) =>
    pathname === item.href ||
    pathname.startsWith(`${item.href}/`) ||
    item.aliases?.some((alias) => pathname === alias || pathname.startsWith(`${alias}/`));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-10">
        <Link
          to="/"
          className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:text-accent"
        >
          Chen Jin
        </Link>

        <div className="flex items-center gap-1 md:gap-4">
          <nav aria-label="网站导航" className="flex items-center gap-1">
            {isHome && (
              <>
                <a href="#now" className="px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:px-3">现在</a>
                <a href="#work" className="px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:px-3">作品</a>
                <a href="#writing" className="hidden px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-block md:px-3">写作</a>
                <a href="#contact" className="px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:px-3">联系</a>
                <span className="hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
              </>
            )}
            {!isHome && (
              <Link to="/" className="px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:px-3">
                {language === 'zh' ? '首页' : 'Home'}
              </Link>
            )}
            {pageNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`hidden px-2.5 py-2 text-sm transition-colors hover:text-foreground sm:inline-block md:px-3 ${
                  isActive(item) ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                {item.label[language]}
              </Link>
            ))}
            {!isHome && (
              <a href="/#contact" className="px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:px-3">
                {language === 'zh' ? '联系' : 'Contact'}
              </a>
            )}
          </nav>
          <span className="hidden h-5 w-px bg-border sm:block" aria-hidden="true" />
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Navigation;
