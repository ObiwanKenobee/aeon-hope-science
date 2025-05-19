
import { useState } from 'react';
import { Book, Flask, Beaker, Test, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import KnowledgeCard from '@/components/KnowledgeCard';
import ExperimentCard from '@/components/ExperimentCard';

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');

  // Sample Knowledge Areas
  const knowledgeAreas = [
    {
      title: language === 'en' ? 'Clean Energy' : 'الطاقة النظيفة',
      description: language === 'en' 
        ? 'Solar, wind, and alternative energy sources for sustainable power generation.' 
        : 'الطاقة الشمسية وطاقة الرياح ومصادر الطاقة البديلة لتوليد الطاقة المستدامة.',
      icon: <Beaker size={20} />
    },
    {
      title: language === 'en' ? 'Water Purification' : 'تنقية المياه',
      description: language === 'en'
        ? 'Methods and techniques for cleaning and making water safe for consumption.'
        : 'طرق وتقنيات لتنظيف المياه وجعلها آمنة للاستهلاك.',
      icon: <Flask size={20} />
    },
    {
      title: language === 'en' ? 'Biology & Health' : 'علم الأحياء والصحة',
      description: language === 'en'
        ? 'Essential biological knowledge for health, agriculture and environmental applications.'
        : 'المعرفة البيولوجية الأساسية للتطبيقات الصحية والزراعية والبيئية.',
      icon: <Test size={20} />
    },
    {
      title: language === 'en' ? 'First Aid' : 'الإسعافات الأولية',
      description: language === 'en'
        ? 'Critical medical knowledge for emergency situations and basic care.'
        : 'المعرفة الطبية الحيوية للحالات الطارئة والرعاية الأساسية.',
      icon: <Book size={20} />
    }
  ];

  // Sample Experiments
  const experiments = [
    {
      title: language === 'en' ? 'Build a Soil Battery' : 'بناء بطارية التربة',
      description: language === 'en'
        ? 'Create electrical energy from soil, metal electrodes and salt water.'
        : 'توليد الطاقة الكهربائية من التربة وأقطاب معدنية والماء المالح.',
      difficulty: 'beginner',
      estimatedTime: language === 'en' ? '30 minutes' : '٣٠ دقيقة',
      materials: language === 'en' 
        ? ['Soil', 'Copper', 'Zinc', 'Wires'] 
        : ['تربة', 'نحاس', 'زنك', 'أسلاك']
    },
    {
      title: language === 'en' ? 'Solar Water Purifier' : 'منقي المياه الشمسي',
      description: language === 'en'
        ? 'Use solar energy to distill and purify water for drinking.'
        : 'استخدام الطاقة الشمسية لتقطير وتنقية المياه للشرب.',
      difficulty: 'intermediate',
      estimatedTime: language === 'en' ? '2 hours' : 'ساعتين',
      materials: language === 'en' 
        ? ['Plastic Sheet', 'Container', 'Cup'] 
        : ['ورق بلاستيك', 'حاوية', 'كوب']
    }
  ];

  return (
    <div className={`min-h-screen ${language === 'ar' ? 'rtl' : 'ltr'}`}>
      <Header language={language} setLanguage={setLanguage} />
      
      <main>
        <HeroSection language={language} />
        
        {/* Knowledge Hub Section */}
        <section className="py-16 bg-muted">
          <div className="container">
            <div className={`mb-10 ${language === 'ar' ? 'text-right' : ''}`}>
              <h2 className={`text-3xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'en' ? 'Offline Knowledge Hub' : 'مركز المعرفة بدون إنترنت'}
              </h2>
              <p className={`text-lg text-muted-foreground mt-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'en' 
                  ? 'Access essential scientific information even without internet connection'
                  : 'الوصول إلى المعلومات العلمية الأساسية حتى بدون اتصال بالإنترنت'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {knowledgeAreas.map((area, index) => (
                <KnowledgeCard
                  key={index}
                  title={area.title}
                  description={area.description}
                  icon={area.icon}
                  language={language}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Experiment Toolkit Section */}
        <section className="py-16">
          <div className="container">
            <div className={`mb-10 ${language === 'ar' ? 'text-right' : ''}`}>
              <h2 className={`text-3xl font-bold ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'en' ? 'Experiment Toolkit' : 'أدوات التجارب'}
              </h2>
              <p className={`text-lg text-muted-foreground mt-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
                {language === 'en' 
                  ? 'Practical DIY experiments for exploration and problem-solving'
                  : 'تجارب عملية للاستكشاف وحل المشكلات'}
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {experiments.map((experiment, index) => (
                <ExperimentCard
                  key={index}
                  title={experiment.title}
                  description={experiment.description}
                  difficulty={experiment.difficulty as 'beginner' | 'intermediate' | 'advanced'}
                  estimatedTime={experiment.estimatedTime}
                  materials={experiment.materials}
                  language={language}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Lab Builder Teaser */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container">
            <div className={`text-center max-w-3xl mx-auto ${language === 'ar' ? 'font-arabic' : ''}`}>
              <h2 className="text-3xl font-bold mb-4">
                {language === 'en' ? 'Lab Builder Assistant' : 'مساعد بناء المختبر'}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {language === 'en' 
                  ? "Tell us what materials you have access to, and we'll help you build your scientific toolkit."
                  : 'أخبرنا ما هي المواد التي يمكنك الوصول إليها، وسنساعدك في بناء مجموعة أدواتك العلمية.'}
              </p>
              <Button size="lg" variant="outline" className="group">
                <span>{language === 'en' ? 'Coming Soon' : 'قريبًا'}</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-background border-t border-border py-8">
        <div className="container">
          <div className={`text-center ${language === 'ar' ? 'font-arabic' : ''}`}>
            <p className="text-muted-foreground">
              {language === 'en' 
                ? '© 2025 Aeon Gaza Node - Science for Humanity'
                : '© ٢٠٢٥ عقدة آيون غزة - العلم للإنسانية'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
