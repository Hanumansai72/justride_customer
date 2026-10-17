import React, { useEffect, useState } from 'react';
import { ArrowRight, Battery, Bluetooth, Check, ChevronRight, Clock, Eye, Map, Smartphone } from 'lucide-react';
import Logo from '../components/common/Logo';
import DeviceImage from '../components/common/DeviceImage';
import './early-access.css';

const API_BASE = import.meta.env.DEV ? '/api' : 'https://backend.justride.cc/api';
const benefits = [
  ['01', 'GLANCEABLE', 'See the next instruction without navigating through a phone interface.'],
  ['02', 'CONNECTED', 'Navigation stays in step with the JustRide mobile experience.'],
  ['03', 'RIDER-FOCUSED', 'A dedicated display for what matters while riding.'],
];

function Brand() {
  return <a className="brand" href="#top" aria-label="JustRide, back to top"><Logo /><span>Just<span className="brand__accent">Ride</span></span></a>;
}

function InterestForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [retryAfter, setRetryAfter] = useState(0);
  useEffect(() => {
    if (!retryAfter) return;
    const timer = setTimeout(() => setRetryAfter(value => Math.max(0, value - 1)), 1000);
    return () => clearTimeout(timer);
  }, [retryAfter]);
  async function submit(event) {
    event.preventDefault();
    if (retryAfter || status === 'sending') return;
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const payload = Object.fromEntries(fields);
    payload.emailConsent = form.elements.emailConsent.checked;
    setStatus('sending');
    setError('');
    try {
      const response = await fetch(`${API_BASE}/early-interest`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (response.status === 429 || response.status === 503) {
        const seconds = Number(response.headers.get('Retry-After') || result.retryAfter);
        setRetryAfter(Number.isFinite(seconds) && seconds > 0 ? Math.min(Math.ceil(seconds), 86400) : 60);
      }
      if (!response.ok || !result.success) throw new Error(result.message || 'Please try again.');
      setStatus('success');
    } catch (cause) {
      setError(cause instanceof TypeError ? 'We could not send your details. Please try again.' : cause.message);
      setStatus('idle');
    }
  }

  if (status === 'success') return <div className="interest-success" role="status" tabIndex="-1"><span className="interest-success__icon"><Check size={30} /></span><p className="eyebrow">INTEREST RECEIVED</p><h2>YOU'RE ON THE LIST.</h2><p>Thanks for your interest in JustRide. Your details have been received.</p></div>;

  return <form className="interest-form" onSubmit={submit}>
    <div className="interest-form__grid">
      <label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" minLength="2" maxLength="100" required /></label>
      <label>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" maxLength="254" required /></label>
      <label>City <span aria-hidden="true">*</span><input name="city" autoComplete="address-level2" minLength="2" maxLength="100" required /></label>
    </div>
    <label>Would you consider buying JustRide? <select name="purchaseIntent" defaultValue=""><option value="">Select an option</option><option>Yes</option><option>Maybe</option><option>I want to know the price first</option></select></label>
    <label>Preferred price range <span className="optional">Optional</span><select name="priceRange" defaultValue=""><option value="">Select a price range</option><option value="4999-5999">₹4,999–₹5,999</option><option value="5999-6999">₹5,999–₹6,999</option><option value="6999-7999">₹6,999–₹7,999</option><option value="7999-8999">₹7,999–₹8,999</option></select></label>
    <label>What would you expect from JustRide? <span className="optional">Optional</span><textarea name="notes" rows="3" maxLength="1000" /></label>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex="-1" autoComplete="off" /></label></div>
    <label className="interest-email-consent">
      <input type="checkbox" name="emailConsent" />
      <span>I agree to receive future JustRide emails about product updates, preorder availability and early-access opportunities.</span>
    </label>
    <p className="interest-consent">Optional. You can join the interest list without subscribing to future emails. We’ll still email a confirmation of your submission.</p>
    {error && <p className="interest-error" role="alert">{error}</p>}
    <button className="button button--primary interest-submit" type="submit" disabled={status === 'sending' || retryAfter > 0}>{retryAfter > 0 ? `TRY AGAIN IN ${retryAfter}s` : status === 'sending' ? 'SENDING…' : 'JOIN PREORDER LIST'}<ArrowRight size={18} /></button>
  </form>;
}

