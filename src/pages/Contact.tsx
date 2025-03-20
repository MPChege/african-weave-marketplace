
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#fcf9f6]">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-chen-brown text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%">
              <pattern id="smallGrid" width="15" height="15" patternUnits="userSpaceOnUse">
                <path d="M 15 0 L 0 0 0 15" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>
          
          <div className="absolute w-64 h-64 bg-chen-terracotta/20 rounded-full blur-3xl -top-20 -right-20"></div>
          <div className="absolute w-64 h-64 bg-chen-gold/20 rounded-full blur-3xl -bottom-20 -left-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Have questions about our products, artisans, or partnerships? We'd love to hear from you.
            </p>
          </div>
        </section>
        
        {/* Contact options and form */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              {/* Contact info sidebar */}
              <div className="lg:col-span-2 space-y-8">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-serif font-semibold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-chen-brown/10 text-chen-brown">
                        <Mail size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Email Us</h3>
                        <a href="mailto:hello@chencharts.com" className="text-base hover:text-chen-brown">
                          hello@chencharts.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-chen-brown/10 text-chen-brown">
                        <Phone size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Call Us</h3>
                        <a href="tel:+1234567890" className="text-base hover:text-chen-brown">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-chen-brown/10 text-chen-brown">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Visit Us</h3>
                        <address className="text-base not-italic">
                          123 Artisan Lane<br />
                          Nairobi, Kenya
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-chen-brown/10 text-chen-brown">
                        <Clock size={18} />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm text-muted-foreground mb-1">Business Hours</h3>
                        <p className="text-base">
                          Monday - Friday: 9am - 6pm<br />
                          Saturday: 10am - 4pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-serif font-semibold mb-6">Follow Us</h2>
                  <p className="text-muted-foreground mb-6">
                    Stay updated with new product releases, artisan stories, and special promotions by following us on social media.
                  </p>
                  
                  <div className="flex gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-chen-brown text-white flex items-center justify-center hover:bg-chen-clay transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-chen-brown text-white flex items-center justify-center hover:bg-chen-clay transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-chen-brown text-white flex items-center justify-center hover:bg-chen-clay transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-chen-brown text-white flex items-center justify-center hover:bg-chen-clay transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <h2 className="text-2xl font-serif font-semibold mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          Your Name
                        </label>
                        <input 
                          type="text" 
                          id="name" 
                          className="w-full rounded-md border border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input 
                          type="email" 
                          id="email" 
                          className="w-full rounded-md border border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full rounded-md border border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea 
                        id="message" 
                        rows={6}
                        className="w-full rounded-md border border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                        placeholder="Tell us how we can assist you..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full py-3 bg-chen-brown text-white font-medium rounded-md hover:bg-chen-clay transition-colors inline-flex items-center justify-center"
                    >
                      <Send size={18} className="mr-2" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ section */}
        <section className="py-20 px-4 bg-chen-sand/10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-chen-gold mx-auto mb-6 rounded-full"></div>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Find answers to our most commonly asked questions. If you can't find what you're looking for, please reach out to us directly.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-serif font-medium mb-3">How do you ensure artisans are paid fairly?</h3>
                <p className="text-muted-foreground">
                  We work directly with artisans and cooperatives, eliminating middlemen and ensuring that craftspeople receive 70-80% of the sale price. This is significantly higher than the industry standard.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-serif font-medium mb-3">What is your shipping policy?</h3>
                <p className="text-muted-foreground">
                  We offer worldwide shipping. Orders typically ship within 2-3 business days, with international delivery taking 7-14 days depending on your location. Shipping costs are calculated at checkout.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-serif font-medium mb-3">Can I return or exchange items?</h3>
                <p className="text-muted-foreground">
                  Yes, we accept returns within 30 days of delivery for items in their original condition. Custom orders are non-returnable. Please see our full return policy for details.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-serif font-medium mb-3">Are the products ethically sourced?</h3>
                <p className="text-muted-foreground">
                  Absolutely. We personally visit and vet every artisan partnership to ensure fair wages, good working conditions, and sustainable practices. Many of our materials are locally sourced.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-serif font-medium mb-3">Do you offer wholesale options?</h3>
                <p className="text-muted-foreground">
                  Yes, we work with retailers who share our values of promoting authentic African craftsmanship. Please contact us directly to discuss wholesale partnerships.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <h3 className="text-xl font-serif font-medium mb-3">How can I become a featured artisan?</h3>
                <p className="text-muted-foreground">
                  We're always looking to expand our artisan network. Visit our Artisans page and fill out the application form, and our team will reach out to learn more about your work.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter and map */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="max-w-md">
                  <h2 className="text-3xl font-serif font-semibold mb-6">
                    Stay Connected
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Subscribe to our newsletter for early access to new collections, artisan stories, and exclusive offers.
                  </p>
                  
                  <form className="space-y-4">
                    <div className="flex">
                      <input 
                        type="email" 
                        className="flex-grow rounded-l-md border border-input px-4 py-3 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                        placeholder="Your email address"
                      />
                      <button
                        type="submit"
                        className="bg-chen-brown text-white px-6 rounded-r-md hover:bg-chen-clay transition-colors flex items-center"
                      >
                        <MessageCircle size={18} className="mr-2" />
                        Subscribe
                      </button>
                    </div>
                    <div className="flex items-start gap-2 text-muted-foreground text-sm">
                      <CheckCircle2 size={16} className="mt-0.5 text-chen-brown flex-shrink-0" />
                      <span>By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.</span>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="h-96 relative rounded-xl overflow-hidden shadow-md">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.277444366407!2d36.8134533!3d-1.2833996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11155a893ddd%3A0x9dd769ac54717f23!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1685354335815!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
