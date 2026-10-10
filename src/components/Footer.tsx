'use client';

import React from 'react';
import { Phone, MapPin, Clock, Heart, Database, Waves, Mail, Calendar } from 'lucide-react';

interface FooterProps {
  onOpenLeadsModal?: () => void;
}

export default function Footer({ onOpenLeadsModal }: FooterProps) {
  return (
    <footer className="bg-stone-950 border-t border-stone-800 text-stone-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-800 border border-emerald-700 flex items-center justify-center text-white font-serif font-black text-xl">
                P
              </div>
              <div>
                <span className="font-serif font-bold tracking-tight text-lg text-white">
                  Cafe <span className="text-emerald-400 font-sans font-black">The PreVue</span>
                </span>
                <p className="text-[10px] tracking-wider text-emerald-400 uppercase font-semibold">
                  Riverside Dining &amp; Events
                </p>
              </div>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              Wangaratta&apos;s premier waterfront cafe overlooking the Ovens River. Serving specialty artisan coffee, High Country all-day brunch, gourmet lunches, and hosting memorable riverside weddings and private celebrations.
            </p>
            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:0357212092"
                className="inline-flex items-center gap-2 text-xs font-bold text-emerald-300 hover:text-white bg-stone-900 border border-stone-800 px-3 py-2 rounded-xl transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>(03) 5721 2092</span>
              </a>
              <a
                href="mailto:cafethevue@gmail.com"
                className="inline-flex items-center gap-2 text-xs font-semibold text-stone-300 hover:text-emerald-300 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-stone-400" />
                <span>cafethevue@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Navigation</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#menu" className="hover:text-emerald-400 transition-colors">Seasonal Menu Catalogue</a></li>
              <li><a href="#functions" className="hover:text-emerald-400 transition-colors">Riverside Functions &amp; Weddings</a></li>
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors">The Riverside Experience</a></li>
              <li><a href="#packages" className="hover:text-emerald-400 transition-colors">Event Catering Packages</a></li>
              <li><a href="#story" className="hover:text-emerald-400 transition-colors">Our Wangaratta Story</a></li>
              <li><a href="#location" className="hover:text-emerald-400 transition-colors">Hours &amp; Location Map</a></li>
            </ul>
          </div>

          {/* Contact Details with exact hours */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Contact &amp; Location</h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  66–68 Faithfull St, <br />
                  Wangaratta VIC 3677
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="tel:0357212092" className="hover:text-white font-black text-emerald-400 text-sm">
                  (03) 5721 2092
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-stone-300">
                  Mon – Sun: 7:30 AM – 4:00 PM <br />
                  Evenings: Private Functions &amp; Weddings by Reservation
                </span>
              </div>
            </div>
          </div>

          {/* Functions & Admin Hub */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Functions &amp; Events</h4>
            <p className="text-xs text-stone-300 leading-relaxed">
              Book your private riverside celebration, wedding reception, or corporate breakfast on the Ovens River deck.
            </p>
            <div className="space-y-2.5 pt-1">
              <a
                href="#functions"
                className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs shadow-md transition-all"
              >
                <Calendar className="w-3.5 h-3.5" />
                Enquire for a Function
              </a>

              {onOpenLeadsModal && (
                <button
                  onClick={onOpenLeadsModal}
                  className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-stone-300 hover:text-emerald-300 border border-stone-800 py-2 rounded-xl text-xs transition-colors"
                >
                  <Database className="w-3.5 h-3.5 text-emerald-500" />
                  <span>⚡ Open Functions Lead Hub</span>
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500">
          <p>© {new Date().getFullYear()} Cafe The PreVue. All rights reserved.</p>
          <p className="flex items-center gap-1 text-stone-400">
            Wangaratta Riverside Dining &amp; Private Functions <Heart className="w-3.5 h-3.5 text-emerald-500 fill-emerald-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
