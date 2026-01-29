import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from './ui/Button';

interface PricingTierProps {
  name: string;
  description: string;
  price: string;
  currencySymbol: string;
  pricePrefix?: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
  isDark?: boolean;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  name, 
  description, 
  price, 
  currencySymbol,
  pricePrefix,
  features, 
  buttonText, 
  isPopular = false,
  isDark = false
}) => {
  return (
    <div className={`relative flex flex-col h-full rounded-3xl p-8 transition-all duration-300 ${
      isDark 
        ? 'bg-slate-900 text-white shadow-2xl scale-105 z-10 border border-slate-800' 
        : 'bg-white text-slate-900 shadow-xl border border-slate-100 hover:border-indigo-100 hover:shadow-2xl'
    }`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-techno-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
          Most Popular
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className={`text-xl font-display font-bold uppercase tracking-wider mb-4 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          {name}
        </h3>
        <p className={`text-sm mb-6 h-12 ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
          {description}
        </p>
        
        <div className="flex flex-col items-center justify-center mb-1">
            {pricePrefix && <span className={`text-xs font-bold uppercase mb-1 ${isDark ? 'text-techno-accent' : 'text-techno-primary'}`}>{pricePrefix}</span>}
            <div className="flex items-baseline justify-center">
                <span className="text-xl font-bold mr-1">{currencySymbol}</span>
                <span className="text-5xl font-display font-bold">{price}</span>
                <span className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>/mo</span>
            </div>
        </div>
        <div className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>billed monthly</div>
      </div>

      <div className="mb-8">
        <Button 
            className={`w-full py-4 ${
                isDark 
                ? 'bg-techno-primary hover:bg-indigo-500 border-none text-white' 
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
        >
          {buttonText}
        </Button>
      </div>

      <div className="space-y-4 flex-1">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`mt-1 p-0.5 rounded-full flex-shrink-0 ${isDark ? 'bg-indigo-500/20' : 'bg-indigo-50'}`}>
                <Check className={`w-3.5 h-3.5 ${isDark ? 'text-indigo-400' : 'text-techno-primary'}`} />
            </div>
            <span className={`text-sm font-medium ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>{feature}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Pricing: React.FC = () => {
  const [currency, setCurrency] = useState<'USD' | 'INR'>('USD');

  const tiers = [
    {
      name: "Silver",
      description: "The mobile app essentials you need to get started.",
      prices: { USD: "89", INR: "6,999" },
      buttonText: "Start With Essentials",
      features: [
        "Flexible Design with 7 Elements",
        "Unlimited Push Notifications",
        "Back In Stock Notifications",
        "Theme Options for PLP & PDP"
      ]
    },
    {
      name: "Gold",
      description: "More features & advanced merchandising for faster growth.",
      prices: { USD: "179", INR: "13,999" },
      buttonText: "Grow Faster",
      features: [
        "Design with 20 Elements",
        "Abandoned Cart Notification",
        "Product Review Integrations",
        "Multi Language & Currency"
      ]
    },
    {
      name: "Platinum",
      description: "Integrations & automations to unlock the full potential.",
      prices: { USD: "359", INR: "27,999" },
      buttonText: "Unlock Full Potential",
      isPopular: true,
      isDark: true,
      features: [
        "Unlimited & Scheduled Elements",
        "Live Selling & Multiple Showcases",
        "Loyalty Programs & Subscriptions",
        "Segmented & AI Push Notifications"
      ]
    },
    {
      name: "Enterprise",
      description: "Perfect for Shopify Plus & high-volume stores.",
      prices: { USD: "779", INR: "59,999" },
      pricePrefix: "Starting From",
      buttonText: "Talk to Our Team",
      features: [
        "Multi Store Support",
        "AppsFlyer & Adjust Integrations",
        "Professional Design Support",
        "Dedicated Success Manager"
      ]
    }
  ];

  const allFeatures = [
    "White Label iOS & Android App", "Real-Time Shopify Sync", "Rich Push Notification",
    "All Design Element Types", "Shopify Store Checkout", "Back In Stock Notification",
    "Localization in 21 Language", "Pick Up & Local Delivery", "In-App Chat",
    "Different Mobile App Themes", "User Accounts and Order History", "Shopify Inbox Integration",
    "App-Exclusive Discounts", "Unlimited Products & Collections", "Google Analytics & Facebook Ads",
    "Mobile App Promotion Banner", "Shopify Scripts", "Access to the Success Team",
    "Unlimited Push Notifications", "Expert Design Support", "24/7 Live Chat & Video Support"
  ];

  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl lg:text-6xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            The greatest level of quality and <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-techno-primary to-techno-accent">service in each plan!</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 font-medium">
            No sales limits. No commissions. No long-term commitments!
          </p>
          
          {/* Currency Switcher */}
          <div className="flex justify-center mb-8">
            <div className="bg-white p-1 rounded-xl border border-slate-200 inline-flex relative shadow-sm">
                <div className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-techno-primary rounded-lg transition-all duration-300 ease-out shadow-sm ${currency === 'USD' ? 'left-1' : 'left-[calc(50%+4px)]'}`}></div>
                <button 
                    onClick={() => setCurrency('USD')}
                    className={`relative z-10 px-8 py-2.5 text-sm font-bold rounded-lg transition-colors duration-300 w-32 focus:outline-none ${currency === 'USD' ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                    USD
                </button>
                <button 
                    onClick={() => setCurrency('INR')}
                    className={`relative z-10 px-8 py-2.5 text-sm font-bold rounded-lg transition-colors duration-300 w-32 focus:outline-none ${currency === 'INR' ? 'text-white' : 'text-slate-500 hover:text-slate-900'}`}
                >
                    INR
                </button>
            </div>
          </div>

          <Button size="lg" className="bg-techno-primary hover:bg-indigo-700 text-white px-8 hidden">
            Start 30 days free trial
          </Button>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">
          {tiers.map((tier, index) => (
            <PricingTier 
              key={index}
              name={tier.name}
              description={tier.description}
              price={tier.prices[currency]}
              currencySymbol={currency === 'USD' ? '$' : '₹'}
              pricePrefix={tier.pricePrefix}
              features={tier.features}
              buttonText={tier.buttonText}
              isPopular={tier.isPopular}
              isDark={tier.isDark}
            />
          ))}
        </div>

        {/* Help Banner Section */}
        <div className="mt-20 lg:mt-32">
          <div className="bg-techno-primary rounded-[3rem] p-8 lg:p-12 overflow-hidden relative shadow-2xl shadow-indigo-200">
            {/* Background Patterns */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="flex flex-col items-center justify-center text-center relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6 leading-tight">
                    Need help choosing a plan?
                </h2>
                <p className="text-indigo-100 text-lg mb-8 max-w-2xl">
                    Our team is here to help you understand which plan best fits your business needs and growth goals.
                </p>
                <Button variant="white" className="border-none px-10 py-4 text-lg shadow-lg">
                    Contact Us
                </Button>
            </div>
          </div>
        </div>

        {/* Detailed Feature List Section */}
        <div className="mt-24 lg:mt-32">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6">
                    Powerful from entry level!
                </h2>
                <p className="text-xl text-slate-600">
                    We offer the essential elements of a great mobile app in every plan!
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                {allFeatures.map((feature, i) => (
                    <div key={i} className="flex items-center gap-4 p-3 hover:bg-white hover:shadow-sm rounded-xl transition-all duration-200">
                        <div className="flex-shrink-0 bg-indigo-100 rounded-full p-1">
                            <Check className="w-4 h-4 text-techno-primary" strokeWidth={3} />
                        </div>
                        <span className="text-slate-700 font-medium text-lg">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
        
      </div>
    </div>
  );
};