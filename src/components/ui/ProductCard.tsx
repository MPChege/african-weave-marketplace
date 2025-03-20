
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Heart } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  artisan: string;
  region: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  artisan,
  region
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product image with overlay */}
      <Link to={`/product/${id}`} className="block overflow-hidden rounded-lg bg-gray-100">
        <div className="relative aspect-square overflow-hidden">
          {!isImageLoaded && (
            <div className="absolute inset-0 bg-chen-sand/20 animate-pulse" />
          )}
          <img
            src={image}
            alt={name}
            className={cn(
              "h-full w-full object-cover transition-all duration-500",
              isHovered ? "scale-105" : "scale-100",
              isImageLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setIsImageLoaded(true)}
          />
          
          {/* Action buttons on hover */}
          <div className={cn(
            "absolute bottom-0 left-0 right-0 flex justify-between p-4 transition-all duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}>
            <button 
              className="rounded-full bg-white p-2 text-chen-brown shadow-md transition-transform hover:bg-chen-sand hover:scale-105"
              aria-label="Add to wishlist"
            >
              <Heart size={18} />
            </button>
            <button 
              className="rounded-full bg-chen-brown p-2 text-white shadow-md transition-transform hover:bg-chen-clay hover:scale-105"
              aria-label="Add to cart"
            >
              <ShoppingBag size={18} />
            </button>
          </div>
        </div>
      </Link>
      
      {/* Product info */}
      <div className="mt-4 space-y-1">
        <span className="text-xs text-chen-brown/80 uppercase tracking-wider">
          {artisan} • {region}
        </span>
        <h3 className="font-serif text-base font-medium leading-tight">
          <Link to={`/product/${id}`} className="transition-colors hover:text-chen-brown">
            {name}
          </Link>
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-base font-medium">
            ${price.toFixed(2)}
          </p>
          <div className="h-1 w-10 bg-chen-terracotta/30 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
