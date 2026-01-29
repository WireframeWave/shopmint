import React from 'react';
import { RefreshCw, Layers, Rocket, Check, Zap, Palette, Layout, Move, MousePointer2 } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Visual Column (Left) */}
            <div className="relative order-2 lg:order-1 flex justify-center lg:block">
                {/* Background Decor similar to Hero */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-50 rounded-full blur-2xl opacity-60 -z-10"></div>

                <div className="relative w-full max-w-[500px] mx-auto lg:mx-0">
                    
                    {/* Main Phone Mockup */}
                    <div className="relative z-10 mx-auto w-[280px] h-[580px] bg-slate-900 rounded-[45px] shadow-2xl border-[8px] border-slate-900 overflow-hidden ring-1 ring-slate-900/10">
                         {/* Screen */}
                         <div className="w-full h-full bg-white relative overflow-hidden flex flex-col">
                            {/* Status Bar */}
                            <div className="h-7 w-full bg-slate-900 flex justify-center items-center">
                                <div className="w-20 h-4 bg-black rounded-b-xl"></div>
                            </div>
                            
                            {/* App Header (Editable) */}
                            <div className="px-4 py-3 flex justify-between items-center border-b border-dashed border-indigo-300 bg-indigo-50/30 relative group cursor-pointer">
                                <div className="w-6 h-6 rounded-md bg-slate-200"></div>
                                <div className="w-24 h-4 bg-slate-800 rounded"></div>
                                <div className="w-6 h-6 rounded-full bg-slate-200"></div>
                                
                                {/* Edit Handle */}
                                <div className="absolute -top-2 -right-2 bg-techno-primary text-white p-1 rounded-full shadow-lg z-20">
                                    <MousePointer2 className="w-3 h-3 fill-current" />
                                </div>
                            </div>

                            {/* Hero Section (Selected) */}
                            <div className="m-4 aspect-[4/3] rounded-2xl bg-slate-100 relative overflow-hidden ring-4 ring-techno-primary/20 ring-offset-2">
                                <div className="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-100"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <div className="w-2/3 h-6 bg-slate-800 rounded-md mb-2"></div>
                                    <div className="w-1/2 h-4 bg-slate-400 rounded-md"></div>
                                </div>
                                {/* Active Selection UI */}
                                <div className="absolute top-2 right-2 bg-techno-primary text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-sm flex items-center gap-1">
                                    <Layout className="w-3 h-3" />
                                    Hero Banner
                                </div>
                            </div>

                            {/* Grid Section */}
                            <div className="px-4 grid grid-cols-2 gap-3 opacity-60">
                                <div className="aspect-[3/4] bg-slate-50 rounded-xl p-2">
                                    <div className="w-full h-2/3 bg-slate-200 rounded-lg mb-2"></div>
                                    <div className="w-full h-3 bg-slate-200 rounded mb-1"></div>
                                    <div className="w-1/2 h-3 bg-slate-200 rounded"></div>
                                </div>
                                <div className="aspect-[3/4] bg-slate-50 rounded-xl p-2">
                                    <div className="w-full h-2/3 bg-slate-200 rounded-lg mb-2"></div>
                                    <div className="w-full h-3 bg-slate-200 rounded mb-1"></div>
                                    <div className="w-1/2 h-3 bg-slate-200 rounded"></div>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* Floating Tool Palette (Left) */}
                    <div className="absolute top-20 -left-6 lg:-left-12 bg-white p-3 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 z-20 animate-[bounce_4s_infinite]">
                        <div className="flex flex-col gap-4">
                            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-techno-primary hover:bg-techno-primary hover:text-white transition-colors cursor-pointer">
                                <Layout className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer border border-slate-100">
                                <Palette className="w-5 h-5" />
                            </div>
                            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors cursor-pointer border border-slate-100">
                                <Move className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    {/* Floating Color Picker (Right) */}
                    <div className="absolute bottom-32 -right-6 lg:-right-12 bg-white p-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-slate-100 z-20">
                         <div className="text-xs font-bold text-slate-400 uppercase mb-3">Brand Colors</div>
                         <div className="flex gap-2">
                             <div className="w-8 h-8 rounded-full bg-techno-primary ring-2 ring-offset-2 ring-techno-primary cursor-pointer"></div>
                             <div className="w-8 h-8 rounded-full bg-techno-accent cursor-pointer hover:scale-110 transition-transform"></div>
                             <div className="w-8 h-8 rounded-full bg-orange-400 cursor-pointer hover:scale-110 transition-transform"></div>
                             <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center cursor-pointer hover:bg-slate-50">
                                 <span className="text-xs font-bold text-slate-400">+</span>
                             </div>
                         </div>
                    </div>

                     {/* Sync Badge (Top Right) */}
                     <div className="absolute top-10 right-0 bg-white/90 backdrop-blur-sm pr-4 pl-3 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 z-0 transform translate-x-4 rotate-3">
                         <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                         <span className="text-xs font-bold text-slate-600">Syncing with Shopify</span>
                     </div>

                </div>
            </div>

            {/* Content Column (Right) */}
            <div className="order-1 lg:order-2">
                <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
                    Your native app, <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-techno-primary to-techno-accent">live in less than a week.</span>
                </h2>
                
                <div className="space-y-12 mt-12">
                    {/* Item 1: Sync */}
                    <div className="flex group">
                        <div className="flex-shrink-0 mr-6">
                            <div className="w-14 h-14 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-techno-primary group-hover:scale-110 transition-all duration-300">
                                <RefreshCw className="w-7 h-7 text-techno-primary group-hover:text-white transition-colors" />
                            </div>
                            <div className="h-full w-px bg-slate-100 mx-auto my-2 group-last:hidden"></div>
                        </div>
                        <div className="pb-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-techno-primary transition-colors">Instant Data Bridge</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Connect your existing e-commerce backend instantly. Our engine mirrors your entire catalog, inventory, and customer profiles in real-time without manual migration.
                            </p>
                        </div>
                    </div>

                    {/* Item 2: Design */}
                    <div className="flex group">
                        <div className="flex-shrink-0 mr-6">
                            <div className="w-14 h-14 bg-cyan-50 rounded-2xl flex items-center justify-center group-hover:bg-techno-accent group-hover:scale-110 transition-all duration-300">
                                <Layers className="w-7 h-7 text-techno-accent group-hover:text-white transition-colors" />
                            </div>
                            <div className="h-full w-px bg-slate-100 mx-auto my-2 group-last:hidden"></div>
                        </div>
                        <div className="pb-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-techno-accent transition-colors">Visual App Builder</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Craft your unique mobile identity. Use our block-based visual editor to drag, drop, and customize every screen element. No coding knowledge required.
                            </p>
                        </div>
                    </div>

                    {/* Item 3: Deploy */}
                    <div className="flex group">
                        <div className="flex-shrink-0 mr-6">
                             <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                                <Rocket className="w-7 h-7 text-orange-500 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">One-Click Publication</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We manage the entire submission lifecycle. From compiling the binaries to navigating App Store and Play Store guidelines, we ensure your app gets approved fast.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};