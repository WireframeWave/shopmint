import React from 'react';
import { Check, CreditCard, Bell, TrendingUp, MapPin } from 'lucide-react';
import { Button } from './ui/Button';

export const Conversion: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Content Column (Left) */}
          <div className="order-1">
            <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
              Unlock mobile revenue that <span className="text-transparent bg-clip-text bg-gradient-to-r from-techno-primary to-techno-accent">your website misses.</span>
            </h2>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Native apps convert 3x better than mobile websites. Technoboost gives you the tools to capitalize on that difference with a frictionless buying experience.
            </p>

            <div className="space-y-6 mb-10">
              {/* Benefit 1 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                   <CreditCard className="w-5 h-5 text-techno-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Frictionless Checkout</h3>
                  <p className="text-slate-600">
                    Drive higher conversions with one-tap payments via Apple Pay & Google Pay. Eliminate form-filling fatigue.
                  </p>
                </div>
              </div>

              {/* Benefit 2 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                   <Bell className="w-5 h-5 text-techno-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Zero-Cost Retargeting</h3>
                  <p className="text-slate-600">
                    Slash ad spend. Engage customers instantly with unlimited, AI-driven push notifications that land directly on their lock screen.
                  </p>
                </div>
              </div>

              {/* Benefit 3 */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                   <TrendingUp className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">Retention & LTV</h3>
                  <p className="text-slate-600">
                     Reduce CAC by turning one-time visitors into loyal brand advocates through a dedicated app home on their device.
                  </p>
                </div>
              </div>
            </div>

            <Button size="lg">Start Building Free</Button>
          </div>

          {/* Visual Column (Right) */}
          <div className="relative order-2 flex justify-center">
             {/* Decorative blob */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-indigo-100/50 to-cyan-50/50 rounded-full blur-3xl -z-10"></div>

             {/* Phone Mockup */}
             <div className="relative w-full max-w-[380px] bg-white rounded-[3rem] shadow-2xl border-[8px] border-slate-900 overflow-hidden aspect-[9/18]">
                {/* Status Bar */}
                <div className="h-6 bg-white w-full flex justify-between items-center px-6 mt-2">
                    <span className="text-[10px] font-bold text-slate-900">9:41</span>
                    <div className="flex gap-1">
                        <div className="w-4 h-2.5 bg-slate-900 rounded-[1px]"></div>
                    </div>
                </div>

                {/* App Header */}
                <div className="px-5 py-3 border-b border-slate-50 flex items-center justify-center relative">
                    <span className="font-display font-bold text-slate-900 tracking-wide">MY CART</span>
                    <div className="absolute right-5 text-slate-400">×</div>
                </div>

                {/* Scrollable Content */}
                <div className="p-5 space-y-6">
                    
                    {/* Store Pickup Toggle */}
                    <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-3 border border-slate-100">
                        <div className="w-5 h-5 rounded-full border-2 border-indigo-500 flex items-center justify-center">
                            <div className="w-2.5 h-2.5 bg-indigo-500 rounded-full"></div>
                        </div>
                        <div className="flex-1">
                            <div className="text-xs font-bold text-slate-900">Store Pickup</div>
                            <div className="text-[10px] text-slate-500">Available at 12 locations</div>
                        </div>
                    </div>

                    {/* Cart Item */}
                    <div className="flex gap-4">
                        <div className="w-20 h-24 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img src="https://picsum.photos/id/445/200/200" alt="Product" className="w-full h-full object-cover mix-blend-multiply" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                            <div>
                                <div className="text-sm font-bold text-slate-900">Minimalist Chair</div>
                                <div className="text-xs text-slate-500">Charcoal Gray</div>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="text-sm font-bold text-slate-900">$149.00</div>
                                <div className="flex items-center gap-3 border border-slate-200 rounded px-2 py-0.5">
                                    <span className="text-xs text-slate-500">-</span>
                                    <span className="text-xs font-medium">1</span>
                                    <span className="text-xs text-slate-500">+</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Payment Options */}
                    <div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-wider">Express Checkout</div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="h-10 bg-black text-white rounded-lg flex items-center justify-center gap-1 cursor-pointer">
                                <span className="font-sans font-bold italic tracking-tighter">Pay</span>
                            </div>
                            <div className="h-10 bg-white border border-slate-200 text-slate-700 rounded-lg flex items-center justify-center gap-1 cursor-pointer">
                                <span className="font-sans font-bold text-blue-500">G</span>
                                <span className="font-sans font-medium text-slate-600">Pay</span>
                            </div>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="bg-white border border-slate-100 rounded-xl p-3 shadow-sm relative">
                        <div className="absolute -top-2 left-3 bg-white px-1 text-[10px] font-bold text-slate-400">Saved Address</div>
                        <div className="flex gap-3 items-start mt-1">
                             <MapPin className="w-4 h-4 text-techno-primary mt-0.5" />
                             <div>
                                <div className="text-xs font-bold text-slate-900">Home</div>
                                <div className="text-[10px] text-slate-500 leading-tight mt-0.5">
                                    452 Tech Boulevard, Suite 100<br/>San Francisco, CA 94107
                                </div>
                             </div>
                        </div>
                    </div>

                     {/* Total Row */}
                    <div className="flex justify-between items-end pt-2">
                        <span className="text-xs text-slate-500">Total</span>
                        <span className="text-xl font-bold text-slate-900">$149.00</span>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-techno-primary text-white font-bold py-3.5 rounded-xl shadow-lg shadow-indigo-200">
                        Checkout
                    </button>

                </div>
             </div>

             {/* Floating Badge */}
              <div className="absolute top-[30%] -right-4 lg:-right-8 bg-white px-4 py-3 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 z-10 animate-[pulse_4s_infinite]">
                  <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-1.5 rounded-full">
                          <Check className="w-4 h-4 text-green-600" />
                      </div>
                      <div>
                          <div className="text-[10px] text-slate-400 uppercase font-bold">Conversion Rate</div>
                          <div className="text-sm font-bold text-slate-900">+12% vs Mobile Web</div>
                      </div>
                  </div>
              </div>

          </div>
        </div>
      </div>
    </section>
  );
};