import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ExploreModal({ isOpen, onClose }) {
  const [selectedFinish, setSelectedFinish] = useState('matte-black');
  const [selectedMount, setSelectedMount] = useState('handlebar');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-2xl bg-surface-container border border-outline-variant/60 rounded-3xl p-6 md:p-8 shadow-2xl overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-2xl">close</span>
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold">
                  Batch 04 Pre-Order
                </span>
              </div>
              <h3 className="font-headline-xl text-2xl md:text-3xl font-extrabold text-on-surface">
                Configure Your JustRide
              </h3>
              <p className="text-sm text-on-surface-variant mt-1 mb-6">
                Reserve your production unit. Estimated delivery: 2-3 business weeks.
              </p>

              {/* Hardware Finish Option */}
              <div className="mb-5">
                <label className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-2 block">
                  1. Chassis Anodization Finish
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedFinish('matte-black')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      selectedFinish === 'matte-black'
                        ? 'bg-primary/15 border-primary text-on-surface font-bold shadow-glow-sm'
                        : 'bg-surface-container-high border-outline-variant/30 text-on-surface-variant'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-neutral-900 border border-neutral-700"></div>
                    <div>
                      <div className="text-sm">Stealth Matte Black</div>
                      <div className="text-[11px] text-on-surface-variant">Aerospace Aluminum</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedFinish('raw-silver')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      selectedFinish === 'raw-silver'
                        ? 'bg-primary/15 border-primary text-on-surface font-bold shadow-glow-sm'
                        : 'bg-surface-container-high border-outline-variant/30 text-on-surface-variant'
                    }`}
                  >
                    <div className="w-5 h-5 rounded-full bg-neutral-400 border border-neutral-200"></div>
                    <div>
                      <div className="text-sm">Brushed Titanium Silver</div>
                      <div className="text-[11px] text-on-surface-variant">Precision Machined</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Mounting Clamp Option */}
              <div className="mb-6">
                <label className="text-xs font-mono uppercase text-on-surface-variant font-bold mb-2 block">
                  2. Included Mounting Kit
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedMount('handlebar')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      selectedMount === 'handlebar'
                        ? 'bg-primary/15 border-primary text-on-surface font-bold shadow-glow-sm'
                        : 'bg-surface-container-high border-outline-variant/30 text-on-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-primary">adjust</span>
                    <div>
                      <div className="text-sm">Universal Handlebar (22-32mm)</div>
                      <div className="text-[11px] text-on-surface-variant">Standard Naked / ADV</div>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedMount('mirror')}
                    className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                      selectedMount === 'mirror'
                        ? 'bg-primary/15 border-primary text-on-surface font-bold shadow-glow-sm'
                        : 'bg-surface-container-high border-outline-variant/30 text-on-surface-variant'
                    }`}
                  >
                    <span className="material-symbols-outlined text-primary">trip_origin</span>
                    <div>
                      <div className="text-sm">Mirror Stem Clamp (M10/M8)</div>
                      <div className="text-[11px] text-on-surface-variant">Scooters & Cruisers</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Reservation Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full bg-surface-container-high border border-outline-variant/50 rounded-lg px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address for Order Confirmation"
                  className="w-full bg-surface-container-high border border-outline-variant/50 rounded-lg px-4 py-2.5 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-mono font-bold py-3 rounded-lg hover:bg-primary-fixed transition-all mt-2 shadow-glow-sm cursor-pointer"
                >
                  Reserve Production Slot ($199 USD)
                </button>
              </form>
            </div>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary flex items-center justify-center text-primary mx-auto mb-4">
                <span className="material-symbols-outlined text-3xl">check</span>
              </div>
              <h3 className="font-headline-xl text-2xl font-bold text-on-surface mb-2">
                Reservation Confirmed!
              </h3>
              <p className="text-sm text-on-surface-variant max-w-md mx-auto mb-6">
                Your JustRide {selectedFinish === 'matte-black' ? 'Stealth Matte Black' : 'Titanium Silver'} unit has been queued for Batch 04 production. Check your inbox for order details.
              </p>
              <button
                onClick={onClose}
                className="bg-surface-container-high border border-outline-variant/40 text-on-surface px-6 py-2.5 rounded-lg text-sm font-mono font-bold hover:border-primary"
              >
                Back to Website
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
