import React from 'react';
import { Button } from './ui/Button';
import { Zap, CheckCircle2, XCircle, UserCheck, Package, Rocket, ShieldCheck, DollarSign, MessageCircle, Clock, AlertTriangle } from 'lucide-react';

export const Migration: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-12 pb-20 lg:pt-32 lg:pb-40 overflow-hidden relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Content */}
            <div className="max-w-2xl">
              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-slate-900 mb-8 leading-[1.1] tracking-tight">
                Stop Settling <br/>
                for Mediocrity. <br/>
                Upgrade Your App. <br/>
                <span className="text-techno-primary">It's easier than you think.</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-lg">
                Don't let a subpar app builder hold your business back. Move to Shopmintapp today for better performance, lower costs, and zero headaches.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-techno-primary hover:bg-indigo-700 text-white px-8 py-4 text-lg shadow-xl shadow-indigo-200 rounded-xl">
                    Start Your Free Migration
                  </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative flex justify-center lg:justify-end mt-12 lg:mt-0">
               <div className="relative w-full max-w-[500px] aspect-square">
                   {/* Abstract Background */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-indigo-50 to-cyan-50 rounded-[3rem] -rotate-6 scale-90"></div>
                   
                   {/* Main Dashboard/App Visual */}
                   <div className="absolute inset-4 bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 flex flex-col overflow-hidden rotate-0 transition-transform hover:-rotate-1 duration-500">
                       {/* Header UI */}
                       <div className="flex items-center justify-between mb-8 border-b border-slate-50 pb-4">
                           <div className="flex items-center gap-3">
                               <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                   <Zap className="w-6 h-6 text-techno-primary" />
                               </div>
                               <div>
                                   <div className="text-sm font-bold text-slate-900">Transfer Center</div>
                                   <div className="text-xs text-slate-500">Status: Active</div>
                               </div>
                           </div>
                           <div className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                               Secure Protocol
                           </div>
                       </div>

                       {/* Progress Visual */}
                       <div className="flex-1 flex flex-col justify-center space-y-8">
                           <div className="space-y-2">
                               <div className="flex justify-between text-sm font-bold text-slate-700">
                                   <span>Product Catalog</span>
                                   <span>100% Complete</span>
                               </div>
                               <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                   <div className="h-full bg-techno-primary w-full rounded-full"></div>
                               </div>
                           </div>

                           <div className="space-y-2">
                               <div className="flex justify-between text-sm font-bold text-slate-700">
                                   <span>Customer Profiles</span>
                                   <span>100% Complete</span>
                               </div>
                               <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                   <div className="h-full bg-techno-accent w-full rounded-full"></div>
                               </div>
                           </div>

                           <div className="space-y-2">
                               <div className="flex justify-between text-sm font-bold text-slate-700">
                                   <span>App Store Metadata</span>
                                   <span>Syncing...</span>
                               </div>
                               <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                                   <div className="h-full bg-orange-400 w-3/4 rounded-full animate-pulse"></div>
                               </div>
                           </div>
                       </div>
                   </div>

                   {/* Floating Success Card */}
                   <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 flex items-center gap-4 z-20 animate-[float_4s_ease-in-out_infinite]">
                       <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-200">
                           <CheckCircle2 className="w-7 h-7" />
                       </div>
                       <div>
                           <div className="text-lg font-bold text-slate-900">Migration Done!</div>
                           <div className="text-sm text-slate-500">Ready to launch</div>
                       </div>
                   </div>

                   {/* Floating Support Card */}
                   <div className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-xl border border-slate-100 z-20 rotate-3">
                       <div className="flex -space-x-2">
                           {[1,2,3].map(i => (
                               <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                           ))}
                           <div className="w-8 h-8 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-[10px] font-bold text-indigo-600">+5</div>
                       </div>
                       <div className="text-[10px] font-bold text-center mt-2 text-slate-500">Expert Support</div>
                   </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
                    Zero Downtime. <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-techno-primary to-techno-accent">Zero Data Loss. Zero Stress.</span>
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                    Forget the horror stories. We've perfected the migration process so you can switch platforms without your customers ever noticing a disruption.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                
                {/* Visual Illustration */}
                <div className="relative flex justify-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-indigo-50/50 rounded-full blur-3xl -z-10"></div>
                    
                    <div className="relative w-full max-w-[500px] h-[500px]">
                        <div className="absolute top-[40px] right-[40px] z-20">
                            <div className="w-20 h-20 bg-techno-primary rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200">
                                <Zap className="w-10 h-10 text-white fill-current" />
                            </div>
                        </div>

                        <div className="absolute top-[120px] left-0 w-[200px] h-[350px] bg-slate-100 rounded-[2rem] border-4 border-slate-200 p-3 opacity-60 scale-90 origin-bottom-left shadow-lg">
                             <div className="w-24 h-6 bg-slate-300 rounded mb-4 mx-auto"></div>
                             <div className="grid grid-cols-2 gap-2">
                                 {[1,2,3,4].map(i => <div key={i} className="aspect-square bg-slate-200 rounded-lg"></div>)}
                             </div>
                             <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-slate-500 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                                 Legacy App
                             </div>
                        </div>

                        <div className="absolute top-[80px] left-[100px] w-[240px] h-[420px] bg-white rounded-[2.5rem] border-8 border-slate-900 shadow-2xl z-10 overflow-hidden ring-1 ring-slate-900/10">
                             <div className="h-full w-full bg-white flex flex-col">
                                 <div className="h-12 border-b border-slate-100 flex items-center justify-between px-4">
                                     <div className="w-4 h-4 rounded-full bg-slate-100"></div>
                                     <div className="w-20 h-3 bg-techno-primary/20 rounded"></div>
                                     <div className="w-4 h-4 rounded-full bg-slate-100"></div>
                                 </div>
                                 <div className="m-3 aspect-video bg-indigo-50 rounded-xl relative overflow-hidden">
                                     <div className="absolute inset-0 bg-gradient-to-tr from-techno-primary to-techno-accent opacity-20"></div>
                                     <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded text-[8px] font-bold shadow-sm text-techno-primary">SHOP NOW!</div>
                                 </div>
                                 <div className="px-3 grid grid-cols-2 gap-2">
                                     <div className="aspect-[3/4] bg-slate-50 rounded-lg p-1">
                                         <div className="w-full h-2/3 bg-slate-200 rounded mb-1"></div>
                                         <div className="w-3/4 h-2 bg-slate-300 rounded"></div>
                                     </div>
                                      <div className="aspect-[3/4] bg-slate-50 rounded-lg p-1">
                                         <div className="w-full h-2/3 bg-slate-200 rounded mb-1"></div>
                                         <div className="w-3/4 h-2 bg-slate-300 rounded"></div>
                                     </div>
                                 </div>
                             </div>
                             
                             <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-techno-primary text-white text-[10px] font-bold px-3 py-1 rounded-b-lg shadow-sm z-20">
                                 New App
                             </div>
                        </div>

                        <svg className="absolute inset-0 pointer-events-none z-0">
                            <path d="M 100 120 C 100 80, 250 80, 380 80" stroke="#CBD5E1" strokeWidth="2" strokeDasharray="4 4" fill="none" />
                            <path d="M 400 120 L 400 200 L 340 200" stroke="#4F46E5" strokeWidth="2" fill="none" />
                        </svg>

                        <div className="absolute top-[180px] -right-4 lg:-right-8 flex flex-col gap-3 z-20">
                            {[
                                "Native Performance",
                                "Full Customization",
                                "1-Click Checkout",
                            ].map((badge, i) => (
                                <div key={i} className="bg-[#10B981] text-white px-3 py-2 rounded-lg text-xs font-bold shadow-md flex items-center gap-2 transform transition-transform hover:scale-105 hover:-translate-x-1 cursor-default">
                                    <div className="bg-white/20 p-0.5 rounded-full">
                                        <CheckCircle2 className="w-3 h-3" strokeWidth={3} />
                                    </div>
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Steps List */}
                <div className="space-y-10">
                    <div className="flex gap-6 group">
                        <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                                <UserCheck className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">1. Strategy Session</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We analyze your current setup and outline a migration plan that preserves your hard-earned SEO and customer data.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 group">
                         <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center group-hover:bg-techno-primary transition-colors duration-300">
                                <Package className="w-8 h-8 text-techno-primary group-hover:text-white transition-colors" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-techno-primary transition-colors">2. The Heavy Lifting</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Our team replicates your design, transfers your integrations, and builds your new native app binaries.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-6 group">
                         <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-cyan-50 rounded-2xl flex items-center justify-center group-hover:bg-techno-accent transition-colors duration-300">
                                <Rocket className="w-8 h-8 text-techno-accent group-hover:text-white transition-colors" />
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-techno-accent transition-colors">3. Seamless Launch</h3>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                We coordinate the swap on the App Stores. Your users just hit "update" and instantly see your new, faster app.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </section>

      {/* Redesigned "Upgrade" Section */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-16">
                   <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-4">
                      The Shopmintapp Upgrade
                  </h2>
                  <p className="text-xl text-slate-600">See the difference immediately.</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                  
                  {/* The Old Way - Updated with pattern and "Legacy" look */}
                  <div className="bg-slate-100 rounded-[2.5rem] p-10 border border-slate-300 relative overflow-hidden grayscale-[0.2] group hover:border-slate-400 transition-colors">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.03),rgba(0,0,0,0.03)_10px,transparent_10px,transparent_20px)]"></div>
                      
                      {/* Stamp Badge */}
                      <div className="absolute top-8 right-8 border-4 border-slate-400 text-slate-400 px-4 py-1 font-black uppercase text-xl rotate-12 opacity-50 select-none">
                        Legacy
                      </div>

                      <div className="absolute top-0 right-0 p-8 opacity-10">
                          <AlertTriangle className="w-32 h-32 text-slate-600" />
                      </div>
                      
                      <div className="relative z-10">
                          <h3 className="text-2xl font-bold text-slate-600 mb-8 uppercase tracking-widest flex items-center gap-3">
                              <XCircle className="w-6 h-6" /> The Old Way
                          </h3>
                          
                          <div className="space-y-6">
                              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-slate-200 backdrop-blur-sm">
                                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-slate-500 mt-1">
                                      <Clock className="w-4 h-4" />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-slate-700 text-lg decoration-slate-400">Slow Hybrid Apps</h4>
                                      <p className="text-slate-500">Laggy interfaces that frustrate users and kill conversion rates.</p>
                                  </div>
                              </div>
                              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-slate-200 backdrop-blur-sm">
                                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-slate-500 mt-1">
                                      <DollarSign className="w-4 h-4" />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-slate-700 text-lg decoration-slate-400">Hidden Fees</h4>
                                      <p className="text-slate-500">Commissions on your sales and unexpected charges for basic features.</p>
                                  </div>
                              </div>
                              <div className="flex items-start gap-4 p-4 bg-white/50 rounded-xl border border-slate-200 backdrop-blur-sm">
                                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0 text-slate-500 mt-1">
                                      <MessageCircle className="w-4 h-4" />
                                  </div>
                                  <div>
                                      <h4 className="font-bold text-slate-700 text-lg decoration-slate-400">Generic Support</h4>
                                      <p className="text-slate-500">Automated replies and days of waiting for a simple fix.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* The Shopmintapp Way */}
                  <div className="bg-white rounded-[2.5rem] p-10 border border-indigo-100 shadow-2xl relative overflow-hidden transform scale-[1.02]">
                      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-techno-primary to-techno-accent"></div>
                      <div className="absolute top-0 right-0 p-8 opacity-10">
                          <Zap className="w-40 h-40 text-techno-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-techno-primary to-techno-accent mb-8 uppercase tracking-widest flex items-center gap-2">
                          <Zap className="w-6 h-6 text-techno-primary fill-current" />
                          Shopmintapp
                      </h3>
                      
                      <div className="space-y-8 relative z-10">
                           <div className="flex items-start gap-4 bg-indigo-50/50 p-4 rounded-2xl border border-indigo-50">
                              <div className="w-10 h-10 rounded-full bg-techno-primary flex items-center justify-center flex-shrink-0 text-white mt-1 shadow-lg shadow-indigo-200">
                                  <Rocket className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900 text-lg mb-1">Native Performance</h4>
                                  <p className="text-slate-600">Blazing fast load times and buttery smooth animations that keep users shopping.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4 bg-indigo-50/50 p-4 rounded-2xl border border-indigo-50">
                              <div className="w-10 h-10 rounded-full bg-techno-primary flex items-center justify-center flex-shrink-0 text-white mt-1 shadow-lg shadow-indigo-200">
                                  <ShieldCheck className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900 text-lg mb-1">100% Profit Retention</h4>
                                  <p className="text-slate-600">Zero success fees. You keep every penny you earn through your app.</p>
                              </div>
                          </div>
                          <div className="flex items-start gap-4 bg-indigo-50/50 p-4 rounded-2xl border border-indigo-50">
                              <div className="w-10 h-10 rounded-full bg-techno-primary flex items-center justify-center flex-shrink-0 text-white mt-1 shadow-lg shadow-indigo-200">
                                  <UserCheck className="w-5 h-5" />
                              </div>
                              <div>
                                  <h4 className="font-bold text-slate-900 text-lg mb-1">Dedicated Success Manager</h4>
                                  <p className="text-slate-600">Proactive guidance from a real human who knows your business goals.</p>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* New "Unmatched Support" Section */}
      <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-7xl">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                  
                  {/* Left Text */}
                  <div>
                      <h4 className="text-techno-primary font-bold uppercase tracking-widest mb-4">Why Shopmintapp Excels</h4>
                      <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-8 leading-tight">
                          Unmatched support — <br/>
                          before, during & after launch
                      </h2>
                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                          With Shopmintapp's top-notch technology and flat rates, you'll achieve the best ROI possible—we guarantee it. While features and integrations may evolve, our commitment to your success with the right tools and guidance remains constant.
                      </p>
                      <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                          We offer more than just a mobile app! Our team is always ready to assist you, ensuring your Shopify store and mobile app grow together. This means happier Shopify merchants, better mobile apps, and unmatched efficiency.
                      </p>
                  </div>

                  {/* Right Visual - Minimal Version */}
                  <div className="relative flex justify-center lg:justify-end">
                       {/* Background Shape */}
                       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-indigo-50 rounded-full -z-10 blur-xl"></div>
                       
                       {/* Minimal Card Composition */}
                       <div className="w-full max-w-md bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden relative">
                           {/* Header */}
                           <div className="px-6 py-4 border-b border-slate-50 flex items-center justify-between">
                               <div className="flex items-center gap-2">
                                   <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                   <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                   <div className="w-2 h-2 rounded-full bg-green-400"></div>
                               </div>
                               <div className="text-[10px] uppercase font-bold text-slate-400">Support Chat</div>
                           </div>

                           {/* Body */}
                           <div className="p-8 flex flex-col items-center text-center space-y-6">
                               <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center relative">
                                   <Clock className="w-8 h-8 text-techno-primary" />
                                   <div className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
                               </div>
                               
                               <div>
                                   <div className="text-3xl font-bold text-slate-900 mb-1">5 min</div>
                                   <div className="text-sm font-medium text-slate-500">Median First Response</div>
                               </div>

                               <div className="w-full bg-slate-50 rounded-xl p-4 flex items-center gap-3 text-left">
                                   <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                       <CheckCircle2 className="w-5 h-5 text-white" />
                                   </div>
                                   <div className="flex-1">
                                       <div className="text-xs font-bold text-slate-900">Issue Resolved</div>
                                       <div className="text-[10px] text-slate-500">Ticket #2941 closed in record time.</div>
                                   </div>
                               </div>
                           </div>
                       </div>
                  </div>

              </div>
          </div>
      </section>

    </div>
  );
};