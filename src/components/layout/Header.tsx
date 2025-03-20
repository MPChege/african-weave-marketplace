
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X, LogOut, Settings, Heart, UserCircle } from 'lucide-react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

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
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [userMenuOpen]);

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
          <button 
            className="transition-all duration-300 hover:text-chen-brown"
            aria-label="Search"
          >
            <Search size={20} />
          </button>
          
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
                  <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-chen-sand/10 transition-colors">
                    <UserCircle size={16} className="mr-3 text-chen-brown" />
                    Sign In / Register
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-chen-sand/10 transition-colors">
                    <Heart size={16} className="mr-3 text-chen-brown" />
                    Wishlist
                  </a>
                  <a href="#" className="flex items-center px-4 py-2 text-sm hover:bg-chen-sand/10 transition-colors">
                    <Settings size={16} className="mr-3 text-chen-brown" />
                    Account Settings
                  </a>
                </div>
                
                <div className="py-1 border-t border-gray-100">
                  <a href="#" className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                    <LogOut size={16} className="mr-3" />
                    Sign Out
                  </a>
                </div>
              </div>
            )}
          </div>
          
          <button 
            className="transition-all duration-300 hover:text-chen-brown"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
          </button>
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
            <button className="p-4 rounded-full transition-all hover:bg-chen-sand/20" aria-label="Search">
              <Search size={24} />
            </button>
            <button className="p-4 rounded-full transition-all hover:bg-chen-sand/20" aria-label="User account">
              <User size={24} />
            </button>
            <button className="p-4 rounded-full transition-all hover:bg-chen-sand/20" aria-label="Shopping bag">
              <ShoppingBag size={24} />
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
