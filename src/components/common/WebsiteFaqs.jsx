import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { websiteFaqs } from '../../data/websiteFaqs';
import DeviceImage from './DeviceImage';

export default function WebsiteFaqs({ compact = false, showcase = false }) {
  const [category, setCategory] = useState('All');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const categories = ['All', ...new Set(websiteFaqs.map(item => item.category))];
  const items = websiteFaqs.filter(item => (category === 'All' || item.category === category) && `${item.question} ${item.answer}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  const visible = compact ? (showAll ? websiteFaqs : websiteFaqs.filter(item => ['what-is-justride', 'display-size', 'price', 'phone-required', 'early-interest', 'support'].includes(item.id))) : items;
  return <section className={`section website-faqs ${compact ? 'website-faqs--compact' : ''}`} id="faqs" aria-labelledby="website-faq-title">
    <div className="container">
      <div className="website-faqs__heading"><div><h2 id="website-faq-title">Before you ride.</h2></div><p>Answers about Aventura, the app and getting started.</p></div>
      {!compact && <>
        <label className="website-faqs__search"><Search size={20} aria-hidden="true" /><span className="sr-only">Search website FAQs</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Search product, navigation or app questions" /></label>
        <div className="website-faqs__filters" role="group" aria-label="FAQ categories">{categories.map(name => <button key={name} type="button" aria-pressed={name === category} onClick={() => setCategory(name)}>{name}</button>)}</div>
        <p className="website-faqs__count" role="status">{visible.length} {visible.length === 1 ? 'answer' : 'answers'}</p>
      </>}
      <div className={showcase ? 'website-faqs__layout' : undefined}>
        {showcase && <figure className="website-faqs__device"><DeviceImage view="side" alt="JustRide Aventura device profile" width="1254" height="1254" loading="lazy" /></figure>}
        <div className="faq-list">{visible.map((item) => <details key={item.id} name={compact ? 'quick-faqs' : undefined}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
      </div>
      {!visible.length && <p className="muted-note">No matching answers. Try “Bluetooth”, “display” or “app”, or email info@justride.cc.</p>}
      {compact && <div className="website-faqs__actions"><button className="text-link" type="button" aria-expanded={showAll} onClick={() => setShowAll(value => !value)}>{showAll ? 'Show fewer FAQs' : 'Explore all FAQs'} <ArrowRight size={17} aria-hidden="true" /></button><a className="website-faqs__contact" href="mailto:info@justride.cc">Still have a question? <span>Contact us <ArrowRight size={17} aria-hidden="true" /></span></a></div>}
      {!compact && <div className="website-faqs__footer"><p>Still have a product question? <a href="mailto:info@justride.cc">Email info@justride.cc</a>. Already riding? Open the app Help Center for troubleshooting.</p></div>}
    </div>
  </section>;
}
