import React from 'react';
import { motion } from 'framer-motion';

export default function DownloadPage() {
  return (
    <div className="py-20 px-margin-mobile md:px-margin-desktop max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <span className="font-label-caps text-xs text-primary font-bold uppercase tracking-widest block mb-2">
          Software Ecosystem
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg font-extrabold text-on-surface uppercase tracking-tight leading-tight">
          GET THE <span className="text-primary text-glow">COMPANION APP</span>
        </h1>
        <p className="font-body-lg text-on-surface-variant mt-4">
          Pair seamlessly with your JustRide hardware display. Plan custom GPX routes, manage offline maps, and push Over-The-Air (OTA) firmware releases.
        </p>
      </motion.div>

      {/* Download Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
        {/* iOS Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container/80 border border-outline-variant/40 rounded-2xl p-8 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">phone_iphone</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold">
                iOS 15.0+
              </span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">Apple iOS App</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Available on the Apple App Store with full Apple CarPlay and Siri Shortcuts integration for one-tap route start.
            </p>
          </div>
          <button
            onClick={() => alert('Redirecting to Apple App Store...')}
            className="w-full bg-primary text-on-primary font-mono font-bold py-3.5 rounded-lg hover:bg-primary-fixed transition-all flex items-center justify-center gap-2 shadow-glow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined">download</span>
            Download on App Store
          </button>
        </motion.div>

        {/* Android Card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container/80 border border-outline-variant/40 rounded-2xl p-8 flex flex-col justify-between shadow-xl"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">android</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold">
                Android 9.0+
              </span>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">Google Android App</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              Available on Google Play Store with background BLE synchronization and battery optimization whitelist.
            </p>
          </div>
          <button
            onClick={() => alert('Redirecting to Google Play Store...')}
            className="w-full bg-primary text-on-primary font-mono font-bold py-3.5 rounded-lg hover:bg-primary-fixed transition-all flex items-center justify-center gap-2 shadow-glow-sm cursor-pointer"
          >
            <span className="material-symbols-outlined">download</span>
            Get it on Google Play
          </button>
        </motion.div>
      </div>

      {/* Firmware OTA Section */}
      <div className="bg-surface-container/60 border border-outline-variant/40 rounded-2xl p-8 max-w-4xl mx-auto text-center">
        <span className="font-mono text-xs text-primary uppercase font-bold tracking-widest block mb-1">
          Hardware Maintenance
        </span>
        <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-2">
          Latest Firmware: v2.5.4 Stable
        </h3>
        <p className="text-xs text-on-surface-variant max-w-md mx-auto mb-4">
          OTA updates download automatically through the mobile companion app via BLE.
        </p>
        <div className="inline-flex items-center gap-4 text-xs font-mono text-on-surface-variant">
          <span>• 20% Faster Roundabout calculation</span>
          <span>• Improved Sunlight Auto-dim curve</span>
        </div>
      </div>
    </div>
  );
}
