import React from 'react';
import { Bell, Zap, MessageSquare, LayoutGrid, Palette, Heart } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50/50 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
    
    <div className="relative z-10">
      <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-techno-primary mb-6 group-hover:bg-techno-primary group-hover:text-white transition-colors duration-300 shadow-sm">
        {icon}
      </div>
      
      <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-techno-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed text-sm">
        {description}
      </p>
    </div>
  </div>
);

export const FeatureGrid: React.FC = () => {
  const features = [
    {
      icon: <Bell className="w-6 h-6" />,
      title: "AI Push Notifications",
      description: "Drive free traffic to your mobile app and save on your marketing budget! Increase sales and conversions with unlimited, intelligent push notifications. No hidden costs."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Seamless Integrations",
      description: "Bring along your essential apps with you! Shopmintapp’s wide suite of integrations provide everything you need for a perfect mobile store, from loyalty to reviews."
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "In-App Chat",
      description: "Online shoppers have no time to wait. With native in-app chat, respond to customers faster than email and convert more with real-time conversational marketing."
    },
    {
      icon: <LayoutGrid className="w-6 h-6" />,
      title: "Design Editor",
      description: "Designing a mobile app has never been easier! Create your dream layout with our intuitive drag-and-drop editor. No design skills needed, ready in under an hour!"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Theme Options",
      description: "One type fits none! Your store and brand are unique. Choose from diverse layout options tailored for different industries and pick the best fit for your brand."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "World-Class Experience",
      description: "From the get-go and thereafter, feel ease, comfort and confidence. Our merchant-inspired clean dashboard and best-in-class support take your standards to another level."
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6 leading-tight">
            Features that drive <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-techno-primary to-techno-accent">conversions, retention & AOV</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium">
            They are all inspired by you and created to help you grow!
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
};