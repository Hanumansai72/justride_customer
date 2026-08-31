import React from 'react';
import { motion } from 'framer-motion';

export default function CTASection({ onOpenExplore }) {
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop text-center border-t border-outline-variant/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-80 bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 flex flex-col items-center gap-6 max-w-3xl mx-auto"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase">
          🏍️ Reserve Your Production Batch Unit
        </div>

        <h2 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface font-extrabold uppercase leading-tight tracking-tight">
          Ride Smarter with <span className="text-primary text-glow">JustRide.</span>
        </h2>

        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
          Upgrade your motorcycle cockpit with the definitive navigation experience. Free worldwide shipping, 2-year warranty, and 30-day money-back guarantee.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenExplore}
            className="group relative bg-primary text-on-primary font-mono-metric font-bold py-4 px-10 rounded-DEFAULT hover:bg-primary-fixed transition-all flex items-center justify-center gap-2 shadow-glow cursor-pointer"
          >
            <span className="btn-glow"></span>
            <span>Pre-Order JustRide</span>
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </motion.button>
        </div>

        <div className="flex items-center gap-6 text-xs text-on-surface-variant/80 font-mono mt-2">
          <span>✓ 30-Day Trail</span>
          <span>✓ 2-Year Hardware Warranty</span>
          <span>✓ Universal Fit</span>
        </div>
      </motion.div>
    </section>
  );
}
