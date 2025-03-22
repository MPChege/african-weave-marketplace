
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, Heart, Gift } from 'lucide-react';
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(2); // Mock data for demo
  const [wishlistCount, setWishlistCount] = useState(3); // Mock data for demo
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock state for auth

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "glass-effect shadow-sm" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-serif font-bold tracking-tight">
          Chen Charis
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/shop">Shop</NavLink>
          <NavLink href="/artisans">Artisans</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Dialog */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger asChild>
              <button 
                className="transition-all duration-300 hover:text-chen-brown"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Search Products</DialogTitle>
                <DialogDescription>
                  Find beautiful handcrafted items from our collection
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center space-x-2 py-4">
                <Input
                  placeholder="Search for bags, blankets, decor..."
                  className="flex-1"
                />
                <Button type="submit">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </DialogContent>
          </Dialog>
          
          {/* User Account Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="transition-all duration-300 hover:text-chen-brown"
                aria-label="User account"
              >
                <User size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                {isLoggedIn ? "My Account" : "Guest User"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {isLoggedIn ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/account">Account Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/orders">My Orders</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <button 
                      className="w-full text-left"
                      onClick={() => setIsLoggedIn(false)}
                    >
                      Sign Out
                    </button>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/sign-in">Sign In / Register</Link>
                  </DropdownMenuItem>
                  <DropdownMenuLabel className="text-xs text-muted-foreground">
                    Sign in to access your account
                  </DropdownMenuLabel>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Wishlist */}
          <Link 
            to="/wishlist" 
            className="transition-all duration-300 hover:text-chen-brown relative"
            aria-label="Wishlist"
          >
            <Heart size={20} />
            {wishlistCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-chen-terracotta text-white">
                {wishlistCount}
              </Badge>
            )}
          </Link>
          
          {/* Gift Item */}
          <Link 
            to="/gift" 
            className="transition-all duration-300 hover:text-chen-brown"
            aria-label="Gift cards"
          >
            <Gift size={20} />
          </Link>
          
          {/* Shopping Bag */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button 
                className="transition-all duration-300 hover:text-chen-brown relative"
                aria-label="Shopping bag"
              >
                <ShoppingBag size={20} />
                {cartItemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-chen-brown text-white">
                    {cartItemCount}
                  </Badge>
                )}
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-72">
              <DropdownMenuLabel>Shopping Cart</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {cartItemCount > 0 ? (
                <>
                  <div className="p-4 space-y-4 max-h-60 overflow-auto">
                    <MiniCartItem 
                      name="Woven Basket Bag" 
                      price={79.99} 
                      image="https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=120&h=120&auto=format" 
                    />
                    <MiniCartItem 
                      name="Kente Inspired Throw" 
                      price={129.99} 
                      image="https://images.unsplash.com/photo-1615529151169-7b1d8a6b2434?w=120&h=120&auto=format" 
                    />
                  </div>
                  <DropdownMenuSeparator />
                  <div className="p-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-medium">Subtotal:</span>
                      <span className="font-bold">${(79.99 + 129.99).toFixed(2)}</span>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Button asChild>
                        <Link to="/cart">View Cart</Link>
                      </Button>
                      <Button asChild variant="outline">
                        <Link to="/checkout">Checkout</Link>
                      </Button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="p-4 text-center">
                  <p className="mb-4">Your cart is empty</p>
                  <Button asChild variant="outline">
                    <Link to="/shop">Continue Shopping</Link>
                  </Button>
                </div>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 glass-effect pt-20 px-6 animate-fade-in">
          <nav className="flex flex-col space-y-6 py-8">
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</MobileNavLink>
            <MobileNavLink href="/artisans" onClick={() => setMobileMenuOpen(false)}>Artisans</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</MobileNavLink>
          </nav>
          
          <div className="flex justify-around pt-8 border-t border-chen-sand/30 mt-8">
            {/* Mobile Search */}
            <Dialog>
              <DialogTrigger asChild>
                <button className="p-4 rounded-full transition-all hover:bg-chen-sand/20" aria-label="Search">
                  <Search size={24} />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Search Products</DialogTitle>
                </DialogHeader>
                <div className="flex items-center space-x-2 py-4">
                  <Input
                    placeholder="Search for bags, blankets, decor..."
                    className="flex-1"
                  />
                  <Button type="submit">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            
            {/* Mobile Account */}
            <button 
              className="p-4 rounded-full transition-all hover:bg-chen-sand/20" 
              aria-label="User account"
              onClick={() => isLoggedIn ? setIsLoggedIn(false) : setMobileMenuOpen(false)}
            >
              <User size={24} />
            </button>
            
            {/* Mobile Cart */}
            <Link 
              to="/cart" 
              className="p-4 rounded-full transition-all hover:bg-chen-sand/20 relative" 
              aria-label="Shopping bag"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingBag size={24} />
              {cartItemCount > 0 && (
                <Badge className="absolute top-2 right-2 h-5 w-5 p-0 flex items-center justify-center bg-chen-brown text-white">
                  {cartItemCount}
                </Badge>
              )}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <Link 
    to={href} 
    className="text-sm font-medium transition-all hover:text-chen-brown underline-animation"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick?: () => void, children: React.ReactNode }) => (
  <Link 
    to={href} 
    className="text-xl font-serif font-medium tracking-wide block transition-all px-2 py-1"
    onClick={onClick}
  >
    {children}
  </Link>
);

// Mini cart item component
const MiniCartItem = ({ name, price, image }: { name: string, price: number, image: string }) => (
  <div className="flex items-center space-x-3">
    <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md" />
    <div className="flex-1">
      <h4 className="text-sm font-medium">{name}</h4>
      <p className="text-sm text-muted-foreground">1 × ${price.toFixed(2)}</p>
    </div>
    <button className="text-muted-foreground hover:text-destructive transition-colors">
      <X size={16} />
    </button>
  </div>
);

export default Header;
