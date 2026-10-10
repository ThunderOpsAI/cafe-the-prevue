'use client';

import React from 'react';
import { MapPin, Clock, Phone, Navigation, ExternalLink, Waves, CheckCircle, Mail } from 'lucide-react';

export default function LocationHours() {
  const schedule = [
    { day: 'Monday', hours: '7:30 AM – 4:00 PM', note: 'Breakfast & Lunch' },
    { day: 'Tuesday', hours: '7:30 AM – 4:00 PM', note: 'Breakfast & Lunch' },
    { day: 'Wednesday', hours: '7:30 AM – 4:00 PM', note: 'Breakfast & Lunch' },
    { day: 'Thursday', hours: '7:30 AM – 4:00 PM', note: 'Breakfast & Lunch' },
    { day: 'Friday', hours: '7:30 AM – 4:00 PM', note: 'Breakfast & Lunch (Evenings: Functions)' },
    { day: 'Saturday', hours: '7:30 AM – 4:00 PM', note: 'Weekend Brunch (Evenings: Functions)' },
    { day: 'Sunday', hours: '7:30 AM – 4:00 PM', note: 'Weekend Brunch & Grazing' },
  ];

  return (
    <section id="location" className="py-20 border-b border-stone-200/90 bg-[#fbf9f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-800/10 text-emerald-900 border border-emerald-800/20 uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" /> Faithfull Street Wangaratta
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 tracking-tight">
            Hours &amp; Riverside Location
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Ideally situated right on the banks of the Ovens River at 66–68 Faithfull Street, Wangaratta with convenient parking and riverside walking path access.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Location & Contact Info */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 space-y-6 shadow-xl">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">Riverside Address</h3>
                  <p className="text-stone-800 text-base font-bold mt-1">
                    66–68 Faithfull St, Wangaratta VIC 3677
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Overlooking the Ovens River with picturesque waterfront deck access
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-500/15 border border-teal-500/30 text-teal-700 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">Phone &amp; Table Bookings</h3>
                  <a
                    href="tel:0357212092"
                    className="text-emerald-800 text-xl font-black hover:underline block mt-1"
                  >
                    (03) 5721 2092
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    Call for reservations, takeaway coffee orders, or function inquiries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-amber-700 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-stone-900">Email Inquiries</h3>
                  <a
                    href="mailto:cafethevue@gmail.com"
                    className="text-stone-800 text-base font-bold hover:underline block mt-1"
                  >
                    cafethevue@gmail.com
                  </a>
                  <p className="text-xs text-stone-500 mt-0.5">
                    For functions, group event bookings, and general inquiries
                  </p>
                </div>
              </div>

              {/* Google Maps Embed */}
              <div className="rounded-2xl overflow-hidden border border-stone-200 h-48 bg-stone-100 relative">
                <iframe
                  title="Cafe The PreVue Location Map"
                  src="https://maps.google.com/maps?q=66-68+Faithfull+Street+Wangaratta+VIC+3677&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>

              <div className="pt-2">
                <a
                  href="https://maps.google.com/?q=66-68+Faithfull+Street+Wangaratta+VIC+3677"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-md text-sm"
                >
                  <Navigation className="w-4 h-4 text-emerald-400" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
                </a>
              </div>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-stone-200 bg-white p-6 sm:p-8 flex flex-col justify-between h-full shadow-xl">
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-200">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-emerald-700" />
                    <h3 className="text-lg font-serif font-bold text-stone-900">Cafe Opening Hours</h3>
                  </div>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
                    Dine-in &amp; Takeaway
                  </span>
                </div>

                <div className="divide-y divide-stone-100">
                  {schedule.map((slot) => (
                    <div
                      key={slot.day}
                      className="py-3.5 flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600" />
                        <div>
                          <span className="font-bold text-stone-900 block">
                            {slot.day}
                          </span>
                          <span className="text-[11px] text-stone-500 hidden sm:block">
                            {slot.note}
                          </span>
                        </div>
                      </div>
                      <span className="font-mono text-xs px-3 py-1 rounded-lg bg-emerald-50 text-emerald-950 border border-emerald-200 font-bold">
                        {slot.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Private events evening notice & CTA */}
              <div className="mt-8 pt-6 border-t border-stone-200 space-y-4">
                <div className="flex items-center justify-between text-xs text-stone-600">
                  <span>Evening private functions, weddings &amp; dinners by booking</span>
                  <span className="text-emerald-800 font-bold">• 66–68 Faithfull St</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <a
                    href="#functions"
                    className="flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-md"
                  >
                    <span>Book a Function</span>
                  </a>
                  <a
                    href="tel:0357212092"
                    className="flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-900 border border-stone-300 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all"
                  >
                    <Phone className="w-4 h-4 text-emerald-700" />
                    <span>Call (03) 5721 2092</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
