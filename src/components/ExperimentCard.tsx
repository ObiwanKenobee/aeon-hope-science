
import { TestTube, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperimentCardProps {
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: string;
  materials: string[];
  language: 'en' | 'ar';
}

const ExperimentCard = ({ 
  title, 
  description, 
  difficulty, 
  estimatedTime, 
  materials,
  language
}: ExperimentCardProps) => {
  
  const getDifficultyColor = (level: string) => {
    switch(level) {
      case 'beginner': return 'bg-green-500';
      case 'intermediate': return 'bg-yellow-500';
      case 'advanced': return 'bg-red-500';
      default: return 'bg-blue-500';
    }
  };

  const getDifficultyText = (level: string) => {
    if (language === 'en') {
      return level.charAt(0).toUpperCase() + level.slice(1);
    } else {
      switch(level) {
        case 'beginner': return 'مبتدئ';
        case 'intermediate': return 'متوسط';
        case 'advanced': return 'متقدم';
        default: return 'مبتدئ';
      }
    }
  };
  
  return (
    <Card className="card-hover h-full flex flex-col">
      <CardHeader className={`${language === 'ar' ? 'text-right' : ''}`}>
        <div className="flex items-center justify-between">
          <CardTitle className={language === 'ar' ? 'font-arabic' : ''}>
            {title}
          </CardTitle>
          <TestTube size={24} className="text-primary" />
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Badge variant="outline" className={getDifficultyColor(difficulty)}>
            <span className={language === 'ar' ? 'font-arabic' : ''}>
              {getDifficultyText(difficulty)}
            </span>
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock size={14} className="mr-1" />
            <span className={language === 'ar' ? 'font-arabic' : ''}>{estimatedTime}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className={language === 'ar' ? 'text-right font-arabic' : ''}>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      
      <CardFooter className="mt-auto pt-4">
        <div className={`w-full ${language === 'ar' ? 'text-right' : ''}`}>
          <p className={`text-sm font-medium mb-2 ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'Materials Needed:' : 'المواد المطلوبة:'}
          </p>
          <div className="flex flex-wrap gap-2">
            {materials.map((material, index) => (
              <Badge key={index} variant="secondary">
                <span className={language === 'ar' ? 'font-arabic' : ''}>{material}</span>
              </Badge>
            ))}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExperimentCard;
