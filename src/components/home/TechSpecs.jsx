import React from 'react';
import { motion } from 'framer-motion';

export default function TechSpecs() {
  const specs = [
    { label: 'Display Size & Type', value: '1.4-inch High-Brightness Sunlight-Readable OLED (Round)' },
    { label: 'Brightness Output', value: '1,000 Nits peak with Ambient Light Sensor auto-dimming' },
    { label: 'Battery Capacity & Life', value: '850 mAh Li-Po • Up to 14 hours continuous turn-by-turn routing' },
    { label: 'Charging Interface', value: 'Magnetic Pogo Pin Fast Charge (0 to 100% in 55 mins)' },
    { label: 'Connectivity', value: 'Bluetooth 5.3 Low Energy (BLE) • Auto-reconnect range 10m' },
    { label: 'Water & Dust Rating', value: 'IP67 Certified (Submersible up to 1 meter for 30 minutes)' },
    { label: 'Operating Temperature', value: '-15°C to 55°C (Built for extreme winter & summer rides)' },
    { label: 'Chassis Material', value: 'CNC Machined Anodized Aerospace Grade Aluminum + Sapphire Glass' },
    { label: 'Mounting Compatibility', value: 'Universal 22mm / 28mm / 32mm handlebar clamps + Mirror stem mount' },
    { label: 'Companion Mobile OS', value: 'iOS 15.0+ and Android 9.0+ via JustRide Companion App' },
  ];

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest block mb-2">
          Precision Engineering
        </span>
        <h2 className="font-headline-xl text-headline-xl text-on-surface font-extrabold tracking-tight">
          Technical Specifications
        </h2>
        <p className="text-on-surface-variant text-sm max-w-lg mx-auto mt-2">
          Designed without compromises. Crafted with aircraft-grade materials and military-grade sealing.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-surface-container/70 border border-outline-variant/40 rounded-2xl overflow-hidden shadow-xl"
      >
        <div className="divide-y divide-outline-variant/20">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-3 p-4 md:p-5 hover:bg-surface-container-high/50 transition-colors"
            >
              <div className="font-mono text-xs uppercase text-primary font-bold mb-1 md:mb-0 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                {spec.label}
              </div>
              <div className="md:col-span-2 text-sm text-on-surface font-medium">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
