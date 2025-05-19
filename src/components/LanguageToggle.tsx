
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

const LanguageToggle = ({ language, setLanguage }: LanguageToggleProps) => {
  return (
    <div className="flex items-center space-x-2 rtl:space-x-reverse">
      <Button
        variant="ghost"
        size="sm"
        className={`${language === 'en' ? 'bg-muted' : ''}`}
        onClick={() => setLanguage('en')}
      >
        EN
      </Button>
      <Button
        variant="ghost" 
        size="sm"
        className={`${language === 'ar' ? 'bg-muted' : ''} font-arabic`}
        onClick={() => setLanguage('ar')}
      >
        عربي
      </Button>
    </div>
  );
};

export default LanguageToggle;
