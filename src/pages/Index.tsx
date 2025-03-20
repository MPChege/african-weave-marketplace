
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProductCarousel from '@/components/home/ProductCarousel';
import AboutSection from '@/components/home/AboutSection';
import Newsletter from '@/components/home/Newsletter';
import { CheckCircle, Star, Users, TrendingUp, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Testimonial = ({ quote, author, image }: { quote: string, author: string, image: string }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm relative">
    <img
      src={image}
      alt={author}
      className="w-16 h-16 rounded-full object-cover absolute -top-8 left-1/2 transform -translate-x-1/2 border-4 border-white shadow-sm"
    />
    <div className="pt-8 text-center">
      <div className="flex items-center justify-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#D4AF37" className="text-chen-gold mx-0.5" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4 italic">
        "{quote}"
      </p>
      <p className="font-medium">{author}</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-[#fcf9f6]">
      <Header />
      <main className="flex flex-col">
        <Hero />
        
        {/* Features section */}
        <section className="py-16 px-6 md:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover-lift hover:bg-chen-sand/5">
                <div className="w-14 h-14 rounded-full bg-chen-brown/10 flex items-center justify-center mb-4">
                  <CheckCircle size={24} className="text-chen-brown" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Authentic Craftsmanship</h3>
                <p className="text-muted-foreground">
                  Each piece meticulously handcrafted by skilled African artisans using traditional techniques.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover-lift hover:bg-chen-sand/5">
                <div className="w-14 h-14 rounded-full bg-chen-brown/10 flex items-center justify-center mb-4">
                  <Users size={24} className="text-chen-brown" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Empowering Communities</h3>
                <p className="text-muted-foreground">
                  Supporting sustainable livelihoods for over 200 artisans across 12 African countries.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover-lift hover:bg-chen-sand/5">
                <div className="w-14 h-14 rounded-full bg-chen-brown/10 flex items-center justify-center mb-4">
                  <TrendingUp size={24} className="text-chen-brown" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Ethical Sourcing</h3>
                <p className="text-muted-foreground">
                  Fair compensation and environmentally responsible practices throughout our supply chain.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center p-6 rounded-xl hover-lift hover:bg-chen-sand/5">
                <div className="w-14 h-14 rounded-full bg-chen-brown/10 flex items-center justify-center mb-4">
                  <Award size={24} className="text-chen-brown" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">Exceptional Quality</h3>
                <p className="text-muted-foreground">
                  Premium materials and meticulous attention to detail ensure lasting beauty and durability.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <ProductCarousel />
        
        {/* Categories section */}
        <section className="py-20 px-6 md:px-12 bg-chen-sand/10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                Explore Our Collections
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Discover a curated selection of handcrafted African treasures, each telling a unique story of heritage and craftsmanship.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link to="/shop" className="group block relative rounded-xl overflow-hidden aspect-square shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop" 
                  alt="Handcrafted bags collection" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-semibold mb-2">Handcrafted Bags</h3>
                  <p className="text-white/80 mb-4">Sisal, leather, and beaded designs</p>
                  <span className="inline-flex items-center text-sm font-medium text-white underline-animation">
                    Explore Collection
                  </span>
                </div>
              </Link>
              
              <Link to="/shop" className="group block relative rounded-xl overflow-hidden aspect-square shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?q=80&w=500&auto=format&fit=crop" 
                  alt="Traditional textiles collection" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-semibold mb-2">Traditional Textiles</h3>
                  <p className="text-white/80 mb-4">Handwoven blankets and throws</p>
                  <span className="inline-flex items-center text-sm font-medium text-white underline-animation">
                    Explore Collection
                  </span>
                </div>
              </Link>
              
              <Link to="/shop" className="group block relative rounded-xl overflow-hidden aspect-square shadow-md">
                <img 
                  src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=500&auto=format&fit=crop" 
                  alt="Home decor collection" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <h3 className="text-2xl font-serif font-semibold mb-2">Home Décor</h3>
                  <p className="text-white/80 mb-4">Baskets, cushions, and wall art</p>
                  <span className="inline-flex items-center text-sm font-medium text-white underline-animation">
                    Explore Collection
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        <AboutSection />
        
        {/* Testimonials section */}
        <section className="py-20 px-6 md:px-12 bg-white relative overflow-hidden">
          <div className="absolute w-64 h-64 bg-chen-terracotta/10 rounded-full blur-3xl -top-20 -left-20"></div>
          <div className="absolute w-64 h-64 bg-chen-gold/10 rounded-full blur-3xl -bottom-20 -right-20"></div>
          
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                What Our Customers Say
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Join our growing community of customers who appreciate the beauty and story behind each handcrafted piece.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-16">
              <Testimonial 
                quote="The quality of my Kente-inspired tote bag is exceptional. I love knowing the story of the artisan who made it and that my purchase supports their community."
                author="Sarah M., New York"
                image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=120&auto=format&fit=crop"
              />
              
              <Testimonial 
                quote="The Berber throw blanket is even more beautiful in person than in the photos. The craftsmanship and attention to detail are truly remarkable."
                author="James T., London"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
              />
              
              <Testimonial 
                quote="I've ordered several items from Chen Charts and have been impressed every time. These pieces have become cherished conversation starters in my home."
                author="Aisha K., Dubai"
                image="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=120&auto=format&fit=crop"
              />
            </div>
          </div>
        </section>
        
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
