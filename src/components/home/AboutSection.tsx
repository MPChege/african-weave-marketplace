
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-chen-sand/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image grid */}
          <div className="relative grid grid-cols-2 gap-4 h-full">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-chen-terracotta/10 rounded-full blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-chen-gold/10 rounded-full blur-3xl" aria-hidden="true" />
            
            <div className="overflow-hidden rounded-xl row-span-2 transform translate-y-4 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1591561954555-607968c989ab?q=80&w=500&auto=format&fit=crop" 
                alt="Artisan weaving a traditional pattern"
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1571114766217-784010a2273e?q=80&w=400&auto=format&fit=crop" 
                alt="Close-up of intricate basket weaving"
                className="h-full w-full object-cover"
              />
            </div>
            
            <div className="overflow-hidden rounded-xl shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1608935574441-408e3fbf91d6?q=80&w=400&auto=format&fit=crop" 
                alt="Colorful African textiles and patterns"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="lg:pl-12 space-y-6">
            <div className="inline-block px-3 py-1 bg-chen-brown/10 text-chen-brown text-xs font-medium tracking-wider uppercase rounded-full">
              Our Story
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif font-semibold leading-tight">
              Connecting Artisans to the Global Market
            </h2>
            
            <div className="w-20 h-1 bg-chen-gold rounded-full"></div>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Chen Charts began with a simple vision: to celebrate the extraordinary craftsmanship of African artisans while creating sustainable economic opportunities for their communities.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              Each product in our marketplace tells a story of tradition, innovation, and cultural heritage. We work directly with artisans across Africa, ensuring fair compensation and ethical practices.
            </p>
            
            <div className="pt-4">
              <Link 
                to="/about" 
                className="inline-flex items-center text-chen-brown font-medium hover:text-chen-clay transition-colors group"
              >
                Learn more about our mission
                <ArrowRight 
                  size={16} 
                  className="ml-2 transition-transform group-hover:translate-x-1" 
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
