import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Utensils, CheckCircle, Phone, MessageSquare, Sparkles, User, Mail, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface BookingState {
  date: string;
  time: string;
  guests: number;
  experience: 'degustation' | 'alacarte';
  fullName: string;
  phone: string;
  email: string;
  specialRequests: string;
}

export const ReservationSection: React.FC = () => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [booking, setBooking] = useState<BookingState>({
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '19:30',
    guests: 2,
    experience: 'degustation',
    fullName: '',
    phone: '',
    email: '',
    specialRequests: ''
  });
  const [bookingCode, setBookingCode] = useState('');

  const timeSlotsLunch = ['12:00', '12:30', '13:00', '13:30'];
  const timeSlotsDinner = ['19:30', '20:00', '20:30', '21:00'];

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const code = `OR-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingCode(code);
    
    // Save locally
    const existing = JSON.parse(localStorage.getItem('or_reservations') || '[]');
    existing.push({ ...booking, code, createdAt: new Date().toISOString() });
    localStorage.setItem('or_reservations', JSON.stringify(existing));

    setStep(3);
  };

  const generateWhatsAppLink = () => {
    const text = `Bonjour OR Atelier Culinaire, je souhaite confirmer ma réservation :\n\nCode : ${bookingCode}\nNom : ${booking.fullName}\nDate : ${booking.date}\nHeure : ${booking.time}\nConvives : ${booking.guests} personne(s)\nFormule : ${booking.experience === 'degustation' ? 'Menu Dégustation 07 Services' : 'À la carte'}\nTél : ${booking.phone}`;
    return `https://wa.me/${RESTAURANT_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="reservation" className="py-24 bg-[#FBF8F1] relative">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E5AC26]/20 text-[#A3750C] text-xs uppercase tracking-[0.2em] font-bold border border-[#E5AC26]/40 shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-[#D49B19]" />
            <span>Réservation de Table</span>
          </div>

          <h2 className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#1A1610] tracking-wider">
            Réserver Votre Expérience Culinaire
          </h2>
          
          <p className="text-xs sm:text-sm text-stone-700 font-light max-w-lg mx-auto">
            Afin de préserver l'intimité et la qualité du service, le nombre de places par service est limité.
          </p>
        </div>

        {/* Card Form */}
        <div className="bg-[#FAF3DE]/90 rounded-3xl p-6 sm:p-10 border-2 border-[#E5AC26]/40 shadow-2xl relative overflow-hidden gold-glow">
          
          {/* Step Progress Indicator */}
          <div className="flex items-center justify-center gap-3 mb-8 pb-6 border-b border-[#E5AC26]/30">
            <div className={`flex items-center gap-2 text-xs uppercase tracking-wider font-bold ${step >= 1 ? 'text-[#A3750C]' : 'text-stone-400'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-sm ${step >= 1 ? 'bg-[#E5AC26] text-[#1A1610] font-bold' : 'bg-stone-300 text-stone-600'}`}>1</span>
              <span>Détails Table</span>
            </div>
            <div className="w-8 h-[2px] bg-[#E5AC26]/50" />
            <div className={`flex items-center gap-2 text-xs uppercase tracking-wider font-bold ${step >= 2 ? 'text-[#A3750C]' : 'text-stone-400'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-sm ${step >= 2 ? 'bg-[#E5AC26] text-[#1A1610] font-bold' : 'bg-stone-300 text-stone-600'}`}>2</span>
              <span>Vos Coordonnées</span>
            </div>
            <div className="w-8 h-[2px] bg-[#E5AC26]/50" />
            <div className={`flex items-center gap-2 text-xs uppercase tracking-wider font-bold ${step === 3 ? 'text-[#A3750C]' : 'text-stone-400'}`}>
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs shadow-sm ${step === 3 ? 'bg-[#E5AC26] text-[#1A1610] font-bold' : 'bg-stone-300 text-stone-600'}`}>3</span>
              <span>Confirmation</span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="space-y-8"
              >
                {/* Guests count */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#DFB251]" />
                    <span>Nombre de Convives</span>
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setBooking({ ...booking, guests: num })}
                        className={`w-11 h-11 rounded-xl text-sm font-semibold transition-all duration-200 ${
                          booking.guests === num
                            ? 'bg-[#1C1917] text-[#DFB251] border-2 border-[#DFB251] shadow-md'
                            : 'bg-[#FBF8F1] text-stone-700 hover:bg-[#DFB251]/20 border border-stone-300'
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Experience Choice */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-3 flex items-center gap-2">
                    <Utensils className="w-4 h-4 text-[#DFB251]" />
                    <span>Formule Souhaitée</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setBooking({ ...booking, experience: 'degustation' })}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                        booking.experience === 'degustation'
                          ? 'bg-[#1C1917] text-white border-[#DFB251] shadow-lg'
                          : 'bg-[#FBF8F1] text-[#1C1917] border-stone-300 hover:border-[#DFB251]'
                      }`}
                    >
                      <span className="text-xs uppercase tracking-widest text-[#DFB251] font-bold block mb-1">Incontournable</span>
                      <p className="font-serif-luxury text-lg font-semibold">Menu Dégustation 07 Services</p>
                      <p className="text-xs opacity-80 mt-1 font-light">Le parcours gastronomique complet orchestré par le Chef.</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBooking({ ...booking, experience: 'alacarte' })}
                      className={`p-4 rounded-2xl text-left border transition-all duration-200 ${
                        booking.experience === 'alacarte'
                          ? 'bg-[#1C1917] text-white border-[#DFB251] shadow-lg'
                          : 'bg-[#FBF8F1] text-[#1C1917] border-stone-300 hover:border-[#DFB251]'
                      }`}
                    >
                      <span className="text-xs uppercase tracking-widest text-[#DFB251] font-bold block mb-1">À la Carte</span>
                      <p className="font-serif-luxury text-lg font-semibold">Sélection À La Carte</p>
                      <p className="text-xs opacity-80 mt-1 font-light">Composez librement votre repas selon vos envies du moment.</p>
                    </button>
                  </div>
                </div>

                {/* Date Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#DFB251]" />
                    <span>Date du Repas</span>
                  </label>
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={booking.date}
                    onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                    className="w-full bg-[#FBF8F1] border border-stone-300 rounded-xl p-3 text-sm font-medium text-[#1C1917] focus:outline-none focus:border-[#DFB251]"
                  />
                </div>

                {/* Time Slot Selection */}
                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#DFB251]" />
                    <span>Heure du Service</span>
                  </label>
                  
                  <div className="space-y-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-stone-500 mb-2 font-medium">Déjeuner (12:00 - 15:00)</p>
                      <div className="flex flex-wrap gap-2">
                        {timeSlotsLunch.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBooking({ ...booking, time: slot })}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                              booking.time === slot
                                ? 'bg-[#DFB251] text-[#1C1917] shadow-md font-bold'
                                : 'bg-[#FBF8F1] text-stone-700 hover:bg-[#DFB251]/20 border border-stone-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-stone-500 mb-2 font-medium">Dîner (19:30 - 23:00)</p>
                      <div className="flex flex-wrap gap-2">
                        {timeSlotsDinner.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBooking({ ...booking, time: slot })}
                            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                              booking.time === slot
                                ? 'bg-[#DFB251] text-[#1C1917] shadow-md font-bold'
                                : 'bg-[#FBF8F1] text-stone-700 hover:bg-[#DFB251]/20 border border-stone-300'
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Next Button */}
                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-8 py-3.5 rounded-full bg-[#1C1917] text-[#DFB251] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#DFB251] hover:text-[#1C1917] transition-all shadow-md"
                  >
                    Étape Suivante : Vos Coordonnées &rarr;
                  </button>
                </div>

              </motion.div>
            )}

            {step === 2 && (
              <form key="step2" onSubmit={handleSubmitBooking} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-2 flex items-center gap-2">
                      <User className="w-3.5 h-3.5 text-[#DFB251]" />
                      <span>Nom complet *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Karim Benali"
                      value={booking.fullName}
                      onChange={(e) => setBooking({ ...booking, fullName: e.target.value })}
                      className="w-full bg-[#FBF8F1] border border-stone-300 rounded-xl p-3 text-sm text-[#1C1917] focus:outline-none focus:border-[#DFB251]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-2 flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#DFB251]" />
                      <span>Numéro de Téléphone *</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="Ex: 0550 00 00 00"
                      value={booking.phone}
                      onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                      className="w-full bg-[#FBF8F1] border border-stone-300 rounded-xl p-3 text-sm text-[#1C1917] focus:outline-none focus:border-[#DFB251]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-2 flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-[#DFB251]" />
                    <span>Adresse Email (Optionnelle)</span>
                  </label>
                  <input
                    type="email"
                    placeholder="votre.email@domaine.com"
                    value={booking.email}
                    onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                    className="w-full bg-[#FBF8F1] border border-stone-300 rounded-xl p-3 text-sm text-[#1C1917] focus:outline-none focus:border-[#DFB251]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-semibold text-[#1C1917] mb-2">
                    Remarques particulières, Allergies ou Occasion
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Indiquez si vous fêtez un anniversaire, un repas d'affaires ou des contraintes alimentaires..."
                    value={booking.specialRequests}
                    onChange={(e) => setBooking({ ...booking, specialRequests: e.target.value })}
                    className="w-full bg-[#FBF8F1] border border-stone-300 rounded-xl p-3 text-sm text-[#1C1917] focus:outline-none focus:border-[#DFB251]"
                  />
                </div>

                <div className="flex items-center justify-between pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-xs uppercase tracking-wider text-stone-600 hover:text-[#1C1917] underline font-semibold"
                  >
                    &larr; Retour
                  </button>

                  <button
                    type="submit"
                    className="px-8 py-3.5 rounded-full bg-[#DFB251] text-[#1C1917] text-xs uppercase tracking-[0.2em] font-bold hover:bg-[#B88E28] hover:text-white transition-all shadow-xl"
                  >
                    Confirmer la Réservation
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6 py-4"
              >
                <div className="w-16 h-16 rounded-full bg-[#DFB251]/20 text-[#B88E28] border-2 border-[#DFB251] flex items-center justify-center mx-auto shadow-inner">
                  <CheckCircle className="w-8 h-8 text-[#DFB251]" />
                </div>

                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#DFB251] font-bold">
                    Code de Réservation : {bookingCode}
                  </span>
                  <h3 className="font-serif-luxury text-3xl font-medium text-[#1C1917]">
                    Demande de Réservation Enregistrée !
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 font-light max-w-md mx-auto">
                    Merci <strong className="text-[#1C1917]">{booking.fullName}</strong>. Votre table pour <strong className="text-[#1C1917]">{booking.guests} convives</strong> le <strong className="text-[#1C1917]">{booking.date} à {booking.time}</strong> a été enregistrée à l'Atelier.
                  </p>
                </div>

                <div className="bg-[#FBF8F1] p-6 rounded-2xl border border-[#DFB251]/30 max-w-md mx-auto text-left space-y-2 text-xs text-stone-700">
                  <p><strong className="text-[#1C1917]">Formule :</strong> {booking.experience === 'degustation' ? 'Menu Dégustation 07 Services' : 'À la carte'}</p>
                  <p><strong className="text-[#1C1917]">Lieu :</strong> 55 Chem. Poirson, El Biar, Alger</p>
                  <p><strong className="text-[#1C1917]">Téléphone :</strong> {booking.phone}</p>
                  {booking.specialRequests && <p><strong className="text-[#1C1917]">Note :</strong> {booking.specialRequests}</p>}
                </div>

                {/* Instant Confirmation Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <a
                    href={generateWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-700 text-white text-xs uppercase tracking-wider font-bold hover:bg-emerald-800 transition-colors shadow-md"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Envoyer sur WhatsApp</span>
                  </a>

                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#1C1917] text-[#DFB251] text-xs uppercase tracking-wider font-bold hover:bg-[#DFB251] hover:text-[#1C1917] transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Appeler l'Atelier</span>
                  </a>
                </div>

                <button
                  onClick={() => { setStep(1); }}
                  className="text-xs uppercase tracking-wider text-stone-500 hover:text-[#1C1917] underline block mx-auto pt-4"
                >
                  Effectuer une autre réservation
                </button>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};
