import React, { useEffect, useState } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductPage from './pages/ProductPage';
import DownloadPage from './pages/DownloadPage';
import ContactUsPage from './pages/ContactUsPage';
import useScrollReveal from './hooks/useScrollReveal';

export const routes = { home: '/', about: '/about-us', product: '/product', download: '/download', contact: '/contact-us' };

const pathToPage = (path) => {
  const clean = path.replace(/\/$/, '') || '/';
  if (clean === '/about') return 'about';
  if (clean === '/contact') return 'contact';
  return Object.keys(routes).find((page) => routes[page] === clean) || 'home';
};

const titles = {
  home: 'JustRide | Connected Motorcycle Navigation',
  about: 'About JustRide | Built Around the Ride',
  product: 'JustRide Device | Motorcycle Navigation Display',
  download: 'Download the JustRide App',
  contact: 'Contact JustRide',
};

export default function App() {
  const [page, setPage] = useState(() => pathToPage(window.location.pathname));
  useScrollReveal(page);
  useEffect(() => {
    const handlePopState = () => setPage(pathToPage(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  useEffect(() => {
    document.title = titles[page];
    document.querySelector('meta[name="description"]')?.setAttribute('content',
      page === 'product'
        ? 'Explore the JustRide connected motorcycle navigation display, rider-focused interface, hardware and specifications.'
        : 'JustRide brings essential route information from your phone to a dedicated motorcycle navigation display.');
  }, [page]);

  const navigate = (event, destination) => {
    if (event?.defaultPrevented || event?.metaKey || event?.ctrlKey || event?.shiftKey || event?.altKey || event?.button > 0) return;
    event?.preventDefault();
    if (window.location.pathname !== routes[destination]) window.history.pushState({}, '', routes[destination]);
    setPage(destination);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return <div className="site-shell">
    <a className="skip-link" href="#main-content">Skip to content</a>
    <Navbar page={page} navigate={navigate} />
    <main id="main-content" key={page}>
      {page === 'home' && <HomePage navigate={navigate} />}
      {page === 'about' && <AboutUsPage navigate={navigate} />}
      {page === 'product' && <ProductPage navigate={navigate} />}
      {page === 'download' && <DownloadPage navigate={navigate} />}
      {page === 'contact' && <ContactUsPage navigate={navigate} />}
    </main>
    <Footer navigate={navigate} />
  </div>;
}
