
import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import ProductCard from "@/components/ui/ProductCard";

// Sample product data
const products = [
  {
    id: "1",
    name: "Handwoven Sisal Basket Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop",
    artisan: "Amara Crafts",
    region: "Kenya"
  },
  {
    id: "2",
    name: "Mud Cloth Pattern Blanket",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?q=80&w=500&auto=format&fit=crop",
    artisan: "Mali Textiles",
    region: "Mali"
  },
  {
    id: "3",
    name: "Kente Inspired Tote Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=500&auto=format&fit=crop",
    artisan: "Accra Artisans",
    region: "Ghana"
  },
  {
    id: "4",
    name: "Berber Wool Throw Blanket",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1616048056617-93b94a339009?q=80&w=500&auto=format&fit=crop",
    artisan: "Atlas Weavers",
    region: "Morocco"
  }
];

const ProductCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const carousel = carouselRef.current;
    const scrollAmount = carousel.clientWidth * 0.7;
    
    carousel.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-3xl font-serif font-semibold">
            Featured Products
          </h2>
          
          {/* Navigation buttons */}
          <div className="flex space-x-3">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-chen-brown text-chen-brown hover:bg-chen-brown hover:text-white"
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-chen-brown text-chen-brown hover:bg-chen-brown hover:text-white"
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Products carousel */}
        <div 
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide"
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-72">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
