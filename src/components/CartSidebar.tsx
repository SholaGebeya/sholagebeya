import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/hooks/useCart';

export const CartSidebar = () => {
  const { 
    items, 
    totalItems, 
    totalPrice, 
    updateQuantity, 
    removeItem, 
    clearCart, 
    isOpen, 
    setIsOpen 
  } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
        onClick={() => setIsOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            {totalItems > 0 && (
              <Badge variant="secondary">{totalItems}</Badge>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
              <p className="text-muted-foreground mb-6">
                Add some products to get started!
              </p>
              <Button onClick={() => setIsOpen(false)}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="p-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 object-cover rounded"
                  />
                  
                  <div className="flex-1 space-y-1">
                    <h3 className="font-semibold text-sm line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-primary font-semibold">
                      ${item.price}
                    </p>
                    
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-8 w-8 p-0"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeItem(item.id)}
                        className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                onClick={clearCart}
                className="text-destructive hover:text-destructive"
              >
                Clear Cart
              </Button>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">Total</p>
                <p className="text-2xl font-bold">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};