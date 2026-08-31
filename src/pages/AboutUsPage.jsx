import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsPage({ onOpenExplore }) {
  const team = [
    { name: 'Hanuman Sai', role: 'Founder & Lead Hardware Architect', icon: 'precision_manufacturing', bio: 'Avid track day rider and IoT hardware engineer dedicated to zero-distraction motorcycle cockpits.' },
    { name: 'Kiran Varma', role: 'Firmware & BLE Protocol Engineer', icon: 'developer_board', bio: 'Specialist in ultra-low-latency Bluetooth 5.3 telemetry and RTOS embedded systems.' },
    { name: 'Sanjay Reddy', role: 'Industrial Design & Aerodynamics', icon: 'architecture', bio: 'Expert in CNC aerospace alloy milling and IP67 hermetic acoustic/optical sealing.' },
  ];

  return (
    <div className="py-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-20"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono font-bold uppercase mb-4">
          Our Story & Philosophy
        </div>
        <h1 className="font-display-lg-mobile md:font-display-lg font-extrabold text-on-surface uppercase tracking-tight leading-tight">
          BUILT BY RIDERS.<br />
          FOR <span className="text-primary text-glow">THE OPEN ROAD.</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant mt-4 leading-relaxed">
          JustRide was born out of a real problem: nearly crashing on a mountain hairpin because a phone mount rotated in the rain and reflected blinding sunlight. We set out to engineer the definitive motorcycle cockpit navigation instrument.
        </p>
      </motion.div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {[
          { icon: 'speed', title: 'Zero Distraction', desc: 'A glance must take under 250 milliseconds. Never overwhelm riders with complex maps or phone notifications while in motion.' },
          { icon: 'shield', title: 'Mil-Spec Durability', desc: 'Motorcycles vibrate relentlessly and endure intense weather. We engineer every casing with aircraft aluminum and sapphire glass.' },
          { icon: 'battery_saver', title: 'Zero Battery Anxiety', desc: 'No cords dangling to power banks. 14+ hours of standalone battery on a single rapid magnetic charge.' },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-surface-container/70 border border-outline-variant/40 rounded-2xl p-8 shadow-lg hover:border-primary/50 transition-colors"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary mb-6">
              <span className="material-symbols-outlined text-2xl">{item.icon}</span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-3">{item.title}</h3>
            <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Team Section */}
      <div className="mb-20">
        <div className="text-center mb-12">
          <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest block mb-2">
            Engineering Team
          </span>
          <h2 className="font-headline-xl text-3xl font-bold text-on-surface">The Minds Behind JustRide</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-surface-container/60 border border-outline-variant/30 rounded-2xl p-6 text-center hover:border-primary/40 transition-colors"
            >
              <div className="w-20 h-20 rounded-full bg-surface-container-high border-2 border-primary/40 flex items-center justify-center text-primary mx-auto mb-4 shadow-glow-sm">
                <span className="material-symbols-outlined text-3xl">{member.icon}</span>
              </div>
              <h3 className="font-headline-md text-lg font-bold text-on-surface">{member.name}</h3>
              <p className="text-xs font-mono text-primary uppercase font-semibold mb-3">{member.role}</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
