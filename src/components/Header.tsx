import { useState } from 'react';
import { Search, ShoppingCart, Menu, X, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ShopZone
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">About</a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="relative"
              onClick={() => setIsOpen(true)}
            >
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {totalItems}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Home</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Products</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Categories</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">About</a>
              <a href="#" className="text-foreground hover:text-primary transition-colors py-2">Contact</a>
              <Button variant="ghost" size="sm" className="justify-start">
                <User className="h-5 w-5 mr-2" />
                Account
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};