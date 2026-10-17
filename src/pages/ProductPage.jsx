import WebsiteFaqs from '../components/common/WebsiteFaqs';
import React, { useState } from 'react';
import { ArrowRight, Battery, Power } from 'lucide-react';
import DeviceImage from '../components/common/DeviceImage';
import { galleryViews } from '../assets/device';
import SectionIntro from '../components/common/SectionIntro';
import PageCTA from '../components/common/PageCTA';

const specs = [
  ['Product', 'JustRide'],
  ['Display', '1.43-inch circular display'],
  ['Battery capacity', '2500 mAh'],
  ['Battery backup', '10–12 hours'],
  ['Navigation', 'Turn-by-turn navigation'],
  ['Navigation source', 'Connected JustRide mobile application'],
];

export default function ProductPage({ navigate }) {
  const [view, setView] = useState(galleryViews[0]);
  return <>
    <section className="product-hero"><div className="container product-hero__grid"><div><p className="eyebrow eyebrow--line">THE JUSTRIDE DEVICE</p><h1>Meet <em>JustRide.</em></h1><p className="hero-lede">A compact connected navigation display designed around the motorcycle riding experience.</p><p className="product-hero__micro"><span className="proof-dot" /> Connected through Bluetooth Low Energy.</p><a className="button button--primary" href="#gallery">Explore the device <ArrowRight size={17} /></a></div><div className="product-hero__image"><DeviceImage view="front" alt="Perspective render of the JustRide navigation device" width="1254" height="1254" fetchPriority="high" /></div></div></section>

    <section className="section section--light" id="gallery"><div className="container"><SectionIntro eyebrow="PRODUCT GALLERY" title="A closer look at JustRide.">Explore the circular display and side profile.</SectionIntro><div className="gallery-layout"><div className="gallery-stage">{galleryViews.map((item) => <div key={item.id} className={`gallery-stage__layer ${view.id === item.id ? 'is-visible' : ''}`} aria-hidden={view.id !== item.id}><DeviceImage view={item.id} alt={item.alt} width="1254" height="1254" loading="lazy" /></div>)}<span>{view.label.toUpperCase()} VIEW</span></div><div className="gallery-tabs" role="group" aria-label="Choose device view">{galleryViews.map((item) => <button type="button" key={item.id} className={view.id === item.id ? 'is-active' : ''} aria-pressed={view.id === item.id} onClick={() => setView(item)}><DeviceImage view={item.id} alt="" width="1254" height="1254" loading="lazy" /><span>{item.label}</span></button>)}</div></div></div></section>

    <section className="section"><div className="container editorial-grid"><div className="editorial-image editorial-image--dark"><DeviceImage view="front" alt="Front of the JustRide 1.43-inch circular display with navigation information" width="1254" height="1254" loading="lazy" /><span className="image-index">01 / DISPLAY</span></div><div className="editorial-copy"><SectionIntro eyebrow="THE DISPLAY" title="1.43-inch circular display">Turn-by-turn directions on a compact circular display.</SectionIntro><div className="tag-list"><span>Next maneuver</span><span>Distance</span><span>Route map</span><span>Speed</span><span>ETA</span><span>Battery</span><span>Connection</span></div><p className="muted-note">Speed limit information appears where available; current speed appears where implemented.</p></div></div></section>


    <section className="section"><div className="container editorial-grid"><div className="editorial-image editorial-image--dark"><DeviceImage view="side" alt="JustRide side profile showing its circular enclosure and power button" width="1254" height="1254" loading="lazy" /><span className="image-index">02 / ENCLOSURE</span></div><div className="editorial-copy"><SectionIntro eyebrow="PHYSICAL DETAILS" title="The controls you need.">A physical side power button sits within the circular enclosure.</SectionIntro><div className="detail-stack"><div><Power size={22} /><div><strong>Side power control</strong><p>Black button with an emerald power icon.</p></div></div><div><Battery size={22} /><div><strong>2500 mAh battery</strong><p>10–12 hours of battery backup.</p></div></div></div></div></div></section>

    <section className="section section--light"><div className="container editorial-grid"><div className="editorial-copy"><SectionIntro eyebrow="NAVIGATION EXPERIENCE" title="Built around the next move.">The phone handles navigation and route processing. JustRide shows the current maneuver, distance and route in a dedicated rider display.</SectionIntro><ul className="feature-list"><li><strong>At a glance</strong><span>Large turn and distance information.</span></li><li><strong>Route context</strong><span>A focused map and relevant trip information.</span></li><li><strong>When routes change</strong><span>Updated information can be sent to the device through the connected system.</span></li></ul></div><div className="editorial-image editorial-image--light"><DeviceImage view="front" alt="Circular JustRide display with turn-by-turn navigation visible" width="1448" height="1086" loading="lazy" /><span className="image-index">03 / TURN-BY-TURN</span></div></div></section>

    <section className="section specs-section"><div className="container specs-layout"><div><SectionIntro eyebrow="TECHNICAL SPECIFICATIONS" title="The details, clearly stated.">Confirmed hardware information for the JustRide device.</SectionIntro></div><div className="spec-table" role="table" aria-label="JustRide specifications">{specs.map(([label, value]) => <div className="spec-row" role="row" key={label}><span role="cell">{label}</span><strong role="cell">{value}</strong></div>)}</div></div></section>

    <section className="section section--subtle"><div className="container app-integration"><div><SectionIntro eyebrow="APP + DEVICE" title="One connected riding experience.">The mobile app prepares and processes the route. Backend services and firmware support the system. Bluetooth Low Energy brings the essential instructions to the hardware display.</SectionIntro><a className="text-link" href="/download" onClick={(event) => navigate(event, 'download')}>Explore the app <ArrowRight size={17} /></a></div><div className="connection-card"><div><span>01</span><strong>JustRide app</strong><small>Destination + route</small></div><div><span>02</span><strong>Bluetooth LE</strong><small>Essential information</small></div><div><span>03</span><strong>JustRide device</strong><small>Rider display</small></div></div></div></section>

    <WebsiteFaqs compact />
    <PageCTA navigate={navigate} />
  </>;
}
