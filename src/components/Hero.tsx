'use client';

import React from 'react';
import { Phone, ArrowRight, Sparkles, MapPin, Waves, Calendar, Award, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-16 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Card Container */}
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-950/15 border border-stone-200/90 bg-stone-950 text-white min-h-[520px] lg:min-h-[580px] flex flex-col justify-end">
          
          {/* Background image & gradient overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 scale-100 hover:scale-105 opacity-55"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/75 to-stone-950/25" />
          
          {/* Subtle teal / emerald glow */}
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Hero Content */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-16 max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-950/60 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-bold text-emerald-300">
              <Waves className="w-4 h-4 text-emerald-400" />
              <span>Overlooking the Ovens River • 66–68 Faithfull St, Wangaratta</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-black tracking-tight leading-[1.08] text-white">
              Riverside Dining, <br />
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent font-sans">
                Artisan Coffee &amp; Private Events
              </span>
            </h1>

            <p className="text-base sm:text-xl text-stone-200 font-medium max-w-2xl leading-relaxed">
              Perched gracefully along the Ovens River, Cafe The PreVue blends farm-fresh High Country produce, specialty barista coffee, and panoramic waterfront terrace views. Enjoy our seasonal all-day brunch catalogue, gourmet lunch, or enquire for your next unforgettable riverside celebration.
            </p>

            {/* Quick highlights */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm text-stone-200 font-semibold">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Scenic Riverfront Terrace &amp; Deck
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Artisan Coffee &amp; Seasonal Brunch
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Weddings &amp; Private Function Venue
              </span>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href="#functions"
                className="inline-flex items-center justify-center gap-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-black px-7 py-4 rounded-2xl shadow-xl shadow-emerald-950/40 text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Calendar className="w-5 h-5 text-emerald-200" />
                <span>Enquire / Book a Function</span>
              </a>

              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-bold px-6 py-4 rounded-2xl backdrop-blur-md border border-white/20 text-base transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Menu Catalogue</span>
                <ArrowRight className="w-4 h-4 text-emerald-300" />
              </a>

              <a
                href="tel:0357212092"
                className="inline-flex items-center justify-center gap-2 bg-stone-900/90 hover:bg-stone-900 text-amber-300 font-bold px-5 py-4 rounded-2xl border border-stone-700 text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call to Order: (03) 5721 2092</span>
              </a>
            </div>

            {/* Quick Location & Phone Info Strip */}
            <div className="pt-3 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs sm:text-sm text-stone-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>66–68 Faithfull St, Wangaratta VIC 3677</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Open 7 Days • 7:30am–4:00pm &amp; Evening Events</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
