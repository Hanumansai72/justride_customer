import React, { useEffect, useState } from 'react';
import Logo from './Logo';
import { routes } from '../../App';

export const navItems = [
  { id: 'home', label: 'Home' }, { id: 'about', label: 'About Us' },
  { id: 'product', label: 'Product' }, { id: 'download', label: 'Download' },
  { id: 'contact', label: 'Contact Us' },
];

export default function Navbar({ page, navigate }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 16);
  useEffect(() => setOpen(false), [page]);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
    <div className="container site-header__inner">
      <a className="brand" href="/" onClick={(event) => navigate(event, 'home')} aria-label="JustRide home"><Logo /> <span>Just<span className="brand__accent">Ride</span></span></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map(({ id, label }) => <a key={id} href={routes[id]} onClick={(event) => navigate(event, id)} aria-current={page === id ? 'page' : undefined}>{label}</a>)}
      </nav>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}><span aria-hidden="true">{open ? '×' : '☰'}</span></button>
    </div>
    <nav id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`} aria-label="Mobile navigation" inert={!open}>
      {navItems.map(({ id, label }) => <a key={id} href={routes[id]} onClick={(event) => { setOpen(false); navigate(event, id); }} aria-current={page === id ? 'page' : undefined}>{label}</a>)}
    </nav>
  </header>;
}
