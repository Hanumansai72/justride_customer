import React from 'react';

export default function PageCTA({ navigate, title = 'Ready for a clearer ride?', description = 'Explore the device and the app that keeps it connected.' }) {
  return (
    <section className="cta-band" aria-labelledby="cta-heading">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow">THE RIDE AHEAD</p>
          <h2 id="cta-heading">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="button-row">
          <a className="button button--primary" href="/product" onClick={(event) => navigate(event, 'product')}>Explore the device <span aria-hidden="true">↗</span></a>
          <a className="button button--outline" href="/download" onClick={(event) => navigate(event, 'download')}>Get the app</a>
        </div>
      </div>
    </section>
  );
}
