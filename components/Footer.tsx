import React from 'react';
import { Twitter, Linkedin, Instagram } from 'lucide-react';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onContactClick }) => {
  const handleNavClick = (page: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onContactClick) {
      onContactClick();
    }
  };

  return (
    <footer className="bg-white border-t border-slate-100 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Logo size={24} />
            <div className="hidden md:block w-px h-4 bg-slate-200"></div>
            <div className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Shopmintapp Inc.
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
              <a 
                href="#privacy" 
                onClick={(e) => handleNavClick('privacy', e)}
                className="hover:text-techno-primary transition-colors cursor-pointer"
              >
                Privacy
              </a>
              <a 
                href="#terms" 
                onClick={(e) => handleNavClick('terms', e)}
                className="hover:text-techno-primary transition-colors cursor-pointer"
              >
                Terms
              </a>
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="hover:text-techno-primary transition-colors cursor-pointer"
              >
                Contact
              </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-techno-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-techno-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-slate-400 hover:text-techno-primary transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};