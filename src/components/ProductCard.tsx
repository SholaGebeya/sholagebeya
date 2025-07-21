import { Star, ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types/product';
import { useCart } from '@/hooks/useCart';
import { useState } from 'react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addItem(product);
    
    // Add a small delay for visual feedback
    setTimeout(() => {
      setIsAdding(false);
    }, 500);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-hover border-0 shadow-product">
      {product.featured && (
        <Badge className="absolute top-3 left-3 z-10 bg-gradient-primary">
          Featured
        </Badge>
      )}
      
      {!product.inStock && (
        <Badge variant="destructive" className="absolute top-3 right-3 z-10">
          Out of Stock
        </Badge>
      )}

      <Button
        variant="ghost"
        size="sm"
        className={`absolute top-3 right-3 z-10 h-8 w-8 rounded-full p-0 transition-colors ${
          isWishlisted ? 'text-red-500' : 'text-gray-400 hover:text-red-500'
        }`}
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
      </Button>

      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6">
          <div className="space-y-2 mb-4">
            <h3 className="font-semibold text-lg line-clamp-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center space-x-1 mb-3">
            {renderStars(product.rating)}
            <span className="text-sm text-muted-foreground ml-2">
              ({product.reviews})
            </span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary">
                ${product.price}
              </span>
            </div>
            
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock || isAdding}
              className={`transition-all duration-300 ${
                isAdding ? 'animate-cart-bounce' : ''
              }`}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {isAdding ? 'Adding...' : 'Add to Cart'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};