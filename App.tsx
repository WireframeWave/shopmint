import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FeatureGrid } from './components/FeatureGrid';
import { Features } from './components/Features';
import { Conversion } from './components/Conversion';
import { Integrations } from './components/Integrations';
import { PushNotifications } from './components/PushNotifications';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { ChatWidget } from './components/ChatWidget';
import { Pricing } from './components/Pricing';
import { Migration } from './components/Migration';
import { About } from './components/About';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'pricing' | 'migration' | 'about' | 'privacy' | 'terms'>('home');
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleNavigate = (page: string) => {
    setCurrentPage(page as 'home' | 'pricing' | 'migration' | 'about' | 'privacy' | 'terms');
    window.scrollTo(0, 0);
  };

  const renderContent = () => {
    switch(currentPage) {
      case 'pricing':
        return <Pricing />;
      case 'migration':
        return <Migration />;
      case 'about':
        return <About />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsOfService />;
      default:
        return (
          <>
            <Hero onContactClick={() => setIsContactModalOpen(true)} />
            <FeatureGrid />
            <Features />
            <Conversion />
            <Integrations />
            <PushNotifications />
            <Testimonials />
            <FAQ />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative flex flex-col">
      <Navbar 
        onNavigate={handleNavigate} 
        onContactClick={() => setIsContactModalOpen(true)} 
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <Footer 
        onNavigate={handleNavigate} 
        onContactClick={() => setIsContactModalOpen(true)} 
      />
      
      <ChatWidget />
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default App;