import React from 'react';
import Hero from '../components/home/Hero';
import ValueStrip from '../components/home/ValueStrip';
import ProblemSolution from '../components/home/ProblemSolution';
import BentoGrid from '../components/home/BentoGrid';
import InteractiveSimulator from '../components/home/InteractiveSimulator';
import TechSpecs from '../components/home/TechSpecs';
import FAQ from '../components/home/FAQ';
import CTASection from '../components/home/CTASection';

export default function HomePage({ onOpenExplore, onOpenVideo }) {
  return (
    <div className="w-full">
      <Hero onOpenExplore={onOpenExplore} onOpenVideo={onOpenVideo} />
      <ValueStrip />
      <ProblemSolution />
      <BentoGrid />
      <InteractiveSimulator />
      <TechSpecs />
      <FAQ />
      <CTASection onOpenExplore={onOpenExplore} />
    </div>
  );
}
