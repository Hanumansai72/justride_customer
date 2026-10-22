import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const sections = [
  ['Product', 'product'], ['Interface', 'interface'],
  ['FAQs', 'faqs'],
];

function Brand({ href }) {
  return <a className="brand" href={href} aria-label="JustRide home"><Logo /><span>Just<span className="brand__accent">Ride</span></span></a>;
}

export function LandingHeader({ faqPage = false, onRegister }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const sectionHref = id => faqPage ? (id === 'faqs' ? '#faqs' : `/#${id}`) : `#${id}`;
  const interestHref = faqPage ? '/#interest' : '#interest';
  return <header className="site-header early-header">
    <div className="container site-header__inner">
      <Brand href={faqPage ? '/' : '#top'} />
      <nav className="early-nav" aria-label="Primary navigation">
        {sections.map(([name, id]) => <a key={id} href={sectionHref(id)} aria-current={faqPage && id === 'faqs' ? 'page' : undefined}>{name}</a>)}
        <a className="button button--primary" href={interestHref} onClick={onRegister}>Register interest</a>
      </nav>
      <a className="button button--primary early-header__cta" href={interestHref} onClick={onRegister}>Register interest</a>
      <button className="early-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="early-mobile-nav" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>{menuOpen ? <X size={24} /> : <Menu size={24} />}</button>
    </div>
    {menuOpen && <nav id="early-mobile-nav" className="early-mobile-nav" aria-label="Mobile navigation">
      {sections.map(([name, id]) => <a key={id} href={sectionHref(id)} aria-current={faqPage && id === 'faqs' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{name}</a>)}
    </nav>}
  </header>;
}

export function LandingFooter({ faqPage = false, signature = false }) {
  const home = faqPage ? '/' : '';
  return <footer className="early-footer">{signature && <div className="container early-footer__signature" aria-hidden="true">JustRide</div>}<div className="container early-footer__inner">
    <div><Brand href={faqPage ? '/' : '#top'} /><p>Every journey has a story.</p></div>
    <nav aria-label="Footer navigation"><a href={`${home}#product`}>Product</a><a href={`${home}#interface`}>Interface</a><a href={`${home}#faqs`}>FAQs</a><a href="mailto:info@justride.cc">Contact</a></nav>
    <span>© {new Date().getFullYear()} JustRide</span>
  </div></footer>;
}
