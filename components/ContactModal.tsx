import React, { useState } from 'react';
import { X, User, Mail, Calendar, Clock, Globe, MessageSquare, Send, Check } from 'lucide-react';
import { Button } from './ui/Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    isScheduling: false,
    date: '',
    time: '',
    timezone: '',
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      ></div>

      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="p-8 pb-0 text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-3">
            Let's Build Something Great
          </h2>
          <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto">
            Fill out the form below and we'll get back to you within 24 hours.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Jane Smith"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-techno-primary focus:ring-2 focus:ring-techno-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="jane@example.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-techno-primary focus:ring-2 focus:ring-techno-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>
          </div>

          {/* Schedule Toggle */}
          <div 
            className={`p-4 rounded-xl border transition-all cursor-pointer flex items-center gap-3 ${
              formData.isScheduling 
                ? 'bg-indigo-50 border-techno-primary ring-1 ring-techno-primary' 
                : 'bg-slate-50 border-slate-200 hover:border-indigo-200'
            }`}
            onClick={() => setFormData({...formData, isScheduling: !formData.isScheduling})}
          >
            <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
              formData.isScheduling ? 'bg-techno-primary border-techno-primary' : 'bg-white border-slate-300'
            }`}>
              {formData.isScheduling && <Check className="w-3.5 h-3.5 text-white" />}
            </div>
            <span className={`font-medium ${formData.isScheduling ? 'text-techno-primary' : 'text-slate-600'}`}>
              I'd like to schedule a call
            </span>
          </div>

          {/* Conditional Scheduling Fields */}
          {formData.isScheduling && (
            <div className="grid md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Calendar className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="date"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-techno-primary focus:ring-2 focus:ring-techno-primary/20 outline-none transition-all text-slate-600"
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Time</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Clock className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="time"
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-techno-primary focus:ring-2 focus:ring-techno-primary/20 outline-none transition-all text-slate-600"
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Timezone</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                    <Globe className="h-4 w-4 text-slate-400" />
                  </div>
                  <select
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-techno-primary focus:ring-2 focus:ring-techno-primary/20 outline-none transition-all text-slate-600 appearance-none bg-white"
                    value={formData.timezone}
                    onChange={(e) => setFormData({...formData, timezone: e.target.value})}
                  >
                    <option value="">Select Timezone</option>
                    <option value="EST">Eastern Standard Time (EST)</option>
                    <option value="PST">Pacific Standard Time (PST)</option>
                    <option value="GMT">Greenwich Mean Time (GMT)</option>
                    <option value="IST">Indian Standard Time (IST)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-sm font-semibold text-slate-700">Message</label>
            <div className="relative">
              <div className="absolute top-3.5 left-3.5 flex items-start pointer-events-none">
                <MessageSquare className="h-5 w-5 text-slate-400" />
              </div>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your project..."
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:border-techno-primary focus:ring-2 focus:ring-techno-primary/20 outline-none transition-all placeholder:text-slate-400 text-slate-900 resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>
          </div>

          <Button 
            type="submit" 
            className="w-full py-4 text-lg bg-techno-primary hover:bg-indigo-600 shadow-xl shadow-indigo-200"
          >
            <span className="flex items-center gap-2">
              {formData.isScheduling ? 'Send & Schedule' : 'Send Message'}
              <Send className="w-5 h-5" />
            </span>
          </Button>
        </form>
      </div>
    </div>
  );
};