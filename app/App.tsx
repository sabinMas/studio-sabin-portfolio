'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ProjectShowcase from '@/components/ProjectShowcase';
import AboutSection from '@/components/AboutSection';
import Footer from '@/components/Footer';
import ParticleTracer from '@/components/ParticleTracer';
import './app.css';

export default function App() {
  // Scroll-reveal: observe .reveal elements and add .visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-wrapper">
      <ParticleTracer />
      <Navigation />
      <HeroSection />
      <ProjectShowcase />
      <AboutSection />
      <Footer />
    </div>
  );
}
