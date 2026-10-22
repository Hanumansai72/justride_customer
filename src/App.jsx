import React, { useEffect } from 'react';
import EarlyAccessPage from './pages/EarlyAccessPage';
import useScrollReveal from './hooks/useScrollReveal';

export const routes = {
  home: '/',
  about: '/about-us',
  specifications: '/specifications',
  product: '/product',
  download: '/download',
  contact: '/contact-us',
  earlyAccess: '/early-access',
  faqs: '/faqs',
};


export default function App() {
  useScrollReveal('home');
  useEffect(() => {
    document.title = 'JustRide Aventura | Every journey has a story';
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      'Meet JustRide Aventura, the 1.75-inch motorcycle navigation display. Every journey has a story. Price coming soon. Register your interest.');
    const showHomepage = () => {
      if (window.location.pathname === '/') return;
      const destinations = { '/faqs': '#faqs', '/specifications': '#interface', '/specs': '#interface', '/product': '#product', '/early-access': '#interest' };
      const hash = window.location.hash || destinations[window.location.pathname.replace(/\/$/, '')] || '';
      window.history.replaceState({}, '', `/${hash}`);
      window.dispatchEvent(new Event('hashchange'));
      if (hash && hash !== '#interest') document.getElementById(hash.slice(1))?.scrollIntoView();
    };
    showHomepage();
    window.addEventListener('popstate', showHomepage);
    return () => window.removeEventListener('popstate', showHomepage);
  }, []);
  return <div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><main id="main-content"><EarlyAccessPage /></main></div>;
}
