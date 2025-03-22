
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chen-slate text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium mb-6">Chen Charis</h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              Connecting the world to authentic African craftsmanship through sustainable and ethical marketplace solutions.
            </p>
            <div className="flex space-x-4 pt-4">
              <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Facebook size={20} />} label="Facebook" />
              <SocialLink href="#" icon={<Twitter size={20} />} label="Twitter" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-serif mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/shop">Shop All</FooterLink>
              <FooterLink href="/about">Our Story</FooterLink>
              <FooterLink href="/artisans">Artisans</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-serif mb-6">Categories</h4>
            <ul className="space-y-3">
              <FooterLink href="/category/bags">Handwoven Bags</FooterLink>
              <FooterLink href="/category/blankets">Textured Blankets</FooterLink>
              <FooterLink href="/category/decor">Home Decor</FooterLink>
              <FooterLink href="/category/wearables">Wearable Art</FooterLink>
              <FooterLink href="/category/gifts">Gift Items</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-white/80">123 Marketplace Ave, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:hello@chencharts.com" className="text-sm text-white/80 hover:text-white transition-colors">
                  hello@chencharts.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+254123456789" className="text-sm text-white/80 hover:text-white transition-colors">
                  +254 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-white/60 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Chen Charis. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping" className="text-sm text-white/60 hover:text-white transition-colors">
              Shipping Info
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={href} 
      className="text-sm text-white/80 hover:text-white transition-colors"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
  <a 
    href={href} 
    aria-label={label}
    className="bg-white/10 hover:bg-white/20 transition-colors p-2 rounded-full"
  >
    {icon}
  </a>
);

export default Footer;
