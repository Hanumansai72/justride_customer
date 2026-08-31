import React from 'react';
import { motion } from 'framer-motion';

export default function ValueStrip() {
  const values = [
    { icon: 'visibility', title: 'Glanceable Navigation', desc: '0.2s readable turns' },
    { icon: 'adjust', title: 'Dedicated Display', desc: 'Circular matte OLED' },
    { icon: 'bluetooth', title: 'Bluetooth 5.3 BLE', desc: 'Ultra-low battery draw' },
    { icon: 'two_wheeler', title: 'Built for Riders', desc: 'Glove-friendly control' },
  ];

  return (
    <section className="border-y border-outline-variant/20 bg-surface/40 backdrop-blur-md px-margin-mobile md:px-margin-desktop py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20">
        {values.map((val, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="flex items-center gap-3 px-3 py-2 justify-start group cursor-default"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary group-hover:shadow-glow-sm transition-all duration-300">
              <span className="material-symbols-outlined text-xl">{val.icon}</span>
            </div>
            <div>
              <span className="font-mono-metric text-xs md:text-sm text-on-surface uppercase font-bold tracking-wide block">
                {val.title}
              </span>
              <span className="text-[11px] text-on-surface-variant block font-mono">
                {val.desc}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
