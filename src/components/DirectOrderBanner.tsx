'use client';

import React from 'react';
import { Phone, CheckCircle2, Waves, Sparkles, HeartHandshake, ShieldCheck, Calendar } from 'lucide-react';

export default function DirectOrderBanner() {
  return (
    <section id="experience" className="py-16 border-b border-stone-200/90 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50/70 via-stone-50 to-teal-50/40 p-6 sm:p-10 shadow-lg relative overflow-hidden">
          
          {/* Subtle decoration badge */}
          <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black bg-emerald-800/10 text-emerald-900 border border-emerald-800/20 uppercase tracking-wider">
              <Waves className="w-3.5 h-3.5 text-emerald-700" /> Wangaratta&apos;s Scenic Riverside Destination
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-black text-stone-900 tracking-tight">
              The Cafe The PreVue Riverside Experience
            </h2>
            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Whether you are dropping in for morning artisan espresso by the water, lingering over a weekend brunch with King Valley Prosecco, or curating a milestone private function, we offer authentic regional hospitality without third-party middleman markups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Direct Booking & PreVue Hospitality */}
            <div className="rounded-2xl border-2 border-emerald-600/40 bg-white p-6 sm:p-8 space-y-5 flex flex-col justify-between shadow-md">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-bold text-emerald-900 text-lg flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Direct Booking &amp; Local Care
                  </span>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Direct Best Rates
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Scenic Riverside Seating:</strong> Direct reservations guarantee prime deck tables with panoramic views over the gentle Ovens River.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Authentic Cafe Prices:</strong> Order takeout or coffee directly with zero third-party surcharge or delivery platform markups.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Tailored Function Packages:</strong> Speak directly with our event coordinator for custom grazing boards, dietary needs &amp; wine pairings.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>100% High Country Local:</strong> Every dollar supports our Wangaratta hospitality team, local bakeries, and North East Victorian wineries.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href="#functions"
                  className="flex-1 flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3.5 rounded-xl shadow-md transition-all text-sm"
                >
                  <Calendar className="w-4 h-4" />
                  Enquire for Events
                </a>
                <a
                  href="tel:0357212092"
                  className="flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-emerald-900 border border-emerald-300 font-bold py-3.5 px-5 rounded-xl transition-all text-sm"
                >
                  <Phone className="w-4 h-4 text-emerald-700" />
                  Call (03) 5721 2092
                </a>
              </div>
            </div>

            {/* Event & Function Highlights */}
            <div className="rounded-2xl border border-stone-200 bg-stone-100/70 p-6 sm:p-8 space-y-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-bold text-stone-800 text-base flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-amber-600" />
                    Host Your Celebration By The River
                  </span>
                  <span className="text-[11px] font-bold text-stone-600 bg-stone-200 px-2.5 py-0.5 rounded-full">
                    Venue Hire
                  </span>
                </div>

                <ul className="space-y-3 text-sm text-stone-600">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 font-bold text-sm leading-none mt-0.5">✦</span>
                    <span><strong>Riverside Weddings &amp; Elopements:</strong> Intimate ceremony &amp; reception packages with picturesque waterfront photo backdrops.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 font-bold text-sm leading-none mt-0.5">✦</span>
                    <span><strong>Corporate Breakfasts &amp; Lunches:</strong> Private morning spaces with high-speed WiFi, barista coffee service, and gourmet brunch boards.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 font-bold text-sm leading-none mt-0.5">✦</span>
                    <span><strong>Milestone Birthdays &amp; Anniversaries:</strong> Twilight cocktail parties with King Valley sparkling, grazing tables, and terrace fairy lights.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-700 font-bold text-sm leading-none mt-0.5">✦</span>
                    <span><strong>Customized Menus:</strong> Flexible dietary choices including vegan, vegetarian, and coeliac-safe options cooked fresh.</span>
                  </li>
                </ul>
              </div>

              <div className="pt-2 text-center">
                <p className="text-xs text-stone-500 font-medium">
                  Located right on 66–68 Faithfull Street with easy riverside parking and ramp accessibility.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
