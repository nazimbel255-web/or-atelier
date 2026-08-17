import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TastingMenuBanner } from './components/TastingMenuBanner';
import { MenuSection } from './components/MenuSection';
import { ChefStory } from './components/ChefStory';
import { ReservationSection } from './components/ReservationSection';
import { LocationFooter } from './components/LocationFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FBF8F1] text-[#1C1917] selection:bg-[#DFB251] selection:text-[#1C1917] font-sans">
      <Navbar />
      <main>
        <Hero />
        <TastingMenuBanner />
        <MenuSection />
        <ChefStory />
        <ReservationSection />
      </main>
      <LocationFooter />
    </div>
  );
}
