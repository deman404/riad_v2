import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Instagram, Facebook, Phone } from 'lucide-react';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'À Propos', href: '#propos' },
    { name: 'Chambres', href: '#chambres' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Expériences', href: '#experiences' },
    { name: 'Réservation', href: '#reservation' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'glass-nav py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#accueil" className="text-2xl font-serif font-bold tracking-widest text-emerald-deep uppercase">
          Riad <span className="text-terracotta">Élégance</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest hover:text-terracotta transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/212000000000"
            className="bg-terracotta text-white px-6 py-2 rounded-full text-sm font-medium uppercase tracking-widest hover:bg-emerald-deep transition-all flex items-center gap-2"
          >
            <Phone size={16} />
            WhatsApp
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-emerald-deep"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-sand border-b border-terracotta/10 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-serif uppercase tracking-widest hover:text-terracotta transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/212000000000"
                className="bg-terracotta text-white px-6 py-3 rounded-full text-center text-sm font-medium uppercase tracking-widest"
              >
                WhatsApp Direct
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
