import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 text-sm font-light">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 transition-colors duration-300 ${
          language === 'en' 
            ? 'text-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground/50">/</span>
      <button
        onClick={() => setLanguage('zh')}
        className={`px-2 py-1 transition-colors duration-300 ${
          language === 'zh' 
            ? 'text-foreground' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageToggle;
