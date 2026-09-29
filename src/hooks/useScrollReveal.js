import { useEffect } from 'react';

const REVEAL_SELECTOR = [
  '.section-intro', '.statement-layout > *', '.editorial-grid > *',
  '.value-card', '.step', '.about-system > div', '.modes-layout > *',
  '.hardware-panel', '.spec-row', '.download-card', '.contact-form',
  '.contact-layout > div', '.connection-card > div', '.gallery-stage',
  '.cta-band__inner > *', '.system-line',
].join(', ');

const STAGGERED_GROUPS = new Map([
  ['value-grid', 80], ['steps-grid', 80], ['about-system', 70],
  ['spec-table', 28], ['connection-card', 85],
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
      if (element.matches('.section-intro') && element.closest('.editorial-copy, .contact-layout')) return;
      const bounds = element.getBoundingClientRect();
      // Already visible content stays visible on load; it never flashes hidden.
      if (bounds.top < window.innerHeight * 0.95 && bounds.bottom > 0) return;

      if (element.parentElement?.classList.contains('editorial-grid')) {
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
