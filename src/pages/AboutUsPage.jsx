import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsPage({ onOpenExplore, setActiveTab }) {
  const principles = [
    {
      icon: 'two_wheeler',
      title: 'Designed for Riders',
      desc: 'Hardware built to withstand the elements, with an interface tailored for quick glances at high speeds.',
    },
    {
      icon: 'bluetooth_connected',
      title: 'Connected Technology',
      desc: 'Seamless integration with your existing devices, turning your smartphone into an invisible powerhouse.',
    },
    {
      icon: 'touch_app',
      title: 'Simple Interaction',
      desc: 'No complex menus or tiny buttons. Just the essential information presented precisely when you need it.',
    },
  ];

  return (
    <div className="w-full flex-grow">
      {/* 1. Hero Section with Night Cockpit Background */}
      <section className="relative min-h-[716px] flex items-center px-margin-mobile md:px-margin-desktop py-xl overflow-hidden">
        {/* Background Image with Dark Vignette & Gradient */}
        <div className="absolute inset-0 z-0">
          <div
            className="bg-cover bg-center w-full h-full opacity-35 scale-105 transition-transform duration-1000"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDb63SnKUcF6pyVAMWgVeUTc5LfnOejoyt6l29jydjGTOL7fHwKV7ILt9tG0erBH8xI4jpJQkTXtiAPJPpmOhVD2T-wMeJJKfyEEe5sgoqNsZeLdCCK2tLs3qDOPwWMHMLpYeGT4N0hskesRSVt9w73MBREwojBrKg38W-jAUlDvI4ch5EWQIsO1DKhviEzZH2ZwXJT2LycUE3XN5wHJt-ct18Bk5WEetF8koDvW4WhLi4VzCd6b1En')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
          <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/15 rounded-full blur-[130px] pointer-events-none"></div>
        </div>

        {/* Hero Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative z-10 max-w-4xl mx-auto md:mx-0"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase mb-4">
            JustRide Origins & Story
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-md font-bold tracking-tight text-glow">
            Built Around the Rider.
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            We started with a simple observation: smartphone navigation is distracting, dangerous, and poorly suited for the realities of riding. JustRide was born from the need to return focus to the road without sacrificing connectivity.
          </p>
        </motion.div>
      </section>

      {/* 2. Mission Statement Section */}
      <section className="px-margin-mobile md:px-margin-desktop py-xl bg-surface-container-low border-y border-outline-variant/30">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase mb-sm block font-bold">
            Our Mission
          </span>
          <h2 className="font-headline-xl text-2xl md:text-4xl text-on-surface leading-tight font-extrabold">
            "Make navigation simpler, clearer and more connected for every ride."
          </h2>
        </motion.div>
      </section>

      {/* 3. Principles Bento Grid ("Why JustRide") */}
      <section className="px-margin-mobile md:px-margin-desktop py-xl max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-headline-md text-headline-md text-primary mb-lg font-bold tracking-wide"
        >
          Why JustRide
        </motion.h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {principles.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel p-md rounded-xl flex flex-col hover:border-primary/50 transition-all duration-300 group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-tertiary/10 border border-tertiary/20 flex items-center justify-center text-tertiary mb-md group-hover:scale-110 group-hover:bg-primary/20 group-hover:text-primary group-hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined text-4xl" data-icon={p.icon}>
                  {p.icon}
                </span>
              </div>
              <h4 className="font-headline-md text-xl text-on-surface mb-sm font-bold group-hover:text-primary transition-colors">
                {p.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant flex-grow leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="px-margin-mobile md:px-margin-desktop py-xl text-center max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-xl rounded-2xl max-w-3xl mx-auto border border-outline-variant/50 relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-36 bg-primary/15 blur-3xl rounded-full pointer-events-none"></div>

          <h2 className="font-headline-xl text-2xl md:text-4xl text-on-surface mb-md relative z-10 font-extrabold tracking-tight">
            Discover JustRide
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-lg relative z-10 max-w-xl mx-auto">
            Experience the next generation of rider-focused navigation technology.
          </p>

          <div className="relative z-10 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => {
                if (typeof setActiveTab === 'function') {
                  setActiveTab('product');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (typeof onOpenExplore === 'function') {
                  onOpenExplore();
                }
              }}
              className="group relative bg-primary text-on-primary font-label-caps text-label-caps px-lg py-3 rounded-DEFAULT hover:bg-primary-fixed-dim transition-all glow-effect uppercase tracking-widest font-bold shadow-glow-sm cursor-pointer"
            >
              <span className="btn-glow"></span>
              View Product
            </motion.button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
