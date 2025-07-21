import { useState } from 'react';
import { X, Filter, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { CategoryFilter } from './CategoryFilter';

interface FilterSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (range: [number, number]) => void;
  minRating: number;
  onMinRatingChange: (rating: number) => void;
  productCounts: Record<string, number>;
  onClearFilters: () => void;
}

export const FilterSidebar = ({
  isOpen,
  onClose,
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onMinRatingChange,
  productCounts,
  onClearFilters
}: FilterSidebarProps) => {
  if (!isOpen) return null;

  const renderStars = (rating: number, interactive: boolean = false) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 cursor-pointer transition-colors ${
          i < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300 hover:text-yellow-400'
        }`}
        onClick={interactive ? () => onMinRatingChange(i + 1) : undefined}
      />
    ));
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className={`
        fixed md:static top-0 left-0 h-full w-80 bg-background border-r shadow-xl z-50
        transform transition-transform duration-300 md:transform-none
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        flex flex-col
      `}>
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b md:hidden">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Filters</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Categories */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={onCategoryChange}
            productCounts={productCounts}
          />

          <Separator />

          {/* Price Range */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Price Range</h3>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                onValueChange={(value) => onPriceRangeChange(value as [number, number])}
                max={500}
                min={0}
                step={10}
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>

          <Separator />

          {/* Rating Filter */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Minimum Rating</h3>
            <div className="space-y-2">
              {[4, 3, 2, 1].map((rating) => (
                <Button
                  key={rating}
                  variant="ghost"
                  className={`w-full justify-start p-2 h-auto ${
                    minRating === rating ? 'bg-muted' : ''
                  }`}
                  onClick={() => onMinRatingChange(rating)}
                >
                  <div className="flex items-center space-x-2">
                    {renderStars(rating)}
                    <span className="text-sm">& up</span>
                  </div>
                </Button>
              ))}
              {minRating > 0 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onMinRatingChange(0)}
                  className="w-full"
                >
                  Clear Rating Filter
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-6">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={onClearFilters}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
    </>
  );
};