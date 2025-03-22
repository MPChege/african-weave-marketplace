
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-chen-slate text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif font-medium mb-4">Chen Charis</h3>
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              Connecting the world to authentic African craftsmanship through sustainable marketplace solutions.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-lg font-serif mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink href="/shop">Shop All</FooterLink>
              <FooterLink href="/about">Our Story</FooterLink>
              <FooterLink href="/artisans">Artisans</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-serif mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span className="text-sm text-white/80">123 Marketplace Ave, Nairobi, Kenya</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:hello@chencharis.com" className="text-sm text-white/80 hover:text-white">
                  hello@chencharis.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+254123456789" className="text-sm text-white/80 hover:text-white">
                  +254 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center md:text-left">
          <p className="text-sm text-white/60">
            &copy; {new Date().getFullYear()} Chen Charis. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={href} 
      className="text-sm text-white/80 hover:text-white"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
