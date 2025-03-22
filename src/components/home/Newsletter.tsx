
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    if (email) {
      setEmail('');
      // Add submission logic here
    }
  };

  return (
    <section className="py-16 px-6 bg-chen-brown text-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-serif font-bold mb-4">
          Stay Connected
        </h2>
        <p className="text-white/90 mb-8">
          Subscribe to our newsletter for early access to new collections and exclusive offers.
        </p>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
            required
          />
          <Button type="submit" className="bg-white text-chen-brown hover:bg-white/90">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
