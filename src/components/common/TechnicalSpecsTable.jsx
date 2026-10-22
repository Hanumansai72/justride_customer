import React from 'react';
import {
  Compass,
  BatteryCharging,
  Clock,
  Bluetooth,
  Layers,
  PhoneCall,
  Music,
  Smartphone,
  Info,
} from 'lucide-react';
import SectionIntro from './SectionIntro';
import { heroSpecs, specCategories } from '../../data/productSpecs';

const iconMap = {
  Compass,
  BatteryCharging,
  Clock,
  Bluetooth,
  Layers,
  PhoneCall,
  Music,
  Smartphone,
};

export default function TechnicalSpecsTable({ id = 'technical-specs' }) {
  return (
    <section className="section specs-table-section" id={id} aria-labelledby={`${id}-title`}>
      <div className="container">
        {/* Section Header */}
        <div className="specs-section-header">
          <SectionIntro
            eyebrow="TECHNICAL SPECIFICATIONS"
            title="Precision hardware. Built for endurance."
            center
          >
            Confirmed hardware parameters and target operating specifications for the JustRide
            Aventura motorcycle navigation device.
          </SectionIntro>
        </div>

        {/* 4 Hero Highlight Metrics */}
        <div className="specs-stat-grid" aria-label="Key hardware highlights">
          {heroSpecs.map((item) => {
            const Icon = iconMap[item.icon] || Compass;
            return (
              <div className="specs-stat-card" key={item.label}>
                <div className="specs-stat-card__top">
                  <span className="specs-stat-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <span className="specs-stat-card__badge">{item.label}</span>
                </div>
                <div className="specs-stat-card__val">{item.value}</div>
                <div className="specs-stat-card__note">{item.note}</div>
              </div>
            );
          })}
        </div>

        {/* 6 Categorized Spec Cards Matrix */}
        <div
          className="specs-matrix-grid"
          role="region"
          aria-label="Detailed technical specifications matrix"
        >
          {specCategories.map((cat) => {
            const Icon = iconMap[cat.icon] || Compass;
            return (
              <article className="specs-card" key={cat.id}>
                <div className="specs-card__header">
                  <div className="specs-card__icon-wrap" aria-hidden="true">
                    <Icon size={18} />
                  </div>
                  <div className="specs-card__title-wrap">
                    <span className="specs-card__tag">{cat.tag}</span>
                    <h3 className="specs-card__title">{cat.title}</h3>
                  </div>
                </div>

                <div className="specs-card__list">
                  {cat.items.map((item) => (
                    <div className="specs-card__item" key={item.label}>
                      <span className="specs-card__item-label">{item.label}</span>
                      <strong className="specs-card__item-value">{item.value}</strong>
                      {item.note && <span className="specs-card__item-note">{item.note}</span>}
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Integrated Validation Disclaimer */}
        <div className="specs-disclaimer-pill" role="note">
          <Info size={16} aria-hidden="true" className="specs-disclaimer-pill__icon" />
          <span>
            <strong>Validation Notice:</strong> Battery runtime, call controls, and app
            notifications reflect target specifications and are subject to final operating
            validation on production units.
          </span>
        </div>
      </div>
    </section>
  );
}
