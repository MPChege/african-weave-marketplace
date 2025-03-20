
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ProductCarousel from '@/components/home/ProductCarousel';
import AboutSection from '@/components/home/AboutSection';
import Newsletter from '@/components/home/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductCarousel />
        <AboutSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
