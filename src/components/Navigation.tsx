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
        className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8"
      >
        <nav className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center gap-4">
          {/* Left — logo (outside capsule) */}
          <Link
            to="/"
            className="text-sm font-sans font-medium tracking-[0.16em] uppercase text-foreground/80 hover:text-foreground transition-colors duration-200"
          >
            ChenJin
          </Link>

          {/* Center — floating capsule with nav links */}
          <div className="hidden md:flex justify-center">
            <ul className="flex items-center gap-0.5 px-2 py-1.5 rounded-full bg-background/60 backdrop-blur-xl border border-border/50 shadow-[0_2px_24px_-8px_hsl(var(--foreground)/0.12)]">
              {isHome && homeNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block px-3.5 py-1.5 rounded-full text-[13px] font-light text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {pageNavItems.map((item) => {
                const active = location.pathname === item.href;
                return (
                  <li key={item.href} className="relative">
                    {active && (
                      <motion.span
                        layoutId="nav-active-pill"
                        className="absolute inset-0 rounded-full bg-accent/12"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    <Link
                      to={item.href}
                      className={`relative block px-3.5 py-1.5 rounded-full text-[13px] font-light transition-colors duration-200 ${
                        active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right — toggles (outside capsule) + mobile hamburger */}
          <div className="flex items-center gap-1 justify-end">
            <div className="hidden md:flex items-center gap-0.5 px-1.5 py-1 rounded-full bg-background/60 backdrop-blur-xl border border-border/50 shadow-[0_2px_24px_-8px_hsl(var(--foreground)/0.12)]">
              <ThemeToggle />
              <LanguageToggle />
            </div>

            {/* Hamburger button — mobile only */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2 rounded-full bg-background/60 backdrop-blur-xl border border-border/50"
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
