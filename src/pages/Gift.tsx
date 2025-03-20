
import React from 'react';
import { Link } from 'react-router-dom';
import { Gift, Mail, CreditCard } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const GiftCard = ({ 
  amount, 
  image, 
  selected = false 
}: { 
  amount: number; 
  image: string; 
  selected?: boolean;
}) => (
  <div 
    className={`border-2 rounded-lg cursor-pointer transition-all overflow-hidden
      ${selected ? 'border-chen-brown ring-2 ring-chen-brown/20' : 'border-muted hover:border-chen-brown/40'}`}
  >
    <div className="relative aspect-[4/3] overflow-hidden">
      <img 
        src={image} 
        alt={`${amount} Gift Card`} 
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
        <div className="p-4 text-white">
          <span className="font-serif text-2xl font-semibold">${amount}</span>
        </div>
      </div>
    </div>
  </div>
);

const Gift = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-4">Gift Cards</h1>
            <p className="text-muted-foreground text-lg">
              Share the beauty of African craftsmanship with your loved ones
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-12">
                <div className="md:w-1/2">
                  <h2 className="text-xl font-medium mb-6">Select Amount</h2>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <GiftCard 
                      amount={25} 
                      image="https://images.unsplash.com/photo-1566903697446-43c553bd221e?q=80&w=300&auto=format&fit=crop" 
                    />
                    <GiftCard 
                      amount={50} 
                      image="https://images.unsplash.com/photo-1505236561745-0ffaaeb63818?q=80&w=300&auto=format&fit=crop" 
                    />
                    <GiftCard 
                      amount={100} 
                      image="https://images.unsplash.com/photo-1627046424184-45a111fd5284?q=80&w=300&auto=format&fit=crop" 
                      selected
                    />
                    <GiftCard 
                      amount={200} 
                      image="https://images.unsplash.com/photo-1591519124242-5b1e0f1b9ac7?q=80&w=300&auto=format&fit=crop" 
                    />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between bg-chen-sand/10 p-4 rounded-lg">
                      <span className="font-medium">Custom Amount</span>
                      <div className="flex items-center">
                        <span className="mr-2">$</span>
                        <input
                          type="number"
                          min="10"
                          max="500"
                          placeholder="Enter amount"
                          className="w-24 px-2 py-1 border rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-1/2">
                  <h2 className="text-xl font-medium mb-6">Recipient Information</h2>
                  
                  <form className="space-y-6">
                    <div className="space-y-3">
                      <label className="block text-sm font-medium">Recipient's Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Enter recipient's name"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-sm font-medium">Recipient's Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={16} />
                        <input
                          type="email"
                          className="w-full pl-10 pr-3 py-2 border rounded-md"
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-sm font-medium">Personal Message (Optional)</label>
                      <textarea
                        className="w-full px-3 py-2 border rounded-md"
                        rows={3}
                        placeholder="Add a personal message..."
                      ></textarea>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-sm font-medium">Delivery Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md"
                      />
                    </div>
                    
                    <Button className="w-full flex items-center justify-center">
                      <CreditCard className="mr-2" size={18} />
                      Purchase Gift Card
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-chen-sand/10 rounded-lg p-8">
            <div className="flex items-start gap-6">
              <div className="bg-chen-brown/10 p-3 rounded-full">
                <Gift className="text-chen-brown" size={24} />
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">How Gift Cards Work</h3>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Gift cards are delivered by email and contain instructions to redeem them at checkout.</li>
                  <li>Recipients can apply the gift card to any purchase on Chen Charts.</li>
                  <li>Gift cards do not expire and any unused balance remains on the recipient's account for future purchases.</li>
                  <li>For questions about gift cards, please visit our <Link to="/faq" className="text-chen-brown hover:underline">FAQ</Link> or <Link to="/contact" className="text-chen-brown hover:underline">contact us</Link>.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gift;
