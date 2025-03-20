
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <button 
            className="transition-all duration-300 hover:text-chen-brown"
            aria-label="User account"
          >
            <User size={20} />
          </button>
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
