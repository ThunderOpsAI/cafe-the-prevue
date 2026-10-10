'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu as MenuIcon, X, Database, ShoppingBag, MapPin, Sparkles, Waves } from 'lucide-react';

interface NavbarProps {
  onOpenLeadsModal?: () => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ onOpenLeadsModal, cartCount = 0, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isOpenNow, setIsOpenNow] = useState(true);

  useEffect(() => {
    const checkOpenStatus = () => {
      try {
        const now = new Date();
        const melbourneTime = new Date(now.toLocaleString("en-US", { timeZone: "Australia/Melbourne" }));
        const hour = melbourneTime.getHours();
        const minute = melbourneTime.getMinutes();
        const decimalHour = hour + minute / 60;

        // Cafe The PreVue Daytime Hours: 7:30 AM to 4:00 PM every day (plus evening events)
        setIsOpenNow(decimalHour >= 7.5 && decimalHour <= 16.0);
      } catch {
        setIsOpenNow(true);
      }
    };

    checkOpenStatus();
    const timer = setInterval(checkOpenStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-stone-200/80 bg-white/95 backdrop-blur-md shadow-xs">
      {/* Top announcement & direct contact bar */}
      <div className="bg-emerald-950 border-b border-emerald-900/60 px-4 py-1.5 text-xs font-semibold text-emerald-100">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2.5 py-0.5 font-bold uppercase tracking-wider text-[10px]">
              <Waves className="w-3 h-3 text-emerald-400" /> Ovens River Waterfront
            </span>
            <span className="text-emerald-200/90 text-xs font-medium">📍 66–68 Faithfull St, Wangaratta</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-200/80 hidden md:flex">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Open Daily: 7:30am–4:00pm • Functions by Booking</span>
            </div>
            <a
              href="tel:0357212092"
              className="inline-flex items-center gap-1 bg-emerald-600/30 hover:bg-emerald-600/50 border border-emerald-500/40 text-emerald-200 hover:text-white px-2.5 py-0.5 rounded-full transition-colors font-bold"
            >
              <Phone className="w-3 h-3 text-emerald-300" />
              (03) 5721 2092
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-2">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-800 to-teal-900 border border-emerald-700/60 flex items-center justify-center shadow-md shadow-emerald-900/20 text-white font-serif font-black text-2xl group-hover:scale-105 transition-transform">
              P
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold tracking-tight text-xl sm:text-2xl text-stone-900 font-serif">
                  Cafe <span className="text-emerald-800 font-sans font-black">The PreVue</span>
                </span>
                <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  isOpenNow 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
                    : 'bg-stone-100 border-stone-300 text-stone-600'
                }`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${isOpenNow ? 'bg-emerald-500 animate-pulse' : 'bg-stone-400'}`} />
                  {isOpenNow ? 'Open Now' : 'Closed for Cafe (Events Open)'}
                </span>
              </div>
              <p className="text-[11px] tracking-wider uppercase text-emerald-900/70 font-semibold hidden sm:block">
                Riverside Dining • Artisan Coffee • Private Functions
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-bold text-stone-700">
            <a href="#menu" className="hover:text-emerald-800 transition-colors">
              Menu Catalogue
            </a>
            <a href="#functions" className="hover:text-emerald-800 transition-colors flex items-center gap-1 text-emerald-800">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              Riverside Functions
            </a>
            <a href="#experience" className="hover:text-emerald-800 transition-colors">
              The Venue
            </a>
            <a href="#story" className="hover:text-emerald-800 transition-colors">
              Our Story
            </a>
            <a href="#location" className="hover:text-emerald-800 transition-colors">
              Hours &amp; Location
            </a>
          </nav>

          {/* Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {onOpenLeadsModal && (
              <button
                onClick={onOpenLeadsModal}
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-stone-700 bg-stone-100 hover:bg-stone-200 border border-stone-300 px-3 py-2 rounded-xl transition-colors"
                title="Business Owner Functions Drawer"
              >
                <Database className="w-3.5 h-3.5 text-emerald-700" />
                <span>Admin Hub</span>
              </button>
            )}

            {cartCount > 0 && onCartClick && (
              <button
                onClick={onCartClick}
                className="inline-flex items-center gap-1.5 bg-stone-900 text-white hover:bg-stone-800 px-3.5 py-2 rounded-xl font-bold text-xs sm:text-sm shadow-sm transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-400" />
                <span>{cartCount} in Order</span>
              </button>
            )}

            <a
              href="#functions"
              className="hidden md:inline-flex items-center gap-1.5 bg-stone-100 hover:bg-emerald-50 text-emerald-900 border border-emerald-300 px-3.5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all"
            >
              <span>Book a Function</span>
            </a>

            <a
              href="tel:0357212092"
              className="inline-flex items-center gap-1.5 bg-emerald-800 hover:bg-emerald-900 text-white px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm shadow-md shadow-emerald-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Call (03) 5721 2092</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-stone-700 hover:text-stone-950 hover:bg-stone-100 border border-stone-200 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-300 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
          <div className="flex flex-col space-y-2.5 text-sm font-bold text-stone-800">
            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-emerald-800"
            >
              🥞 Seasonal Cafe Catalogue
            </a>
            <a
              href="#functions"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-emerald-50 hover:text-emerald-800 text-emerald-800 font-extrabold"
            >
              ✨ Riverside Events &amp; Weddings Inquiry
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-emerald-800"
            >
              🌿 Riverside Deck Experience
            </a>
            <a
              href="#story"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-emerald-800"
            >
              ☕ Our Wangaratta Story
            </a>
            <a
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-lg hover:bg-stone-100 hover:text-emerald-800"
            >
              📍 Hours &amp; 66–68 Faithfull St
            </a>
          </div>

          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2">
            <a
              href="tel:0357212092"
              className="w-full flex items-center justify-center gap-2 bg-emerald-800 text-white font-bold py-3 rounded-xl shadow-md text-sm"
            >
              <Phone className="w-4 h-4" />
              Call (03) 5721 2092
            </a>
            {onOpenLeadsModal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLeadsModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-stone-100 border border-stone-300 text-stone-700 font-bold py-2.5 rounded-xl text-xs"
              >
                <Database className="w-4 h-4 text-emerald-700" />
                Open Functions Lead Hub
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
