import React from 'react';
import { MessageCircle } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-slate-100 flex flex-col mb-4 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-techno-primary p-4 text-white flex justify-between items-center">
            <h3 className="font-bold">Shopmint Assistant</h3>
            <button onClick={() => setIsOpen(false)} className="hover:opacity-75">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3">
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[85%]">
              Hi there! 👋 How can we help you scale your Shopify brand today?
            </div>
            <div className="bg-indigo-100 p-3 rounded-2xl rounded-tr-none shadow-sm text-sm text-slate-700 self-end max-w-[85%]">
              I'm looking for pricing details.
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-700 max-w-[85%]">
              Great! You can view all our plans on the Pricing page. Would you like me to connect you with an expert?
            </div>
          </div>
          <div className="p-4 border-t border-slate-100 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 text-sm border-none focus:ring-0 bg-slate-100 rounded-lg px-3 py-2"
              />
              <button className="text-techno-primary">
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-techno-primary hover:bg-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group relative"
      >
        <MessageCircle className="w-7 h-7" />
        {!isOpen && (
          <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-techno-accent border-2 border-white rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
};