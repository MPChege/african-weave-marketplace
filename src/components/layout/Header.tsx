
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingBag, User, Menu, X } from 'lucide-react';
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
  DialogHeader, 
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(2); // Mock data for demo
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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
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
        </nav>
        
        {/* Desktop Icons */}
        <div className="hidden md:flex items-center space-x-6">
          {/* Search Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="hover:text-chen-brown"
                aria-label="Search"
              >
                <Search size={20} />
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Search Products</DialogTitle>
              </DialogHeader>
              <div className="flex items-center space-x-2 py-4">
                <Input
                  placeholder="Search for products..."
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
                className="hover:text-chen-brown"
                aria-label="User account"
              >
                <User size={20} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                {isLoggedIn ? "My Account" : "Guest User"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {isLoggedIn ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/account">Account</Link>
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
                <DropdownMenuItem asChild>
                  <Link to="/sign-in">Sign In</Link>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          
          {/* Shopping Bag */}
          <Link 
            to="/cart" 
            className="hover:text-chen-brown relative"
            aria-label="Shopping bag"
          >
            <ShoppingBag size={20} />
            {cartItemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center bg-chen-brown text-white">
                {cartItemCount}
              </Badge>
            )}
          </Link>
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
        <div className="md:hidden fixed inset-0 z-50 glass-effect pt-20 px-6">
          <nav className="flex flex-col space-y-6 py-8">
            <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="/shop" onClick={() => setMobileMenuOpen(false)}>Shop</MobileNavLink>
            <MobileNavLink href="/artisans" onClick={() => setMobileMenuOpen(false)}>Artisans</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setMobileMenuOpen(false)}>About</MobileNavLink>
          </nav>
          
          <div className="flex justify-center pt-8 border-t border-chen-sand/30 mt-8">
            <Link 
              to="/cart" 
              className="p-4 rounded-full hover:bg-chen-sand/20 relative" 
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
    className="text-sm font-medium hover:text-chen-brown"
  >
    {children}
  </Link>
);

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick?: () => void, children: React.ReactNode }) => (
  <Link 
    to={href} 
    className="text-xl font-serif font-medium block px-2 py-1"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Header;
