import React from 'react';
import Logo from './Logo';
import { navItems } from './Navbar';
import { routes } from '../../App';

export default function Footer({ navigate }) {
  return <footer className="site-footer">
    <div className="container footer-main">
      <div><a className="brand" href="/" onClick={(event) => navigate(event, 'home')} aria-label="JustRide home"><Logo /> <span>Just<span className="brand__accent">Ride</span></span></a><p>Built for clearer connected rides.</p><p className="footer-caption">Your phone handles the route. JustRide keeps the essentials in sight.</p></div>
      <nav aria-label="Footer navigation"><span className="eyebrow">EXPLORE</span><div className="footer-links">{navItems.map(({ id, label }) => <a key={id} href={routes[id]} onClick={(event) => navigate(event, id)}>{label}</a>)}</div></nav>
    </div>
    <div className="container footer-bottom"><span>© {new Date().getFullYear()} JustRide</span><span>Connected motorcycle navigation</span></div>
  </footer>;
}
