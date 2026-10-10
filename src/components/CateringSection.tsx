'use client';

import React, { useState } from 'react';
import { Users, Calendar, Utensils, CheckCircle, Sparkles, Send, PhoneCall, AlertCircle, Clock, Waves, Wine, Heart } from 'lucide-react';

export default function CateringSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('Riverside Wedding');
  const [guestCount, setGuestCount] = useState('30');
  const [eventDate, setEventDate] = useState('');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Estimate calculation based on typical cafe/riverside function package (~$45 per head base)
  const estimatedTotal = Math.max(10, parseInt(guestCount || '10', 10)) * 45;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          service_type: serviceType,
          guest_count: guestCount,
          event_date: eventDate,
          notes: notes ? `${notes} (Est. guest budget indicator: ~$${estimatedTotal})` : `Est. guest budget indicator: ~$${estimatedTotal}`,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitSuccess(true);
        setName('');
        setPhone('');
        setEmail('');
        setNotes('');
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try calling us directly on (03) 5721 2092.');
      }
    } catch {
      setErrorMessage('Network error occurred. Please call our team directly on (03) 5721 2092.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="functions" className="py-20 border-b border-stone-200/90 bg-stone-950 text-stone-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Event Inquiry Engine Pitch */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Private Functions &amp; Weddings
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white tracking-tight leading-snug">
              Host Your Riverside Celebration at Cafe The PreVue
            </h2>

            <p className="text-stone-300 text-base leading-relaxed">
              Celebrate your milestone with breathtaking panoramic vistas of the Ovens River. Whether you are planning a romantic waterfront wedding reception, an elegant birthday celebration, a corporate breakfast, or an intimate private function, our kitchen crafts tailored dining packages paired with High Country regional wines.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3 bg-stone-900/90 p-4 rounded-2xl border border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Waves className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Scenic Riverfront Deck &amp; Terrace Hire</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Exclusive hire options overlooking the serene Ovens River with flexible indoor and outdoor seating configurations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-900/90 p-4 rounded-2xl border border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Wine className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Curated Grazing &amp; Canape Packages</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Artisan Milawa cheese boards, gourmet warm canapes, fresh seafood rillettes, and King Valley sparkling wine service.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-stone-900/90 p-4 rounded-2xl border border-stone-800">
                <div className="w-10 h-10 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-base">Corporate Meetings &amp; Morning Seminars</h4>
                  <p className="text-stone-400 text-xs sm:text-sm mt-0.5 leading-relaxed">
                    Executive morning tea, continuous barista coffee, hot breakfast boards, and quiet riverfront ambiance for your business team.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-800/60 text-xs sm:text-sm text-stone-300 flex items-center justify-between gap-4">
              <div>
                <span className="font-bold text-emerald-300 block">Prefer to speak directly?</span>
                <span>Call our functions coordinator directly for immediate date availability.</span>
              </div>
              <a
                href="tel:0357212092"
                className="shrink-0 inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3.5 py-2 rounded-xl text-xs transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" /> (03) 5721 2092
              </a>
            </div>
          </div>

          {/* Right Column: Lead Form */}
          <div className="lg:col-span-6">
            <div className="bg-stone-900/90 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-black text-white">
                  Riverside Function Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 mt-1">
                  Tell us about your celebration and our events manager will contact you with sample menus, date availability, and package options.
                </p>
              </div>

              {submitSuccess ? (
                <div className="py-10 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-serif font-bold text-white">Inquiry Received!</h4>
                  <p className="text-stone-300 text-sm max-w-md mx-auto leading-relaxed">
                    Thank you! Your function request has been logged. The Cafe The PreVue event coordinator will review your details and call you shortly to discuss your riverside celebration.
                  </p>
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="inline-flex items-center gap-2 bg-stone-800 hover:bg-stone-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1">
                        Contact Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Henderson"
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. 0418 345 678"
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sarah@example.com"
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1">
                        Event / Function Type *
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                      >
                        <option value="Riverside Wedding">Riverside Wedding</option>
                        <option value="Private Function">Private Function</option>
                        <option value="Corporate Breakfast/Lunch">Corporate Breakfast/Lunch</option>
                        <option value="Riverside Birthday/Celebration">Riverside Birthday/Celebration</option>
                        <option value="Cocktail Party & Grazing">Cocktail Party &amp; Grazing</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-300 mb-1">
                        Estimated Guest Count
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="250"
                        value={guestCount}
                        onChange={(e) => setGuestCount(e.target.value)}
                        placeholder="e.g. 40"
                        className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1">
                      Event Notes &amp; Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Tell us about your timing, outdoor deck preferences, dietary requirements, or beverage packages..."
                      className="w-full bg-stone-950 border border-stone-800 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-stone-500 focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-black py-4 rounded-xl shadow-lg transition-all text-sm disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Submitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Riverside Function Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-stone-500">
                    Direct inquiry submitted directly to Cafe The PreVue event coordination team.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
