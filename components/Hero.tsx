import React from 'react';
import { Rocket, Zap, BarChart3, LayoutGrid, RefreshCw, Bell, Headphones } from 'lucide-react';
import { Button } from './ui/Button';

interface HeroProps {
  onContactClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  return (
    <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-cyan-50 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute top-[20%] right-[15%] w-24 h-24 bg-techno-secondary/10 rounded-xl rotate-12"></div>
        </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="max-w-2xl lg:max-w-none relative z-10">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Scale your <span className="text-transparent bg-clip-text bg-gradient-to-r from-techno-primary to-techno-accent">mobile commerce</span> effortlessly.
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
              Shopmintapp empowers Shopify brands to launch world-class mobile apps in record time. No coding required. Just pure performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                size="lg" 
                className="bg-techno-primary hover:bg-indigo-600 text-white shadow-indigo-200 shadow-xl"
                onClick={onContactClick}
              >
                Get Started Now
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-100/80">
                <div className="flex items-center gap-3 group cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-techno-primary group-hover:scale-110 transition-all duration-300">
                        <RefreshCw className="w-5 h-5 text-techno-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm group-hover:text-slate-900 transition-colors">Instant Sync</span>
                </div>
                
                <div className="flex items-center gap-3 group cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-techno-primary group-hover:scale-110 transition-all duration-300">
                        <Bell className="w-5 h-5 text-techno-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm group-hover:text-slate-900 transition-colors">Push Notifications</span>
                </div>

                <div className="flex items-center gap-3 group cursor-default">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center group-hover:bg-techno-primary group-hover:scale-110 transition-all duration-300">
                        <Headphones className="w-5 h-5 text-techno-primary group-hover:text-white transition-colors" />
                    </div>
                    <span className="font-bold text-slate-700 text-sm group-hover:text-slate-900 transition-colors">24/7 Support</span>
                </div>
            </div>
          </div>

          {/* Right Column: Tech Visuals */}
          <div className="relative w-full flex items-center justify-center">
             
             {/* Decorative Grid Background */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] -z-10"></div>

             <div className="relative w-full max-w-[550px] aspect-square">
                
                {/* Central Phone Mockup */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[260px] h-[520px] bg-slate-900 rounded-[40px] shadow-2xl border-[8px] border-slate-800 z-20 overflow-hidden ring-1 ring-white/20">
                    <div className="w-full h-full bg-white relative">
                        {/* Status Bar */}
                        <div className="h-6 w-full bg-slate-900 absolute top-0 z-10"></div>
                        
                        {/* App Content */}
                        <div className="p-4 pt-10 space-y-4">
                            <div className="flex justify-between items-center">
                                <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                                <div className="w-20 h-4 bg-gray-100 rounded"></div>
                                <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                            </div>
                            
                            <div className="w-full aspect-[4/3] bg-indigo-50 rounded-xl relative overflow-hidden group">
                                <img src="https://picsum.photos/id/66/400/300" className="w-full h-full object-cover mix-blend-overlay opacity-80" alt="Product" />
                                <div className="absolute bottom-3 left-3 bg-white/90 px-3 py-1 rounded-md text-xs font-bold text-indigo-900 shadow-sm">
                                    New Arrival
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="aspect-square bg-gray-50 rounded-lg p-2 space-y-2">
                                    <div className="w-full h-2/3 bg-gray-200 rounded"></div>
                                    <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                                </div>
                                <div className="aspect-square bg-gray-50 rounded-lg p-2 space-y-2">
                                    <div className="w-full h-2/3 bg-gray-200 rounded"></div>
                                    <div className="w-2/3 h-2 bg-gray-200 rounded"></div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Nav */}
                        <div className="absolute bottom-0 w-full h-16 bg-white border-t border-gray-100 flex justify-around items-center px-4">
                             <LayoutGrid className="w-6 h-6 text-indigo-600" />
                             <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                             <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                             <div className="w-6 h-6 bg-gray-200 rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Floating Elements / Satellites */}
                
                {/* 1. Analytics Card (Right) */}
                <div className="absolute top-[20%] -right-4 lg:-right-12 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 w-48 border border-slate-100 animate-[bounce_4s_infinite]">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <BarChart3 className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 font-semibold uppercase">Revenue</div>
                            <div className="text-lg font-bold text-slate-900">+127%</div>
                        </div>
                    </div>
                    <div className="w-full h-16 bg-slate-50 rounded-md overflow-hidden flex items-end justify-between px-2 pb-1 gap-1">
                        <div className="w-1/5 bg-green-200 h-[40%] rounded-t-sm"></div>
                        <div className="w-1/5 bg-green-300 h-[60%] rounded-t-sm"></div>
                        <div className="w-1/5 bg-green-400 h-[50%] rounded-t-sm"></div>
                        <div className="w-1/5 bg-green-500 h-[80%] rounded-t-sm"></div>
                        <div className="w-1/5 bg-green-600 h-[90%] rounded-t-sm"></div>
                    </div>
                </div>

                {/* 2. Speed Card (Left) */}
                <div className="absolute bottom-[25%] -left-4 lg:-left-12 bg-white p-4 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] z-30 w-44 border border-slate-100">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-orange-100 rounded-lg">
                            <Rocket className="w-5 h-5 text-orange-600" />
                        </div>
                        <div>
                            <div className="text-xs text-slate-500 font-semibold uppercase">Performance</div>
                            <div className="text-lg font-bold text-slate-900">99/100</div>
                        </div>
                    </div>
                    <div className="mt-3 w-full bg-gray-100 rounded-full h-1.5">
                        <div className="bg-orange-500 h-1.5 rounded-full w-[99%]"></div>
                    </div>
                </div>

                {/* 3. Tech Stack Badge (Top Left) */}
                <div className="absolute top-10 left-0 bg-slate-900 text-white px-4 py-2 rounded-lg shadow-xl z-10 transform -rotate-6">
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-bold text-sm">Lightning Fast</span>
                    </div>
                </div>

                {/* Background Circles */}
                <div className="absolute inset-0 border border-indigo-100 rounded-full scale-125 opacity-50 z-0"></div>
                <div className="absolute inset-0 border border-dashed border-indigo-200 rounded-full scale-150 opacity-30 z-0"></div>

             </div>
          </div>

        </div>
      </div>
    </section>
  );
};