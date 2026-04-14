import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs font-light text-muted-foreground">
          {t.footer.rights}
        </p>
        <p className="text-xs font-light text-muted-foreground/60 font-display italic">
          {t.footer.tagline}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
