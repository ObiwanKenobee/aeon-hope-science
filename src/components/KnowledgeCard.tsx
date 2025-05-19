
import { Book } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface KnowledgeCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  language: 'en' | 'ar';
}

const KnowledgeCard = ({ title, description, icon, language }: KnowledgeCardProps) => {
  return (
    <Card className="card-hover overflow-hidden h-full">
      <CardHeader className={`${language === 'ar' ? 'text-right' : ''}`}>
        <div className="flex items-center justify-between">
          <CardTitle className={language === 'ar' ? 'font-arabic' : ''}>{title}</CardTitle>
          <div className="text-primary">{icon || <Book size={20} />}</div>
        </div>
      </CardHeader>
      <CardContent className={language === 'ar' ? 'text-right font-arabic' : ''}>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default KnowledgeCard;
