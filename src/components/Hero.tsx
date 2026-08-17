import React from 'react';
import { motion } from 'motion/react';
import { Star, MapPin, Clock, ArrowDown, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-stone-950">
      
      {/* Real Uploaded Photo: Upscaled high quality photo of Chef Rabah Ourrad & entrance */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/real_hero_background_1786581783508.jpg"
          alt="Chef Rabah Ourrad devant l'entrée de OR Atelier Culinaire"
          className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        
        {/* Luxury Vignette & Darkening Gradients with Warm Amber Yellow Tones */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1610] via-[#1A1610]/65 to-black/75" />
        <div className="absolute inset-0 bg-radial-vignette opacity-70" />
        <div className="absolute inset-0 bg-[#E5AC26]/10 mix-blend-overlay" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center text-white flex flex-col items-center">
        
        {/* Subtle Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A1610]/85 border border-[#E5AC26]/60 text-[#E5AC26] backdrop-blur-md mb-8 shadow-xl gold-glow"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#F3C64F]" />
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#FBE69B]">Haute Gastronomie · El Biar, Alger</span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="space-y-4"
        >
          <h1 className="font-serif-luxury text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-wider leading-none text-[#FFFDF5] drop-shadow-2xl">
            OR
          </h1>
          <p className="font-serif-luxury text-2xl sm:text-3xl md:text-4xl italic text-[#E5AC26] font-normal tracking-wide drop-shadow-md">
            Atelier Culinaire
          </p>
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-[#FBE69B] font-light pt-2">
            by OURRAD Rabah
          </p>
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#E5AC26] to-transparent my-8"
        />

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-2xl text-sm sm:text-base md:text-lg text-stone-200 font-light leading-relaxed tracking-wide px-2"
        >
          Une ode à la haute gastronomie où la terre et la mer d'Algérie se mêlent à l'excellence culinaire.
        </motion.p>

        {/* Information Quick Chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 my-8 text-xs text-stone-300"
        >
          <div className="flex items-center gap-1.5 bg-[#1A1610]/80 border border-[#E5AC26]/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <Star className="w-3.5 h-3.5 text-[#E5AC26] fill-[#E5AC26]" />
            <span className="font-semibold text-white">4.8</span>
            <span className="text-stone-400">({RESTAURANT_INFO.reviewCount} avis Google)</span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#1A1610]/80 border border-[#E5AC26]/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <MapPin className="w-3.5 h-3.5 text-[#E5AC26]" />
            <span>55 Chem. Poirson, El Biar</span>
          </div>

          <div className="flex items-center gap-1.5 bg-[#1A1610]/80 border border-[#E5AC26]/40 px-4 py-1.5 rounded-full backdrop-blur-sm">
            <Clock className="w-3.5 h-3.5 text-[#E5AC26]" />
            <span>Ouvre à 12:00</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          <a
            href="#degustation"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#E5AC26] text-[#1A1610] font-bold text-xs uppercase tracking-[0.2em] hover:bg-[#D49B19] hover:text-white transition-all duration-300 shadow-xl gold-glow transform hover:-translate-y-0.5"
          >
            Découvrir le Menu 07 Services
          </a>
          <a
            href="#reservation"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#1A1610]/90 border border-[#E5AC26] text-[#FBE69B] font-semibold text-xs uppercase tracking-[0.2em] hover:bg-[#E5AC26] hover:text-[#1A1610] transition-all duration-300 backdrop-blur-md"
          >
            Réserver une Table
          </a>
        </motion.div>

      </div>

      {/* Down Scroll Anchor */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#atelier"
          className="flex flex-col items-center gap-2 text-stone-400 hover:text-[#DFB251] transition-colors duration-300"
          aria-label="Défiler vers le bas"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-light">L'Atelier</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-4 h-4 text-[#DFB251]" />
          </motion.div>
        </a>
      </div>

    </section>
  );
};
