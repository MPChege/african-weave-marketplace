
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, Users, Globe, Heart, ShoppingBag, Award, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-[#fcf9f6]">
      <Header />
      
      <main>
        {/* Hero section */}
        <section className="relative py-24 overflow-hidden bg-chen-brown">
          <div className="absolute inset-0 mix-blend-soft-light opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="smallGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
                <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
                  <rect width="100" height="100" fill="url(#smallGrid)" />
                  <path d="M 100 0 L 0 0 0 100" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          <div className="absolute w-64 h-64 bg-chen-terracotta/30 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-64 h-64 bg-chen-gold/20 rounded-full blur-3xl -bottom-20 -right-20"></div>
          
          <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs uppercase tracking-widest rounded-full mb-6 animate-fade-in">
              Our Story
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Connecting African Artisans<br />to the Global Market
            </h1>
            <p className="mx-auto max-w-2xl text-white/90 text-lg md:text-xl leading-relaxed mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We're on a mission to celebrate African craftsmanship while creating sustainable economic opportunities for artisan communities.
            </p>
          </div>
          
          <div className="mt-8 relative max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1551913902-c92207136625?q=80&w=500&auto=format&fit=crop"
                  alt="African artisan weaving a basket"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1585132638291-5bce4bd5cf1e?q=80&w=500&auto=format&fit=crop"
                  alt="Traditional textiles"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-2xl hidden md:block">
                <img
                  src="https://images.unsplash.com/photo-1598394187144-c95bf8c04979?q=80&w=500&auto=format&fit=crop"
                  alt="Artisan selling goods at market"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our mission */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                  Our Mission & Values
                </h2>
                <div className="w-20 h-1 bg-chen-gold mb-8 rounded-full"></div>
                
                <p className="text-lg mb-8 text-muted-foreground">
                  Chen Charts began with a simple idea: to create a platform that connects talented African artisans directly to global consumers, eliminating middlemen and ensuring fair compensation for their exceptional craftsmanship.
                </p>
                
                <p className="text-lg mb-8 text-muted-foreground">
                  Each product in our marketplace tells a story of tradition, innovation, and cultural heritage. By purchasing these handcrafted items, you're not just acquiring a beautiful piece — you're supporting sustainable livelihoods and helping preserve ancient crafting techniques.
                </p>
                
                <Link 
                  to="/artisans" 
                  className="inline-flex items-center font-medium text-chen-brown hover:text-chen-clay transition-colors group"
                >
                  Meet our artisans
                  <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={18} />
                </Link>
              </div>
              
              <div className="relative">
                <div className="relative z-10 bg-white rounded-xl shadow-md p-8">
                  <div className="space-y-8">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-chen-brown/10 text-chen-brown">
                        <Users size={20} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-medium mb-2">Community First</h3>
                        <p className="text-muted-foreground">We prioritize the wellbeing and economic empowerment of the artisan communities we partner with.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-chen-brown/10 text-chen-brown">
                        <Award size={20} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-medium mb-2">Authentic Craftsmanship</h3>
                        <p className="text-muted-foreground">We celebrate and preserve traditional techniques while embracing innovation and contemporary design.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-chen-brown/10 text-chen-brown">
                        <Globe size={20} />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-medium mb-2">Sustainability</h3>
                        <p className="text-muted-foreground">We're committed to environmentally responsible practices throughout our supply chain.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-8 right-8 w-full h-full bg-chen-terracotta/5 rounded-xl -z-10"></div>
                <div className="absolute top-16 right-16 w-full h-full bg-chen-gold/5 rounded-xl -z-20"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our story/timeline */}
        <section className="py-20 px-4 bg-chen-sand/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Our Journey
              </h2>
              <div className="w-20 h-1 bg-chen-gold mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-muted-foreground">
                From a small passion project to a thriving marketplace, our path has been shaped by our commitment to African artisans and their extraordinary craft.
              </p>
            </div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-chen-brown/20 transform md:translate-x-[-0.5px]"></div>
              
              {/* Timeline events */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                      <div className="inline-block px-3 py-1 bg-chen-brown/10 text-chen-brown text-xs font-medium rounded-full mb-2">
                        2018
                      </div>
                      <h3 className="font-serif text-xl font-medium mb-2">The Inspiration</h3>
                      <p className="text-muted-foreground">Our founder, Nia Chen, traveled across West Africa and was inspired by the incredible craftsmanship she encountered.</p>
                    </div>
                    <div className="z-10 w-8 h-8 rounded-full bg-chen-brown flex items-center justify-center shadow-lg">
                      <Heart size={16} className="text-white" />
                    </div>
                    <div className="flex-1 md:pl-12 md:text-left">
                      <img 
                        src="https://images.unsplash.com/photo-1590714585814-4f96177945c4?q=80&w=500&auto=format&fit=crop"
                        alt="West African marketplace"
                        className="rounded-xl shadow-md mt-4 md:mt-0"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-12 order-2 md:order-1 mb-4 md:mb-0">
                      <img 
                        src="https://images.unsplash.com/photo-1594897030264-ab7d87ecc3f0?q=80&w=500&auto=format&fit=crop"
                        alt="First artisan partners"
                        className="rounded-xl shadow-md mt-4 md:mt-0"
                      />
                    </div>
                    <div className="z-10 w-8 h-8 rounded-full bg-chen-brown flex items-center justify-center shadow-lg order-1">
                      <Users size={16} className="text-white" />
                    </div>
                    <div className="flex-1 md:pl-12 md:text-left order-3">
                      <div className="inline-block px-3 py-1 bg-chen-brown/10 text-chen-brown text-xs font-medium rounded-full mb-2">
                        2019
                      </div>
                      <h3 className="font-serif text-xl font-medium mb-2">First Partnerships</h3>
                      <p className="text-muted-foreground">We established our first partnerships with artisan cooperatives in Senegal, Ghana, and Kenya.</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-12 mb-4 md:mb-0">
                      <div className="inline-block px-3 py-1 bg-chen-brown/10 text-chen-brown text-xs font-medium rounded-full mb-2">
                        2020
                      </div>
                      <h3 className="font-serif text-xl font-medium mb-2">Online Marketplace Launch</h3>
                      <p className="text-muted-foreground">Our digital platform launched, creating a bridge between African artisans and global customers during a challenging year.</p>
                    </div>
                    <div className="z-10 w-8 h-8 rounded-full bg-chen-brown flex items-center justify-center shadow-lg">
                      <ShoppingBag size={16} className="text-white" />
                    </div>
                    <div className="flex-1 md:pl-12 md:text-left">
                      <img 
                        src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop"
                        alt="Online store launch"
                        className="rounded-xl shadow-md mt-4 md:mt-0"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:text-right md:pr-12 order-2 md:order-1 mb-4 md:mb-0">
                      <img 
                        src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=500&auto=format&fit=crop"
                        alt="Growth chart"
                        className="rounded-xl shadow-md mt-4 md:mt-0"
                      />
                    </div>
                    <div className="z-10 w-8 h-8 rounded-full bg-chen-brown flex items-center justify-center shadow-lg order-1">
                      <BarChart3 size={16} className="text-white" />
                    </div>
                    <div className="flex-1 md:pl-12 md:text-left order-3">
                      <div className="inline-block px-3 py-1 bg-chen-brown/10 text-chen-brown text-xs font-medium rounded-full mb-2">
                        Today
                      </div>
                      <h3 className="font-serif text-xl font-medium mb-2">Growing Impact</h3>
                      <p className="text-muted-foreground">Now partnering with over 50 artisan communities across 12 African countries, with plans for expansion into sustainable fashion and home goods.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Meet Our Team
              </h2>
              <div className="w-20 h-1 bg-chen-gold mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-muted-foreground">
                Our diverse team brings together expertise in African art, sustainable business practices, and digital technology to create a platform that truly serves artisan communities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop" 
                    alt="Nia Chen" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium mb-1">Nia Chen</h3>
                  <p className="text-chen-brown text-sm font-medium mb-4">Founder & CEO</p>
                  <p className="text-muted-foreground text-sm">
                    With a background in anthropology and business, Nia founded Chen Charts after extensive travels throughout Africa, where she witnessed firsthand the gap between artisan talent and market access.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop" 
                    alt="Kwame Osei" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium mb-1">Kwame Osei</h3>
                  <p className="text-chen-brown text-sm font-medium mb-4">Creative Director</p>
                  <p className="text-muted-foreground text-sm">
                    A renowned textile designer from Ghana, Kwame oversees product curation and works directly with artisans to blend traditional techniques with contemporary market trends.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl overflow-hidden shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md">
                <div className="aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=400&auto=format&fit=crop" 
                    alt="Amina Diallo" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-medium mb-1">Amina Diallo</h3>
                  <p className="text-chen-brown text-sm font-medium mb-4">Community Relations</p>
                  <p className="text-muted-foreground text-sm">
                    With deep connections across West Africa, Amina develops our artisan partnerships and ensures our business practices align with community needs and values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA section */}
        <section className="relative py-20 px-4 bg-chen-brown text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="diagonalHatch" width="10" height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                  <line x1="0" y1="0" x2="0" y2="10" style={{ stroke: 'white', strokeWidth: 1 }} />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
            </svg>
          </div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Join Our Journey
              </h2>
              <p className="text-white/80 text-lg mb-8">
                Whether you're a customer, artisan, or potential partner, we invite you to be part of our growing community dedicated to celebrating African craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/shop"
                  className="px-6 py-3 bg-white text-chen-brown font-medium rounded-md hover:bg-white/90 transition-colors"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
