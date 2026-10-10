'use client';

import React from 'react';
import { Sparkles, Phone, Check, ArrowRight, Utensils, Wine, Waves, Calendar } from 'lucide-react';

export default function FlyersSection() {
  const packages = [
    {
      id: 'package-brunch',
      title: 'Seasonal All-Day Brunch & Gourmet Lunch',
      subtitle: 'Menu Showcase 1 — Daily Cafe Fare Overlooking the River',
      tag: 'Brunch • Lunch • Artisan Coffee',
      highlights: [
        'The PreVue Riverside Big Breakfast with High Country Sourdough',
        'Smashed Avocado & Meredith Dairy Goat’s Feta with Poached Eggs',
        'Brioche Eggs Benedict with House Hollandaise & Pulled Pork',
        'Victorian Wagyu Beef Burger with Rosemary Salted Hand-Cut Chips',
        'Crispy Skin Ovens River Salmon Fillet with Asparagus & Velouté',
        'Artisan Espresso, Cold Drip Brews & High Country Sticky Chai'
      ],
      description: 'Prepared fresh every morning using locally sourced North East Victorian ingredients, enjoyed on our sunny riverside timber deck.'
    },
    {
      id: 'package-functions',
      title: 'Riverside Weddings & Private Function Catering',
      subtitle: 'Menu Showcase 2 — Custom Event Packages & Platters',
      tag: 'Weddings • Functions • Grazing',
      highlights: [
        'King Valley Grazing Tables featuring Milawa Artisan Cheeses',
        'Passed Gourmet Canapés & Seafood Tasting Boards',
        'Local Wine & Craft Beer Packages (Prosecco, Pinot Grigio & Ales)',
        'Sit-Down 2 & 3 Course Riverside Banquet Dinners',
        'Corporate Breakfast Boards with Barista Coffee & Pastries',
        'Exclusive Waterfront Deck & Indoor Dining Space Hire'
      ],
      description: 'From intimate twilight weddings to lively milestone birthday parties and corporate breakfasts, tailored to your exact taste and budget.'
    }
  ];

  return (
    <section id="packages" className="py-20 border-b border-stone-200/90 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-800/10 text-emerald-900 border border-emerald-800/20 uppercase tracking-widest">
            <Waves className="w-3.5 h-3.5 text-emerald-700" /> Curated Dining &amp; Gatherings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 tracking-tight">
            Seasonal Menus &amp; Event Packages
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Discover our seasonal dishes or speak with our team to customize catering and private room hire for your upcoming gathering at 66–68 Faithfull Street.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="rounded-3xl border border-stone-200 bg-white shadow-xl hover:shadow-2xl hover:border-emerald-500/50 transition-all flex flex-col justify-between overflow-hidden"
            >
              {/* Card visual header */}
              <div className="p-7 bg-gradient-to-br from-emerald-950 via-stone-900 to-teal-950 text-white relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider bg-emerald-500/20 border border-emerald-500/30 px-3 py-1 rounded-full">
                    {pkg.tag}
                  </span>
                  <span className="text-emerald-200/80 text-xs font-semibold flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Wangaratta Waterfront
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-white leading-tight">
                  {pkg.title}
                </h3>
                <p className="text-stone-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {pkg.description}
                </p>
              </div>

              {/* Highlights */}
              <div className="p-7 space-y-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-black text-stone-900 uppercase tracking-wider block mb-3">
                    Featured Highlights:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-stone-700">
                    {pkg.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-stone-50 border border-stone-200/80 p-2.5 rounded-xl font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-3">
                  <a
                    href={pkg.id === 'package-functions' ? "#functions" : "#menu"}
                    className="flex-1 inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 px-4 rounded-xl text-xs sm:text-sm shadow transition-colors"
                  >
                    <span>{pkg.id === 'package-functions' ? "Enquire for Functions" : "View Full Catalogue"}</span>
                    <ArrowRight className="w-4 h-4 text-emerald-300" />
                  </a>

                  <a
                    href="tel:0357212092"
                    className="inline-flex items-center justify-center gap-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold py-3 px-5 rounded-xl text-xs sm:text-sm border border-stone-300 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-emerald-700" />
                    <span>(03) 5721 2092</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Special Event Planning Callout */}
        <div className="mt-10 rounded-2xl bg-emerald-900 text-emerald-50 border border-emerald-800 p-6 sm:p-7 shadow-lg flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="font-serif font-bold text-lg text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Hosting an Intimate Ceremony or Celebration on the River?
            </h4>
            <p className="text-sm text-emerald-200 mt-1 leading-relaxed">
              We offer exclusive full-venue and riverfront deck hire for daytime and twilight functions. Complete with dedicated waitstaff, custom cocktail bar service, and curated High Country wine lists.
            </p>
          </div>
          <a
            href="#functions"
            className="shrink-0 bg-amber-400 hover:bg-amber-300 text-stone-950 font-black px-5 py-3 rounded-xl text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            Submit Function Inquiry
          </a>
        </div>

      </div>
    </section>
  );
}
