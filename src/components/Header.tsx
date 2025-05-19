
import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import LanguageToggle from './LanguageToggle';

interface HeaderProps {
  language: 'en' | 'ar';
  setLanguage: (lang: 'en' | 'ar') => void;
}

const Header = ({ language, setLanguage }: HeaderProps) => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-background border-b border-border py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/logo-placeholder.svg" 
            alt="Aeon Gaza Node" 
            className="h-8 w-auto mr-3"
            onError={(e) => {
              e.currentTarget.src = '';
              e.currentTarget.alt = 'AΩ';
              e.currentTarget.className = 'h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center font-bold';
            }}
          />
          <h1 className={`font-bold text-xl ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'Aeon Gaza Node' : 'عقدة آيون غزة'}
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav>
            <ul className="flex space-x-6">
              <li className={language === 'ar' ? 'font-arabic' : ''}>
                {language === 'en' ? 'Knowledge' : 'المعرفة'}
              </li>
              <li className={language === 'ar' ? 'font-arabic' : ''}>
                {language === 'en' ? 'Experiments' : 'التجارب'}
              </li>
              <li className={language === 'ar' ? 'font-arabic' : ''}>
                {language === 'en' ? 'Lab Builder' : 'بناء المختبر'}
              </li>
              <li className={language === 'ar' ? 'font-arabic' : ''}>
                {language === 'en' ? 'Community' : 'المجتمع'}
              </li>
            </ul>
          </nav>
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle language={language} setLanguage={setLanguage} />
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border z-50 animate-fade-in">
          <nav className="container py-4">
            <ul className="space-y-4">
              <li className={`${language === 'ar' ? 'font-arabic' : ''} p-2 hover:bg-muted rounded-md`}>
                {language === 'en' ? 'Knowledge' : 'المعرفة'}
              </li>
              <li className={`${language === 'ar' ? 'font-arabic' : ''} p-2 hover:bg-muted rounded-md`}>
                {language === 'en' ? 'Experiments' : 'التجارب'}
              </li>
              <li className={`${language === 'ar' ? 'font-arabic' : ''} p-2 hover:bg-muted rounded-md`}>
                {language === 'en' ? 'Lab Builder' : 'بناء المختبر'}
              </li>
              <li className={`${language === 'ar' ? 'font-arabic' : ''} p-2 hover:bg-muted rounded-md`}>
                {language === 'en' ? 'Community' : 'المجتمع'}
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
