
import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-chen-clay/90 to-chen-brown">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="md:w-1/2 text-white">
            <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-medium tracking-wider uppercase rounded-full mb-4">
              Stay Connected
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
              Join Our Community of African Art Enthusiasts
            </h2>
            <p className="text-white/90 text-lg mb-6 max-w-lg">
              Subscribe to our newsletter for early access to new collections, artisan stories, and exclusive offers. We celebrate the rich tapestry of African craftsmanship in every email.
            </p>
            
            {/* Benefits list */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-chen-gold/20 flex items-center justify-center mr-3">
                  <CheckCircle size={14} className="text-chen-gold" />
                </div>
                <span>First access to limited edition pieces</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-chen-gold/20 flex items-center justify-center mr-3">
                  <CheckCircle size={14} className="text-chen-gold" />
                </div>
                <span>Stories behind the artisans and their craft</span>
              </div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-chen-gold/20 flex items-center justify-center mr-3">
                  <CheckCircle size={14} className="text-chen-gold" />
                </div>
                <span>Exclusive subscriber-only discounts</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 max-w-md w-full">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-serif font-semibold mb-4 text-chen-brown">
                Subscribe to Our Newsletter
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1" />
                    <span className="text-sm text-gray-600">
                      I agree to receive marketing emails and can unsubscribe at any time.
                    </span>
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-chen-brown text-white font-medium rounded-md hover:bg-chen-clay transition-colors flex items-center justify-center"
                >
                  <Send size={18} className="mr-2" />
                  Subscribe Now
                </button>
                
                {status === 'success' && (
                  <div className="flex items-center p-3 rounded-md bg-green-50 text-green-700">
                    <CheckCircle size={16} className="mr-2 flex-shrink-0" />
                    <span>Thank you for subscribing!</span>
                  </div>
                )}
                
                {status === 'error' && (
                  <div className="flex items-center p-3 rounded-md bg-red-50 text-red-700">
                    <AlertCircle size={16} className="mr-2 flex-shrink-0" />
                    <span>Please enter a valid email address.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
