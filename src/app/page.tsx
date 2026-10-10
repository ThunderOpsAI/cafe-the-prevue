'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import DirectOrderBanner from '@/components/DirectOrderBanner';
import FlyersSection from '@/components/FlyersSection';
import Menu, { CartItem } from '@/components/Menu';
import CateringSection from '@/components/CateringSection';
import StorySection from '@/components/StorySection';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';
import AdminLeadsDrawer from '@/components/AdminLeadsDrawer';

export default function Home() {
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleCartChange = (items: CartItem[]) => {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-[#fbf9f5] text-stone-900 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      {/* Sticky Modular Header */}
      <Navbar
        onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)}
        cartCount={cartCount}
        onCartClick={scrollToMenu}
      />

      {/* Hero Section with Ovens River backdrop */}
      <Hero />

      {/* Riverside Dining & Experience Spotlight */}
      <DirectOrderBanner />

      {/* Curated Seasonal Menus & Function Packages */}
      <FlyersSection />

      {/* Aesthetic Cafe Catalogue & Live Order Calculation */}
      <Menu onCartChange={handleCartChange} />

      {/* Riverside Functions & Private Event Inquiry Engine */}
      <CateringSection />

      {/* The Wangaratta Brand Story */}
      <StorySection />

      {/* Trading Hours, Location Map & Contact */}
      <LocationHours />

      {/* Site Footer with Admin Drawer Trigger */}
      <Footer onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)} />

      {/* Admin Leads Slide-Over Drawer (Neon Postgres / Mock DB) */}
      <AdminLeadsDrawer
        isOpen={isLeadsDrawerOpen}
        onClose={() => setIsLeadsDrawerOpen(false)}
      />
    </main>
  );
}
