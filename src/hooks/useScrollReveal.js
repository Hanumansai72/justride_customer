import { useEffect } from 'react';

const REVEAL_SELECTOR = [
  '.section-intro', '.statement-layout > *', '.editorial-grid > *',
  '.value-card', '.step', '.about-system > div', '.modes-layout > *',
  '.hardware-panel', '.spec-row', '.download-card', '.contact-form',
  '.contact-layout > div', '.connection-card > div', '.gallery-stage',
  '.cta-band__inner > *', '.system-line',
  '.early-feature-strip > span', '.early-heading-row > *',
  '.early-benefits article', '.early-product__grid > *',
  '.early-section-heading', '.early-steps article',
  '.early-essentials .eyebrow', '.early-essentials h2',
  '.early-essentials__grid > div', '.early-final__inner > *',
  '.aventura-how h2', '.aventura-how__copy > p', '.aventura-journey details', '.aventura-details__heading > *',
  '.aventura-preview__images', '.aventura-preview__controls > button', '.aventura-screen', '.aventura-final__inner > *',
  '.display-study__heading > *', '.display-study__caption',
  '.aventura-registration__copy', '.aventura-registration .interest-form',
  '.early-page .website-faqs__heading', '.early-page .website-faqs__device', '.early-page .faq-list details',
].join(', ');

const STAGGERED_GROUPS = new Map([
  ['value-grid', 80], ['steps-grid', 80], ['about-system', 70],
  ['spec-table', 28], ['connection-card', 85],
  ['early-feature-strip', 70], ['early-benefits', 80],
  ['early-steps', 60], ['early-essentials__grid', 70],
  ['aventura-details__grid', 90], ['aventura-specs', 75],
  ['aventura-journey', 75], ['faq-list', 55],
]);

export default function useScrollReveal(page) {
  useEffect(() => {
    const root = document.getElementById('main-content');
    if (!root || !('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.add('is-visible');
        observer.unobserve(target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -32px 0px' });

    root.querySelectorAll(REVEAL_SELECTOR).forEach((element) => {
      if (element.closest('dialog')) return;
      if (element.matches('.section-intro') && element.closest('.editorial-copy, .contact-layout')) return;
      const bounds = element.getBoundingClientRect();
      // Already visible content stays visible on load; it never flashes hidden.
      if (bounds.top < window.innerHeight * 0.95 && bounds.bottom > 0) return;

      if (element.parentElement?.matches('.editorial-grid, .early-product__grid')) {
        element.classList.add(element === element.parentElement.firstElementChild ? 'motion-from-left' : 'motion-from-right');
      }

      const delay = STAGGERED_GROUPS.get([...element.parentElement.classList].find((name) => STAGGERED_GROUPS.has(name)));
      if (delay) {
        const index = [...element.parentElement.children].indexOf(element);
        element.style.setProperty('--reveal-delay', `${Math.min(index * delay, 280)}ms`);
      }
      element.classList.add('motion-reveal');
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, [page]);
}
