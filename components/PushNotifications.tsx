import React from 'react';
import { Sparkles, ArrowRight, Wand2 } from 'lucide-react';
import { Button } from './ui/Button';

export const PushNotifications: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50/80 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-600 text-xs font-bold mb-6 shadow-sm">
             <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
             <span>AI Composer</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6 tracking-tight">
          Craft perfect push campaigns <br/>
          <span className="text-indigo-600">with a single click.</span>
        </h2>
        
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
           No more writer's block. Just type a basic idea, and our AI instantly generates high-converting titles, descriptions, and emojis for your notifications.
        </p>

        {/* Minimalist Visual Component */}
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 lg:p-12 max-w-3xl mx-auto relative overflow-hidden">
            
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

            <div className="grid md:grid-cols-[1.5fr,auto,1fr] gap-8 items-center">
                
                {/* Input Side */}
                <div className="text-left space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider">Your Input</label>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-indigo-50 rounded-xl transform rotate-1 transition-transform group-hover:rotate-2"></div>
                        <div className="relative bg-white border-2 border-slate-100 rounded-xl p-4 text-slate-800 font-medium text-lg shadow-sm">
                            "Summer sale ending soon, 20% off everything"
                        </div>
                    </div>
                </div>

                {/* Arrow / Action */}
                <div className="flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                        <ArrowRight className="w-5 h-5" />
                    </div>
                </div>

                {/* Output Side */}
                <div className="text-left space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                        <Wand2 className="w-3 h-3" /> AI Result
                    </label>
                    
                    {/* Notification Card */}
                    <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all cursor-pointer">
                        <div className="flex justify-between items-start mb-2 opacity-60">
                            <span className="text-[10px] font-bold uppercase tracking-wide">Technoboost</span>
                            <span className="text-[10px]">now</span>
                        </div>
                        <div className="space-y-1">
                            <h4 className="text-sm font-bold text-slate-900">☀️ Summer Vibes Sale!</h4>
                            <p className="text-xs text-slate-600 leading-relaxed">Last chance to grab 20% OFF storewide. Don't let the sun go down on these deals! 🏖️</p>
                        </div>
                        {/* Hover Highlight */}
                        <div className="absolute inset-0 border-2 border-indigo-500/0 group-hover:border-indigo-500/10 rounded-2xl transition-all"></div>
                    </div>
                </div>
            </div>
            
            {/* Background Texture */}
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-indigo-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        </div>

        <div className="mt-12">
             <Button variant="ghost" className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">Learn more about AI features &rarr;</Button>
        </div>

      </div>
    </section>
  );
};