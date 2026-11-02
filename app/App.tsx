'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ParticleTracer from '@/components/ParticleTracer';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import './app.css';

export default function App() {
  useEffect(() => {
    const revealAll = () => {
      document.querySelectorAll('.reveal:not(.visible)').forEach((el) => el.classList.add('visible'));
    };

    // Reduced motion or no IntersectionObserver support: just show everything.
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || typeof IntersectionObserver === 'undefined') {
      revealAll();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -5% 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    // Safety net: never leave content invisible if the observer misses an
    // element (very tall sections, fast scrolling, flaky viewport math).
    const fallback = window.setTimeout(revealAll, 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return (
    <div className="site-wrapper">
      <ParticleTracer />
      <Navigation />
      <HeroSection />
      <ExperienceSection />
      <ProjectShowcase />
      <AboutSection />
      <Footer />
      <ThemeSwitcher />
    </div>
  );
}
