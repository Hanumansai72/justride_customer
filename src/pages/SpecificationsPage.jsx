import React from 'react';
import { ArrowRight } from 'lucide-react';
import DeviceImage from '../components/common/DeviceImage';
import PageCTA from '../components/common/PageCTA';
import WebsiteFaqs from '../components/common/WebsiteFaqs';
import InterfaceShowcase from '../components/common/InterfaceShowcase';
import './specifications.css';

export default function SpecificationsPage({ navigate }) {
  return (
    <div className="specs-page">
      {/* ====================================================================
          Section 1: Minimal Product Hero
          ==================================================================== */}
      <section className="specs-hero" aria-labelledby="specs-hero-title">
        <div className="container specs-hero__grid">
          <div className="specs-hero__copy">
            <span className="specs-hero__eyebrow">JUST RIDE AVENTURA</span>
            <h1 id="specs-hero-title">
              Engineered for <em>Every Ride.</em>
            </h1>
            <p className="specs-hero__lead">
              Explore the technology behind JustRide Aventura — a smart motorcycle navigation device
              designed to keep essential information within easy reach.
            </p>
            <div className="specs-hero__actions">
              <a
                className="button button--primary"
                href="/early-access"
                onClick={(event) => navigate?.(event, 'earlyAccess')}
              >
                Register Interest <ArrowRight size={17} aria-hidden="true" />
              </a>
              <a className="button button--outline" href="#ui-showcase">
                Explore the interface
              </a>
            </div>
          </div>

          <div className="specs-hero__visual">
            <div className="specs-hero__image-wrap">
              <DeviceImage
                view="front"
                alt="JustRide Aventura circular motorcycle navigation display showing route directions"
                width="1254"
                height="1254"
                fetchPriority="high"
              />
              <div className="specs-hero__badge" aria-label="1.75 inch circular display">
                <span className="specs-hero__badge-dot" aria-hidden="true" />
                <span>1.75" Circular Display</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <InterfaceShowcase id="ui-showcase" />

      {/* ====================================================================
          Section 5: FAQs & Page CTA
          ==================================================================== */}
      <WebsiteFaqs compact />
      <PageCTA navigate={navigate} />
    </div>
  );
}
