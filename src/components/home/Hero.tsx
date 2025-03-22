
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"
          aria-hidden="true"
        />
        <img
          src="https://images.unsplash.com/photo-1585036166256-61abc80e2ef4?q=80&w=1920&auto=format&fit=crop"
          alt="Traditional African bag with vibrant patterns"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full max-w-7xl mx-auto px-6">
        <div className="max-w-xl">
          <div className="space-y-6">            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight">
              Discover Handcrafted African Elegance
            </h1>
            
            <p className="text-white/90 text-lg leading-relaxed">
              Exquisite bags and blankets crafted by skilled artisans, bringing the rich heritage of Africa to your doorstep.
            </p>
            
            <div className="pt-4">
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-8 py-3 bg-chen-brown text-white font-medium rounded-md hover:bg-chen-brown/90"
              >
                Shop Collection
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
