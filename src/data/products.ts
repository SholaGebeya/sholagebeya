import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  { id: 'all', name: 'All Products', icon: 'Grid' },
  { id: 'electronics', name: 'Electronics', icon: 'Smartphone' },
  { id: 'clothing', name: 'Clothing', icon: 'Shirt' },
  { id: 'home', name: 'Home & Garden', icon: 'Home' },
  { id: 'books', name: 'Books', icon: 'Book' },
  { id: 'sports', name: 'Sports', icon: 'Dumbbell' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality.',
    price: 299.99,
    image: '/placeholder.svg',
    category: 'electronics',
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Advanced fitness tracking with heart rate monitor, GPS, and waterproof design.',
    price: 199.99,
    image: '/placeholder.svg',
    category: 'electronics',
    rating: 4.6,
    reviews: 89,
    inStock: true,
    featured: true
  },
  {
    id: '3',
    name: 'Designer Cotton T-Shirt',
    description: 'Premium cotton t-shirt with modern design and comfortable fit.',
    price: 49.99,
    image: '/placeholder.svg',
    category: 'clothing',
    rating: 4.4,
    reviews: 67,
    inStock: true
  },
  {
    id: '4',
    name: 'Bluetooth Speaker',
    description: 'Portable wireless speaker with rich bass and 12-hour battery life.',
    price: 79.99,
    image: '/placeholder.svg',
    category: 'electronics',
    rating: 4.5,
    reviews: 156,
    inStock: true
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    description: 'Comfortable office chair with lumbar support and adjustable height.',
    price: 399.99,
    image: '/placeholder.svg',
    category: 'home',
    rating: 4.7,
    reviews: 43,
    inStock: true,
    featured: true
  },
  {
    id: '6',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with advanced cushioning and breathable material.',
    price: 129.99,
    image: '/placeholder.svg',
    category: 'sports',
    rating: 4.6,
    reviews: 78,
    inStock: true
  },
  {
    id: '7',
    name: 'Coffee Table Book: Modern Art',
    description: 'Beautiful collection of modern art with stunning photography and insightful commentary.',
    price: 59.99,
    image: '/placeholder.svg',
    category: 'books',
    rating: 4.8,
    reviews: 32,
    inStock: true
  },
  {
    id: '8',
    name: 'Laptop Backpack',
    description: 'Durable laptop backpack with multiple compartments and water-resistant material.',
    price: 89.99,
    image: '/placeholder.svg',
    category: 'electronics',
    rating: 4.3,
    reviews: 91,
    inStock: false
  },
  {
    id: '9',
    name: 'Ceramic Plant Pot Set',
    description: 'Set of 3 beautiful ceramic plant pots perfect for indoor gardening.',
    price: 34.99,
    image: '/placeholder.svg',
    category: 'home',
    rating: 4.5,
    reviews: 28,
    inStock: true
  },
  {
    id: '10',
    name: 'Yoga Mat Premium',
    description: 'Extra thick yoga mat with non-slip surface and carrying strap included.',
    price: 39.99,
    image: '/placeholder.svg',
    category: 'sports',
    rating: 4.7,
    reviews: 145,
    inStock: true
  },
  {
    id: '11',
    name: 'Leather Jacket',
    description: 'Genuine leather jacket with classic design and premium craftsmanship.',
    price: 249.99,
    image: '/placeholder.svg',
    category: 'clothing',
    rating: 4.9,
    reviews: 56,
    inStock: true,
    featured: true
  },
  {
    id: '12',
    name: 'Smart Home Hub',
    description: 'Central hub for controlling all your smart home devices with voice commands.',
    price: 149.99,
    image: '/placeholder.svg',
    category: 'electronics',
    rating: 4.4,
    reviews: 73,
    inStock: true
  }
];