
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Filter, SlidersHorizontal, Grid3X3, List, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import ProductCard from '@/components/ui/ProductCard';

// Sample product data
const products = [
  {
    id: "1",
    name: "Handwoven Sisal Basket Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop",
    artisan: "Amara Crafts",
    region: "Kenya"
  },
  {
    id: "2",
    name: "Mud Cloth Pattern Blanket",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?q=80&w=500&auto=format&fit=crop",
    artisan: "Mali Textiles",
    region: "Mali"
  },
  {
    id: "3",
    name: "Kente Inspired Tote Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=500&auto=format&fit=crop",
    artisan: "Accra Artisans",
    region: "Ghana"
  },
  {
    id: "4",
    name: "Berber Wool Throw Blanket",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1616048056617-93b94a339009?q=80&w=500&auto=format&fit=crop",
    artisan: "Atlas Weavers",
    region: "Morocco"
  },
  {
    id: "5",
    name: "Leather and Beaded Clutch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=500&auto=format&fit=crop",
    artisan: "Maasai Collection",
    region: "Tanzania"
  },
  {
    id: "6",
    name: "Ndebele Pattern Throw",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1612363228106-c388bd0de644?q=80&w=500&auto=format&fit=crop",
    artisan: "Ubuntu Crafts",
    region: "South Africa"
  },
  {
    id: "7",
    name: "Handcrafted Raffia Beach Bag",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1588272947905-10a9a5574beb?q=80&w=500&auto=format&fit=crop",
    artisan: "Tropical Artisans",
    region: "Madagascar"
  },
  {
    id: "8",
    name: "Bogolan Print Cushion Cover",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1584282617200-32f377e493ef?q=80&w=500&auto=format&fit=crop",
    artisan: "Bamako Handcrafts",
    region: "Mali"
  },
  {
    id: "9",
    name: "Tuareg Leather Shoulder Bag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?q=80&w=500&auto=format&fit=crop",
    artisan: "Sahara Leatherworks",
    region: "Niger"
  },
  {
    id: "10",
    name: "Ethiopian Cotton Bedspread",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=500&auto=format&fit=crop",
    artisan: "Addis Textiles",
    region: "Ethiopia"
  }
];

const categories = [
  "All Products", "Bags", "Blankets", "Cushion Covers", "Beach Accessories", "Home Decor"
];

const regions = [
  "All Regions", "East Africa", "West Africa", "North Africa", "South Africa", "Central Africa"
];

type ViewMode = 'grid' | 'list';

