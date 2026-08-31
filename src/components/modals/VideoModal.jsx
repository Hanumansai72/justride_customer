import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="relative w-full max-w-3xl bg-surface-container border border-outline-variant/60 rounded-3xl p-4 md:p-6 shadow-2xl overflow-hidden"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-headline-md text-lg md:text-xl font-bold text-on-surface flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">play_circle</span>
              JustRide in Action • Highway & Mountain Test
            </h3>
            <button
              onClick={onClose}
              className="text-on-surface-variant hover:text-primary p-1.5 rounded-full hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>

          {/* Interactive Video Showcase */}
          <div className="aspect-video w-full rounded-2xl bg-surface-dim border border-outline-variant/40 flex flex-col items-center justify-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-surface-container-lowest to-surface-container-high/80 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary mb-4 shadow-glow cursor-pointer hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-4xl">play_arrow</span>
              </div>
              <h4 className="font-mono text-lg font-bold text-on-surface mb-1">
                Field Ride Demonstration: 0.2s Turn Glance
              </h4>
              <p className="text-xs text-on-surface-variant max-w-md">
                Experience high-contrast OLED visibility under direct 12 PM sun and rainy night conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
