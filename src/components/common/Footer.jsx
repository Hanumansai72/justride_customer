import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer({ setActiveTab, onOpenExplore }) {
  return (
    <footer className="bg-surface-container-lowest w-full py-16 border-t border-outline-variant/20 relative">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Mission */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Logo className="w-8 h-8" />
            <span className="font-headline-md text-headline-md font-extrabold text-primary">JustRide</span>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-sm leading-relaxed">
            Glanceable, ultra-bright motorcycle telemetry and navigation hardware built exclusively for riders. Keep your phone safe and your vision sharp.
          </p>
          <div className="flex gap-4 mt-2">
            {['public', 'share', 'chat', 'mail'].map((icon, idx) => (
              <button
                key={idx}
                className="w-10 h-10 rounded-full bg-surface-container border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary hover:bg-surface-container-high transition-all"
                aria-label={`Social icon ${icon}`}
              >
                <span className="material-symbols-outlined text-lg">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-mono-metric text-on-surface font-semibold uppercase tracking-wider mb-4">
            Navigation
          </h4>
          <ul className="flex flex-col gap-2.5 font-body-md text-on-surface-variant">
            <li>
              <button
                onClick={() => {
                  setActiveTab('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-primary transition-colors text-left"
              >
                Home & Overview
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('product');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-primary transition-colors text-left"
              >
                Hardware & Features
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-primary transition-colors text-left"
              >
                Our Story & Team
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('download');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-primary transition-colors text-left"
              >
                Mobile Companion App
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setActiveTab('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-primary transition-colors text-left"
              >
                Support & Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Newsletter & Preorder CTA */}
        <div>
          <h4 className="font-mono-metric text-on-surface font-semibold uppercase tracking-wider mb-4">
            Join the Cohort
          </h4>
          <p className="font-body-md text-sm text-on-surface-variant mb-4">
            Subscribe for hardware batch updates and motorcycle firmware release drops.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to JustRide updates!');
            }}
            className="flex flex-col gap-2"
          >
            <div className="relative">
              <input
                type="email"
                required
                placeholder="rider@domain.com"
                className="w-full bg-surface-container border border-outline-variant/50 rounded-DEFAULT px-3.5 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-colors"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary/20 border border-primary text-primary font-mono-metric text-xs py-2 rounded-DEFAULT hover:bg-primary hover:text-on-primary font-bold uppercase transition-all duration-300"
            >
              Get Notified
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mt-12 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
        <p>© {new Date().getFullYear()} JustRide Technologies Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-primary transition-colors">Terms of Service</a>
          <a href="#cookies" className="hover:text-primary transition-colors">Cookie Settings</a>
          <a href="#patents" className="hover:text-primary transition-colors">Patent Info</a>
        </div>
      </div>
    </footer>
  );
}
