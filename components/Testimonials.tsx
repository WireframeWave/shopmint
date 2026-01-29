import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Shopmintapp transformed our mobile strategy. The push notifications alone increased our retention by 40% in just two months. It pays for itself.",
    author: "Sarah Jenkins",
    role: "CMO at Velvet & Vine",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5
  },
  {
    content: "The drag-and-drop editor is a lifesaver. We launched a stunning, native-feeling app in 3 days without writing a single line of code. Absolutely magical.",
    author: "Marcus Chen",
    role: "Founder, Urban Kicks",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5
  },
  {
    content: "I was skeptical about the 'instant sync' claim, but it really works. Our inventory, prices, and collections are always perfectly up to date.",
    author: "Elena Rodriguez",
    role: "E-com Manager, PureLife",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    rating: 5
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[5%] text-slate-100">
             <Quote className="w-32 h-32 rotate-180 opacity-40" />
          </div>
          <div className="absolute bottom-[10%] right-[5%] text-slate-100">
             <Quote className="w-32 h-32 opacity-40" />
          </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">
            Loved by fast-growing brands
          </h2>
          <p className="text-lg text-slate-600">
            Join thousands of merchants who are scaling their mobile revenue with Shopmintapp.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div key={index} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group">
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-slate-700 leading-relaxed mb-8 font-medium">
                "{item.content}"
              </blockquote>
              
              <div className="flex items-center gap-4">
                <img 
                  src={item.avatar} 
                  alt={item.author} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-slate-900">{item.author}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>

              {/* Decorative gradient border on hover */}
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-indigo-100 pointer-events-none transition-colors"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};