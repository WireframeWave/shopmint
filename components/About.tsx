import React from 'react';
import { Users, Globe, Heart, Zap } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 bg-slate-900 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] opacity-50"></div>
             <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] opacity-30"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-white mb-8 leading-tight">
                Empowering the future <br/>
                of <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">mobile commerce.</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed">
                We believe that every brand, regardless of size, deserves a world-class mobile app. We're here to bridge the gap between complexity and growth.
            </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  {/* Illustration of people working */}
                  <div className="relative flex justify-center items-center">
                      <div className="w-full max-w-[500px]">
                        <svg viewBox="0 0 600 500" className="w-full h-auto drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
                          
                          {/* Background Elements */}
                          <circle cx="300" cy="250" r="220" fill="#F8FAFC" />
                          <path d="M550 100 L570 140 L530 140 Z" fill="none" stroke="#CBD5E1" strokeWidth="2" transform="rotate(15 550 120)" />
                          <circle cx="50" cy="400" r="8" fill="#06B6D4" />
                          <circle cx="520" cy="420" r="5" fill="#4F46E5" />
                          <path d="M40 80 L60 100 M60 80 L40 100" stroke="#4F46E5" strokeWidth="3" strokeLinecap="round" />

                          {/* Lightbulb (Idea) */}
                          <g transform="translate(280, 50) rotate(-5)">
                             <path d="M25 0 C12 0 0 12 0 25 C0 38 10 50 25 50 C38 50 50 38 50 25 C50 12 38 0 25 0" fill="#FBBF24" />
                             <path d="M15 50 H35 L30 60 H20 L15 50 Z" fill="#334155"/>
                             {/* Rays */}
                             <line x1="25" y1="-15" x2="25" y2="-25" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
                             <line x1="-5" y1="15" x2="-15" y2="10" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
                             <line x1="55" y1="15" x2="65" y2="10" stroke="#FBBF24" strokeWidth="4" strokeLinecap="round"/>
                          </g>

                          {/* Man (Left) */}
                          <g transform="translate(100, 160)">
                            {/* Body */}
                            <path d="M20 140 C20 90 50 80 100 80 C150 80 180 90 180 140 V260 H20 V140 Z" fill="#0F172A" />
                            {/* Shirt Pattern */}
                            <path d="M70 140 L90 160 L110 140" stroke="#334155" strokeWidth="3" fill="none"/>
                            <path d="M50 190 L60 200 M140 180 L150 190" stroke="#334155" strokeWidth="3"/>
                            
                            {/* Head */}
                            <rect x="55" y="0" width="90" height="100" rx="35" fill="#F1F5F9" />
                            {/* Beard */}
                            <path d="M55 55 Q100 100 145 55 V80 Q100 125 55 80 Z" fill="#0F172A"/>
                            {/* Hair */}
                            <path d="M50 25 C50 -10 70 -20 100 -20 C130 -20 150 -10 150 25" fill="#0F172A"/>
                            
                            {/* Glasses */}
                            <g stroke="#0F172A" strokeWidth="3" fill="white">
                                <circle cx="80" cy="40" r="14"/>
                                <circle cx="120" cy="40" r="14"/>
                                <line x1="94" y1="40" x2="106" y2="40" strokeWidth="3"/>
                            </g>
                          </g>

                          {/* Woman (Right) */}
                          <g transform="translate(340, 130)">
                            {/* Hair Back */}
                            <path d="M20 50 C10 120 0 180 10 230 H150 C160 180 150 120 140 50" fill="#0F172A"/>
                            
                            {/* Body */}
                            <path d="M30 160 C30 110 60 100 85 100 C110 100 140 110 140 160 V280 H30 V160 Z" fill="#4F46E5"/>
                            {/* Arm Waving */}
                            <path d="M140 170 Q190 170 180 110" stroke="#F1F5F9" strokeWidth="18" strokeLinecap="round" fill="none"/>
                            <circle cx="180" cy="110" r="12" fill="#F1F5F9" />
                            
                            {/* Head */}
                            <circle cx="85" cy="60" r="45" fill="#F1F5F9"/>
                            {/* Hair Front */}
                            <path d="M40 50 C40 0 60 -10 85 -10 C110 -10 130 0 130 50" fill="#0F172A"/>
                          </g>

                          {/* Desk / Project Elements */}
                          <rect x="230" y="420" width="240" height="12" fill="#0F172A" rx="6"/>
                          <g transform="translate(270, 320)">
                              <rect width="160" height="100" fill="#CBD5E1" rx="8"/>
                              <rect x="10" y="10" width="140" height="80" fill="white"/>
                              
                              {/* Screen Content */}
                              <rect x="25" y="25" width="40" height="40" fill="#4F46E5" rx="4"/>
                              <rect x="75" y="25" width="60" height="10" fill="#E2E8F0" rx="2"/>
                              <rect x="75" y="45" width="40" height="10" fill="#E2E8F0" rx="2"/>
                          </g>
                        </svg>
                      </div>
                  </div>

                  <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-techno-primary text-sm font-bold mb-6">
                        <Users className="w-4 h-4" />
                        <span>Who We Are</span>
                      </div>
                      <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">
                          Builders, Dreamers, & Doers.
                      </h2>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          Technoboost began with a simple observation: mobile apps were too expensive for small businesses and too clunky for large ones. We set out to change that.
                      </p>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          Today, we're a diverse team of engineers, designers, and support specialists united by a single mission: to help Shopify merchants unlock their full mobile potential without writing a single line of code.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
          <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">Our Core Values</h2>
                  <p className="text-lg text-slate-600">The principles that guide every decision we make.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      {
                          icon: <Heart className="w-6 h-6 text-red-500" />,
                          title: "Customer Obsession",
                          desc: "We don't just build software; we build relationships. Your success is the only metric that matters to us."
                      },
                      {
                          icon: <Zap className="w-6 h-6 text-yellow-500" />,
                          title: "Relentless Innovation",
                          desc: "We push the boundaries of what's possible in mobile commerce, shipping updates weekly."
                      },
                      {
                          icon: <Globe className="w-6 h-6 text-blue-500" />,
                          title: "Radical Transparency",
                          desc: "No hidden fees, no confusing contracts. We believe in earning your trust through honesty."
                      }
                  ].map((value, i) => (
                      <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all">
                          <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                              {value.icon}
                          </div>
                          <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                          <p className="text-slate-600 leading-relaxed">{value.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
};