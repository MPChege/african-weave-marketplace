
import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Woven Basket Bag",
    artisan: "Amina J.",
    price: 79.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=120&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Kente Inspired Throw",
    artisan: "Kwame B.",
    price: 129.99,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?q=80&w=120&auto=format&fit=crop"
  }
];

const Cart = () => {
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = 12.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-medium mb-6">Your Items ({cartItems.length})</h2>
                  
                  <div className="space-y-6">
                    {cartItems.map((item) => (
                      <div key={item.id}>
                        <div className="flex gap-4">
                          {/* Product Image */}
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-24 h-24 object-cover rounded-md" 
                          />
                          
                          {/* Product Info */}
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <button className="text-muted-foreground hover:text-destructive" aria-label="Remove item">
                                <X size={18} />
                              </button>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">By {item.artisan}</p>
                            <p className="font-medium">${item.price.toFixed(2)}</p>
                            
                            {/* Quantity controls */}
                            <div className="flex items-center mt-3">
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Minus size={14} />
                              </Button>
                              <span className="w-12 text-center">{item.quantity}</span>
                              <Button variant="outline" size="icon" className="h-8 w-8">
                                <Plus size={14} />
                              </Button>
                            </div>
                          </div>
                        </div>
                        <Separator className="mt-6" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-5 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-medium mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  
                  {/* Promo code section */}
                  <div className="pt-3">
                    <div className="flex gap-2">
                      <Input placeholder="Promo code" className="flex-1" />
                      <Button variant="outline">Apply</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  
                  <Button size="lg" className="w-full mt-6">
                    Proceed to Checkout
                  </Button>
                  
                  <div className="text-center mt-4">
                    <Link to="/shop" className="text-sm text-chen-brown hover:underline inline-flex items-center">
                      <ShoppingBag className="mr-1" size={16} />
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-muted-foreground mb-8">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button asChild>
              <Link to="/shop">Browse Products</Link>
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Cart;
