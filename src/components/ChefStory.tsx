import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, Heart, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { REVIEWS } from '../data/reviewsData';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ChefStory: React.FC = () => {
  return (
    <section id="atelier" className="py-24 bg-[#F5EFE0] relative overflow-hidden">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Story Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Chef Portrait & Visual Accent */}
          <div className="lg:col-span-5 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-[#E5AC26] shadow-2xl gold-glow">
              <img
                src="/src/assets/images/real_hero_background_1786581783508.jpg"
                alt="Chef Rabah Ourrad devant OR Atelier Culinaire"
                className="w-full h-[480px] object-cover object-center"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1610] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-serif-luxury text-2xl font-semibold text-[#E5AC26]">Chef Rabah Ourrad</p>
                <p className="text-xs uppercase tracking-[0.2em] text-[#FBE69B] font-light">
                  Fondateur & Chef Créateur — OR Atelier Culinaire
                </p>
              </div>
            </div>

            {/* Decorative Gold Frame Behind */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#E5AC26]/50 rounded-3xl -z-0 pointer-events-none" />
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5AC26]/20 text-[#A3750C] text-xs uppercase tracking-[0.25em] font-bold border border-[#E5AC26]/40 shadow-sm">
              <Award className="w-3.5 h-3.5 text-[#D49B19]" />
              <span>L'Esprit & La Maison</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#1A1610] tracking-wider leading-tight">
              L'Art de la Haute Cuisine Créative à El Biar
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-stone-700 font-light leading-relaxed">
              <p>
                Situé au <strong className="font-semibold text-[#1A1610]">55 Chem. Poirson à El Biar</strong>, <span className="font-serif-luxury text-lg font-bold text-[#D49B19]">OR - Atelier Culinaire</span> par le Chef Rabah Ourrad offre un écrin intimiste dédié à la gastronomie d'auteur.
              </p>
              <p>
                Passionné par le produit brut et mû par la quête constante de la perfection culinaire, le Chef Rabah réinvente les classiques et propose des mariages audacieux — de l'entrée sucrée-salée aubergine & chocolat au fondant chocolat noir piquant, en passant par le poulpe mi-cuit au Leche de tigre péruvien.
              </p>
              <p>
                Chaque convive y est accueilli comme un hôte de marque, dans un espace pensé pour la haute précision gastronomique et le confort chaleureux.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t-2 border-[#E5AC26]/30">
              <div>
                <p className="font-serif-luxury text-3xl font-bold text-[#1A1610]">4.8 / 5</p>
                <p className="text-xs text-stone-600 font-medium uppercase tracking-wider">Note Google Maps</p>
              </div>
              <div>
                <p className="font-serif-luxury text-3xl font-bold text-[#1A1610]">07</p>
                <p className="text-xs text-stone-600 font-medium uppercase tracking-wider">Services Dégustation</p>
              </div>
              <div>
                <p className="font-serif-luxury text-3xl font-bold text-[#1A1610]">100%</p>
                <p className="text-xs text-stone-600 font-medium uppercase tracking-wider">Fait Maison Minute</p>
              </div>
            </div>

          </div>

        </div>

        {/* Real Customer Reviews Section */}
        <div id="avis" className="mt-20 pt-16 border-t-2 border-[#E5AC26]/30">
          <div className="text-center space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5AC26]/20 text-[#A3750C] text-xs uppercase tracking-[0.2em] font-bold border border-[#E5AC26]/40 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-[#D49B19] text-[#D49B19]" />
              <span>Témoignages & Avis Google</span>
            </div>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl font-light text-[#1A1610]">
              Ce que Disent nos Convives
            </h3>
            <p className="text-xs sm:text-sm text-stone-700 font-light max-w-lg mx-auto">
              Avis certifiés déposés par nos clients sur Google Maps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {REVIEWS.map((rev) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-[#FFFDF5] p-6 sm:p-8 rounded-2xl border-2 border-[#E5AC26]/30 shadow-md flex flex-col justify-between gold-glow"
              >
                <div className="space-y-4">
                  
                  {/* Rating & Author Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#E5AC26] text-[#E5AC26]" />
                      ))}
                    </div>
                    <span className="text-[11px] text-stone-500 font-mono font-medium">{rev.date}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-stone-800 italic font-serif-luxury leading-relaxed font-medium">
                    "{rev.comment}"
                  </p>

                  {/* Highlighted Dishes Chips */}
                  {rev.highlightedDishes && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {rev.highlightedDishes.map((dish, idx) => (
                        <span key={idx} className="text-[10px] bg-[#F9E8B2] text-[#A3750C] border border-[#E5AC26]/40 px-2.5 py-0.5 rounded font-bold">
                          {dish}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Author Name */}
                  <div className="pt-2 border-t border-[#E5AC26]/20 flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#E5AC26] text-[#1A1610] font-bold text-xs flex items-center justify-center font-serif-luxury shadow-sm">
                      {rev.avatar}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1A1610]">{rev.author}</p>
                      {rev.badge && <p className="text-[10px] text-stone-500">{rev.badge}</p>}
                    </div>
                  </div>

                </div>

                {/* Owner Response */}
                {rev.ownerResponse && (
                  <div className="mt-6 pt-4 border-t border-dashed border-[#E5AC26]/40 bg-[#FAF3DE] p-3.5 rounded-xl text-[11px] text-stone-700 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold text-[#1A1610]">
                      <CheckCircle className="w-3.5 h-3.5 text-[#D49B19]" />
                      <span>Réponse de l'Équipe OR :</span>
                    </div>
                    <p className="italic font-serif-luxury text-stone-800 font-medium">"{rev.ownerResponse.comment}"</p>
                  </div>
                )}

              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
