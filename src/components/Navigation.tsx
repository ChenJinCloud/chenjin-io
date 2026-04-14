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
    { href: '/tools', label: isZh ? '工具' : 'Tools' },
    { href: '/sources', label: isZh ? '信息源' : 'Sources' },
    { href: '/tutorials', label: isZh ? '教程' : 'Tutorials' },
    { href: '/blog', label: isZh ? '博客' : 'Blog' },
    { href: '/social', label: isZh ? '社媒' : 'Social' },
    { href: '/support', label: isZh ? '支持' : 'Support' },
    { href: '/roadmap', label: isZh ? '路线图' : 'Roadmap' },
  ];

  const handleMobileLink = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-6 bg-background/80 backdrop-blur-md"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-sm font-sans font-medium tracking-widest uppercase text-foreground">
            ChenJin
          </Link>

          <div className="flex items-center gap-10">
            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-8">
              {isHome && homeNavItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-light text-muted-foreground hover:text-foreground transition-colors duration-300 line-reveal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              {pageNavItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className={`text-sm font-light transition-colors duration-300 line-reveal ${
                      location.pathname === item.href ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
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
