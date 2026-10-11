import React, { useState } from 'react';
import { ArrowRight, Bluetooth, Check, ChevronRight, Eye, Map, Smartphone, Usb } from 'lucide-react';
import Logo from '../components/common/Logo';
import perspective from '../assets/onboarding-perspective.webp';
import front from '../assets/onboarding-front.webp';
import day from '../assets/onboarding-day.webp';
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
  async function submit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    const fields = new FormData(form);
    const payload = Object.fromEntries(fields);
    setStatus('sending');
    setError('');
    try {
      const response = await fetch(`${API_BASE}/early-interest`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || 'Please try again.');
      setStatus('success');
    } catch (cause) {
      setError(cause instanceof TypeError ? 'We could not send your details. Please try again.' : cause.message);
      setStatus('idle');
    }
  }

  if (status === 'success') return <div className="interest-success" role="status" tabIndex="-1"><span className="interest-success__icon"><Check size={30} /></span><p className="eyebrow">INTEREST RECEIVED</p><h2>YOU'RE ON THE LIST.</h2><p>Thanks for your interest in JustRide. We'll keep you updated as the product develops.</p></div>;

  return <form className="interest-form" onSubmit={submit}>
    <div className="interest-form__grid">
      <label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" minLength="2" maxLength="100" required /></label>
      <label>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" maxLength="254" required /></label>
      <label>City <span aria-hidden="true">*</span><input name="city" autoComplete="address-level2" minLength="2" maxLength="100" required /></label>
    </div>
    <label>Would you consider buying JustRide? <select name="purchaseIntent" defaultValue=""><option value="">Select an option</option><option>Yes</option><option>Maybe</option><option>I want to know the price first</option></select></label>
    <label>What would you expect from JustRide? <span className="optional">Optional</span><textarea name="notes" rows="3" maxLength="1000" /></label>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex="-1" autoComplete="off" /></label></div>
    <p className="interest-consent">By submitting, you agree to be contacted about JustRide product updates and early-access opportunities.</p>
    {error && <p className="interest-error" role="alert">{error}</p>}
    <button className="button button--primary interest-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'SENDING…' : "I'M INTERESTED"}<ArrowRight size={18} /></button>
  </form>;
}

