
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowRight, MapPin, Instagram, Globe, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

const artisans = [
  {
    id: "1",
    name: "Amara Diop",
    location: "Dakar, Senegal",
    specialty: "Basket Weaving & Textile Art",
    bio: "With over 20 years of experience in basket weaving, Amara creates intricate designs that blend traditional Senegalese techniques with contemporary aesthetics.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?q=80&w=500&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582738411685-2516b4d3cde3?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=400&auto=format&fit=crop"
    ],
    featured: true
  },
  {
    id: "2",
    name: "Ibrahim Okafor",
    location: "Lagos, Nigeria",
    specialty: "Leather Crafting",
    bio: "Ibrahim combines traditional Nigerian leather techniques with modern designs, creating bags that honor his heritage while appealing to contemporary tastes.",
    image: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?q=80&w=500&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1613766259482-3958421877ac?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1546938576-04917ec516ee?q=80&w=400&auto=format&fit=crop"
    ],
    featured: false
  },
  {
    id: "3",
    name: "Nala Mensah",
    location: "Accra, Ghana",
    specialty: "Kente Cloth Weaving",
    bio: "Nala is a fourth-generation Kente weaver who has dedicated her life to preserving traditional Ghanaian weaving techniques while introducing innovative patterns.",
    image: "https://images.unsplash.com/photo-1567037786340-0a88621c2475?q=80&w=500&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1565333280022-40b2f2c14ca8?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1612598648930-504c23e2e761?q=80&w=400&auto=format&fit=crop"
    ],
    featured: true
  },
  {
    id: "4",
    name: "Malik Abdallah",
    location: "Marrakech, Morocco",
    specialty: "Berber Textiles",
    bio: "Malik creates hand-woven Berber blankets and rugs using traditional Atlas Mountain techniques passed down through generations in his family.",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=500&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1616048056617-93b94a339009?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600166898405-da9535204843?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1529113241001-b495badd8d44?q=80&w=400&auto=format&fit=crop"
    ],
    featured: false
  },
  {
    id: "5",
    name: "Zara Kimathi",
    location: "Nairobi, Kenya",
    specialty: "Beadwork & Jewelry",
    bio: "Zara's intricate beadwork celebrates Maasai traditions while creating contemporary accessories that have been featured in international fashion magazines.",
    image: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?q=80&w=500&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1549236177-97d455c2a9e2?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561046257-77587134944e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop"
    ],
    featured: true
  },
  {
    id: "6",
    name: "Simone N'Diaye",
    location: "Bamako, Mali",
    specialty: "Mud Cloth (Bogolan) Textiles",
    bio: "Simone has revitalized the ancient art of Bogolan mud cloth dyeing, creating sophisticated textiles that tell stories of her Malian heritage.",
    image: "https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&w=500&auto=format&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1584282617200-32f377e493ef?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1629397685944-9b5f12456502?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606297893531-2e05c86a0940?q=80&w=400&auto=format&fit=crop"
    ],
    featured: false
  }
];

