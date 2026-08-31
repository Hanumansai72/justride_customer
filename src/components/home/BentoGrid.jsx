import React from 'react';
import { motion } from 'framer-motion';

export default function BentoGrid() {
  const cards = [
    {
      id: 1,
      colSpan: 'md:col-span-2',
      icon: 'trip_origin',
      title: 'Iconic Round Display',
      desc: 'High-contrast, anti-glare circular OLED screen fits seamlessly alongside classic dials and modern digital motorcycle cockpit clusters.',
      tag: 'Hardware Spec',
      badge: '1.4 Inch Custom OLED',
      accent: 'primary',
    },
    {
      id: 2,
      colSpan: 'md:col-span-1',
      icon: 'route',
      title: 'Live Intelligent Guidance',
      desc: 'Powered by motorcycle-optimized routing engines that avoid gravel roads and favor twisty scenic curves.',
      tag: 'Algorithms',
      badge: 'Real-time sync',
      accent: 'secondary',
    },
    {
      id: 3,
      colSpan: 'md:col-span-1',
      icon: 'wifi_tethering',
      title: 'Wireless BLE 5.3 Link',
      desc: 'Ultra-low energy Bluetooth ensures all-day navigation while consuming less than 4% phone battery over 8 hours.',
      tag: 'Connectivity',
      badge: 'Instant Auto-reconnect',
      accent: 'primary',
    },
    {
      id: 4,
      colSpan: 'md:col-span-2',
      icon: 'water_drop',
      title: 'Weather-Resistant IP67 Enclosure',
      desc: 'Tested under high-pressure monsoon deluges, desert dust storms, and temperatures ranging from -15°C to 55°C. Ride without hesitation.',
      tag: 'Durability',
      badge: 'Anodized Aluminum + Toughened Glass',
      accent: 'secondary',
    },
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-4"
      >
        <div>
          <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest block mb-2">
            Engineering Excellence
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
            Engineered for the Elements
          </h2>
        </div>
        <p className="text-on-surface-variant max-w-md text-sm">
          Every screw, gasket, optical layer, and firmware instruction is engineered to survive the most demanding road conditions on Earth.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className={`${card.colSpan} bg-surface-container/80 border border-outline-variant/40 rounded-2xl p-7 relative overflow-hidden group hover:border-primary/50 transition-all duration-300 shadow-lg flex flex-col justify-between`}
          >
            {/* Background Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div>
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:scale-110 group-hover:shadow-glow-sm transition-all duration-300">
                  <span className="material-symbols-outlined text-2xl">{card.icon}</span>
                </div>
                <span className="px-3 py-1 bg-surface-container-high border border-outline-variant/30 text-on-surface-variant rounded-full text-xs font-mono">
                  {card.tag}
                </span>
              </div>

              <h3 className="font-headline-md text-xl text-on-surface font-bold mb-2 group-hover:text-primary transition-colors">
                {card.title}
              </h3>
              <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="text-xs font-mono text-primary font-semibold tracking-wider">
                {card.badge}
              </span>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all text-lg">
                arrow_forward
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
