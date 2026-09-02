import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const API_BASE = import.meta.env.VITE_API_URL || 'https://justfai-backend.vercel.app/api';

export default function DownloadPage() {
  const [latestRelease, setLatestRelease] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const fetchLatestRelease = async () => {
      try {
        const res = await fetch(`${API_BASE}/app-releases/latest?platform=android`);
        const json = await res.json();
        if (isMounted && json.success && json.data) {
          setLatestRelease(json.data);
        }
      } catch (err) {
        console.warn('Failed to fetch latest APK release:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchLatestRelease();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleDownloadApk = () => {
    const url = latestRelease?.download_url || 'https://pub-8ae75bb9134b4bf7ad3bdadf97c3ec21.r2.dev/apk/justride-v1.1.0-b2-arm64-v8a.apk';
    const filename = `JustRide-v${latestRelease?.version || '1.1.0'}.apk`;

    setDownloading(true);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', filename);
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
    }, 2000);
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return '17.3 MB';
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

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

        {/* Android Card (Connected to Database Release) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-container/80 border border-outline-variant/40 rounded-2xl p-8 flex flex-col justify-between shadow-xl relative overflow-hidden"
        >
          <div>
            <div className="flex justify-between items-start mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/15 border border-primary/30 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-3xl">android</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-xs font-bold">
                  Android 9.0+
                </span>
                {latestRelease && (
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/30">
                    v{latestRelease.version}
                  </span>
                )}
              </div>
            </div>
            <h3 className="font-headline-md text-xl font-bold text-on-surface mb-2">Google Android APK</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-3">
              Official companion app APK with Bluetooth Low Energy (BLE) HUD sync, GPS turn-by-turn navigation, and wireless OTA updater.
            </p>

            {/* Live Database Release Details */}
            <div className="p-3.5 mb-6 rounded-xl bg-surface-container-high/60 border border-outline-variant/30 text-xs text-on-surface-variant space-y-1.5 font-mono">
              <div className="flex justify-between">
                <span className="text-neutral-400">Latest Release:</span>
                <span className="text-on-surface font-semibold">
                  v{latestRelease?.version || '1.1.0'} (Build #{latestRelease?.build_number || 2})
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Download Size:</span>
                <span className="text-on-surface font-semibold">
                  {formatFileSize(latestRelease?.file_size_bytes)}
                </span>
              </div>
              {latestRelease?.release_notes && (
                <div className="pt-1.5 border-t border-outline-variant/20 text-[11px] text-primary/90 line-clamp-2">
                  Notes: {latestRelease.release_notes}
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleDownloadApk}
            disabled={downloading}
            className="w-full bg-primary text-on-primary font-mono font-bold py-3.5 rounded-lg hover:bg-primary-fixed active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-glow-sm cursor-pointer disabled:opacity-75"
          >
            <span className="material-symbols-outlined">
              {downloading ? 'hourglass_top' : 'download'}
            </span>
            {downloading ? 'Downloading APK...' : `Download Android APK (${formatFileSize(latestRelease?.file_size_bytes)})`}
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

