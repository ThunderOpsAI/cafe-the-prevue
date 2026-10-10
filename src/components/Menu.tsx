'use client';

import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Plus, Minus, Trash2, CheckCircle2, Sparkles, X, Phone, Utensils, Heart, Calendar } from 'lucide-react';
import { MENU_ITEMS, MENU_CATEGORIES, MENU_TAGS, MenuItem, MenuCategory } from '@/data/menu';

export type CartItem = MenuItem & { quantity: number };

interface MenuProps {
  onCartChange?: (items: CartItem[]) => void;
}

export default function Menu({ onCartChange }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<MenuCategory | 'all'>('all');
  const [activeTag, setActiveTag] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Filter items based on Category, Tag, and Search Query
  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      // Category match
      if (activeCategory !== 'all' && item.category !== activeCategory) {
        return false;
      }

      // Tag match
      if (activeTag !== 'All') {
        if (activeTag === 'Popular') {
          if (!item.popular && !item.tags?.includes('Popular')) return false;
        } else {
          if (!item.tags?.includes(activeTag)) return false;
        }
      }

      // Search query match
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesDesc = item.description ? item.description.toLowerCase().includes(query) : false;
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesTags = item.tags ? item.tags.some(t => t.toLowerCase().includes(query)) : false;

        if (!matchesName && !matchesDesc && !matchesCat && !matchesTags) {
          return false;
        }
      }

      return true;
    });
  }, [activeCategory, activeTag, searchQuery]);

  const updateQuantity = (id: string, delta: number) => {
    setCart((prevCart) => {
      const nextCart = prevCart
        .map((item) => {
          if (item.id === id) {
            const newQty = Math.min(Math.max(item.quantity + delta, 0), 99);
            return { ...item, quantity: newQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);

      if (onCartChange) onCartChange(nextCart);
      return nextCart;
    });
  };

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.id === item.id);
      let nextCart: CartItem[];
      if (existing) {
        nextCart = prevCart.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: Math.min(ci.quantity + 1, 99) } : ci
        );
      } else {
        nextCart = [...prevCart, { ...item, quantity: 1 }];
      }
      if (onCartChange) onCartChange(nextCart);
      return nextCart;
    });
    setOrderPlaced(false);
  };

  const clearCart = () => {
    setCart([]);
    if (onCartChange) onCartChange([]);
  };

  const placeOrder = () => {
    if (cart.length > 0) {
      setOrderPlaced(true);
      setCart([]);
      if (onCartChange) onCartChange([]);
    }
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <section id="menu" className="text-stone-900 font-sans pb-16 pt-8 bg-[#f7f5f0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-800/10 text-emerald-900 border border-emerald-800/20 uppercase tracking-widest">
            <Utensils className="w-3.5 h-3.5 text-emerald-700" /> Aesthetic Cafe Catalogue
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-stone-900 tracking-tight">
            Seasonal Cafe Menu &amp; Order
          </h2>
          <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
            Browse our artisan brunch, gourmet riverside lunch dishes, High Country grazing platters, and specialty coffee. Build your order summary or call ahead on (03) 5721 2092 for prompt pickup.
          </p>
        </div>

        {/* Search Bar & Tag Filter Row */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-md border border-stone-200 mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-3 items-center">
            {/* Live Search Input */}
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-stone-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search smashed avocado, wagyu burger, salmon, grazing platter, barista coffee..."
                className="w-full bg-stone-50 border border-stone-200 rounded-2xl pl-11 pr-10 py-3 text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:border-emerald-600 focus:bg-white transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 p-1 text-stone-400 hover:text-stone-700"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Live Cart Counter Pill */}
            {cartItemCount > 0 && (
              <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-900 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold shrink-0">
                <ShoppingBag className="w-4 h-4 text-emerald-700" />
                <span>{cartItemCount} item{cartItemCount > 1 ? 's' : ''} in cart</span>
                <span className="font-extrabold text-emerald-950 ml-1 font-mono">${cartTotal.toFixed(2)}</span>
              </div>
            )}
          </div>

          {/* Quick Dietary & Filter Tags */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider shrink-0 mr-1">
              Filter:
            </span>
            {MENU_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-xs px-3 py-1.5 rounded-full font-bold transition-all shrink-0 border ${
                  activeTag === tag
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                    : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 hover:text-stone-900'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as MenuCategory | 'all')}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all shrink-0 border ${
                activeCategory === cat.id
                  ? 'bg-stone-900 text-white border-stone-900 shadow-md shadow-stone-900/10'
                  : 'bg-white text-stone-700 border-stone-200 hover:border-emerald-600/40 hover:text-emerald-900'
              }`}
            >
              <span className="text-base">{cat.icon}</span>
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Menu Items Grid + Live Cart Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Menu Items Cards */}
          <div className="lg:col-span-8 space-y-4">
            {filteredItems.length === 0 ? (
              <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
                <p className="text-stone-500 font-medium">No menu items match your search.</p>
                <button
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveTag('All');
                    setSearchQuery('');
                  }}
                  className="mt-3 text-xs font-bold text-emerald-800 hover:underline"
                >
                  Reset all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredItems.map((item) => {
                  const inCartItem = cart.find((ci) => ci.id === item.id);
                  return (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl p-5 border border-stone-200/90 hover:border-emerald-500/50 hover:shadow-lg transition-all flex flex-col justify-between group"
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-serif font-bold text-stone-900 text-base group-hover:text-emerald-900 transition-colors leading-snug">
                            {item.name}
                          </h3>
                          <span className="font-mono font-black text-emerald-800 text-base shrink-0">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>

                        {item.description && (
                          <p className="text-stone-500 text-xs leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                        )}

                        {item.tags && item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {item.tags.map((t, idx) => (
                              <span
                                key={idx}
                                className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                                  t === 'Popular' || t === 'Chef Specialty'
                                    ? 'bg-amber-100 text-amber-900 border border-amber-200'
                                    : 'bg-stone-100 text-stone-600'
                                }`}
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between">
                        {inCartItem ? (
                          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-300 rounded-xl p-1">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-7 h-7 rounded-lg bg-white text-stone-800 hover:bg-emerald-100 flex items-center justify-center font-bold text-xs"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="font-mono font-bold text-xs px-2 text-emerald-950">
                              {inCartItem.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-7 h-7 rounded-lg bg-emerald-800 text-white hover:bg-emerald-900 flex items-center justify-center font-bold text-xs"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(item)}
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3.5 py-2 rounded-xl transition-all"
                          >
                            <Plus className="w-3.5 h-3.5 text-emerald-700" />
                            <span>Add to Order</span>
                          </button>
                        )}

                        <span className="text-[11px] text-stone-400 capitalize">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Cart / Order Summary Sidebar */}
          <div className="lg:col-span-4 sticky top-28 space-y-4">
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xl space-y-5">
              <div className="flex items-center justify-between pb-4 border-b border-stone-100">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5 text-emerald-700" />
                  <h3 className="font-serif font-bold text-stone-900 text-lg">Your Order Summary</h3>
                </div>
                {cart.length > 0 && (
                  <button
                    onClick={clearCart}
                    className="text-stone-400 hover:text-rose-600 transition-colors p-1"
                    title="Clear order"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>

              {orderPlaced ? (
                <div className="py-6 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif font-bold text-stone-900">Order Summary Ready!</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Please call our team on <strong className="text-emerald-900">(03) 5721 2092</strong> to confirm your pickup or table details!
                  </p>
                  <a
                    href="tel:0357212092"
                    className="w-full inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-bold py-3 rounded-xl text-xs shadow-md transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call (03) 5721 2092 Now
                  </a>
                </div>
              ) : cart.length === 0 ? (
                <div className="py-8 text-center text-stone-400 space-y-2">
                  <ShoppingBag className="w-8 h-8 mx-auto opacity-30" />
                  <p className="text-xs font-medium">Your order summary is empty.</p>
                  <p className="text-[11px] text-stone-400">Click &quot;Add to Order&quot; on any item to calculate your total.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="max-h-64 overflow-y-auto space-y-3 pr-1 divide-y divide-stone-100">
                    {cart.map((item) => (
                      <div key={item.id} className="pt-2 flex items-center justify-between text-xs">
                        <div className="flex-1 pr-2">
                          <span className="font-bold text-stone-900 block truncate">{item.name}</span>
                          <span className="text-stone-400 text-[11px]">
                            {item.quantity} x ${item.price.toFixed(2)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="font-mono font-bold text-stone-800">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                          <div className="flex items-center gap-1 bg-stone-100 rounded-lg p-0.5">
                            <button
                              onClick={() => updateQuantity(item.id, -1)}
                              className="w-5 h-5 rounded flex items-center justify-center text-stone-600 hover:bg-stone-200"
                            >
                              -
                            </button>
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="w-5 h-5 rounded flex items-center justify-center text-stone-600 hover:bg-stone-200"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-stone-200 space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-stone-500 font-medium">Subtotal</span>
                      <span className="font-mono font-bold text-stone-900">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between text-base font-bold">
                      <span className="text-stone-900 font-serif">Estimated Total</span>
                      <span className="font-mono text-emerald-800 text-lg font-black">${cartTotal.toFixed(2)}</span>
                    </div>
                  </div>

                  <button
                    onClick={placeOrder}
                    className="w-full flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 active:bg-emerald-950 text-white font-bold py-3.5 rounded-xl shadow-md text-sm transition-all"
                  >
                    <span>Finalize Order Call List</span>
                  </button>

                  <a
                    href="tel:0357212092"
                    className="w-full flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-emerald-900 border border-emerald-300 font-bold py-3 rounded-xl text-xs transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Call (03) 5721 2092 to Confirm</span>
                  </a>

                  <p className="text-[11px] text-center text-stone-500">
                    Pay at counter upon pickup • Cash &amp; EFTPOS accepted
                  </p>
                </div>
              )}
            </div>

            {/* Function Inquiry Mini Callout */}
            <div className="bg-emerald-950 text-emerald-100 rounded-3xl p-5 border border-emerald-900/60 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-300 uppercase tracking-wider">
                <Calendar className="w-4 h-4 text-amber-400" />
                Planning an Event?
              </div>
              <p className="text-xs text-stone-300 leading-relaxed">
                Hosting a wedding, corporate lunch, or riverside celebration? Let us design a bespoke menu package.
              </p>
              <a
                href="#functions"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-300 hover:text-white transition-colors"
              >
                <span>Submit a Riverside Function Inquiry</span> &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
