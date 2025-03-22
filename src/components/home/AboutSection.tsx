
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-chen-sand/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="rounded-xl overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1530973865279-39d51d988e1d?q=80&w=1000&auto=format&fit=crop" 
              alt="African artisan creating traditional crafts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="lg:pl-10 space-y-6">            
            <h2 className="text-3xl font-serif font-semibold">
              Connecting Artisans to the Global Market
            </h2>
                        
            <p className="text-lg text-muted-foreground">
              Chen Charis began with a simple vision: to celebrate the extraordinary craftsmanship of African artisans while creating sustainable economic opportunities for their communities.
            </p>
            
            <div className="pt-2">
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-2 bg-chen-brown text-white font-medium rounded-md hover:bg-chen-brown/90"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
