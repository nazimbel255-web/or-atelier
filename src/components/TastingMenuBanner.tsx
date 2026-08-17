import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Utensils, CheckCircle2, GlassWater } from 'lucide-react';
import { DEGUSTATION_ITEMS, MENU_CATEGORIES } from '../data/menuData';

export const TastingMenuBanner: React.FC = () => {
  const categoryInfo = MENU_CATEGORIES.find(c => c.id === 'degustation');

  return (
    <section id="degustation" className="py-24 bg-[#FAF3DE] relative overflow-hidden border-y-2 border-[#E5AC26]/30">
      
      {/* Delicate background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E5AC26]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#F3D377]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Badge */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5AC26]/20 text-[#A3750C] border border-[#E5AC26]/40 text-xs uppercase tracking-[0.2em] font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D49B19]" />
            <span>Expérience Gastronomique Phare</span>
          </div>
          
          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl text-[#1A1610] tracking-wider font-light">
            Menu Dégustation à 07 Services
          </h2>
          <p className="font-serif-luxury text-xl sm:text-2xl italic text-[#D49B19] font-medium">
            by Chef Rabah Ourrad
          </p>
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
            {categoryInfo?.description} Un accord orchestré où chaque création raconte l'histoire des terroirs algériens sublimés par les techniques de la grande cuisine.
          </p>
        </div>

        {/* 7 Services Sequence Card Container */}
        <div className="bg-[#FFFDF5] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#E5AC26]/40 shadow-2xl relative gold-glow">
          
          {/* Logo Watermark inside Card */}
          <div className="flex justify-center mb-8">
            <img
              src="/src/assets/images/or_logo_1786580981345.jpg"
              alt="Logo OR"
              className="w-16 h-16 rounded-full border-2 border-[#E5AC26] shadow-md"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Service Items Grid with Scroll Animation */}
          <div className="space-y-8 sm:space-y-10">
            {DEGUSTATION_ITEMS.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.08 }}
                className="group relative pb-8 border-b border-[#E5AC26]/25 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xs uppercase tracking-[0.25em] text-[#1A1610] font-bold font-mono bg-[#F9E8B2] border border-[#E5AC26]/50 px-3 py-1 rounded-md shadow-sm">
                      Service 0{idx + 1}
                    </span>
                    <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1A1610] group-hover:text-[#D49B19] transition-colors duration-300">
                      {item.name.replace(/^\d+\.\s*/, '')}
                    </h3>
                  </div>

                  {item.isSignature && (
                    <span className="text-[10px] uppercase tracking-widest bg-[#E5AC26]/20 text-[#A3750C] border border-[#E5AC26]/50 px-3 py-0.5 rounded-full font-bold self-start md:self-auto">
                      Création Signature
                    </span>
                  )}
                </div>

                <p className="text-sm text-stone-700 font-light leading-relaxed pl-0 md:pl-16">
                  {item.description}
                </p>

                {item.pairing && (
                  <p className="text-xs text-[#A3750C] italic font-serif-luxury mt-2 pl-0 md:pl-16 flex items-center gap-1.5 font-medium">
                    <GlassWater className="w-3.5 h-3.5 text-[#D49B19]" />
                    <span>Suggestion d'accord : {item.pairing}</span>
                  </p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Included Beverages Banner */}
          <div className="mt-12 pt-8 border-t-2 border-dashed border-[#E5AC26]/50 bg-[#F9E8B2]/60 rounded-2xl p-6 text-center shadow-inner">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#1A1610] mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#D49B19]" />
              <span>Prestations Incluses dans le Menu 07 Services</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-800 italic font-serif-luxury max-w-2xl mx-auto font-medium">
              "{categoryInfo?.note}"
            </p>
          </div>

          {/* CTA Reservation Button */}
          <div className="mt-10 text-center">
            <a
              href="#reservation"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1A1610] text-[#E5AC26] border-2 border-[#E5AC26] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#E5AC26] hover:text-[#1A1610] transition-all duration-300 shadow-xl gold-glow"
            >
              <Utensils className="w-4 h-4" />
              <span>Réserver l'Expérience 07 Services</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
