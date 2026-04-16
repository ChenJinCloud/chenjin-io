import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ThemeToggle from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navigation = () => {
  const { t, language } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const isZh = language === 'zh';
  const [mobileOpen, setMobileOpen] = useState(false);

  const homeNavItems = [
    { href: '#about', label: t.nav.about },
    { href: '#works', label: t.nav.works },
    { href: '#journey', label: t.nav.journey },
    { href: '#contact', label: t.nav.contact },
  ];

  const pageNavItems = [
    { href: '/playbooks', label: isZh ? '方法手册' : 'Playbooks' },
    { href: '/blog', label: isZh ? '博客' : 'Blog' },
    { href: '/stack', label: isZh ? '技术栈' : 'Stack' },
    { href: '/work-with-me', label: isZh ? '合作' : 'Work with me' },
    { href: '/roadmap', label: isZh ? '路线图' : 'Roadmap' },
  ];

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 bg-background/70 backdrop-blur-xl border-b border-border/40"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-sm font-sans font-semibold tracking-[0.18em] uppercase text-foreground hover:text-accent transition-colors duration-200"
          >
            ChenJin
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {isHome && homeNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="relative px-3 py-1.5 rounded-full text-sm font-light text-muted-foreground hover:text-foreground hover:bg-accent/8 transition-all duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {pageNavItems.map((item) => {
                const active = location.pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={`relative px-3 py-1.5 rounded-full text-sm font-light transition-all duration-200 ${
                        active
                          ? 'text-foreground bg-accent/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-accent/8'
                      }`}
                    >
                      {item.label}
                      {active && (
                        <motion.span
                          layoutId="nav-active-underline"
                          className="absolute left-3 right-3 -bottom-0.5 h-px bg-accent"
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-foreground origin-center"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
                className="block w-5 h-px bg-foreground"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="block w-5 h-px bg-foreground origin-center"
              />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {isHome && homeNavItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleMobileLink}
                  className="text-2xl font-display font-light text-foreground"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-px bg-border my-2" />
              {pageNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={handleMobileLink}
                  className="text-lg font-light text-muted-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
