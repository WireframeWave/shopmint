import React from 'react';

export const Brands: React.FC = () => {
  return (
    <section className="bg-slate-50 py-16 border-t border-slate-100">
      <div className="container mx-auto px-4">
        <p className="text-center text-slate-500 font-medium mb-10 uppercase tracking-widest text-sm">Trusted by 2,000+ forward-thinking brands</p>
        
        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 grayscale opacity-60 hover:opacity-100 transition-opacity duration-300">
          
          <div className="text-2xl font-display font-bold text-slate-800 tracking-tighter">
            AVANT<span className="text-indigo-600">GARDE</span>
          </div>

          <div className="text-2xl font-serif font-black text-slate-800 italic">
            LUMIÈRE
          </div>

          <div className="flex items-center gap-1">
             <div className="w-6 h-6 rounded-full bg-slate-800"></div>
             <span className="font-sans font-bold text-xl text-slate-800">circle.io</span>
          </div>

          <div className="text-xl font-mono font-bold text-slate-800 border-2 border-slate-800 px-2 py-0.5">
            BOXED
          </div>

           <div className="text-2xl font-display font-light text-slate-800 tracking-[0.3em]">
            ELEVATE
          </div>

        </div>
      </div>
    </section>
  );
};