
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";
import ThreeDBackground from './ThreeDBackground';

const heroImages = [
  {
    url: "https://images.unsplash.com/photo-1585036166256-61abc80e2ef4?q=80&w=1920&auto=format&fit=crop",
    alt: "Traditional African bag with vibrant patterns",
  },
  {
    url: "https://images.unsplash.com/photo-1518019671582-55004f1bc9ab?q=80&w=1920&auto=format&fit=crop",
    alt: "Handcrafted African blanket with geometric designs",
  },
  {
    url: "https://images.unsplash.com/photo-1602553584354-6792c25c271b?q=80&w=1920&auto=format&fit=crop", 
    alt: "Artisan crafting traditional basket",
  },
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setTransitioning(false);
      }, 500);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Background - make sure it has a strong z-index positioning */}
      <div className="absolute inset-0 z-0">
        <ThreeDBackground />
      </div>
      
      {/* Semi-transparent overlay to make text more readable */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Background Images with Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 w-full h-full transition-opacity duration-1000 z-20",
            currentImageIndex === index && !transitioning ? "opacity-50" : "opacity-0"
          )}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"
            aria-hidden="true"
          />
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover object-center animate-scale-in"
            style={{ transform: currentImageIndex === index ? "scale(1.05)" : "scale(1)" }}
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-30 flex items-center h-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-xl">
          <div className="space-y-6 animate-slide-in-bottom" style={{ animationDelay: '0.3s' }}>
            <span className="inline-block px-3 py-1 bg-chen-gold/90 text-white text-xs font-medium tracking-wider uppercase rounded-full shadow-glow">
              Authentic African Craftsmanship
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight text-shadow-sm">
              Discover Handcrafted African Elegance
            </h1>
            
            <p className="text-white/90 text-lg md:text-xl leading-relaxed">
              Exquisite bags and blankets crafted by skilled artisans, bringing the rich heritage and vibrant culture of Africa to your doorstep.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3 bg-chen-brown text-white font-medium rounded-md hover:bg-chen-brown/90 transition-all shadow-glow"
              >
                Shop Collection
              </Link>
              <Link
                to="/artisans"
                className="inline-flex items-center justify-center px-8 py-3 bg-white/20 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/30 transition-all shadow-glow"
              >
                Meet Our Artisans
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-subtle z-30">
        <span className="text-white/80 text-sm mb-2">Scroll to explore</span>
        <ArrowRight className="text-white transform rotate-90" size={20} />
      </div>
    </section>
  );
};

export default Hero;
