import React from 'react';
import { MapPin, Phone, Clock, Navigation, Compass, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#1A1610] text-[#FFFDF5] pt-20 pb-12 border-t-2 border-[#E5AC26] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Grid: Contact Info & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#E5AC26]/30">
          
          {/* Left Column: Essential Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Logo & Brand Header */}
            <div className="flex items-center gap-4">
              <img
                src="/src/assets/images/or_logo_1786580981345.jpg"
                alt="OR Logo"
                className="w-14 h-14 rounded-full border-2 border-[#E5AC26] shadow-lg gold-glow"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-serif-luxury text-3xl font-light tracking-widest text-[#FFFDF5]">
                  OR
                </h3>
                <p className="text-xs uppercase tracking-[0.25em] text-[#E5AC26] font-bold">
                  Atelier Culinaire by OURRAD Rabah
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">
              {RESTAURANT_INFO.tagline} {RESTAURANT_INFO.bio}
            </p>

            {/* Info Items List */}
            <div className="space-y-4 text-xs sm:text-sm text-stone-200">
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#E5AC26] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Adresse</p>
                  <p className="font-light text-stone-300">{RESTAURANT_INFO.address}</p>
                  <p className="text-[11px] text-[#E5AC26] font-mono mt-0.5">Plus Code: {RESTAURANT_INFO.plusCode}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#E5AC26] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Horaires d'Ouverture</p>
                  <p className="font-light text-stone-300">Déjeuner : {RESTAURANT_INFO.hours.dejeuner}</p>
                  <p className="font-light text-stone-300">Dîner : {RESTAURANT_INFO.hours.diner}</p>
                  <p className="text-[11px] text-[#E5AC26] mt-0.5">Fermeture hebdomadaire : {RESTAURANT_INFO.hours.closedDay}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#E5AC26] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Contact Direct & Réservations</p>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="font-mono text-[#E5AC26] hover:underline font-bold text-base block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Directions Action */}
            <div className="pt-2">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E5AC26] text-[#1A1610] font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#D49B19] hover:text-white transition-colors shadow-lg gold-glow"
              >
                <Navigation className="w-4 h-4" />
                <span>Obtenir l'Itinéraire Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-80" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Location Embed */}
          <div className="lg:col-span-7 flex flex-col h-full min-h-[320px]">
            <div className="flex items-center justify-between mb-4">
              <p className="text-xs uppercase tracking-[0.2em] font-bold text-[#E5AC26] flex items-center gap-2">
                <Compass className="w-4 h-4" />
                <span>Plan d'Accès — El Biar, Alger</span>
              </p>
              <span className="text-[11px] text-stone-400">Repas sur place · 5 000–8 000 DA</span>
            </div>

            <div className="flex-1 w-full rounded-3xl overflow-hidden border-2 border-[#E5AC26]/40 shadow-2xl relative min-h-[300px]">
              <iframe
                title="Localisation OR Atelier Culinaire"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.352481813134!2d3.033621!3d36.761891!2m3!1f0!0f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb305eb497eb3%3A0x6b8f1c84131df332!2s55%20Chem.%20Poirson%2C%20El%20Biar!5e0!3m2!1sfr!2sdz!4v1700000000000!5m2!1sfr!2sdz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-105"
              />
            </div>
          </div>

        </div>

        {/* Lower Copyright & Legal Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <p>© {new Date().getFullYear()} OR — Atelier culinaire by OURRAD Rabah. Tous droits réservés.</p>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase font-medium">
            <a href="#degustation" className="hover:text-[#E5AC26] transition-colors">Menu 07 Services</a>
            <a href="#menu" className="hover:text-[#E5AC26] transition-colors">La Carte</a>
            <a href="#reservation" className="hover:text-[#E5AC26] transition-colors">Réservations</a>
          </div>
        </div>

      </div>

    </footer>
  );
};
