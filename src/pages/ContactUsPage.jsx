import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="py-20 px-margin-mobile md:px-margin-desktop max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest block mb-2">
          Customer Care & Dealerships
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg font-extrabold text-on-surface uppercase tracking-tight leading-tight">
          GET IN <span className="text-primary text-glow">TOUCH</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant mt-3">
          Have questions regarding mounting compatibility, custom motorcycle dealer orders, or technical support? Our rider support team responds within 24 hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Contact Info Cards */}
        <div className="md:col-span-5 flex flex-col gap-4">
          {[
            { icon: 'mail', label: 'Email Inquiries', val: 'support@justride.io', sub: '24/7 Response time' },
            { icon: 'location_on', label: 'Hardware Headquarters', val: 'Hyderabad & Bangalore, India', sub: 'Engineering Lab & Assembly' },
            { icon: 'storefront', label: 'Authorized Dealerships', val: '50+ Moto Shops', sub: 'India, UK, Australia' },
          ].map((c, i) => (
            <div key={i} className="bg-surface-container/70 border border-outline-variant/40 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined text-xl">{c.icon}</span>
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-on-surface-variant font-bold block">{c.label}</span>
                <span className="text-sm font-bold text-on-surface block mt-0.5">{c.val}</span>
                <span className="text-[11px] text-primary block mt-0.5">{c.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="md:col-span-7 bg-surface-container/90 border border-outline-variant/50 rounded-3xl p-8 shadow-xl">
          {!submitted ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">Send a Direct Message</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-1.5 block">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Rider Name"
                    className="w-full bg-surface-container-high border border-outline-variant/50 rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-1.5 block">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="rider@example.com"
                    className="w-full bg-surface-container-high border border-outline-variant/50 rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-1.5 block">Motorcycle Model & Year</label>
                <input
                  type="text"
                  placeholder="e.g. Royal Enfield Himalayan 450 (2024)"
                  className="w-full bg-surface-container-high border border-outline-variant/50 rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-1.5 block">Your Message / Query</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you need assistance with..."
                  className="w-full bg-surface-container-high border border-outline-variant/50 rounded-lg px-3.5 py-2.5 text-sm text-on-surface focus:outline-none focus:border-primary resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-on-primary font-mono font-bold py-3.5 rounded-lg hover:bg-primary-fixed transition-all mt-2 shadow-glow-sm cursor-pointer"
              >
                Submit Inquiry
              </button>
            </form>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-2">Message Dispatched!</h3>
              <p className="text-sm text-on-surface-variant max-w-sm mx-auto mb-6">
                Thank you for reaching out. Our engineering and rider support team will contact you shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-mono text-primary font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
