import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-display font-extrabold text-slate-900 mb-6">Privacy Policy</h1>
            <p className="text-lg text-slate-600">Last updated: {new Date().toLocaleDateString()}</p>
        </div>
        
        <div className="space-y-12 max-w-3xl mx-auto">
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">1</span>
                    <h2 className="text-2xl font-bold text-slate-900">Collection of Information</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    We may collect personal information such as your name, email address, and payment information when you use our software services or contact us for support. We may also collect non-personal information such as your IP address and browser type through the use of cookies.
                </p>
            </section>
            
            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">2</span>
                    <h2 className="text-2xl font-bold text-slate-900">Use of Information</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    We may use your personal information to provide you with our software services, process payments, and communicate with you about our products and services. We may also use non-personal information to improve our website and software services.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">3</span>
                    <h2 className="text-2xl font-bold text-slate-900">Disclosure of Information</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    We will not disclose your personal information to third parties except as necessary to provide our software services or comply with legal obligations. We may share your information with trusted third-party service providers who assist us in operating our website and software services.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">4</span>
                    <h2 className="text-2xl font-bold text-slate-900">Security</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    We take appropriate measures to protect your personal information from unauthorized access or disclosure. We use industry-standard encryption technologies to protect your sensitive information during transmission and storage.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">5</span>
                    <h2 className="text-2xl font-bold text-slate-900">Third-Party Websites</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    Our website and software services may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites. We encourage you to review the privacy policies of these websites before providing any personal information.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">6</span>
                    <h2 className="text-2xl font-bold text-slate-900">Children's Privacy</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    Our website and software services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.
                </p>
            </section>

            <section>
                <div className="flex items-center gap-3 mb-4">
                    <span className="w-8 h-8 rounded-full bg-indigo-50 text-techno-primary font-bold flex items-center justify-center text-sm">7</span>
                    <h2 className="text-2xl font-bold text-slate-900">Changes to Privacy Policy</h2>
                </div>
                <p className="text-slate-600 leading-relaxed pl-11">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
                </p>
            </section>
        </div>
      </div>
    </div>
  );
};