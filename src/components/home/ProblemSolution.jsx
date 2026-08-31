import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProblemSolution() {
  const [sliderVal, setSliderVal] = useState(50);

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono font-bold uppercase mb-3">
          Rider Ergonomics & Safety
        </div>
        <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
          Keep Your Focus on the Open Road
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mt-3 max-w-2xl mx-auto leading-relaxed">
          Ditch fragile smartphone mounts, sun-glare blindness, and vibrating camera sensor damage. Get exactly the navigation telemetry you need, right in your peripheral vision.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative items-stretch">
        {/* The Distraction (Phone Mount) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container/70 border border-outline-variant/60 rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group shadow-lg"
        >
          <div className="flex justify-between items-center z-10">
            <span className="font-label-caps text-xs text-error font-bold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-error animate-pulse"></span>
              The Dangerous Distraction
            </span>
            <span className="material-symbols-outlined text-error text-2xl">warning</span>
          </div>

          {/* Visual comparison container */}
          <div className="aspect-video md:aspect-[4/3] rounded-xl overflow-hidden relative z-10 bg-surface-dim border border-outline-variant/30 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-error/10 border border-error/30 flex items-center justify-center text-error mb-3">
              <span className="material-symbols-outlined text-3xl">screen_lock_landscape</span>
            </div>
            <h4 className="font-mono-metric font-bold text-on-surface text-lg mb-1">Cluttered Smartphone Maps</h4>
            <p className="text-xs text-on-surface-variant max-w-xs">
              Tiny unreadable street names, app notifications popping up, battery overheating under direct sunlight, and phone camera vibration damage.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="px-2.5 py-1 bg-error/10 text-error border border-error/20 rounded-md text-[11px] font-mono">❌ Sun Glare</span>
              <span className="px-2.5 py-1 bg-error/10 text-error border border-error/20 rounded-md text-[11px] font-mono">❌ Overheating</span>
              <span className="px-2.5 py-1 bg-error/10 text-error border border-error/20 rounded-md text-[11px] font-mono">❌ Distractions</span>
            </div>
          </div>

          <p className="font-body-md text-sm text-on-surface-variant text-center z-10">
            Smartphones are designed for your hands on a couch—not for high-speed riding in the rain or blinding sunshine.
          </p>
        </motion.div>

        {/* The Solution (JustRide Dedicated Hardware) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-surface-container/90 border-2 border-primary/40 rounded-2xl p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group shadow-glow-sm"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex justify-between items-center z-10">
            <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              The JustRide Solution
            </span>
            <span className="material-symbols-outlined text-primary text-2xl">check_circle</span>
          </div>

          {/* Visual comparison container */}
          <div className="aspect-video md:aspect-[4/3] rounded-xl overflow-hidden relative z-10 bg-surface-container-lowest border border-primary/30 flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary mb-3 shadow-glow-sm">
              <span className="material-symbols-outlined text-3xl animate-bounce">turn_right</span>
            </div>
            <h4 className="font-mono-metric font-bold text-on-surface text-lg mb-1">Glanceable 0.2s Reading</h4>
            <p className="text-xs text-on-surface-variant max-w-xs">
              Crisp neon vector arrows, large distance numbers, high-contrast round HUD with automatic brightness sensing.
            </p>
            <div className="flex gap-2 mt-4">
              <span className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/30 rounded-md text-[11px] font-mono">✓ Anti-Glare</span>
              <span className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/30 rounded-md text-[11px] font-mono">✓ 14h Battery</span>
              <span className="px-2.5 py-1 bg-primary/10 text-primary border border-primary/30 rounded-md text-[11px] font-mono">✓ IP67 Waterproof</span>
            </div>
          </div>

          <p className="font-body-md text-sm text-on-surface-variant text-center z-10">
            Pure turn-by-turn guidance and speed telemetry. Keep your phone safely zipped in your jacket pocket.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
