import { useState, useMemo } from 'react';
import { Filter, SortAsc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { FeaturedProducts } from '@/components/FeaturedProducts';
import { ProductCard } from '@/components/ProductCard';
import { FilterSidebar } from '@/components/FilterSidebar';
import { CartSidebar } from '@/components/CartSidebar';
import { Footer } from '@/components/Footer';
import { products } from '@/data/products';

export const EcommercePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [isFilterSidebarOpen, setIsFilterSidebarOpen] = useState(false);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesRating = product.rating >= minRating;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesRating;
    });

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [searchQuery, selectedCategory, sortBy, priceRange, minRating]);

  // Calculate product counts by category
  const productCounts = useMemo(() => {
    const counts: Record<string, number> = { all: products.length };
    
    products.forEach(product => {
      counts[product.category] = (counts[product.category] || 0) + 1;
    });
    
    return counts;
  }, []);

  const clearFilters = () => {
    setSelectedCategory('all');
    setPriceRange([0, 500]);
    setMinRating(0);
    setSearchQuery('');
    setSortBy('name');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      
      <HeroSection />
      <FeaturedProducts />
      
      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">All Products</h2>
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SortAsc className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name (A-Z)</SelectItem>
                  <SelectItem value="price-low">Price (Low to High)</SelectItem>
                  <SelectItem value="price-high">Price (High to Low)</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
              
              <Button
                variant="outline"
                onClick={() => setIsFilterSidebarOpen(true)}
                className="md:hidden"
              >
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden md:block">
              <FilterSidebar
                isOpen={true}
                onClose={() => {}}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
                priceRange={priceRange}
                onPriceRangeChange={setPriceRange}
                minRating={minRating}
                onMinRatingChange={setMinRating}
                productCounts={productCounts}
                onClearFilters={clearFilters}
              />
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-lg font-semibold mb-2">No products found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filter criteria.
                  </p>
                  <Button onClick={clearFilters}>Clear All Filters</Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Mobile Filter Sidebar */}
      <FilterSidebar
        isOpen={isFilterSidebarOpen}
        onClose={() => setIsFilterSidebarOpen(false)}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        minRating={minRating}
        onMinRatingChange={setMinRating}
        productCounts={productCounts}
        onClearFilters={clearFilters}
      />

      <CartSidebar />
    </div>
  );
};