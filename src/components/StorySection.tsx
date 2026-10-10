'use client';

import React from 'react';
import { Heart, Sparkles, Waves, MapPin, Coffee, Utensils, Award } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-20 border-b border-stone-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Image & Location badge */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-stone-200 shadow-2xl bg-stone-900 group">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
                alt="Cafe The PreVue Riverside dining terrace in Wangaratta"
                className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 bg-emerald-700 text-white font-bold text-xs px-3.5 py-1.5 rounded-full mb-2.5 shadow-md">
                  <MapPin className="w-3.5 h-3.5" /> 66–68 Faithfull St, Wangaratta
                </div>
                <h4 className="text-xl sm:text-2xl font-serif font-black text-white">
                  &ldquo;A Riverfront Sanctuary for Exceptional Dining&rdquo;
                </h4>
                <p className="text-xs text-stone-300 mt-1">
                  Enjoy all-day brunch, artisan coffee, and celebration events along the Ovens River.
                </p>
              </div>
            </div>

            {/* Corner floating badge */}
            <div className="absolute -bottom-4 -right-4 sm:bottom-4 sm:right-4 bg-white border border-stone-200 rounded-2xl p-4 shadow-xl hidden sm:flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-emerald-800 text-white flex items-center justify-center font-serif font-black text-lg">
                P
              </div>
              <div>
                <span className="text-xs font-bold text-stone-950 block">Cafe The PreVue</span>
                <span className="text-[11px] text-emerald-800 font-semibold">Riverside Dining &amp; Functions</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-800/10 text-emerald-900 border border-emerald-800/20 uppercase tracking-widest">
              <Heart className="w-3.5 h-3.5 text-emerald-700 fill-emerald-700" /> The PreVue Story
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 tracking-tight leading-tight">
              Wangaratta&apos;s Iconic Riverside Gathering Place
            </h2>

            <p className="text-stone-700 text-base leading-relaxed">
              Nestled right on the picturesque bend of the Ovens River on Faithfull Street, Cafe The PreVue was created as a relaxed culinary haven where great food, artisan coffee, and natural beauty intertwine.
            </p>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
              Inspired by the abundant produce of North East Victoria and the King Valley, our kitchen champions regional flavors—from rich sourdough breads and award-winning Milawa dairy to seasonal High Country vegetables and cool-climate wines. Whether greeting the morning sunrise over a velvety flat white on our timber deck, enjoying a relaxed Sunday lunch with friends, or gathering under fairy lights for an intimate riverfront wedding reception, Cafe The PreVue offers an experience you will cherish.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-emerald-800 font-serif font-black text-2xl block">Ovens River</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Waterfront Deck</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Picturesque outdoor terrace seating overlooking tranquil waters.</span>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-teal-800 font-serif font-black text-2xl block">Artisan</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Specialty Coffee</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Locally roasted beans extracted by passionate baristas every morning.</span>
              </div>

              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <span className="text-amber-800 font-serif font-black text-2xl block">Celebrations</span>
                <span className="text-xs font-bold text-stone-900 block mt-0.5">Private Functions</span>
                <span className="text-[11px] text-stone-600 mt-1 block">Full venue hire and bespoke catering packages for weddings &amp; events.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
