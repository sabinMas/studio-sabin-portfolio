'use client';

import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-eyebrow">Full-Stack Developer &amp; Creative Technologist</p>

        <h1 className="hero-title">
          <span className="title-studio">Studio</span>
          <span className="title-name">Sabin</span>
        </h1>

        <p className="hero-description">
          Crafting surreal digital experiences through geospatial reasoning,
          AI trading systems, and environmental storytelling.{' '}
          <em>Where data meets art.</em>
        </p>

        <div className="hero-cta">
          <a href="#projects" className="cta-primary">View My Work</a>
          <a
            href="https://github.com/sabinMas"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-secondary"
          >
            GitHub
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">9</div>
            <div className="stat-label">Featured Projects</div>
          </div>
          <div className="stat-divider" aria-hidden />
          <div className="stat">
            <div className="stat-number">400+</div>
            <div className="stat-label">GitHub Commits</div>
          </div>
          <div className="stat-divider" aria-hidden />
          <div className="stat">
            <div className="stat-number">∞</div>
            <div className="stat-label">Creative Possibilities</div>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-label="Scroll down">
        <div className="scroll-mouse">
          <span className="scroll-wheel" />
        </div>
        <p>Scroll to explore</p>
      </div>
    </section>
  );
}
