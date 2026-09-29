import React from 'react';

export default function SectionIntro({ eyebrow, title, children, align = 'left' }) {
  return (
    <div className={`section-intro ${align === 'center' ? 'section-intro--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {children && <p className="section-lede">{children}</p>}
    </div>
  );
}
