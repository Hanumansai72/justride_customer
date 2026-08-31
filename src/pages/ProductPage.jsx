import React from 'react';
import { motion } from 'framer-motion';
import InteractiveSimulator from '../components/home/InteractiveSimulator';
import TechSpecs from '../components/home/TechSpecs';

export default function ProductPage({ onOpenExplore, setActiveTab }) {
  return (
    <div className="w-full flex-grow">
      {/* 1. Hero Section */}
      <section className="relative min-h-[860px] flex items-center justify-center overflow-hidden px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        {/* Abstract background ambient glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[140px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start"
          >
            <div className="inline-flex items-center space-x-2 bg-surface-container-high/90 rounded-full px-4 py-2 w-max border border-outline-variant/40 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-caps text-xs text-on-surface-variant font-bold uppercase tracking-wider">
                Technical Showcase
              </span>
            </div>

            <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-extrabold uppercase leading-tight tracking-tight">
              Your Ride. <br />
              <span className="text-gradient text-glow">Your Route.</span> <br />
              One Glance.
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
              A dedicated smart display engineered for motorcycles. High-visibility navigation, seamless BLE connection, and rugged physical controls built for the elements.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onOpenExplore}
                className="group relative bg-primary text-on-primary px-8 py-3.5 rounded-DEFAULT font-label-caps text-xs font-bold uppercase tracking-wider hover:bg-primary-fixed transition-all flex items-center justify-center gap-2 shadow-glow-sm cursor-pointer"
              >
                <span className="btn-glow"></span>
                <span>Configure Hardware</span>
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: 3D Device Render */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[480px] md:h-[614px] w-full flex items-center justify-center"
          >
            <div className="relative w-full h-full max-w-lg flex items-center justify-center group">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-opacity"></div>
              <img
                className="object-contain w-full h-full max-w-lg drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] z-10 rounded-2xl transition-transform duration-700 group-hover:scale-105"
                data-alt="JustRide motorcycle navigation device render"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLitOVhVpd6T33rTDGzym6wco-GdSVkD6DXhSLj6ObCNrSYycCc1TR2Fp_-cudL6hH6CMRaAKILl11WEUHAnGe7LmCKw4hLmOLlvn57wjeLQF0ARm7MssXcZcr316ZGeSFdHVkVghNpK3W26AZljgbjKu_-RoMrn-9AEMi4vobrVnag4nM968LN3WZxjP3rq-4ePP_i2EzJ8Xz4ACqXXrc5Ji5cIoapC-tmRi1WG-8OooZfcB0X_ju"
                alt="JustRide Motorcycle Navigation Device"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. Overview Bento Grid ("Engineered for the Ride") */}
      <section className="py-20 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-3"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase">
              Tactile & Visual Engineering
            </div>
            <h2 className="font-headline-xl text-3xl md:text-5xl font-extrabold text-on-surface tracking-tight">
              Engineered for the Ride
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
              Core features designed specifically for the tactile and visual demands of high-speed motorcycling.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Display Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group tech-border hover:border-primary/50 transition-all duration-300 shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    display_settings
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Dedicated Round Display
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  High-brightness, optically bonded circular screen optimized for peripheral visibility in direct sunlight.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between text-xs font-mono text-primary font-bold">
                <span>1,000 Nits Optical Bonding</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </motion.div>

            {/* BLE Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group tech-border hover:border-primary/50 transition-all duration-300 shadow-lg"
            >
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    bluetooth
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Seamless BLE Connection
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                  Low-energy Bluetooth connects instantly to your smartphone, offloading processing to preserve device battery.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-outline-variant/20 flex items-center justify-between text-xs font-mono text-primary font-bold">
                <span>Bluetooth 5.3 Low Energy</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </motion.div>

            {/* Physical Controls Card (md:row-span-2) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group tech-border hover:border-primary/50 transition-all duration-300 md:row-span-2 shadow-lg"
            >
              <div className="space-y-4 h-full flex flex-col">
                <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                  <span
                    className="material-symbols-outlined text-3xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    gamepad
                  </span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                  Physical Controls
                </h3>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed flex-grow">
                  Glove-friendly tactile buttons ensure precise operation without needing to look down or remove riding gear.
                </p>
                <div className="w-full h-56 rounded-xl overflow-hidden mt-auto tech-border relative group-hover:border-primary/40 transition-colors">
                  <img
                    className="w-full h-full object-cover rounded-xl opacity-85 mix-blend-luminosity group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                    data-alt="Tactile physical buttons close-up"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlS8p6QHbDwsMkhK0xBt3kUX1g47609ZZZgB0VIYzLfU9qvJ9iitNHKpCPvsYdn3Vzp5g2VnjzsV5VBfTFF9OZVV_i6ftL3mg_80nnas4uzb-vrAy8mMVjkap3HjbaoQAcrDpJpJbCvyJXuiiU73JBCBA_tUmw_Mf8WC6xTvt-O1oS9WDPfq11YuVcxVgm5Xv8jXzGR_N0mTwRufm_CT_ihnVwFA_Ph3lTC-07FWKJmxT5nEIPpIhd"
                    alt="Physical glove-friendly tactile buttons"
                  />
                </div>
              </div>
            </motion.div>

            {/* Mounting Card (md:col-span-2) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-panel p-8 rounded-2xl flex flex-col justify-between group tech-border hover:border-primary/50 transition-all duration-300 md:col-span-2 shadow-lg"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="space-y-4 flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-on-primary transition-all duration-300">
                    <span
                      className="material-symbols-outlined text-3xl"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      lock
                    </span>
                  </div>
                  <h3 className="font-headline-md text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                    Secure Mounting System
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                    Vibration-dampening locking mechanism designed for standard motorcycle handlebars, ensuring the device stays rock solid across rough dirt, gravel, and high speeds.
                  </p>
                  <div className="flex gap-2 pt-2">
                    <span className="px-2.5 py-1 bg-surface-container-high border border-outline-variant/40 rounded text-xs font-mono text-primary font-semibold">
                      22mm / 28mm / 32mm Fits
                    </span>
                    <span className="px-2.5 py-1 bg-surface-container-high border border-outline-variant/40 rounded text-xs font-mono text-on-surface-variant">
                      Anti-Vibration Damper
                    </span>
                  </div>
                </div>

                <div className="flex-1 w-full h-52 rounded-xl overflow-hidden tech-border relative group-hover:border-primary/40 transition-colors">
                  <img
                    className="w-full h-full object-cover mix-blend-luminosity opacity-85 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-500"
                    data-alt="Motorcycle handlebar mounting mechanism render"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeBs-_ZerCGAto_uB9tqeH_Ve_hKB5Q4MWtFvvMzBPZVJRTD27a_rElV9tZtvnpMmr03bFc7SE9ytED-3eAXkYla_nPQyyVtqryv43RnvoJxStopH8VV7hmjI-7-NH88GVBBlecf8uMaiYsrCsEOP3wXQJWmmdCet2_GwOPzKdkWinhBY6AuimTJHUsvRiXJPaBtCeUgiDGRntVYvrWl6aONp4JcGsDvWjj2ap9uabpRNHfpWqm8Bw"
                    alt="Precision machined clamp and mounting system"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Interactive Cockpit Simulator & Detailed Specifications */}
      <InteractiveSimulator />
      <TechSpecs />
    </div>
  );
}
