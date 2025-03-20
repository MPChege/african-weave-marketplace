
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, X, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Mock wishlist data
const wishlistItems = [
  {
    id: 1,
    name: "Woven Basket Bag",
    artisan: "Amina J.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Kente Inspired Throw",
    artisan: "Kwame B.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Handmade Wall Decoration",
    artisan: "Nia T.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=300&auto=format&fit=crop"
  }
];

const Wishlist = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-8">My Wishlist</h1>
        
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlistItems.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col hover-lift">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-64 object-cover" 
                  />
                  <button 
                    className="absolute top-4 right-4 bg-white p-2 rounded-full text-muted-foreground hover:text-destructive"
                    aria-label="Remove from wishlist"
                  >
                    <X size={16} />
                  </button>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-chen-brown mb-1">By {item.artisan}</p>
                  <h3 className="font-serif text-lg font-medium mb-2">{item.name}</h3>
                  <p className="text-lg font-medium mb-6">${item.price.toFixed(2)}</p>
                  
                  <div className="mt-auto flex gap-4">
                    <Button variant="outline" className="flex-1">
                      <ShoppingBag className="mr-2" size={16} />
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="bg-chen-sand/10 hover:bg-chen-sand/20"
                    >
                      <Link to={`/product/${item.id}`}>
                        <Heart size={16} className="text-chen-terracotta" fill="#d87d56" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 max-w-md mx-auto">
            <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <h2 className="text-2xl font-medium mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">
              You haven't added any items to your wishlist yet.
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

export default Wishlist;
