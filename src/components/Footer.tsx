import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              ShopZone
            </h3>
            <p className="text-muted-foreground">
              Your one-stop destination for amazing products. 
              Quality, affordability, and exceptional service.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                FAQ
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Shipping Info
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Returns
              </a>
            </nav>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-semibold">Categories</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Electronics
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Clothing
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Home & Garden
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Books
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Sports
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">support@shopzone.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">123 Commerce St, City</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-2">
              <h5 className="font-medium">Newsletter</h5>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Your email" 
                  className="flex-1"
                />
                <Button size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2024 ShopZone. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};