const ArtisanCard = ({ artisan, featured = false }: { artisan: typeof artisans[0], featured?: boolean }) => {
  return (
    <div className={cn(
      "group relative flex flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-lg",
      featured ? "md:col-span-2" : ""
    )}>
      <div className={cn(
        "relative overflow-hidden",
        featured ? "md:flex md:h-full" : "h-64"
      )}>
        <div className={cn(
          "relative h-full",
          featured ? "md:w-1/2" : "w-full"
        )}>
          <img 
            src={artisan.image} 
            alt={artisan.name} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <div className="absolute bottom-0 left-0 p-4 text-white">
            <div className="flex items-center mb-2">
              <MapPin size={16} className="mr-1" />
              <span className="text-sm">{artisan.location}</span>
            </div>
            <h3 className="text-xl md:text-2xl font-serif font-semibold">{artisan.name}</h3>
            <p className="text-sm text-white/80">{artisan.specialty}</p>
          </div>
        </div>
        
        <div className={cn(
          "p-5",
          featured ? "md:w-1/2 md:p-8" : ""
        )}>
          <div className="mb-4">
            <span className="text-xs font-medium text-chen-brown uppercase tracking-wider">Artisan</span>
            <h4 className="text-lg font-serif font-medium mt-1">{artisan.name}</h4>
          </div>
          
          <p className="text-muted-foreground mb-6 line-clamp-3 md:line-clamp-none">{artisan.bio}</p>
          
          <div className="flex space-x-2 mb-6">
            <button className="p-2 text-chen-brown border border-chen-brown/20 rounded-full hover:bg-chen-brown hover:text-white transition-colors">
              <Instagram size={18} />
            </button>
            <button className="p-2 text-chen-brown border border-chen-brown/20 rounded-full hover:bg-chen-brown hover:text-white transition-colors">
              <Globe size={18} />
            </button>
            <button className="p-2 text-chen-brown border border-chen-brown/20 rounded-full hover:bg-chen-brown hover:text-white transition-colors">
              <MessageCircle size={18} />
            </button>
          </div>
          
          {featured && (
            <div className="hidden md:grid grid-cols-3 gap-2">
              {artisan.portfolio.map((image, index) => (
                <div key={index} className="overflow-hidden rounded-md aspect-square bg-chen-sand/20">
                  <img src={image} alt="Portfolio piece" className="h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
          
          <a 
            href={`/artisan/${artisan.id}`} 
            className="inline-flex items-center mt-4 text-chen-brown font-medium underline-animation"
          >
            View Profile <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Artisans = () => {
  return (
    <div className="min-h-screen bg-[#fcf9f6]">
      <Header />
      
      <main>
        {/* Hero section */}
        <section className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="https://cdn.coverr.co/videos/coverr-woman-weaving-a-basket-5745/1080p.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          
          <div className="relative z-20 h-full flex flex-col justify-center px-4 max-w-7xl mx-auto">
            <div className="max-w-2xl">
              <div className="inline-block px-4 py-1.5 bg-chen-gold text-white text-xs uppercase tracking-widest rounded-full mb-6 animate-fade-in">
                The Heart Of Our Marketplace
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                Meet Our Talented Artisans
              </h1>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Discover the skilled craftspeople behind our exceptional products, each with generations of knowledge and a unique artistic vision.
              </p>
            </div>
          </div>
        </section>
        
        {/* Artisans introduction */}
        <section className="py-20 px-4 max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-6">
              Celebrating African Craftsmanship
            </h2>
            <div className="w-20 h-1 bg-chen-gold mx-auto mb-6 rounded-full"></div>
            <p className="text-lg text-muted-foreground">
              Our artisans represent diverse traditions from across Africa, each bringing unique skills and cultural heritage to their craft. By supporting them, you're helping preserve traditional techniques and provide sustainable livelihoods for their communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artisans.map((artisan, index) => (
              <ArtisanCard
                key={artisan.id}
                artisan={artisan}
                featured={index % 5 === 0}
              />
            ))}
          </div>
        </section>
        
        {/* Artisan application */}
        <section className="py-20 px-4 bg-chen-sand/20">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1622428051717-dcd9565f9305?q=80&w=700&auto=format&fit=crop" 
                  alt="Artisan crafting a basket" 
                  className="w-full h-full object-cover aspect-square lg:aspect-auto lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <blockquote className="text-xl font-serif italic">
                    "Being part of Chen Charts has allowed me to share my craft with the world while supporting my family and community."
                  </blockquote>
                  <p className="mt-4">— Nala Mensah, Kente Weaver</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-chen-terracotta hidden lg:block"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-chen-brown/10 hidden lg:block"></div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl md:text-3xl font-serif font-semibold mb-4">
                  Join Our Artisan Community
                </h3>
                <p className="text-muted-foreground mb-6">
                  Are you an artisan working with traditional African techniques? We'd love to showcase your craft on Chen Charts and help you reach a global audience.
                </p>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full rounded-md border border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full rounded-md border border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="specialty" className="block text-sm font-medium mb-1">
                      Craft Specialty
                    </label>
                    <input 
                      type="text" 
                      id="specialty" 
                      className="w-full rounded-md border border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                      placeholder="e.g., Basket Weaving, Textile Art"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">
                      Tell Us About Your Work
                    </label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full rounded-md border border-input px-3 py-2 focus:outline-none focus:ring-2 focus:ring-chen-brown"
                      placeholder="Share your experience, techniques, and the story behind your craft..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-3 bg-chen-brown text-white font-medium rounded-md hover:bg-chen-clay transition-colors"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Artisans;
