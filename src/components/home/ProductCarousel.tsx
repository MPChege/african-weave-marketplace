
import React, { useState, useRef, useEffect } from 'react';
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
  },
  {
    id: "5",
    name: "Leather and Beaded Clutch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=500&auto=format&fit=crop",
    artisan: "Maasai Collection",
    region: "Tanzania"
  },
  {
    id: "6",
    name: "Ndebele Pattern Throw",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1612363228106-c388bd0de644?q=80&w=500&auto=format&fit=crop",
    artisan: "Ubuntu Crafts",
    region: "South Africa"
  }
];

const ProductCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!carouselRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      
      return () => {
        carousel.removeEventListener('scroll', updateScrollButtons);
      };
    }
  }, []);

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
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
              Curated Collection
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Each piece tells a story of heritage, craftsmanship, and the hands that created it.
            </p>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex space-x-3 mt-6 md:mt-0">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={cn(
                "p-3 rounded-full transition-all border",
                canScrollLeft 
                  ? "border-chen-brown text-chen-brown hover:bg-chen-brown hover:text-white" 
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              )}
              aria-label="Scroll left"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={cn(
                "p-3 rounded-full transition-all border",
                canScrollRight 
                  ? "border-chen-brown text-chen-brown hover:bg-chen-brown hover:text-white" 
                  : "border-gray-200 text-gray-300 cursor-not-allowed"
              )}
              aria-label="Scroll right"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
        
        {/* Products carousel */}
        <div 
          ref={carouselRef}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide -mx-4 px-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
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
