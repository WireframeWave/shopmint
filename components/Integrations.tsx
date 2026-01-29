import React from 'react';
import { Star, MessageCircle, Search, Gift, Zap, ArrowUpRight } from 'lucide-react';

export const Integrations: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
            {/* Content Column (Left) */}
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-bold mb-6 border border-blue-100">
                    <Zap className="w-4 h-4 fill-current" />
                    <span>Plug & Play Ecosystem</span>
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
                    Your entire tech stack, <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-techno-primary to-techno-accent">working in harmony.</span>
                </h2>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                   We don't just connect to your apps; we weave them natively into the mobile interface. Your reviews, loyalty points, and search engines feel like they were built specifically for the app.
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="border border-slate-100 rounded-xl p-5 hover:border-indigo-100 hover:shadow-sm transition-all group">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-indigo-600 transition-colors">
                            <Zap className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">One-Click Install</h4>
                        <p className="text-sm text-slate-500">No API keys to copy-paste. Just authorize and go.</p>
                    </div>
                    <div className="border border-slate-100 rounded-xl p-5 hover:border-indigo-100 hover:shadow-sm transition-all group">
                        <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-indigo-600 transition-colors">
                            <ArrowUpRight className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors" />
                        </div>
                        <h4 className="font-bold text-slate-900 mb-1">Real-time Sync</h4>
                        <p className="text-sm text-slate-500">Data flows instantly between Shopify and your app.</p>
                    </div>
                </div>
            </div>

            {/* Visual Column (Right) - Anatomy of the App */}
            <div className="lg:w-1/2 w-full relative flex justify-center lg:justify-end mt-12 lg:mt-0">
                
                {/* Background Blobs */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>

                <div className="relative">
                    {/* The Phone */}
                    <div className="relative z-10 w-[300px] bg-slate-900 rounded-[40px] border-[8px] border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/10 mx-auto">
                        <div className="bg-white w-full h-[580px] overflow-hidden flex flex-col relative">
                            
                            {/* App Header with Search */}
                            <div className="bg-white p-4 pb-2 flex items-center gap-3 border-b border-slate-50 shadow-sm z-20">
                                <div className="w-8 h-8 rounded-full bg-slate-100"></div>
                                <div className="flex-1 h-9 bg-slate-100 rounded-lg flex items-center px-3 gap-2">
                                    <Search className="w-4 h-4 text-slate-400" />
                                    <div className="w-20 h-2 bg-slate-200 rounded"></div>
                                </div>
                            </div>

                            {/* Scroll Content */}
                            <div className="flex-1 overflow-hidden p-4 space-y-6">
                                {/* Product Image */}
                                <div className="aspect-[4/3] bg-slate-100 rounded-xl relative">
                                    {/* Loyalty Badge Overlay */}
                                    <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                                        <Gift className="w-3 h-3 text-pink-500" />
                                        <span className="text-[10px] font-bold text-slate-800">Earn 50 pts</span>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div>
                                    <div className="h-4 w-3/4 bg-slate-800 rounded mb-2"></div>
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex text-yellow-400 gap-0.5">
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                            <Star className="w-3 h-3 fill-current" />
                                        </div>
                                        <span className="text-xs text-slate-400 font-medium">(128 Reviews)</span>
                                    </div>
                                    <div className="h-20 bg-slate-50 rounded-xl w-full"></div>
                                </div>
                            </div>

                            {/* Floating Chat Button */}
                            <div className="absolute bottom-6 right-6 w-12 h-12 bg-indigo-600 rounded-full shadow-lg shadow-indigo-200 flex items-center justify-center z-20">
                                <MessageCircle className="w-6 h-6 text-white" />
                            </div>
                        </div>
                    </div>

                    {/* Integration Card: Search (Top Left) */}
                    <div className="absolute top-16 -left-4 lg:-left-24 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_5s_ease-in-out_infinite] z-20 max-w-[160px]">
                        <div className="w-8 h-8 rounded-lg bg-purple-50 flex items-center justify-center flex-shrink-0">
                            <Search className="w-4 h-4 text-purple-600" />
                        </div>
                        <div className="text-xs">
                            <div className="font-bold text-slate-800">Algolia</div>
                            <div className="text-slate-400 scale-90 origin-left">Connected</div>
                        </div>
                        {/* Connecting Line */}
                        <div className="absolute right-0 top-1/2 w-12 h-[1px] bg-purple-200 translate-x-full hidden lg:block"></div>
                        <div className="absolute right-[-48px] top-1/2 w-1.5 h-1.5 rounded-full bg-purple-500 hidden lg:block"></div>
                    </div>

                     {/* Integration Card: Reviews (Middle Left) */}
                     <div className="absolute top-[45%] -left-8 lg:-left-32 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_6s_ease-in-out_infinite_1s] z-20 max-w-[160px]">
                        <div className="w-8 h-8 rounded-lg bg-yellow-50 flex items-center justify-center flex-shrink-0">
                            <Star className="w-4 h-4 text-yellow-600" />
                        </div>
                        <div className="text-xs">
                            <div className="font-bold text-slate-800">Yotpo</div>
                            <div className="text-slate-400 scale-90 origin-left">Importing</div>
                        </div>
                         {/* Connecting Line */}
                         <div className="absolute right-0 top-1/2 w-20 h-[1px] bg-yellow-200 translate-x-full hidden lg:block"></div>
                        <div className="absolute right-[-80px] top-1/2 w-1.5 h-1.5 rounded-full bg-yellow-500 hidden lg:block"></div>
                    </div>

                     {/* Integration Card: Loyalty (Bottom Right) */}
                     <div className="absolute bottom-32 -right-4 lg:-right-24 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_7s_ease-in-out_infinite_0.5s] z-20 max-w-[160px]">
                        <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center flex-shrink-0">
                            <Gift className="w-4 h-4 text-pink-600" />
                        </div>
                        <div className="text-xs">
                            <div className="font-bold text-slate-800">Smile.io</div>
                            <div className="text-slate-400 scale-90 origin-left">Active</div>
                        </div>
                         {/* Connecting Line */}
                         <div className="absolute left-0 top-1/2 w-12 h-[1px] bg-pink-200 -translate-x-full hidden lg:block"></div>
                        <div className="absolute left-[-48px] top-1/2 w-1.5 h-1.5 rounded-full bg-pink-500 hidden lg:block"></div>
                    </div>

                    {/* Integration Card: Chat (Bottom Left) */}
                    <div className="absolute bottom-10 -left-2 lg:-left-16 bg-white p-3 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-3 animate-[float_5s_ease-in-out_infinite_2s] z-20 max-w-[160px]">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-4 h-4 text-indigo-600" />
                        </div>
                        <div className="text-xs">
                            <div className="font-bold text-slate-800">Intercom</div>
                            <div className="text-slate-400 scale-90 origin-left">Live</div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};