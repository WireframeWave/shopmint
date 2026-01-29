import React from 'react';

export const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6">Terms of Service</h1>
            <p className="text-lg text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="space-y-12 max-w-3xl mx-auto">
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">1</span>
                    <h2 className="text-2xl font-bold text-slate-900">Acceptance of Terms</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    By accessing or using Technoboost's website and software services, you agree to be bound by these Terms and Conditions, as well as any additional terms and conditions that may apply to specific sections of our website or software. If you do not agree to these terms, you may not use our services.
                </p>
            </section>
            
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">2</span>
                    <h2 className="text-2xl font-bold text-slate-900">Use of Technoboost's Services</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    You may use Technoboost's services only for lawful purposes and in accordance with these Terms and Conditions. You may not use our website or software in any way that could damage or impair the performance, availability, or accessibility of our website or software.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">3</span>
                    <h2 className="text-2xl font-bold text-slate-900">Ownership and Intellectual Property Rights</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    All content and materials provided on our website and software, including but not limited to text, graphics, logos, icons, images, and software, are owned or licensed by Technoboost and are protected by copyright, trademark, and other intellectual property laws.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">4</span>
                    <h2 className="text-2xl font-bold text-slate-900">User Accounts</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    To access certain features of Technoboost's software, you may be required to create a user account. You are responsible for maintaining the confidentiality of your account information, including your username and password. You agree to notify Technoboost immediately of any unauthorized use of your account or any other breach of security.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">5</span>
                    <h2 className="text-2xl font-bold text-slate-900">Payment and Fees</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    Technoboost's software services may be subject to fees. You agree to pay all fees and charges incurred in connection with your use of Technoboost's services. All fees are non-refundable.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">6</span>
                    <h2 className="text-2xl font-bold text-slate-900">Limitation of Liability</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    Technoboost is not liable for any damages, including but not limited to direct, indirect, incidental, punitive, and consequential damages, arising from your use of our website or software.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">7</span>
                    <h2 className="text-2xl font-bold text-slate-900">Termination of Services</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    Technoboost may terminate or suspend your access to our website and software services at any time, with or without cause, and with or without notice.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">8</span>
                    <h2 className="text-2xl font-bold text-slate-900">Modifications to Terms and Conditions</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    Technoboost reserves the right to modify these Terms and Conditions at any time, with or without notice. Your continued use of our website and software services constitutes your acceptance of any modified terms.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">9</span>
                    <h2 className="text-2xl font-bold text-slate-900">Governing Law</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};