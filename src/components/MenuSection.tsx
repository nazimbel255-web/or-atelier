import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Leaf, Fish, Cake, Wine, Info, X, ChevronRight, Check } from 'lucide-react';
import {
  MENU_CATEGORIES,
  VEGGY_ITEMS,
  SEA_ITEMS,
  SWEET_ITEMS,
  DRINKS_HOT,
  DRINKS_COLD,
  MenuItem
} from '../data/menuData';

export const MenuSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'veggy' | 'sea' | 'sweet' | 'drinks'>('veggy');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const getActiveItems = () => {
    switch (activeTab) {
      case 'veggy':
        return VEGGY_ITEMS;
      case 'sea':
        return SEA_ITEMS;
      case 'sweet':
        return SWEET_ITEMS;
      case 'drinks':
        return [...DRINKS_HOT, ...DRINKS_COLD];
      default:
        return VEGGY_ITEMS;
    }
  };

  const getTabIcon = (id: string) => {
    switch (id) {
      case 'veggy':
        return <Leaf className="w-4 h-4" />;
      case 'sea':
        return <Fish className="w-4 h-4" />;
      case 'sweet':
        return <Cake className="w-4 h-4" />;
      case 'drinks':
        return <Wine className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <section id="menu" className="py-24 bg-[#FBF8F1] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5AC26]/20 text-[#A3750C] text-xs uppercase tracking-[0.25em] font-bold border border-[#E5AC26]/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D49B19]" />
            <span>La Carte Gastronomique</span>
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl font-light text-[#1A1610] tracking-wider">
            Symphonie des Saveurs
          </h2>
          
          <p className="max-w-xl mx-auto text-xs sm:text-sm text-stone-700 font-light leading-relaxed">
            Chaque plat est élaboré minute à l'Atelier avec des ingrédients de saison rigoureusement sélectionnés.
          </p>
        </div>

        {/* Tab Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-16 border-b-2 border-[#E5AC26]/30 pb-6">
          {MENU_CATEGORIES.filter(c => c.id !== 'degustation').map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300 ${
                  isActive
                    ? 'bg-[#E5AC26] text-[#1A1610] shadow-lg border-2 border-[#D49B19] gold-glow'
                    : 'bg-[#F9E8B2]/50 text-[#1A1610] hover:bg-[#E5AC26]/30 border border-[#E5AC26]/30'
                }`}
              >
                {getTabIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Menu Items Showcase Grid */}
        <div className="min-h-[400px]">
          {activeTab === 'drinks' ? (
            /* Drinks Split Display (Hot Drinks & Cold Drinks) */
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
              
              {/* Hot Drinks */}
              <div className="bg-[#F5EFE0]/60 p-6 sm:p-8 rounded-3xl border border-[#DFB251]/20 shadow-sm">
                <h3 className="font-serif-luxury text-2xl font-medium text-[#1C1917] mb-6 pb-2 border-b border-[#DFB251]/30 flex items-center gap-2">
                  <Wine className="w-4 h-4 text-[#DFB251]" />
                  <span>Boissons Chaudes / Hot Drinks</span>
                </h3>
                <div className="space-y-6">
                  {DRINKS_HOT.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      onClick={() => setSelectedItem(item)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-serif-luxury text-xl text-[#1C1917] group-hover:text-[#B88E28] transition-colors">
                          {item.name}
                        </span>
                        <span className="flex-1 border-b border-dotted border-[#DFB251]/60 mx-2" />
                        <span className="text-sm font-semibold text-[#1C1917] font-mono whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 font-light mt-1">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Cold Drinks */}
              <div className="bg-[#F5EFE0]/60 p-6 sm:p-8 rounded-3xl border border-[#DFB251]/20 shadow-sm">
                <h3 className="font-serif-luxury text-2xl font-medium text-[#1C1917] mb-6 pb-2 border-b border-[#DFB251]/30 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#DFB251]" />
                  <span>Boissons Froides / Cold Drinks</span>
                </h3>
                <div className="space-y-6">
                  {DRINKS_COLD.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      onClick={() => setSelectedItem(item)}
                      className="group cursor-pointer"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-serif-luxury text-xl text-[#1C1917] group-hover:text-[#B88E28] transition-colors">
                            {item.name}
                          </span>
                          {item.isSignature && (
                            <span className="text-[9px] uppercase tracking-wider bg-[#DFB251]/20 text-[#B88E28] px-2 py-0.5 rounded font-semibold">
                              Signature
                            </span>
                          )}
                        </div>
                        <span className="flex-1 border-b border-dotted border-[#DFB251]/60 mx-2" />
                        <span className="text-sm font-semibold text-[#1C1917] font-mono whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-xs text-stone-500 font-light mt-1">{item.description}</p>
                    </motion.div>
                  ))}
                </div>

              </div>

            </div>
          ) : (
            /* Food Categories Display (Veggy, Sea, Sweet) */
            <div className="space-y-8">
              {getActiveItems().map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  onClick={() => setSelectedItem(item)}
                  className="group bg-[#F5EFE0]/50 hover:bg-[#F5EFE0] p-6 sm:p-8 rounded-2xl border border-[#DFB251]/20 hover:border-[#DFB251]/50 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#1C1917] group-hover:text-[#B88E28] transition-colors">
                        {item.name}
                      </h3>
                      {item.isSignature && (
                        <span className="text-[10px] uppercase tracking-widest bg-[#DFB251] text-[#1C1917] font-bold px-2.5 py-0.5 rounded-full">
                          Signature OR
                        </span>
                      )}
                      {item.isVegetarian && (
                        <span className="text-[10px] uppercase tracking-widest bg-emerald-900/10 text-emerald-800 border border-emerald-800/20 px-2.5 py-0.5 rounded-full font-medium">
                          Création Végétale
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="font-serif-luxury text-2xl font-bold text-[#1C1917] tracking-tight">
                        {item.price}
                      </span>
                      <ChevronRight className="w-5 h-5 text-[#DFB251] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  <p className="text-sm text-stone-600 font-light leading-relaxed max-w-3xl">
                    {item.description}
                  </p>

                  {item.image && (
                    <div className="mt-4 flex items-center gap-2 text-xs text-[#B88E28] font-medium">
                      <Info className="w-3.5 h-3.5" />
                      <span>Cliquer pour voir le détail de l'assaisonnement et des produits</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>

      {/* Item Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#FBF8F1] rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#DFB251] shadow-2xl relative overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 p-2 text-stone-400 hover:text-[#1C1917] rounded-full hover:bg-stone-200/50 transition-colors"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Image if available */}
              {selectedItem.image && (
                <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 border border-[#DFB251]/30">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}

              <div className="space-y-4">
                <div className="flex items-baseline justify-between gap-2 border-b border-[#DFB251]/30 pb-3">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#DFB251] font-bold">
                      Fiche Culinaire Atelier
                    </span>
                    <h3 className="font-serif-luxury text-3xl font-medium text-[#1C1917]">
                      {selectedItem.name}
                    </h3>
                  </div>
                  <span className="font-serif-luxury text-2xl font-bold text-[#1C1917]">
                    {selectedItem.price}
                  </span>
                </div>

                <p className="text-sm text-stone-700 font-light leading-relaxed">
                  {selectedItem.description}
                </p>

                <div className="bg-[#F5EFE0] p-4 rounded-xl space-y-2 border border-[#DFB251]/20">
                  <p className="text-xs uppercase tracking-wider font-semibold text-[#1C1917] flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#DFB251]" />
                    <span>Engagements Qualité Chef Rabah</span>
                  </p>
                  <p className="text-xs text-stone-600 font-light">
                    Ingrédients frais de saison, marinades et émulsions réalisées le jour même à l'Atelier Culinaire d'El Biar.
                  </p>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-6 py-2.5 rounded-full bg-[#1C1917] text-[#DFB251] text-xs uppercase tracking-wider font-semibold hover:bg-[#DFB251] hover:text-[#1C1917] transition-colors"
                  >
                    Fermer la fiche
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
