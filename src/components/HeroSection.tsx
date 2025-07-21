import { ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBanner from '@/assets/hero-banner.jpg';

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Discover Amazing 
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {" "}Products
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Shop the latest trends and find exactly what you're looking for. 
                From electronics to fashion, we have everything you need.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                Explore Categories
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50k+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4.8</div>
                <div className="text-sm text-muted-foreground">Rating</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            <img
              src={heroBanner}
              alt="Featured Products"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-background rounded-lg p-4 shadow-lg border">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Free Shipping Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};