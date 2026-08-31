import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveSimulator() {
  const [routeType, setRouteType] = useState('city');
  const [hudTheme, setHudTheme] = useState('neon-green');

  const routes = {
    city: {
      name: 'Urban Commute (Hitec City)',
      turn: 'turn_left',
      turnLabel: 'Turn Left into Outer Ring Rd',
      distance: '180 m',
      speed: 48,
      eta: '18 min',
      battery: 89,
      icon: 'location_city',
    },
    highway: {
      name: 'Coastal Express Highway',
      turn: 'straight',
      turnLabel: 'Continue straight for 14.2 km',
      distance: '14.2 km',
      speed: 104,
      eta: '1 hr 12m',
      battery: 82,
      icon: 'speed',
    },
    mountain: {
      name: 'Western Ghats Hairpin Pass',
      turn: 'roundabout_right',
      turnLabel: 'Take 2nd Exit at Ghat Hairpin',
      distance: '350 m',
      speed: 38,
      eta: '45 min',
      battery: 76,
      icon: 'landscape',
    },
  };

  const active = routes[routeType];

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-20 max-w-7xl mx-auto">
      <div className="bg-surface-container/60 border border-outline-variant/40 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl">
        <div className="text-center mb-10">
          <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest block mb-2">
            Interactive Cockpit Demo
          </span>
          <h2 className="font-headline-xl text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight">
            Test Drive the JustRide Interface
          </h2>
          <p className="text-on-surface-variant text-sm max-w-xl mx-auto mt-2">
            Select a route profile below to see how JustRide adapts its turn arrows, speed telemetry, and glanceable HUD in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls Panel */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div>
              <label className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-2.5 block">
                1. Select Route Profile
              </label>
              <div className="flex flex-col gap-2">
                {Object.keys(routes).map((key) => {
                  const r = routes[key];
                  const isSelected = routeType === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setRouteType(key)}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-primary/15 border-primary text-on-surface font-bold shadow-glow-sm'
                          : 'bg-surface-container-high border-outline-variant/30 text-on-surface-variant hover:border-primary/40'
                      }`}
                    >
                      <span className="material-symbols-outlined text-primary text-xl">
                        {r.icon}
                      </span>
                      <div className="flex-1">
                        <div className="text-sm font-semibold">{r.name}</div>
                        <div className="text-xs text-on-surface-variant/80 font-mono">
                          {r.distance} • {r.eta}
                        </div>
                      </div>
                      {isSelected && (
                        <span className="material-symbols-outlined text-primary text-lg">
                          check
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-2.5 block">
                2. HUD Theme Lighting
              </label>
              <div className="flex gap-3">
                <button
                  onClick={() => setHudTheme('neon-green')}
                  className={`flex-1 py-2 px-3 rounded-lg border text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                    hudTheme === 'neon-green'
                      ? 'bg-primary/20 border-primary text-primary'
                      : 'bg-surface-container border-outline-variant/30 text-on-surface-variant'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                  Night Vision (Neon)
                </button>
                <button
                  onClick={() => setHudTheme('high-contrast')}
                  className={`flex-1 py-2 px-3 rounded-lg border text-xs font-mono font-bold flex items-center justify-center gap-2 ${
                    hudTheme === 'high-contrast'
                      ? 'bg-white/20 border-white text-white'
                      : 'bg-surface-container border-outline-variant/30 text-on-surface-variant'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-white"></span>
                  Direct Sunlight
                </button>
              </div>
            </div>
          </div>

          {/* Simulated Physical Device */}
          <div className="lg:col-span-7 flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full bg-surface-container-lowest border-8 border-surface-container-high shadow-[0_0_70px_rgba(0,0,0,0.9),inset_0_0_35px_rgba(75,226,119,0.2)] flex flex-col items-center justify-center p-6 transition-all duration-500">
              {/* Outer dial ring */}
              <div className="absolute inset-2 rounded-full border-2 border-dashed border-outline-variant/40"></div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={routeType}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center text-center relative z-10 w-full"
                >
                  {/* Turn Icon */}
                  <span
                    className={`material-symbols-outlined text-6xl md:text-7xl font-extrabold ${
                      hudTheme === 'neon-green' ? 'text-primary text-glow' : 'text-white'
                    }`}
                  >
                    {active.turn}
                  </span>

                  {/* Distance */}
                  <div
                    className={`font-mono text-3xl md:text-4xl font-extrabold tracking-wider mt-2 ${
                      hudTheme === 'neon-green' ? 'text-primary' : 'text-white'
                    }`}
                  >
                    {active.distance}
                  </div>

                  {/* Instruction text */}
                  <div className="text-xs text-on-surface font-semibold max-w-[200px] mt-1 line-clamp-1">
                    {active.turnLabel}
                  </div>

                  {/* Bottom Stats Ring */}
                  <div className="flex justify-between w-full max-w-[220px] mt-5 pt-3 border-t border-outline-variant/30 text-xs font-mono">
                    <div className="text-center">
                      <span className="text-[10px] text-on-surface-variant block">SPEED</span>
                      <span className="font-bold text-on-surface">{active.speed} <span className="text-[10px]">km/h</span></span>
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] text-on-surface-variant block">BATTERY</span>
                      <span className="font-bold text-primary">{active.battery}%</span>
                    </div>
                    <div className="text-center">
                      <span className="text-[10px] text-on-surface-variant block">REMAINING</span>
                      <span className="font-bold text-on-surface">{active.eta}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
