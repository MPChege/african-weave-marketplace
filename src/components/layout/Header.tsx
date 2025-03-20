
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, LogOut, Settings, Heart, UserCircle, Gift } from 'lucide-react';
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toast } = useToast();

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

  // Close user menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (userMenuOpen && !target.closest('.user-menu-container')) {
        setUserMenuOpen(false);
      }
      if (cartOpen && !target.closest('.cart-container')) {
        setCartOpen(false);
      }
      if (searchOpen && !target.closest('.search-container')) {
        setSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen, cartOpen, searchOpen]);

  const handleLogin = () => {
    toast({
      title: "Authentication Coming Soon",
      description: "User login functionality will be available in the next update.",
    });
  };

  const handleWishlist = () => {
    toast({
      title: "Wishlist Coming Soon",
      description: "Wishlist functionality will be available in the next update.",
    });
  };

  const handleSettings = () => {
    toast({
      title: "Account Settings Coming Soon",
      description: "Account settings functionality will be available in the next update.",
    });
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search Results",
      description: "Search functionality will be fully implemented in the next update.",
    });
    setSearchOpen(false);
  };

  const handleGift = () => {
    toast({
      title: "Gift Cards",
      description: "Gift card purchasing will be available in the next update.",
    });
  };

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
          Chen Charts
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
          <div className="relative search-container">
            <button 
              className="transition-all duration-300 hover:text-chen-brown"
              onClick={() => setSearchOpen(!searchOpen)}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            
            {/* Search dropdown */}
            {searchOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg py-3 px-4 z-10 animate-in fade-in-50 slide-in-from-top-5">
                <form onSubmit={handleSearch}>
                  <div className="flex gap-2">
                    <Input 
                      type="text" 
                      placeholder="Search products..." 
                      className="flex-grow"
                      autoFocus
                    />
                    <Button type="submit" variant="default" size="sm">
                      <Search size={16} />
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </div>
          
          <div className="relative user-menu-container">
            <button 
              className={cn(
                "transition-all duration-300 hover:text-chen-brown",
                userMenuOpen && "text-chen-brown"
              )}
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              aria-label="User account"
            >
              <User size={20} />
            </button>
            
            {/* User dropdown menu */}
            {userMenuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 z-10 animate-in fade-in-50 slide-in-from-top-5">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium">Guest User</p>
                  <p className="text-xs text-gray-500 mt-1">Sign in to access your account</p>
                </div>
                
                <div className="py-1">
                  <button 
                    onClick={handleLogin}
                    className="flex w-full items-center px-4 py-2 text-sm hover:bg-chen-sand/10 transition-colors"
                  >
                    <UserCircle size={16} className="mr-3 text-chen-brown" />
                    Sign In / Register
                  </button>
                  <button 
                    onClick={handleWishlist}
                    className="flex w-full items-center px-4 py-2 text-sm hover:bg-chen-sand/10 transition-colors"
                  >
                    <Heart size={16} className="mr-3 text-chen-brown" />
                    Wishlist
                  </button>
                  <button 
                    onClick={handleSettings}
                    className="flex w-full items-center px-4 py-2 text-sm hover:bg-chen-sand/10 transition-colors"
                  >
                    <Settings size={16} className="mr-3 text-chen-brown" />
                    Account Settings
                  </button>
                </div>
                
                <div className="py-1 border-t border-gray-100">
                  <button
                    onClick={() => toast({
                      title: "Already signed out",
                      description: "You are not currently signed in.",
                    })}
                    className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut size={16} className="mr-3" />
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <button 
            className="transition-all duration-300 hover:text-chen-brown"
            onClick={handleGift}
            aria-label="Gift card"
          >
            <Gift size={20} />
          </button>
          
          <div className="relative cart-container">
            <button 
              className={cn(
                "transition-all duration-300 hover:text-chen-brown",
                cartOpen && "text-chen-brown"
              )}
              onClick={() => setCartOpen(!cartOpen)}
              aria-label="Shopping bag"
            >
              <ShoppingBag size={20} />
            </button>
            
            {/* Cart dropdown */}
            {cartOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg p-4 z-10 animate-in fade-in-50 slide-in-from-top-5">
                <h3 className="font-medium mb-3">Your Shopping Cart</h3>
                <div className="py-8 text-center text-muted-foreground">
                  <ShoppingBag className="mx-auto mb-3 text-muted-foreground/50" size={32} />
                  <p>Your cart is empty</p>
                  <p className="text-sm mt-1">Add items to get started</p>
                </div>
                <div className="mt-4 pt-3 border-t">
                  <Button className="w-full" disabled>Checkout</Button>
                  <div className="text-center mt-3">
                    <Link to="/shop" className="text-sm text-chen-brown hover:underline" onClick={() => setCartOpen(false)}>
                      Continue Shopping
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
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
          
          <div className="grid grid-cols-4 gap-4 pt-8 border-t border-chen-sand/30 mt-8">
            <button 
              className="p-4 rounded-full transition-all hover:bg-chen-sand/20 flex flex-col items-center" 
              aria-label="Search"
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
            >
              <Search size={24} />
              <span className="text-xs mt-1">Search</span>
            </button>
            <button 
              className="p-4 rounded-full transition-all hover:bg-chen-sand/20 flex flex-col items-center" 
              aria-label="User account"
              onClick={() => {
                setMobileMenuOpen(false);
                handleLogin();
              }}
            >
              <User size={24} />
              <span className="text-xs mt-1">Account</span>
            </button>
            <button 
              className="p-4 rounded-full transition-all hover:bg-chen-sand/20 flex flex-col items-center" 
              aria-label="Gift card"
              onClick={() => {
                setMobileMenuOpen(false);
                handleGift();
              }}
            >
              <Gift size={24} />
              <span className="text-xs mt-1">Gift</span>
            </button>
            <button 
              className="p-4 rounded-full transition-all hover:bg-chen-sand/20 flex flex-col items-center" 
              aria-label="Shopping bag"
              onClick={() => {
                setMobileMenuOpen(false);
                setCartOpen(true);
              }}
            >
              <ShoppingBag size={24} />
              <span className="text-xs mt-1">Cart</span>
            </button>
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

export default Header;
