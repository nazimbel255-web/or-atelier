import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'L\'Atelier', href: '#atelier' },
    { name: 'Le Menu', href: '#menu' },
    { name: 'Dégustation 07 Services', href: '#degustation' },
    { name: 'Expériences & Avis', href: '#avis' },
    { name: 'Contact & Accès', href: '#contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#FFFDF5]/95 backdrop-blur-md border-b border-[#E5AC26]/30 py-3 shadow-md'
          : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand & Circular Logo */}
          <a
            href="#"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="OR Atelier Culinaire"
          >
            <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-[#E5AC26] shadow-md transition-transform duration-500 group-hover:scale-105 gold-glow">
              <img
                src="/src/assets/images/or_logo_1786580981345.jpg"
                alt="Logo OR Atelier Culinaire"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`font-serif-luxury text-xl sm:text-2xl font-bold tracking-widest leading-none ${
                  scrolled ? 'text-[#1A1610]' : 'text-white'
                }`}
              >
                OR
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-[#E5AC26] font-semibold leading-tight">
                Atelier Culinaire
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-300 relative py-1 hover:text-[#E5AC26] ${
                  scrolled ? 'text-[#1A1610]' : 'text-stone-200'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className={`flex items-center gap-2 text-xs uppercase tracking-wider font-semibold transition-colors duration-300 px-3 py-2 rounded-md ${
                scrolled ? 'text-[#1A1610] hover:text-[#E5AC26]' : 'text-stone-200 hover:text-white'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#E5AC26]" />
              <span>{RESTAURANT_INFO.phone}</span>
            </a>

            <a
              href="#reservation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-[0.15em] font-bold bg-[#E5AC26] text-[#1A1610] hover:bg-[#D49B19] hover:text-white transition-all duration-300 shadow-md gold-glow transform hover:-translate-y-0.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Réserver</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#reservation"
              className="px-3.5 py-1.5 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-[#DFB251] text-[#1C1917]"
            >
              Réserver
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-md focus:outline-none ${
                scrolled ? 'text-[#1C1917]' : 'text-white'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FBF8F1] text-[#1C1917] border-b border-[#DFB251]/30 shadow-2xl px-6 py-6 space-y-4">
          <div className="flex items-center justify-between pb-4 border-b border-[#DFB251]/20">
            <div className="flex items-center gap-3">
              <img
                src="/src/assets/images/or_logo_1786580981345.jpg"
                alt="OR Logo"
                className="w-10 h-10 rounded-full border border-[#DFB251]"
                referrerPolicy="no-referrer"
              />
              <div>
                <p className="font-serif-luxury text-lg font-bold">OR Atelier Culinaire</p>
                <p className="text-xs text-[#DFB251] tracking-widest uppercase">By OURRAD Rabah</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#1C1917] p-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-[#1C1917] hover:text-[#DFB251] py-2 border-b border-[#DFB251]/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[#DFB251] text-xs uppercase tracking-widest font-semibold text-[#1C1917]"
            >
              <Phone className="w-4 h-4 text-[#DFB251]" />
              <span>Appeler: {RESTAURANT_INFO.phone}</span>
            </a>
            <a
              href="#reservation"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#DFB251] text-[#1C1917] text-xs uppercase tracking-widest font-bold shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Réserver une Table</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
