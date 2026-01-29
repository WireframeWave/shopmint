import React from 'react';
import { ChevronDown } from 'lucide-react';
import { NavItem } from '../types';
import { Button } from './ui/Button';
import { Logo } from './Logo';

interface NavbarProps {
  onNavigate?: (page: string) => void;
  onContactClick?: () => void;
}

const navItems: NavItem[] = [
  { label: 'Pricing', hasDropdown: false, href: '#pricing' },
  { label: 'Migration', hasDropdown: false, href: '#migration' },
  { label: 'About Us', hasDropdown: false, href: '#about' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onContactClick }) => {
  const handleNavClick = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      if (label === 'Pricing') {
        onNavigate('pricing');
      } else if (label === 'Migration') {
        onNavigate('migration');
      } else if (label === 'About Us') {
        onNavigate('about');
      } else {
        onNavigate('home');
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer"
            onClick={(e) => handleNavClick('Home', e)}
          >
            <Logo size={28} />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="flex items-center space-x-8">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  onClick={(e) => handleNavClick(item.label, e)}
                  className="group inline-flex items-center text-[15px] font-semibold text-slate-600 hover:text-techno-primary transition-colors cursor-pointer"
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className="ml-1 h-4 w-4 text-slate-400 group-hover:text-techno-primary transition-colors" />
                  )}
                </a>
              ))}
            </div>
            
            <div className="h-8 w-px bg-slate-200"></div>

            <Button 
              size="sm" 
              className="bg-techno-primary hover:bg-indigo-700 shadow-md shadow-indigo-200"
              onClick={onContactClick}
            >
              Let's Connect
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
             <Button 
              size="sm" 
              className="bg-techno-primary hover:bg-indigo-700 text-xs px-3 py-2"
              onClick={onContactClick}
            >
              Let's Connect
            </Button>
            <button className="text-slate-600 hover:text-slate-900 focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};