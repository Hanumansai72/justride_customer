import React, { useState } from 'react';
import { deviceImages } from '../../assets/device';

export default function DisplayModes() {
  const [mode, setMode] = useState('night');
  return (
    <section className={`section section--light display-modes display-modes--${mode}`} aria-labelledby="display-modes-title">
      <div className="container modes-layout">
        <div>
          <p className="eyebrow">DAY + NIGHT</p>
          <h2 id="display-modes-title">Designed for changing light.</h2>
          <p className="section-lede">Day and night interface modes put the same essential navigation information in a suitable visual setting.</p>
          <div className="segmented" role="group" aria-label="Display mode description">
            <button type="button" className={mode === 'day' ? 'is-selected' : ''} aria-pressed={mode === 'day'} onPointerDown={() => setMode('day')} onClick={() => setMode('day')}>Day mode</button>
            <button type="button" className={mode === 'night' ? 'is-selected' : ''} aria-pressed={mode === 'night'} onPointerDown={() => setMode('night')} onClick={() => setMode('night')}>Night mode</button>
          </div>
          <p className="mode-description" aria-live="polite">{mode === 'day' ? 'A light, high-contrast interface for daytime riding.' : 'A darker interface intended to reduce visual glare after dark.'}</p>
          <p className="image-note">Select a mode to compare the supplied day and night display images.</p>
        </div>
        <div className={`modes-image modes-image--${mode}`}>
          <div className={`modes-image__layer ${mode === 'day' ? 'is-visible' : ''}`} aria-hidden={mode !== 'day'}>
            <img src={deviceImages.day} alt="JustRide showing the light day navigation interface" width="1254" height="1254" loading="lazy" />
          </div>
          <div className={`modes-image__layer ${mode === 'night' ? 'is-visible' : ''}`} aria-hidden={mode !== 'night'}>
            <img src={deviceImages.front} alt="JustRide showing the dark night navigation interface" width="1254" height="1254" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}