export default function EarlyAccessPage() {
  const [mode, setMode] = useState('night');
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [['Product', '#product'], ['How It Works', '#how-it-works'], ['Experience', '#experience']];
  return <div className="early-page" id="top">
    <header className="site-header early-header"><div className="container site-header__inner"><Brand /><nav className="early-nav" aria-label="Primary navigation">{nav.map(([name, href]) => <a key={href} href={href}>{name}</a>)}<a className="button button--primary" href="#interest">I'm Interested</a></nav><a className="button button--primary early-header__cta" href="#interest">I'm Interested</a><button className="early-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="early-mobile-nav" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? '×' : '☰'}</button></div>{menuOpen && <nav id="early-mobile-nav" className="early-mobile-nav" aria-label="Mobile navigation">{nav.map(([name, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{name}</a>)}</nav>}</header>

    <section className="early-hero"><div className="container early-hero__grid"><div className="early-hero__copy"><p className="eyebrow eyebrow--line">CONNECTED MOTORCYCLE NAVIGATION</p><h1>KEEP YOUR EYES<br /><em>ON THE RIDE.</em></h1><p className="hero-lede">JustRide brings essential navigation from your phone to a dedicated motorcycle display — the next move without the unnecessary clutter.</p><div className="button-row"><a className="button button--primary" href="#interest">I'M INTERESTED <ArrowRight size={17} /></a><a className="button button--outline" href="#how-it-works">SEE HOW IT WORKS</a></div><p className="early-hero__micro">LESS INFORMATION. CLEARER NAVIGATION. MORE RIDE.</p></div><div className="early-hero__visual"><div className="hero-halo" /><img src={perspective} alt="Perspective view of the JustRide motorcycle display showing a left turn, route map and distance" width="1254" height="1254" fetchPriority="high" /><span>THE CONNECTED RIDER DISPLAY / 01</span></div></div><div className="container early-feature-strip"><span><Map size={17} /> Turn-by-turn navigation</span><span><Eye size={17} /> Day & night UI</span><span><Bluetooth size={17} /> Bluetooth connected</span><span><Usb size={17} /> USB-C charging</span></div></section>

    <section className="section early-why" id="product"><div className="container"><div className="early-heading-row"><div><p className="eyebrow">WHY JUSTRIDE</p><h2>EVERYTHING YOU NEED.<br /><span>NOTHING YOU DON'T.</span></h2></div><p>Your phone handles the route. JustRide keeps the essentials visible.</p></div><div className="early-benefits">{benefits.map(([number, title, copy]) => <article key={number}><span>{number} /</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

    <section className="section early-product"><div className="container early-product__grid"><div className="early-product__visual"><img src={front} alt="Front view of JustRide showing a large turn arrow, distance, route map and ride status" width="1254" height="1254" loading="lazy" /><span>01 / THE NEXT MOVE</span></div><div className="early-product__copy"><p className="eyebrow">THE PRODUCT EXPERIENCE</p><h2>THE RIDE.<br /><em>WITHOUT THE SCREEN CLUTTER.</em></h2><p className="section-lede">JustRide prioritizes the next decision rather than recreating your entire phone screen.</p><div className="early-product__facts"><div><span>01</span><strong>NEXT MOVE</strong><small>Turn and distance at a glance.</small></div><div><span>02</span><strong>ROUTE AT A GLANCE</strong><small>A focused view of the road ahead.</small></div><div><span>03</span><strong>RIDE STATUS</strong><small>Relevant information stays in view.</small></div></div></div></div></section>

    <section className="section early-how" id="how-it-works"><div className="container"><div className="early-section-heading"><p className="eyebrow">HOW IT WORKS</p><h2>THREE STEPS.<br />ONE CLEARER RIDE.</h2><p className="section-lede">The app plans the route. The display brings the essentials into view.</p></div><div className="early-steps"><article><span>STEP 01</span><Smartphone size={27} /><h3>SET YOUR DESTINATION</h3><p>Choose where you're going in the JustRide app.</p></article><ChevronRight className="early-step-arrow" size={23} /><article><span>STEP 02</span><Bluetooth size={27} /><h3>CONNECT & RIDE</h3><p>Navigation information is synchronized with the JustRide device.</p></article><ChevronRight className="early-step-arrow" size={23} /><article><span>STEP 03</span><Eye size={27} /><h3>FOLLOW THE ESSENTIALS</h3><p>See the route and next maneuver directly on the display.</p></article></div></div></section>

    <section className={`section early-modes early-modes--${mode}`} id="experience"><div className="container early-modes__grid"><div><p className="eyebrow">DAY / NIGHT EXPERIENCE</p><h2>CLEAR FROM<br />DAY TO NIGHT.</h2><p className="section-lede">Choose an interface designed to remain easy to understand as riding conditions change.</p><div className="segmented" role="group" aria-label="Display mode"><button type="button" className={mode === 'day' ? 'is-selected' : ''} aria-pressed={mode === 'day'} onClick={() => setMode('day')}>DAY</button><button type="button" className={mode === 'night' ? 'is-selected' : ''} aria-pressed={mode === 'night'} onClick={() => setMode('night')}>NIGHT</button></div><p className="mode-description" aria-live="polite">{mode === 'day' ? 'Bright, high-contrast navigation UI.' : 'Dark navigation UI for lower-light riding.'}</p></div><div className="early-modes__visual"><img src={mode === 'day' ? day : front} alt={`JustRide showing its ${mode} navigation interface`} width="1254" height="1254" loading="lazy" /></div></div></section>

    <section className="section early-essentials"><div className="container"><p className="eyebrow">BUILT AROUND RIDING</p><h2>LESS CLUTTER.<br /><em>MORE RIDE.</em></h2><div className="early-essentials__grid"><div><strong>CLEAR DIRECTIONS</strong><p>Large maneuver information for quick understanding.</p></div><div><strong>ROUTE VIEW</strong><p>See the route without a full phone interface.</p></div><div><strong>CONNECTED</strong><p>Works together with the JustRide mobile experience.</p></div><div><strong>COMPACT DISPLAY</strong><p>A dedicated view designed for the motorcycle.</p></div></div></div></section>

    <section className="section early-interest" id="interest"><div className="container early-interest__grid"><div className="early-interest__intro"><p className="eyebrow">EARLY INTEREST</p><h2>INTERESTED IN<br /><em>JUSTRIDE?</em></h2><p className="section-lede">Join the early interest list to hear about product availability, testing opportunities and launch updates.</p><div className="early-interest__aside"><span className="proof-dot" /> BUILT AROUND THE RIDE.</div></div><InterestForm /></div></section>

    <section className="early-final"><div className="container early-final__inner"><div><p className="eyebrow">THE ROAD AHEAD</p><h2>LOOKS CLEARER.</h2><p>JustRide is being built for riders who want navigation to stay useful without taking over the ride.</p></div><a className="button button--primary" href="#interest">I'M INTERESTED <ArrowRight size={18} /></a></div></section>
    <footer className="early-footer"><div className="container early-footer__inner"><div><Brand /><p>Built around the ride.</p></div><nav aria-label="Footer navigation"><a href="#product">Product</a><a href="#how-it-works">How It Works</a><a href="mailto:hello@justride.io">Contact</a></nav><span>© {new Date().getFullYear()} JustRide</span></div></footer>
  </div>;
}
