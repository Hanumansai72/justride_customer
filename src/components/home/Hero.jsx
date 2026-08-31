import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function Hero({ setActiveTab, onOpenExplore, onOpenVideo }) {
  const [activeSpeed, setActiveSpeed] = useState(64);
  const [navDirection, setNavDirection] = useState('turn_right');
  const [distance, setDistance] = useState('250 m');

  return (
    <section className="relative min-h-[920px] flex items-center px-margin-mobile md:px-margin-desktop py-16 md:py-24 overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 relative z-10 w-full items-center">
        {/* Left Column: Text & CTAs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="md:col-span-6 flex flex-col gap-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-primary/30 w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
            <span className="font-label-caps text-xs text-primary uppercase tracking-wider font-bold">
              Next-Gen Hardware Released • Batch 04
            </span>
          </div>

          <h1 className="font-display-lg-mobile text-display-lg-mobile md:font-display-lg md:text-display-lg text-on-surface uppercase leading-tight tracking-tight font-extrabold">
            NAVIGATION.<br />
            BUILT FOR <span className="text-primary text-glow">THE RIDE.</span>
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg leading-relaxed">
            Experience glanceable, turn-by-turn navigation on a dedicated display designed exclusively for motorcycles. Keep your phone safely tucked away and your focus on the road ahead.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenExplore}
              className="group relative bg-primary text-on-primary font-mono-metric py-3.5 px-7 rounded-DEFAULT hover:bg-primary-fixed transition-all flex items-center justify-center gap-2 font-bold shadow-glow-sm cursor-pointer"
            >
              <span className="btn-glow"></span>
              <span>Explore the Product</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenVideo}
              className="border border-primary/50 text-primary font-mono-metric py-3.5 px-7 rounded-DEFAULT hover:bg-primary/10 transition-all flex items-center justify-center gap-2 font-medium cursor-pointer"
            >
              <span>See How It Works</span>
              <span className="material-symbols-outlined text-xl">play_circle</span>
            </motion.button>
          </div>

          {/* Dedicated Android and iOS Companion App Download Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-1">
            {/* Android Download Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (typeof setActiveTab === 'function') {
                  setActiveTab('download');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="bg-surface-container/90 border border-outline-variant/60 hover:border-primary/60 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all duration-300 group text-left cursor-pointer shadow-sm hover:shadow-glow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0">
                <span className="material-symbols-outlined text-2xl" data-icon="android">
                  android
                </span>
              </div>
              <div>
                <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider font-semibold">
                  Download App
                </div>
                <div className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                  For Android
                </div>
              </div>
            </motion.button>

            {/* iOS Download Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                if (typeof setActiveTab === 'function') {
                  setActiveTab('download');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="bg-surface-container/90 border border-outline-variant/60 hover:border-primary/60 rounded-xl px-4 py-2.5 flex items-center gap-3 transition-all duration-300 group text-left cursor-pointer shadow-sm hover:shadow-glow-sm"
            >
              <div className="w-9 h-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all shrink-0">
                {/* Clean Apple / iOS Logo */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170" aria-label="Apple iOS Logo">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.85-12-14.44-6.3-9.68-11.22-20.91-14.77-33.69-3.55-12.78-5.32-24.87-5.32-36.27 0-14.66 3.65-26.71 10.96-36.14 7.3-9.43 16.5-14.24 27.59-14.44 4.35 0 9.47 1.2 15.36 3.6 5.88 2.4 9.43 3.66 10.63 3.66 1.09 0 4.89-1.31 11.41-3.92 6.52-2.61 12.08-3.7 16.68-3.27 12.83.98 22.88 5.76 30.15 14.34-11.09 6.74-16.53 16.14-16.32 28.2.22 9.57 3.97 17.61 11.25 24.13 7.28 6.52 16.03 10.16 26.25 10.92-2.18 6.3-4.57 12.39-7.18 18.28zM119.22 31.84c0-7.18 2.61-13.91 7.83-20.18 5.22-6.27 11.63-10.22 19.24-11.86.87 7.4-1.63 14.19-7.51 20.37-5.87 6.18-12.38 9.94-19.56 11.67z" />
                </svg>
              </div>
              <div>
                <div className="text-[10px] font-mono text-on-surface-variant uppercase tracking-wider font-semibold">
                  Download App
                </div>
                <div className="text-xs font-bold text-on-surface group-hover:text-primary transition-colors">
                  For iOS
                </div>
              </div>
            </motion.button>
          </div>

          {/* Quick Stats Strip */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-outline-variant/20 mt-2">
            <div>
              <div className="text-2xl font-bold text-on-surface font-mono-metric">1,000 Nits</div>
              <div className="text-xs text-on-surface-variant uppercase">Sunlight Readable</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary font-mono-metric">IP67</div>
              <div className="text-xs text-on-surface-variant uppercase">Water & Dust Proof</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-on-surface font-mono-metric">14+ Hrs</div>
              <div className="text-xs text-on-surface-variant uppercase">Continuous Ride Time</div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Hardware Render & HUD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="md:col-span-6 relative flex justify-center items-center"
        >
          <div className="relative w-full max-w-[500px] aspect-square rounded-3xl p-6 glass-panel border border-outline-variant/40 flex flex-col justify-between items-center shadow-2xl overflow-hidden group">
            {/* Background Ambient Ring */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-surface-container-high/40 pointer-events-none"></div>

            {/* Circular Hardware Gauge Device */}
            <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full bg-surface-container-lowest border-4 border-surface-container-high shadow-[0_0_50px_rgba(0,0,0,0.8),inset_0_0_30px_rgba(75,226,119,0.15)] flex flex-col items-center justify-center p-4 relative">
              {/* Outer Bezel Dial Marks */}
              <div className="absolute inset-1 rounded-full border border-dashed border-outline-variant/30 animate-spin-slow"></div>

              {/* Live HUD Contents */}
              <div className="flex flex-col items-center text-center relative z-20">
                <span className="material-symbols-outlined text-primary text-5xl md:text-6xl drop-shadow-[0_0_12px_rgba(75,226,119,0.8)] animate-bounce">
                  {navDirection === 'turn_right' ? 'turn_right' : navDirection === 'turn_left' ? 'turn_left' : 'straight'}
                </span>
                
                <span className="font-mono-metric text-2xl md:text-3xl font-extrabold text-on-surface mt-2 tracking-wider">
                  {distance}
                </span>
                
                <span className="text-xs text-primary font-bold uppercase tracking-widest mt-0.5">
                  MG Road Flyover
                </span>

                {/* Bottom Dial Telemetry */}
                <div className="flex items-center gap-6 mt-4 pt-3 border-t border-outline-variant/20">
                  <div className="text-center">
                    <span className="text-xs text-on-surface-variant block font-mono">SPEED</span>
                    <span className="text-sm font-bold text-on-surface font-mono">{activeSpeed} km/h</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-on-surface-variant block font-mono">BATTERY</span>
                    <span className="text-sm font-bold text-primary font-mono">92% ⚡</span>
                  </div>
                  <div className="text-center">
                    <span className="text-xs text-on-surface-variant block font-mono">ETA</span>
                    <span className="text-sm font-bold text-on-surface font-mono">14:22</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Simulation Controls */}
            <div className="relative z-20 w-full flex justify-center gap-3 mt-4">
              <button
                onClick={() => {
                  setNavDirection('turn_left');
                  setDistance('150 m');
                  setActiveSpeed(45);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
                  navDirection === 'turn_left'
                    ? 'bg-primary text-on-primary border-primary font-bold shadow-glow-sm'
                    : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:text-primary'
                }`}
              >
                ← Left Turn
              </button>
              <button
                onClick={() => {
                  setNavDirection('straight');
                  setDistance('2.4 km');
                  setActiveSpeed(78);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
                  navDirection === 'straight'
                    ? 'bg-primary text-on-primary border-primary font-bold shadow-glow-sm'
                    : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:text-primary'
                }`}
              >
                ↑ Highway
              </button>
              <button
                onClick={() => {
                  setNavDirection('turn_right');
                  setDistance('250 m');
                  setActiveSpeed(64);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-mono border transition-all ${
                  navDirection === 'turn_right'
                    ? 'bg-primary text-on-primary border-primary font-bold shadow-glow-sm'
                    : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:text-primary'
                }`}
              >
                → Right Turn
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
