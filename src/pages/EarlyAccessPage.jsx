import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, LoaderCircle, X } from 'lucide-react';
import { LandingHeader, LandingFooter } from '../components/common/LandingNavigation';
import WebsiteFaqs from '../components/common/WebsiteFaqs';
import InterfaceShowcase from '../components/common/InterfaceShowcase';
import navImg from '../assets/device-front-nav.png';
import './early-access.css';
import './aventura-motion.css';
import './specifications.css';

const API_BASE = import.meta.env.DEV ? '/api' : 'https://backend.justride.cc/api';

function InterestForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [emailConsent, setEmailConsent] = useState(false);
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
    if (!form.reportValidity() || !emailConsent) return;
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
      setConfirmationMessage(result.message);
      setStatus('success');
    } catch (cause) {
      setError(cause instanceof TypeError ? 'We could not send your details. Please try again.' : cause.message);
      setStatus('idle');
    }
  }

  if (status === 'success') return <div className="interest-success" role="status" tabIndex="-1"><Check size={32} aria-hidden="true" /><h3>You're on the list.</h3><p>{confirmationMessage || 'Thanks for your interest in JustRide Aventura. Your details have been received.'}</p></div>;

  return <form className="interest-form" onSubmit={submit} aria-busy={status === 'sending'}>
    <div className="interest-form__grid">
      <label>Name <span aria-hidden="true">*</span><input name="name" autoComplete="name" minLength="2" maxLength="100" required /></label>
      <label>Email <span aria-hidden="true">*</span><input name="email" type="email" autoComplete="email" maxLength="254" required /></label>
      <label>City <span aria-hidden="true">*</span><input name="city" autoComplete="address-level2" minLength="2" maxLength="100" required /></label>
    </div>
    <label className="interest-note">What would you expect from JustRide? <span className="optional">Optional</span><textarea name="notes" rows="3" maxLength="1000" placeholder="Tell us what matters on your rides." /></label>
    <div className="honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex="-1" autoComplete="off" /></label></div>
    <label className="interest-email-consent">
      <input type="checkbox" name="emailConsent" required checked={emailConsent} onChange={event => setEmailConsent(event.target.checked)} />
      <span>I agree to receive JustRide emails, including my interest confirmation, product updates and availability announcements.</span>
    </label>
    <p className="interest-consent">Free to register. No payment or order.</p>
    {error && <p className="interest-error" role="alert">{error}</p>}
    <button className="button button--primary interest-submit" type="submit" disabled={status === 'sending' || retryAfter > 0}>{retryAfter > 0 ? `Try again in ${retryAfter}s` : status === 'sending' ? 'Sending…' : 'Keep me updated'}{status === 'sending' ? <LoaderCircle className="interest-spinner" size={18} aria-hidden="true" /> : <ArrowUpRight size={18} aria-hidden="true" />}</button>
  </form>;
}

export default function EarlyAccessPage() {
  const dialogRef = useRef(null);
  const [registrationOpen, setRegistrationOpen] = useState(() => window.location.hash === '#interest');
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === '#interest') setRegistrationOpen(true);
    };
    window.addEventListener('hashchange', openFromHash);
    return () => window.removeEventListener('hashchange', openFromHash);
  }, []);
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!registrationOpen) {
      if (dialog.open) dialog.close();
      return;
    }
    dialog.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = previousOverflow; };
  }, [registrationOpen]);
  const openRegistration = event => {
    event?.preventDefault();
    setRegistrationOpen(true);
  };
  return <div className="early-page" id="top">
    <LandingHeader onRegister={openRegistration} />
    <section className="aventura-overview" id="product" aria-labelledby="aventura-title">
      <div className="aventura-intro">
        <h1 id="aventura-title"><span className="aventura-title-line"><span>Aventura</span></span></h1>
        <p className="aventura-tagline">Every journey has a story.</p>
        <p className="aventura-description">JustRide Aventura is a 1.75-inch motorcycle navigation display.</p>
        <div className="aventura-hero-actions"><button className="button" type="button" onClick={openRegistration}>Get launch updates<ArrowUpRight size={18} aria-hidden="true" /></button><a className="aventura-explore" href="#interface">Explore the display<ArrowUpRight size={18} aria-hidden="true" /></a></div>
        <p className="aventura-price">Price coming soon.</p>
      </div>
      <div className="aventura-stage"><div className="aventura-hero-disc"><img src={navImg} alt="JustRide Aventura circular navigation display with green route and turn directions" width="1254" height="1254" fetchPriority="high" sizes="(max-width: 767px) 330px, 492px" /></div></div>
    </section>
    <InterfaceShowcase id="interface" />

      <dialog className="interest-dialog" ref={dialogRef} aria-labelledby="registration-dialog-title" onClose={() => setRegistrationOpen(false)} onClick={event => { if (event.target === event.currentTarget) { const bounds = event.currentTarget.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) setRegistrationOpen(false); } }}>
        <div className="interest-dialog__heading"><h2 id="registration-dialog-title">Join the journey.</h2><button className="interest-dialog__close" type="button" aria-label="Close registration" onClick={() => setRegistrationOpen(false)}><X size={22} aria-hidden="true" /></button></div>
        <p>Get launch updates for JustRide Aventura. Price coming soon.</p>
        <InterestForm />
      </dialog>
    <WebsiteFaqs compact />
    <LandingFooter />
  </div>;
}
