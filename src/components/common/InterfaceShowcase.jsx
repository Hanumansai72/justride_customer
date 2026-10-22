import React, { useState } from 'react';
import SectionIntro from './SectionIntro';
import { uiScreens } from '../../data/productSpecs';
import navImg from '../../assets/device-front-nav.png';
import callerImg from '../../assets/device-caller.png';
import musicImg from '../../assets/device-music.png';

const screenImages = {
  clock: '/images/aventura/clock-screen-v4.webp',
  navigation: navImg,
  calls: callerImg,
  music: musicImg,
};

export default function InterfaceShowcase({ id = 'ui-showcase' }) {
  const [activeScreen, setActiveScreen] = useState('clock');
  const currentScreenData = uiScreens.find((s) => s.id === activeScreen) || uiScreens[0];

  return (
    <section className="section specs-showcase" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        <div className="specs-showcase__header">
          <SectionIntro
            eyebrow="RIDER-FIRST INTERFACE"
            title="An Interface Designed for Riders"
            center
          >
            Explore the dedicated 1.75-inch display: ride information, navigation, call alerts and music controls, each explained in its own view.
          </SectionIntro>

          <div
            className="specs-showcase__tabs"
            role="tablist"
            aria-label="Interface showcase views"
          >
            {uiScreens.map((s) => (
              <button
                key={s.id}
                type="button"
                role="tab"
                id={`tab-${id}-${s.id}`}
                aria-selected={activeScreen === s.id}
                aria-controls={`panel-${id}-${s.id}`}
                className={`specs-showcase__tab ${activeScreen === s.id ? 'is-active' : ''}`}
                onClick={() => setActiveScreen(s.id)}
              >
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="specs-showcase__display"
          role="tabpanel"
          id={`panel-${id}-${currentScreenData.id}`}
          aria-labelledby={`tab-${id}-${currentScreenData.id}`}
        >
          <div className="specs-showcase__visual">
            <div className="specs-showcase__stage">
              <img
                key={currentScreenData.id}
                src={screenImages[currentScreenData.id]}
                alt={currentScreenData.alt}
                width="1024"
                height="1024"
                loading="lazy"
              />
            </div>
          </div>

          <div className="specs-showcase__info">
            <span className="specs-showcase__tagline">{currentScreenData.tagline}</span>
            <h3>{currentScreenData.title}</h3>
            <p className="specs-showcase__desc">{currentScreenData.description}</p>
            <dl className="specs-showcase__essentials" aria-label={`${currentScreenData.label} specifications`}>
              {currentScreenData.specifications.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
