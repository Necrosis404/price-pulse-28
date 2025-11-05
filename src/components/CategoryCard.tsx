import { Card } from "@/components/ui/card";
import { Category } from "@/data/mockData";
import * as Icons from "lucide-react";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
}

export const CategoryCard = ({ category, onClick }: CategoryCardProps) => {
  const IconComponent = Icons[category.icon as keyof typeof Icons] as LucideIcon;

  return (
    <Card 
      onClick={onClick}
      className="group cursor-pointer p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-card border-border"
    >
      <div className="flex flex-col items-center text-center space-y-3">
        <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          {IconComponent && <IconComponent className="h-8 w-8 text-primary" />}
        </div>
        <div>
          <h3 className="font-semibold text-lg text-card-foreground">{category.name}</h3>
          <p className="text-sm text-muted-foreground">{category.productsCount} products</p>
        </div>
      </div>
    </Card>
  );
};
