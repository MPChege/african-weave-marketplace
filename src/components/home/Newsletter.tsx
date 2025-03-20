
import React, { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { toast } from "sonner";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Thank you for subscribing to our newsletter!");
      setEmail('');
      
      // Reset the success state after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-br from-chen-brown/5 to-chen-terracotta/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
          Join Our Community
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive updates, artisan stories, and early access to new collections.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex items-center p-1 bg-white border border-chen-brown/20 rounded-full shadow-sm focus-within:ring-1 focus-within:ring-chen-brown focus-within:border-chen-brown">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="flex-1 p-3 bg-transparent border-none focus:outline-none text-sm md:text-base"
              disabled={isSubmitting || isSubmitted}
            />
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="ml-1 py-3 px-5 md:px-6 bg-chen-brown text-white rounded-full transition-all hover:bg-chen-clay disabled:opacity-70 flex items-center justify-center min-w-[100px]"
            >
              {isSubmitting ? (
                <span className="animate-pulse">Sending...</span>
              ) : isSubmitted ? (
                <>
                  <Check size={16} className="mr-1" />
                  Subscribed
                </>
              ) : (
                <>
                  Subscribe
                  <ArrowRight size={16} className="ml-2" />
                </>
              )}
            </button>
          </div>
        </form>
        
        <p className="text-xs text-muted-foreground/70 mt-4">
          By subscribing, you agree to our privacy policy and consent to receive marketing updates.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
