import React from 'react';
import { Bluetooth, Eye, Route, Smartphone } from 'lucide-react';
import { deviceImages } from '../assets/device';
import SectionIntro from '../components/common/SectionIntro';
import PageCTA from '../components/common/PageCTA';

export default function AboutUsPage({ navigate }) {
  return <>
    <section className="interior-hero"><div className="container interior-hero__grid"><div><p className="eyebrow eyebrow--line">ABOUT JUSTRIDE</p><h1>Built around <em>the ride.</em></h1><p className="hero-lede">Motorcycle navigation should provide the information a rider needs without demanding the same attention as a smartphone.</p></div><div className="interior-hero__visual"><img src={deviceImages.mounted} alt="JustRide navigation device mounted on a motorcycle" width="1448" height="1086" /></div></div></section>
    <section className="section section--light"><div className="container statement-layout"><div><p className="eyebrow">OUR IDEA</p><h2>Less information.<br /><span>Clearer information.</span></h2></div><p>JustRide is being developed around a simple idea: bring the next move into view, then let the rider focus on the road. The device presents route instructions and relevant ride information in a compact landscape display.</p></div></section>
    <section className="section"><div className="container"><SectionIntro eyebrow="CONNECTED SYSTEM" title="Software and hardware, working together.">The JustRide ecosystem connects mobile software, backend services, embedded firmware and dedicated hardware into one riding experience.</SectionIntro><div className="about-system"><div><Smartphone size={27} /><span>01</span><h3>Mobile app</h3><p>Choose a destination and prepare the route.</p></div><div><Route size={27} /><span>02</span><h3>Route services</h3><p>Support navigation and route information.</p></div><div><Bluetooth size={27} /><span>03</span><h3>BLE connection</h3><p>Synchronize essentials with the device.</p></div><div><Eye size={27} /><span>04</span><h3>Rider display</h3><p>Keep the next action visible at a glance.</p></div></div></div></section>
    <section className="section section--subtle"><div className="container editorial-grid"><div className="editorial-copy"><SectionIntro eyebrow="DESIGN PRINCIPLE" title="The next move comes first.">We focus the display on maneuver, distance and route. Secondary ride information stays available without taking over the screen.</SectionIntro><p className="section-lede">Your phone handles the route. JustRide keeps the essentials in sight.</p></div><div className="editorial-image editorial-image--dark"><img src={deviceImages.front} alt="JustRide display emphasizing the next turn and distance" width="1254" height="1254" loading="lazy" /></div></div></section>
    <PageCTA navigate={navigate} />
  </>;
}
