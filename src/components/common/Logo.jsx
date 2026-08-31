import React from 'react';

export default function Logo({ className = "w-8 h-8", glow = true }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      {glow && (
        <div className="absolute inset-0 rounded-full bg-primary/25 blur-md pointer-events-none"></div>
      )}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 drop-shadow-[0_0_8px_rgba(75,226,119,0.7)]"
      >
        {/* Glowing track route */}
        <path
          d="M 28 30 V 62 C 28 73 48 73 48 62 V 38 C 48 27 68 27 68 38 V 70"
          stroke="#4be277"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Start Point Node */}
        <circle cx="28" cy="30" r="9" fill="#4be277" />
        {/* End Point Node */}
        <circle cx="68" cy="70" r="9" fill="#4be277" />
      </svg>
    </div>
  );
}