export default function EarlyAccessPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [['Product', '#product'], ['How It Works', '#how-it-works'], ['Specifications', '#specifications']];
  return <div className="early-page" id="top">
    <header className="site-header early-header"><div className="container site-header__inner"><Brand /><nav className="early-nav" aria-label="Primary navigation">{nav.map(([name, href]) => <a key={href} href={href}>{name}</a>)}<a className="button button--primary" href="#interest">Preorder interest</a></nav><a className="button button--primary early-header__cta" href="#interest">Preorder interest</a><button className="early-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="early-mobile-nav" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? '×' : '☰'}</button></div>{menuOpen && <nav id="early-mobile-nav" className="early-mobile-nav" aria-label="Mobile navigation">{nav.map(([name, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}</nav>}</header>

    <section className="early-hero">
      <div className="container early-hero__grid">
        <div className="early-hero__copy">
          <p className="eyebrow eyebrow--line">CIRCULAR MOTORCYCLE NAVIGATION</p>
          <h1>THE NEXT TURN.<br /><em>AT A GLANCE.</em></h1>
          <p className="hero-lede">Turn-by-turn navigation on a compact 1.43-inch circular display. Built to keep the next direction in view.</p>
          <p className="early-hero__battery">2500 mAh battery · 10–12-hour backup</p>
          <a className="text-link" href="#product">Explore the device <ArrowRight size={17} /></a>
        </div>
        <aside className="early-hero__interest" id="interest" aria-labelledby="preorder-title">
          <p className="eyebrow">PREORDER INTEREST</p>
          <h2 id="preorder-title">BE FIRST IN LINE.</h2>
          <p>Join the list for JustRide preorder and availability updates.</p>
          <InterestForm />
        </aside>
        <div className="early-hero__visual">
          <DeviceImage view="front" alt="Circular JustRide display showing a left turn in 300 metres" width="1254" height="1254" fetchPriority="high" />
          <span>JUSTRIDE / THE CIRCULAR RIDER DISPLAY</span>
        </div>
      </div>
      <div className="container early-feature-strip" aria-label="Device specifications">
        <span><Eye size={17} /> 1.43-inch circular display</span>
        <span><Battery size={17} /> 2500 mAh battery</span>
        <span><Clock size={17} /> 10–12-hour backup</span>
        <span><Map size={17} /> Turn-by-turn navigation</span>
      </div>
    </section>

    <section className="section early-why" id="product"><div className="container"><div className="early-heading-row"><div><p className="eyebrow">WHY JUSTRIDE</p><h2>EVERYTHING YOU NEED.<br /><span>NOTHING YOU DON'T.</span></h2></div><p>Your phone handles the route. JustRide keeps the essentials visible.</p></div><div className="early-benefits">{benefits.map(([number, title, copy]) => <article key={number}><span>{number} /</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section early-product" id="specifications"><div className="container early-product__grid"><div className="early-product__visual"><DeviceImage view="side" alt="Side profile of the circular JustRide device and its power button" width="1254" height="1254" loading="lazy" /><span>01 / THE CIRCULAR DEVICE</span></div><div className="early-product__copy"><p className="eyebrow">THE PRODUCT EXPERIENCE</p><h2>SMALL DISPLAY.<br /><em>READY FOR THE RIDE.</em></h2><p className="section-lede">A circular display for the next turn, with a 2500 mAh battery and 10–12 hours of backup.</p><div className="early-product__facts"><div><span>01</span><strong>1.43-INCH DISPLAY</strong><small>Circular navigation display.</small></div><div><span>02</span><strong>2500 mAh BATTERY</strong><small>10–12-hour battery backup.</small></div><div><span>03</span><strong>TURN-BY-TURN NAVIGATION</strong><small>The next maneuver and distance at a glance.</small></div></div></div></div></section>

    <section className="section early-how" id="how-it-works"><div className="container"><div className="early-section-heading"><p className="eyebrow">HOW IT WORKS</p><h2>THREE STEPS.<br />ONE CLEARER RIDE.</h2><p className="section-lede">The app plans the route. The display brings the essentials into view.</p></div><div className="early-steps"><article><span>STEP 01</span><Smartphone size={27} /><h3>SET YOUR DESTINATION</h3><p>Choose where you're going in the JustRide app.</p></article><ChevronRight className="early-step-arrow" size={23} /><article><span>STEP 02</span><Bluetooth size={27} /><h3>CONNECT & RIDE</h3><p>Navigation information is synchronized with the JustRide device.</p></article><ChevronRight className="early-step-arrow" size={23} /><article><span>STEP 03</span><Eye size={27} /><h3>FOLLOW THE ESSENTIALS</h3><p>See the route and next maneuver directly on the display.</p></article></div></div></section>


    <section className="section early-essentials"><div className="container"><p className="eyebrow">BUILT AROUND RIDING</p><h2>LESS CLUTTER.<br /><em>MORE RIDE.</em></h2><div className="early-essentials__grid"><div><strong>CLEAR DIRECTIONS</strong><p>Large maneuver information for quick understanding.</p></div><div><strong>ROUTE VIEW</strong><p>See the route without a full phone interface.</p></div><div><strong>CONNECTED</strong><p>Works together with the JustRide mobile experience.</p></div><div><strong>COMPACT DISPLAY</strong><p>A dedicated view designed for the motorcycle.</p></div></div></div></section>


    <section className="early-final"><div className="container early-final__inner"><div><p className="eyebrow">THE ROAD AHEAD</p><h2>LOOKS CLEARER.</h2><p>JustRide is being built for riders who want navigation to stay useful without taking over the ride.</p></div><a className="button button--primary" href="#interest">JOIN PREORDER LIST <ArrowRight size={18} /></a></div></section>
    <footer className="early-footer"><div className="container early-footer__inner"><div><Brand /><p>Built around the ride.</p></div><nav aria-label="Footer navigation"><a href="#product">Product</a><a href="#how-it-works">How It Works</a><a href="mailto:info@justride.cc">Contact</a></nav><span>© {new Date().getFullYear()} JustRide</span></div></footer>
  </div>;
}
