import React from 'react';
import { ArrowRight, Battery, Bell, Bluetooth, Compass, Cpu, Eye, Lock, Map, Music, Smartphone, Usb, Wifi } from 'lucide-react';
import DeviceImage from '../components/common/DeviceImage';
import SectionIntro from '../components/common/SectionIntro';
import PageCTA from '../components/common/PageCTA';

const valueCards = [
  { Icon: Map, number: '01', title: '1.75-inch circular display', copy: 'Large, clear display designed for turn-by-turn navigation and essential ride metrics at a glance.' },
  { Icon: Battery, number: '02', title: '10–12 hr battery life', copy: 'Built-in 1000 mAh rechargeable battery engineered to power full-day rides.' },
  { Icon: Compass, number: '03', title: 'Turn-by-turn guidance', copy: 'Clear maneuver guidance with route context synchronized directly from your smartphone.' },
  { Icon: Bell, number: '04', title: 'Calls & notifications', copy: 'View caller details, manage supported call controls and receive smart app alerts safely.' },
  { Icon: Lock, number: '05', title: 'Twist-and-lock mount', copy: 'Secure, quick-release mounting mechanism built for vibration-resistant attachment.' },
  { Icon: Smartphone, number: '06', title: 'Companion app & controls', copy: 'Manage routes, device preferences and music playback directly while you ride.' },
];

const steps = [
  ['01', 'Choose your destination', 'Select a destination in the JustRide mobile app.'],
  ['02', 'Route is prepared', 'The app handles navigation and route information.'],
  ['03', 'Connected over BLE', 'Essential instructions are synchronized with the device.'],
  ['04', 'Keep the essentials visible', 'JustRide presents the maneuver, route and relevant ride information.'],
];

export default function HomePage({ navigate }) {
  return <>
    <section className="hero hero--home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow eyebrow--line">SMART MOTORCYCLE NAVIGATION</p>
          <h1>Navigation that keeps your <em>focus on the ride.</em></h1>
          <p className="hero-lede">JustRide connects your phone and a dedicated motorcycle display, bringing essential navigation information into view.</p>
          <div className="button-row"><a className="button button--primary" href="/product" onClick={(event) => navigate(event, 'product')}>Explore JustRide <ArrowRight size={17} /></a><a className="button button--ghost" href="/early-access" onClick={(event) => navigate(event, 'earlyAccess')}>I'm Interested <span aria-hidden="true">↗</span></a></div>
          <div className="hero-proof"><span><span className="proof-dot" />PHONE-POWERED ROUTES</span><span>DEDICATED RIDER DISPLAY</span></div>
        </div>
        <div className="hero-visual"><div className="hero-halo" /><DeviceImage view="front" alt="JustRide motorcycle navigation device showing a turn, distance and route map" width="1254" height="1254" fetchPriority="high" /><div className="hero-caption"><span>JUSTRIDE / 01</span><span>THE CONNECTED DISPLAY</span></div></div>
      </div>
      <div className="container spec-strip" aria-label="Key product details"><span><Map size={17} /> 1.75-inch circular display</span><span><Battery size={17} /> 10–12 hr battery life</span><span><Bluetooth size={17} /> Bluetooth</span><span><Lock size={17} /> Twist-and-lock mount</span></div>
    </section>

    <section className="section section--light"><div className="container">
      <div className="statement-layout"><div><p className="eyebrow">THE IDEA</p><h2>Your phone handles the route.<br /><span>JustRide keeps the essentials in sight.</span></h2></div><p>Less information. Clearer information. Less distraction. The app does the route work while the device presents the next action in a display designed for the motorcycle.</p></div>
      <div className="value-grid">{valueCards.map(({ Icon, number, title, copy }) => <article className="value-card" key={number}><div className="value-card__top"><Icon size={25} strokeWidth={1.6} /><span>{number}</span></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>

    <section className="section navigation-section"><div className="container editorial-grid"><div className="editorial-image editorial-image--dark"><DeviceImage view="front" alt="JustRide front display showing a large left turn, 250 metre distance and route map" width="1254" height="1254" loading="lazy" /><span className="image-index">01 / DISPLAY HIERARCHY</span></div><div className="editorial-copy"><SectionIntro eyebrow="LIVE NAVIGATION EXPERIENCE" title={<>Everything important.<br />Nothing fighting for attention.</>}>The next move comes first. Route context and ride information stay close without competing for attention.</SectionIntro><ul className="feature-list"><li><strong>Large maneuver</strong><span>See the next turn and distance clearly.</span></li><li><strong>Route context</strong><span>A focused map keeps the path understandable.</span></li><li><strong>Relevant ride data</strong><span>Speed, ETA, limit where available, battery and connection status.</span></li></ul></div></div></section>

    <section className="section how-section"><div className="container"><SectionIntro eyebrow="HOW IT WORKS" title="A connected system, made simple.">From destination to display, the phone and JustRide work together through Bluetooth Low Energy.</SectionIntro><div className="steps-grid">{steps.map(([number, title, copy]) => <article className="step" key={number}><span className="step__number">{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="system-line"><Smartphone size={20} /><span>APP + ROUTE PROCESSING</span><ArrowRight size={16} /><Bluetooth size={20} /><span>BLE</span><ArrowRight size={16} /><Map size={20} /><span>JUSTRIDE DISPLAY</span><ArrowRight size={16} /><Eye size={20} /><span>RIDER</span></div></div></section>

    <section className="section hardware-section"><div className="container editorial-grid"><div className="editorial-copy"><SectionIntro eyebrow="PURPOSE-BUILT HARDWARE" title="Compact by design. Focused in function.">A circular display, physical side power button, USB-C charging and the ESP32-S3 form the connected device.</SectionIntro><div className="hardware-facts"><div><Cpu size={22} /><strong>ESP32-S3</strong><span>16 MB Flash · 8 MB PSRAM</span></div><div><Wifi size={22} /><strong>2.4 GHz Wi-Fi</strong><span>Bluetooth 5 Low Energy (BLE)</span></div><div><Usb size={22} /><strong>USB-C</strong><span>Charging connection</span></div></div><a className="text-link" href="/product" onClick={(event) => navigate(event, 'product')}>View full specifications <ArrowRight size={17} /></a></div><div className="editorial-image editorial-image--light"><DeviceImage view="side" alt="Side of the circular JustRide enclosure" width="1254" height="1254" loading="lazy" /><span className="image-index">02 / HARDWARE</span></div></div></section>

    <section className="section reroute-section"><div className="container reroute-layout"><div><p className="eyebrow">CONNECTED GUIDANCE</p><h2>Miss a turn?<br /><em>Keep riding.</em></h2></div><p>When the navigation system detects a route deviation, updated route information can be synchronized back to the device, keeping the display aligned with the current route.</p></div></section>
    <PageCTA navigate={navigate} />
  </>;
}
