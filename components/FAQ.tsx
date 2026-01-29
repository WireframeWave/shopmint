import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-techno-primary' : 'text-slate-900 group-hover:text-techno-primary'}`}>
          {question}
        </span>
        <span className={`ml-6 flex-shrink-0 transition-all duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-techno-primary" />
          ) : (
            <Plus className="w-5 h-5 text-slate-400 group-hover:text-techno-primary" />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed pr-12">
          {answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "Do I need any coding skills to build my app?",
      answer: "Not at all! Shopmintapp is a completely no-code platform. Our drag-and-drop editor allows you to design your app visually. If you can build a Shopify store, you can build a Shopmintapp app."
    },
    {
      question: "Does the app sync with my Shopify store in real-time?",
      answer: "Yes, synchronization is instant. Any change you make to your products, collections, or inventory on Shopify is immediately reflected in your mobile app. No manual updates required."
    },
    {
      question: "How long does it take to launch my app?",
      answer: "Most merchants can design their app in under an hour. Once you submit your app for publication through our dashboard, the Apple App Store and Google Play Store review process typically takes 2-4 days."
    },
    {
      question: "Do you handle the App Store submission process?",
      answer: "Absolutely. We handle the entire compilation and submission process for both iOS and Android. Our team guides you through setting up your developer accounts and ensures your app meets all guidelines."
    },
    {
      question: "Can I send push notifications to my customers?",
      answer: "Yes! Unlimited push notifications are included in all plans. You can send manual campaigns or set up automated flows for abandoned carts, back-in-stock alerts, and welcome messages."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-techno-primary text-sm font-bold mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Support & Questions</span>
          </div>
          <h2 className="text-4xl font-display font-extrabold text-slate-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about getting your mobile app live.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-12">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </section>
  );
};