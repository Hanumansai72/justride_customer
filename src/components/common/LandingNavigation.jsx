import React, { useState } from 'react';
import Logo from './Logo';

const sections = [
  ['Product', 'product'], ['How It Works', 'how-it-works'],
  ['Specifications', 'specifications'], ['FAQs', 'faqs'],
];

function Brand({ href }) {
  return <a className="brand" href={href} aria-label="JustRide home"><Logo /><span>Just<span className="brand__accent">Ride</span></span></a>;
}

export function LandingHeader({ faqPage = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionHref = id => faqPage ? (id === 'faqs' ? '#faqs' : `/#${id}`) : `#${id}`;
  const interestHref = faqPage ? '/#interest' : '#interest';
  return <header className="site-header early-header">
    <div className="container site-header__inner">
      <Brand href={faqPage ? '/' : '#top'} />
      <nav className="early-nav" aria-label="Primary navigation">
        {sections.map(([name, id]) => <a key={id} href={sectionHref(id)} aria-current={faqPage && id === 'faqs' ? 'page' : undefined}>{name}</a>)}
        <a className="button button--primary" href={interestHref}>Register interest</a>
      </nav>
      <a className="button button--primary early-header__cta" href={interestHref}>Register interest</a>
      <button className="early-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="early-mobile-nav" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? '×' : '☰'}</button>
    </div>
    {menuOpen && <nav id="early-mobile-nav" className="early-mobile-nav" aria-label="Mobile navigation">
      {sections.map(([name, id]) => <a key={id} href={sectionHref(id)} aria-current={faqPage && id === 'faqs' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{name}</a>)}
    </nav>}
  </header>;
}

export function LandingFooter({ faqPage = false }) {
  const home = faqPage ? '/' : '';
  return <footer className="early-footer"><div className="container early-footer__inner">
    <div><Brand href={faqPage ? '/' : '#top'} /><p>Built around the ride.</p></div>
    <nav aria-label="Footer navigation"><a href={`${home}#product`}>Product</a><a href={`${home}#how-it-works`}>How It Works</a><a href="/faqs" aria-current={faqPage ? 'page' : undefined}>FAQs</a><a href="mailto:info@justride.cc">Contact</a></nav>
    <span>© {new Date().getFullYear()} JustRide</span>
  </div></footer>;
}
