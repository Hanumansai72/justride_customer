import React, { useState } from 'react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import SectionIntro from '../components/common/SectionIntro';

const CONTACT_EMAIL = 'hello@justride.io';

export default function ContactUsPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'General inquiry', message: '' });
  const [prepared, setPrepared] = useState(false);
  const update = (event) => { setForm({ ...form, [event.target.name]: event.target.value }); setPrepared(false); };
  const submit = (event) => {
    event.preventDefault();
    const body = `From: ${form.name} <${form.email}>\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`JustRide: ${form.subject}`)}&body=${encodeURIComponent(body)}`;
    setPrepared(true);
  };
  return <>
    <section className="interior-hero contact-hero"><div className="container"><p className="eyebrow eyebrow--line">CONTACT JUSTRIDE</p><h1>Let's talk <em>about the ride.</em></h1><p className="hero-lede">Questions about the device or the connected experience? Reach the JustRide team through the existing contact channels.</p></div></section>
    <section className="section section--light"><div className="container contact-layout"><div><SectionIntro eyebrow="GET IN TOUCH" title="We're here to help." >Choose a direct address or prepare an email using the form.</SectionIntro><div className="contact-links"><a href="mailto:hello@justride.io"><Mail size={21} /><span><small>GENERAL INQUIRIES</small><strong>hello@justride.io</strong></span><ArrowUpRight size={18} /></a><a href="mailto:business@justride.io"><Mail size={21} /><span><small>BUSINESS & PARTNERSHIPS</small><strong>business@justride.io</strong></span><ArrowUpRight size={18} /></a></div><p className="muted-note">The form opens your email app with the message prepared. It does not submit or store your message on this website.</p></div><form className="contact-form" onSubmit={submit}><p className="eyebrow">SEND A MESSAGE</p><div className="form-row"><div className="field"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" type="text" autoComplete="name" required value={form.name} onChange={update} /></div><div className="field"><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email} onChange={update} /></div></div><div className="field"><label htmlFor="contact-subject">Subject</label><select id="contact-subject" name="subject" value={form.subject} onChange={update}><option>General inquiry</option><option>Product question</option><option>Business & partnerships</option><option>Support</option></select></div><div className="field"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows="6" required value={form.message} onChange={update} /></div><button type="submit" className="button button--primary">Open email app <Send size={17} /></button>{prepared && <p className="form-status" role="status">Your email app should open with this message ready to send.</p>}</form></div></section>
  </>;
}
