import React from 'react';
import { MessageCircle } from 'lucide-react';

export const ChatWidget: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button className="bg-techno-primary hover:bg-indigo-700 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1 group">
        <MessageCircle className="w-7 h-7" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-techno-accent border-2 border-white rounded-full animate-pulse"></span>
      </button>
    </div>
  );
};