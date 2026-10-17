import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { websiteFaqs } from '../../data/websiteFaqs';

export default function WebsiteFaqs({ compact = false }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const categories = ['All', ...new Set(websiteFaqs.map(item => item.category))];
  const items = websiteFaqs.filter(item => (category === 'All' || item.category === category) && `${item.question} ${item.answer}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  const visible = compact ? websiteFaqs.filter(item => ['what-is-justride', 'phone-required', 'internet', 'battery', 'early-interest', 'support'].includes(item.id)) : items;
  return <section className={`section website-faqs ${compact ? 'website-faqs--compact' : ''}`} id="faqs" aria-labelledby="website-faq-title">
    <div className="container">
      <div className="website-faqs__heading"><div><p className="eyebrow">BEFORE YOUR FIRST RIDE</p><h2 id="website-faq-title">A few things,<br /><em>clearly answered.</em></h2></div><p>Get to know the device and the companion app.</p></div>
      {!compact && <>
        <label className="website-faqs__search"><Search size={20} aria-hidden="true" /><span className="sr-only">Search website FAQs</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search product, navigation or app questions" /></label>
        <div className="website-faqs__filters" role="group" aria-label="FAQ categories">{categories.map(name => <button key={name} type="button" aria-pressed={name === category} onClick={() => setCategory(name)}>{name}</button>)}</div>
        <p className="website-faqs__count" role="status">{visible.length} {visible.length === 1 ? 'answer' : 'answers'}</p>
      </>}
      <div className="faq-list">{visible.map(item => <details key={item.id}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      {!visible.length && <p className="muted-note">No matching answers. Try “Bluetooth”, “battery” or “app”, or email info@justride.cc.</p>}
      <div className="website-faqs__footer">{compact ? <a className="text-link" href="/faqs">Explore all FAQs <ArrowRight size={17} /></a> : <p>Still have a product question? <a href="mailto:info@justride.cc">Email info@justride.cc</a>. Already riding? Open the app Help Center for troubleshooting.</p>}</div>
    </div>
  </section>;
}
