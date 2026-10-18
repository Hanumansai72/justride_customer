import assert from 'node:assert/strict';
import { test } from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { createServer } from 'vite';

test('All FAQs keeps landing navigation and renders the complete FAQ page', async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  const originalWindow = globalThis.window;
  try {
    const { default: App } = await server.ssrLoadModule('/src/App.jsx');
    const { websiteFaqs } = await server.ssrLoadModule('/src/data/websiteFaqs.js');
    const render = pathname => {
      globalThis.window = { location: { pathname } };
      return renderToStaticMarkup(React.createElement(App));
    };
    const home = render('/');
    assert.match(home, /href="\/faqs">Explore all FAQs/);
    assert.match(home, /href="#product"/);
    assert.match(home, /href="#interest"/);

    for (const path of ['/faqs', '/faqs/']) {
      const html = render(path);
      assert.match(html, /site-header early-header/);
      assert.match(html, /class="early-footer"/);
      assert.doesNotMatch(html, /class="desktop-nav"|class="site-footer"/);
      assert.doesNotMatch(html, />Home<|>About Us<|>Download<|>Contact Us</);
      for (const section of ['product', 'how-it-works', 'specifications', 'interest']) {
        assert.ok(html.includes(`href="/#${section}"`), section);
      }
      assert.match(html, /href="#faqs" aria-current="page"/);
      assert.match(html, /Search website FAQs/);
      assert.match(html, /aria-label="FAQ categories"/);
      assert.match(html, /aria-controls="early-mobile-nav"/);
      assert.equal((html.match(/<details>/g) || []).length, websiteFaqs.length);
      assert.ok(html.includes(websiteFaqs[0].question));
    }
    // Other existing routes keep their original navigation.
    assert.match(render('/download'), /class="desktop-nav"/);
  } finally {
    globalThis.window = originalWindow;
    await server.close();
  }
});
