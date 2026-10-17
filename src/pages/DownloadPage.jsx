import React, { useEffect, useState } from 'react';
import { ArrowDownToLine, Bluetooth, MapPinned, Smartphone } from 'lucide-react';
import DeviceImage from '../components/common/DeviceImage';
import SectionIntro from '../components/common/SectionIntro';

const API_BASE = import.meta.env.DEV ? '/api' : 'https://backend.justride.cc/api';
const formatSize = (bytes) => bytes ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : null;

export default function DownloadPage({ navigate }) {
  const [latestRelease, setLatestRelease] = useState(null);
  const [latestFirmware, setLatestFirmware] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    async function getRelease(path) {
      const response = await fetch(`${API_BASE}${path}`, { signal: controller.signal });
      if (!response.ok) throw new Error('Release request failed');
      const body = await response.json();
      if (!body.success) throw new Error('Release request failed');
      return body.data;
    }
    Promise.allSettled([
      getRelease('/app-releases/latest?platform=android'),
      getRelease('/firmware/latest'),
    ]).then(([apk, firmware]) => {
      if (controller.signal.aborted) return;
      if (apk.status === 'fulfilled') setLatestRelease(apk.value);
      else setError('Could not load the Android release. Please try again later.');
      if (firmware.status === 'fulfilled') setLatestFirmware(firmware.value);
    }).finally(() => { if (!controller.signal.aborted) setLoading(false); });
    return () => controller.abort();
  }, []);

  const apkUrl = latestRelease?.download_url;
  return <>
    <section className="interior-hero download-hero"><div className="container interior-hero__grid"><div><p className="eyebrow eyebrow--line">THE MOBILE COMPANION</p><h1>Take JustRide <em>with you.</em></h1><p className="hero-lede">Choose your destination in the app. Your phone handles the route while the connected device keeps essential instructions in sight.</p><a className="button button--primary" href="#download-options">Get the app <ArrowDownToLine size={17} /></a></div><div className="download-visual"><div className="app-preview"><div className="app-preview__header"><span className="proof-dot" /> JUSTRIDE APP <span>● ● ●</span></div><div className="app-preview__map"><div className="app-preview__route" /><span className="app-preview__pin">●</span></div><div className="app-preview__bottom"><small>NEXT MANEUVER</small><strong>Turn left in 250 m</strong><span>Route information on your phone. Essentials on your display.</span></div></div><DeviceImage view="front" alt="JustRide device that receives navigation from the mobile app" width="1254" height="1254" /></div></div></section>
    <section className="section section--light" id="download-options"><div className="container"><SectionIntro eyebrow="APP DOWNLOAD" title="Your route starts here.">The JustRide mobile app works with the device through Bluetooth Low Energy.</SectionIntro><div className="download-grid"><article className="download-card"><div className="download-card__icon"><Smartphone size={26} /></div><p className="eyebrow">ANDROID</p><h3>Download the JustRide APK</h3><p>Download the latest published Android release.</p><div className="release-info"><span>Version <strong>{latestRelease?.version ? `v${latestRelease.version}` : 'Not available'}</strong></span>{formatSize(latestRelease?.file_size_bytes) && <span>Size <strong>{formatSize(latestRelease.file_size_bytes)}</strong></span>}{loading && <span>Checking latest release…</span>}</div>{error && <p role="alert">{error}</p>}{apkUrl ? <a className="button button--primary" href={apkUrl} target="_blank" rel="noopener noreferrer" download>Download Android APK <ArrowDownToLine size={17} /></a> : !loading && !error && <p>No Android release is published yet.</p>}</article><article className="download-card download-card--quiet"><div className="download-card__icon"><Smartphone size={26} /></div><p className="eyebrow">iOS</p><h3>App Store availability</h3><p>An App Store download link is not available yet.</p><span className="coming-soon">Coming soon</span></article></div></div></section>
    <section className="section"><div className="container"><SectionIntro eyebrow="APP + DEVICE" title="A straightforward connection.">The app prepares the route, then shares essential information with JustRide.</SectionIntro><div className="value-grid"><article className="value-card"><MapPinned size={25} /><h3>Plan your route</h3><p>Choose a destination and follow navigation through the connected system.</p></article><article className="value-card"><Bluetooth size={25} /><h3>Pair your device</h3><p>Bluetooth Low Energy carries riding information to the display.</p></article><article className="value-card"><Smartphone size={25} /><h3>Keep context close</h3><p>Your phone remains the source of navigation and route processing.</p></article></div>{latestFirmware && <p className="firmware-note">Latest firmware listed by the release service: v{latestFirmware.version}{latestFirmware.channel ? ` (${latestFirmware.channel})` : ''}.</p>}</div></section>
    <section className="cta-band"><div className="container cta-band__inner"><div><p className="eyebrow">THE DEVICE</p><h2>Meet the display.</h2><p>Explore the hardware that keeps the essentials in sight.</p></div><a className="button button--primary" href="/product" onClick={(event) => navigate(event, 'product')}>Explore JustRide <span aria-hidden="true">↗</span></a></div></section>
  </>;
}
