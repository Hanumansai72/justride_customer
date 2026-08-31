import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

export default function Navbar({ activeTab, setActiveTab, onOpenExplore }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'product', label: 'Product' },
    { id: 'download', label: 'Download' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/90 backdrop-blur-xl border-b border-outline-variant/30 shadow-lg shadow-black/40'
          : 'bg-surface/60 backdrop-blur-md border-b border-outline-variant/20'
      }`}
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
        {/* Brand */}
        <button
          onClick={() => {
            setActiveTab('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <Logo className="w-10 h-10 group-hover:scale-105 transition-transform" />
          <span className="font-headline-md text-headline-md font-extrabold text-primary tracking-tight">
            Just<span className="text-on-surface">Ride</span>
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`relative font-body-md text-body-md py-1 transition-colors duration-300 ${
                  isActive ? 'text-primary font-semibold' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary rounded-full shadow-[0_0_8px_#4be277]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Trailing Action */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenExplore}
            className="group relative bg-primary/10 border border-primary text-primary font-mono-metric text-mono-metric py-2.5 px-6 rounded-DEFAULT hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center gap-2 overflow-hidden"
          >
            <span className="btn-glow"></span>
            <span>Explore JustRide</span>
            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-2 rounded-lg hover:bg-surface-container transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {mobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-surface-container border-b border-outline-variant/30 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`text-left text-lg py-2 border-b border-outline-variant/10 transition-colors ${
                    activeTab === item.id ? 'text-primary font-bold' : 'text-on-surface-variant'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenExplore();
                }}
                className="mt-2 w-full bg-primary text-on-primary font-mono-metric py-3 rounded-DEFAULT text-center font-bold"
              >
                Explore JustRide
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
