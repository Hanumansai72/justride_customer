import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TechSpecs from '../components/home/TechSpecs';
import InteractiveSimulator from '../components/home/InteractiveSimulator';

export default function ProductPage({ onOpenExplore }) {
  const [activeFeature, setActiveFeature] = useState('display');

  const features = {
    display: {
      title: 'Circular Optical OLED Display',
      desc: 'Featuring high-contrast deep blacks with an ultra-bright 1000-nit luminance matrix. Sunlight readability is guaranteed thanks to our anti-reflective multi-layer polarizing filter.',
      stats: ['1.4" Diameter', '1,000 Nits Brightness', '178° Viewing Angle'],
    },
    battery: {
      title: '14-Hour Rapid Pogo Docking',
      desc: 'Engineered with an 850mAh high-density lithium polymer cell and magnetic four-point gold-plated Pogo pin fast docking for 0-100% charging in under 55 minutes.',
      stats: ['14h Route Time', '55 Min Fast Charge', 'Magnetic Dock'],
    },
    chassis: {
      title: 'Aerospace Grade 6061-T6 Aluminum',
      desc: 'Unibody chassis milled on 5-axis CNC machines and treated with hard anodized Type III coating to resist scratches, road grit, oil, and harsh ultraviolet exposure.',
      stats: ['CNC Unibody', 'Type III Anodized', 'Sapphire Glass'],
    },
    ble: {
      title: 'Bluetooth 5.3 Low Energy Protocol',
      desc: 'Custom proprietary telemetry protocol streaming GPS turn vectors, speed, battery, and route recalculated events in under 12 milliseconds.',
      stats: ['<12ms Latency', 'Auto Reconnect', '<4% Phone Battery/Day'],
    },
  };

  const curr = features[activeFeature];

  return (
    <div className="py-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      {/* Product Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest block mb-2">
          Flagship Hardware
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg font-extrabold text-on-surface uppercase tracking-tight leading-tight">
          JUST<span className="text-primary text-glow">RIDE V2</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant mt-3">
          The pinnacle of motorcycle cockpit navigation. Pure telemetry, zero distractions.
        </p>
      </motion.div>

      {/* Feature Deep Dive Switcher */}
      <div className="bg-surface-container/70 border border-outline-variant/40 rounded-3xl p-6 md:p-12 mb-20 shadow-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {[
            { id: 'display', label: '1. OLED Display', icon: 'visibility' },
            { id: 'battery', label: '2. Battery & Dock', icon: 'bolt' },
            { id: 'chassis', label: '3. CNC Chassis', icon: 'shield' },
            { id: 'ble', label: '4. BLE 5.3 Link', icon: 'bluetooth' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFeature(tab.id)}
              className={`p-3.5 rounded-xl border flex items-center justify-center gap-2 text-xs font-mono font-bold transition-all ${
                activeFeature === tab.id
                  ? 'bg-primary text-on-primary border-primary shadow-glow-sm'
                  : 'bg-surface-container-high border-outline-variant/30 text-on-surface-variant hover:border-primary/40'
              }`}
            >
              <span className="material-symbols-outlined text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        <motion.div
          key={activeFeature}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <div className="md:col-span-7">
            <h3 className="font-headline-xl text-2xl md:text-3xl font-extrabold text-on-surface mb-3">
              {curr.title}
            </h3>
            <p className="font-body-md text-on-surface-variant text-base leading-relaxed mb-6">
              {curr.desc}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {curr.stats.map((st, i) => (
                <div key={i} className="p-3 rounded-lg bg-surface-container-high border border-outline-variant/30 text-center font-mono">
                  <span className="text-xs text-primary font-bold">{st}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 flex justify-center">
            <div className="w-64 h-64 rounded-full bg-surface-container-lowest border-4 border-primary/40 flex items-center justify-center text-primary shadow-glow">
              <span className="material-symbols-outlined text-7xl animate-pulse">
                {activeFeature === 'display' ? 'visibility' : activeFeature === 'battery' ? 'bolt' : activeFeature === 'chassis' ? 'shield' : 'bluetooth'}
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <InteractiveSimulator />
      <TechSpecs />
    </div>
  );
}
