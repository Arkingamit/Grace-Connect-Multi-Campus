import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Calendar, Camera, Play, Users, Menu, X, Volume2 } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events', icon: Calendar },
    { label: 'Sermons', href: '/sermons', icon: Play },
    { label: 'Music', href: '/music', icon: Volume2 },
    { label: 'Gallery', href: '#gallery', icon: Camera },
    { label: 'Prayer Wall', href: '#prayers', icon: Heart },
    { label: 'Groups', href: '/groups', icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 glass border-b border-glass-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 animate-pulse-glow">
              <img
                src="/logo.png" // Update this path to your image location
                alt="Grace Ahmedabad Logo"
                className="w-7 h-7 object-contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Grace Ahmedabad</h1>
              <p className="text-sm text-muted-foreground font-medium">Where hearts unite</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 relative"
              >
                {item.icon && <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />}
                <span className="text-sm font-semibold">{item.label}</span>
                <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="glass" size="sm" className="hover-lift">Sign In</Button>
            
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <Button variant="outline" className="w-full">Sign In</Button>
              
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};