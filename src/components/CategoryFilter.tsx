import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/products';
import { Grid, Smartphone, Shirt, Home, Book, Dumbbell } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  productCounts: Record<string, number>;
}

const iconMap = {
  Grid,
  Smartphone,
  Shirt,
  Home,
  Book,
  Dumbbell,
};

export const CategoryFilter = ({ 
  selectedCategory, 
  onCategoryChange, 
  productCounts 
}: CategoryFilterProps) => {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">Categories</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
        {categories.map((category) => {
          const IconComponent = iconMap[category.icon as keyof typeof iconMap];
          const count = productCounts[category.id] || 0;
          const isSelected = selectedCategory === category.id;
          
          return (
            <Button
              key={category.id}
              variant={isSelected ? "default" : "ghost"}
              className={`justify-start h-auto p-3 ${
                isSelected ? 'bg-gradient-primary' : ''
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center space-x-3">
                  <IconComponent className="h-5 w-5" />
                  <span>{category.name}</span>
                </div>
                <Badge 
                  variant={isSelected ? "secondary" : "outline"}
                  className="ml-auto"
                >
                  {count}
                </Badge>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};