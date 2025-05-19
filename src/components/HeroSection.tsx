
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: 'en' | 'ar';
}

const HeroSection = ({ language }: HeroSectionProps) => {
  return (
    <section className={`py-20 ${language === 'ar' ? 'text-right' : ''}`}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 
              ${language === 'ar' ? 'font-arabic' : ''} leading-tight`}
          >
            {language === 'en' 
              ? 'Science Under Siege = Science for Survival' 
              : 'العلم تحت الحصار = العلم من أجل البقاء'}
          </h1>
          
          <p className={`text-xl text-muted-foreground mb-8 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'en'
              ? 'Building resilience through knowledge, experimentation, and community in challenging environments.'
              : 'بناء المرونة من خلال المعرفة والتجريب والمجتمع في البيئات الصعبة.'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'en' ? 'Access Knowledge' : 'الوصول إلى المعرفة'}
            </Button>
            
            <Button variant="outline" size="lg" className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'en' ? 'Join Experiment' : 'انضم إلى التجربة'}
              <ArrowRight className="ml-2" size={18} />
            </Button>
            
            <Button variant="secondary" size="lg" className={language === 'ar' ? 'font-arabic' : ''}>
              {language === 'en' ? 'Build a Lab' : 'بناء مختبر'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