const Shop = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [priceRange, setPriceRange] = useState([0, 300]);

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f6]">
      <Header />
      
      <main className="flex-grow">
        {/* Hero section with improved background image */}
        <div className="relative h-[40vh] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-chen-brown/80 to-chen-brown/50" />
          <img 
            src="https://images.unsplash.com/photo-1603915141233-edd34904dd59?q=80&w=1920&auto=format&fit=crop" 
            alt="African artisan marketplace" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl">
              <div className="animate-fade-in">
                <div className="mb-4 inline-block px-4 py-1.5 bg-chen-gold text-white text-xs uppercase tracking-widest rounded-full">
                  Authentic African Craftsmanship
                </div>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                  Explore Our Collection
                </h1>
                <p className="text-white/90 text-lg max-w-2xl mx-auto">
                  Each piece tells a story of cultural heritage and skilled artisanship from across the African continent.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main shop content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Shop controls */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
            <div>
              <h2 className="text-2xl font-serif font-semibold">African Handicrafts</h2>
              <p className="text-muted-foreground">Showing all {products.length} results</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center px-3 py-2 bg-white border border-chen-brown/20 rounded-md hover:bg-chen-sand/10 transition-colors"
              >
                <Filter size={16} className="mr-2 text-chen-brown" />
                <span className="text-sm font-medium">Filters</span>
              </button>
              
              <div className="flex items-center border border-chen-brown/20 rounded-md overflow-hidden">
                <button 
                  onClick={() => setViewMode('grid')}
                  className={cn(
                    "p-2 transition-colors",
                    viewMode === 'grid' ? "bg-chen-brown text-white" : "bg-white text-chen-brown hover:bg-chen-sand/10"
                  )}
                  aria-label="Grid view"
                >
                  <Grid3X3 size={16} />
                </button>
                <button 
                  onClick={() => setViewMode('list')}
                  className={cn(
                    "p-2 transition-colors",
                    viewMode === 'list' ? "bg-chen-brown text-white" : "bg-white text-chen-brown hover:bg-chen-sand/10"
                  )}
                  aria-label="List view"
                >
                  <List size={16} />
                </button>
              </div>
              
              <div className="hidden lg:block">
                <select 
                  className="text-sm border border-chen-brown/20 rounded-md px-3 py-2 bg-white focus:outline-none focus:ring-1 focus:ring-chen-brown"
                  defaultValue="newest"
                >
                  <option value="newest">Newest First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="popular">Most Popular</option>
                </select>
              </div>
            </div>
          </div>
          
          {/* Filters panel - Mobile */}
          <div className={cn(
            "fixed inset-0 bg-white z-50 overflow-auto transition-transform duration-300 transform lg:hidden",
            filtersOpen ? "translate-x-0" : "translate-x-full"
          )}>
            <div className="p-4 border-b">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-xl font-semibold">Filters</h3>
                <button 
                  onClick={() => setFiltersOpen(false)}
                  className="p-2 rounded-full hover:bg-muted transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Category filter */}
              <div>
                <h4 className="font-medium mb-3">Category</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                        selectedCategory === category 
                          ? "bg-chen-brown text-white" 
                          : "hover:bg-chen-sand/10"
                      )}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Region filter */}
              <div>
                <h4 className="font-medium mb-3">Region</h4>
                <div className="space-y-2">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => setSelectedRegion(region)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                        selectedRegion === region 
                          ? "bg-chen-brown text-white" 
                          : "hover:bg-chen-sand/10"
                      )}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Price filter */}
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="px-2">
                  <div className="flex items-center justify-between text-sm mb-6">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  {/* Add a price slider here */}
                </div>
              </div>
              
              <div className="pt-4 flex space-x-4">
                <button className="w-full py-2 bg-chen-brown text-white rounded-md hover:bg-chen-clay transition-colors">
                  Apply Filters
                </button>
                <button className="px-4 py-2 border border-chen-brown/20 rounded-md hover:bg-chen-sand/10 transition-colors">
                  Reset
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Desktop sidebar filters */}
            <div className="hidden lg:block w-64 shrink-0">
              <div className="space-y-8 sticky top-24">
                {/* Category filter */}
                <div>
                  <h4 className="font-medium mb-3 font-serif">Category</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                          selectedCategory === category 
                            ? "bg-chen-brown text-white" 
                            : "hover:bg-chen-sand/10"
                        )}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Region filter */}
                <div>
                  <h4 className="font-medium mb-3 font-serif">Region</h4>
                  <div className="space-y-2">
                    {regions.map((region) => (
                      <button
                        key={region}
                        onClick={() => setSelectedRegion(region)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-md text-sm transition-colors",
                          selectedRegion === region 
                            ? "bg-chen-brown text-white" 
                            : "hover:bg-chen-sand/10"
                        )}
                      >
                        {region}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Price filter */}
                <div>
                  <h4 className="font-medium mb-3 font-serif">Price Range</h4>
                  <div className="px-2">
                    <div className="flex items-center justify-between text-sm mb-6">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                    {/* Add a price slider here */}
                  </div>
                </div>
                
                <div className="pt-4 space-y-3">
                  <button className="w-full py-2 bg-chen-brown text-white rounded-md hover:bg-chen-clay transition-colors">
                    Apply Filters
                  </button>
                  <button className="w-full py-2 border border-chen-brown/20 rounded-md hover:bg-chen-sand/10 transition-colors">
                    Reset
                  </button>
                </div>
              </div>
            </div>
            
            {/* Products grid */}
            <div className="flex-grow">
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
                  {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {products.map((product) => (
                    <div 
                      key={product.id} 
                      className="flex flex-col sm:flex-row gap-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="sm:w-40 h-40 bg-gray-100 rounded-md overflow-hidden">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-grow flex flex-col">
                        <div className="mb-2">
                          <span className="text-xs text-chen-brown/80 uppercase tracking-wider">
                            {product.artisan} • {product.region}
                          </span>
                        </div>
                        <h3 className="font-serif text-lg font-medium mb-2">{product.name}</h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                          Handcrafted by skilled artisans using traditional techniques passed down through generations.
                        </p>
                        <div className="mt-auto flex items-center justify-between">
                          <span className="text-lg font-medium">${product.price.toFixed(2)}</span>
                          <button className="px-4 py-2 bg-chen-brown text-white rounded-md hover:bg-chen-clay transition-colors">
                            Add to Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shop;
