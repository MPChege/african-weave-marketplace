
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronLeft, ShoppingBag, Heart, Share2, Star } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from "@/components/ui/use-toast";

// Sample products data - in a real app, this would come from an API
const productData = [
  {
    id: "1",
    name: "Handwoven Sisal Basket Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1617713964725-fe3270f3ad5f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Amara Crafts",
    region: "Kenya",
    description: "Meticulously handwoven by skilled artisans in Kenya, this sisal basket bag combines traditional craftsmanship with contemporary design. Each piece takes several days to complete, using sustainable sisal fibers harvested from local agave plants. The natural variations in color and texture make each bag unique, showcasing the artisan's dedication to preserving their cultural heritage while creating functional art.",
    materials: "Natural sisal fiber, Leather handles",
    dimensions: "12\" x 10\" x 6\"",
    rating: 4.8,
    reviews: 24,
    inStock: true
  },
  {
    id: "2",
    name: "Mud Cloth Pattern Blanket",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1614254301110-16396104928c?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Mali Textiles",
    region: "Mali",
    description: "This stunning blanket features authentic Bogolanfini (mud cloth) patterns, a traditional textile art form from Mali. Artisans hand-paint natural cotton with fermented mud and plant dyes using techniques passed down through generations. The intricate patterns tell unique stories of Malian culture and heritage. This blanket is not only a practical home accent but also a meaningful piece of living history and cultural artistry.",
    materials: "100% organic cotton, Natural dyes",
    dimensions: "72\" x 54\"",
    rating: 4.9,
    reviews: 36,
    inStock: true
  },
  // Add the remaining products with detailed information
  {
    id: "3",
    name: "Kente Inspired Tote Bag",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616048056617-93b94a339009?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Accra Artisans",
    region: "Ghana",
    description: "This beautiful tote bag draws inspiration from Ghana's famous Kente cloth patterns, symbolizing wealth, royalty, and cultural pride. Hand-woven by skilled artisans in Accra, each bag features vibrant colors and geometric designs that reflect traditional Ashanti weaving techniques. Perfect for everyday use, this bag connects you to Ghana's rich textile heritage while making a bold fashion statement.",
    materials: "Cotton canvas, Leather trim",
    dimensions: "16\" x 14\" x 4\"",
    rating: 4.7,
    reviews: 18,
    inStock: true
  },
  {
    id: "4",
    name: "Berber Wool Throw Blanket",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1616048056617-93b94a339009?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1616048056617-93b94a339009?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1615875699536-964347041d7e?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584282625964-8ce715eab97d?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Atlas Weavers",
    region: "Morocco",
    description: "This authentic Berber throw blanket is hand-woven by skilled artisans in the Atlas Mountains of Morocco. Made from 100% natural wool, the blanket features traditional Berber patterns and symbols with cultural significance. Each one takes several weeks to complete using techniques that have remained unchanged for centuries. The soft, warm wool and timeless design make it both a functional home accessory and a piece of living heritage.",
    materials: "100% natural wool",
    dimensions: "60\" x 50\"",
    rating: 4.9,
    reviews: 42,
    inStock: true
  },
  {
    id: "5",
    name: "Leather and Beaded Clutch",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594761211375-c1fbf01e0876?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1628602040037-6b03f2774512?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Maasai Collection",
    region: "Tanzania",
    description: "This elegant clutch showcases the exceptional beadwork of Maasai artisans in Tanzania. Each piece is hand-crafted using locally sourced leather and glass beads, with intricate patterns that reflect Maasai cultural symbols and storytelling. The vibrant colors and precise beadwork demonstrate the incredible skill developed through generations of artisanal practice. This clutch serves as both a fashion statement and a celebration of East African cultural heritage.",
    materials: "Genuine leather, Glass beads",
    dimensions: "10\" x 6\"",
    rating: 4.8,
    reviews: 29,
    inStock: true
  },
  {
    id: "6",
    name: "Ndebele Pattern Throw",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1612363228106-c388bd0de644?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1612363228106-c388bd0de644?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578647038391-acc0f16d3c19?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1596900779453-e144ead3f354?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Ubuntu Crafts",
    region: "South Africa",
    description: "This beautiful throw features patterns inspired by the Ndebele people's distinctive geometric art form from South Africa. Crafted by artisans preserving this important cultural tradition, each throw showcases bold, symmetric designs in vibrant colors that tell stories of cultural identity and community heritage. The cotton blend provides both comfort and durability, making this piece both a functional home accent and a celebration of South African artistic tradition.",
    materials: "Cotton blend",
    dimensions: "65\" x 45\"",
    rating: 4.7,
    reviews: 23,
    inStock: true
  },
  {
    id: "7",
    name: "Handcrafted Raffia Beach Bag",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1588272947905-10a9a5574beb?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1588272947905-10a9a5574beb?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611761251273-196f987aa424?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Tropical Artisans",
    region: "Madagascar",
    description: "This stylish beach bag is handcrafted by artisans in Madagascar using sustainable raffia palm fibers. The traditional weaving techniques create a durable, water-resistant bag perfect for beach days or summer outings. Each bag takes several days to complete, with the natural variations in the raffia creating unique texture and character. By supporting this product, you're helping to preserve traditional craftsmanship while providing sustainable income for skilled artisans.",
    materials: "Natural raffia palm fiber",
    dimensions: "18\" x 14\" x 6\"",
    rating: 4.6,
    reviews: 19,
    inStock: true
  },
  {
    id: "8",
    name: "Bogolan Print Cushion Cover",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1584282617200-32f377e493ef?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1584282617200-32f377e493ef?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584282617232-cf4a64f0fccc?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Bamako Handcrafts",
    region: "Mali",
    description: "This cushion cover features authentic Bogolan (mud cloth) prints, a traditional art form from Mali. Artisans hand-paint cotton fabric with fermented mud and natural dyes, creating patterns that each tell a unique story about Malian culture and history. The intricate symbols and geometric designs represent various aspects of community life and cultural wisdom. This cushion cover brings both artistic heritage and practical comfort to your living space.",
    materials: "100% cotton, Natural dyes",
    dimensions: "18\" x 18\"",
    rating: 4.8,
    reviews: 31,
    inStock: true
  },
  {
    id: "9",
    name: "Tuareg Leather Shoulder Bag",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1606522754091-a3bbf9ad4cb3?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1554342872-034a06541387?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563904092230-7ec217b65fe2?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Sahara Leatherworks",
    region: "Niger",
    description: "This exquisite shoulder bag is crafted by Tuareg artisans from Niger using techniques passed down through generations. Made from high-quality camel leather that's been vegetable-tanned using traditional methods, the bag features distinctive Tuareg geometric tooling and embossing. The design reflects the nomadic heritage of the Tuareg people, with practical elements adapted for desert living. Each bag is a unique piece of functional art that will develop a beautiful patina over time.",
    materials: "Vegetable-tanned camel leather",
    dimensions: "12\" x 9\" x 3\"",
    rating: 4.9,
    reviews: 27,
    inStock: true
  },
  {
    id: "10",
    name: "Ethiopian Cotton Bedspread",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=500&auto=format&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627561839-074385245ff6?q=80&w=500&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584185705305-6064c8cc6f19?q=80&w=500&auto=format&fit=crop"
    ],
    artisan: "Addis Textiles",
    region: "Ethiopia",
    description: "This luxurious bedspread showcases Ethiopia's rich textile heritage with hand-woven organic cotton and traditional patterns. Crafted in small workshops in Addis Ababa, each piece takes over a week to complete on traditional looms using techniques preserved for centuries. The distinctive borders and subtle patterns reflect Ethiopian cultural motifs and symbols. This bedspread is both a practical luxury for your bedroom and an authentic connection to Ethiopia's magnificent textile traditions.",
    materials: "100% organic Ethiopian cotton",
    dimensions: "96\" x 90\"",
    rating: 5.0,
    reviews: 45,
    inStock: true
  }
];

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { toast } = useToast();

  useEffect(() => {
    // In a real app, you would fetch the product from an API
    // For now, we'll use our sample data
    const foundProduct = productData.find(p => p.id === id);
    
    // Simulate loading
    setTimeout(() => {
      setProduct(foundProduct || null);
      setLoading(false);
    }, 300);
  }, [id]);

  const handleAddToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product?.name} added to your cart`,
    });
  };

  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product?.name} added to your wishlist`,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-52 bg-chen-sand/30 rounded mb-4"></div>
            <div className="h-4 w-36 bg-chen-sand/20 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center px-6 py-32">
          <div className="text-center max-w-lg">
            <h1 className="text-4xl font-serif font-bold text-chen-brown mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              We couldn't find the product you're looking for. It might have been removed or is no longer available.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center px-6 py-3 bg-chen-brown text-white font-medium rounded-md hover:bg-chen-clay transition-all"
            >
              <ChevronLeft size={16} className="mr-2" />
              Back to Shop
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fcf9f6]">
      <Header />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-chen-brown">Home</Link>
              <span className="mx-2">/</span>
              <Link to="/shop" className="hover:text-chen-brown">Shop</Link>
              <span className="mx-2">/</span>
              <span className="text-chen-brown">{product.name}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-white">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex space-x-4 overflow-x-auto py-2">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative aspect-square w-20 rounded-md overflow-hidden flex-shrink-0 border-2 ${
                      selectedImage === index ? 'border-chen-brown' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <div className="text-sm font-medium text-chen-gold mb-2">
                  {product.artisan} • {product.region}
                </div>
                <h1 className="font-serif text-3xl font-semibold mb-2">{product.name}</h1>
                
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={`${
                          i < Math.floor(product.rating) ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
                        } ${i === Math.floor(product.rating) && product.rating % 1 > 0 ? 'text-yellow-500 fill-yellow-500' : ''}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm ml-2">{product.rating} ({product.reviews} reviews)</span>
                </div>
                
                <div className="text-2xl font-medium mb-4">${product.price.toFixed(2)}</div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg space-y-4 border border-chen-sand/20">
                <div>
                  <h3 className="font-medium">Materials</h3>
                  <p>{product.materials}</p>
                </div>
                
                <div>
                  <h3 className="font-medium">Dimensions</h3>
                  <p>{product.dimensions}</p>
                </div>
                
                <div className="pt-2">
                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                    {product.inStock ? 'In Stock' : 'Out of Stock'}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                <div className="flex items-center border border-chen-brown/20 rounded-md">
                  <button
                    className="px-3 py-2 text-chen-brown hover:bg-chen-sand/10"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-chen-brown/20">{quantity}</span>
                  <button
                    className="px-3 py-2 text-chen-brown hover:bg-chen-sand/10"
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                
                <Button 
                  className="flex-grow bg-chen-brown hover:bg-chen-clay text-white py-6" 
                  onClick={handleAddToCart}
                >
                  <ShoppingBag size={18} />
                  Add to Cart
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-chen-brown/20 hover:bg-chen-sand/10" 
                  onClick={handleAddToWishlist}
                  aria-label="Add to wishlist"
                >
                  <Heart size={18} />
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-chen-brown/20 hover:bg-chen-sand/10"
                  aria-label="Share product"
                >
                  <Share2 size={18} />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Product details tabs - In a full implementation, you would add tabs for description, reviews, etc. */}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
