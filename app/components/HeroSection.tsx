'use client';

import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className="hero" id="home">
      {/* Dalí-inspired SVG background */}
      <svg className="dali-bg" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {/* Melting clock outline */}
        <ellipse cx="160" cy="360" rx="72" ry="72" fill="none" stroke="rgba(212,175,55,0.08)" strokeWidth="2" />
        <path d="M 110 360 Q 80 430 130 470 T 210 420" fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="1.5" />
        {/* Horizon line */}
        <line x1="0" y1="700" x2="1440" y2="680" stroke="rgba(212,175,55,0.04)" strokeWidth="1" />
        {/* Eye motif */}
        <ellipse cx="720" cy="160" rx="90" ry="45" fill="none" stroke="rgba(212,175,55,0.06)" strokeWidth="1.5" />
        <circle  cx="720" cy="160" r="28" fill="none" stroke="rgba(212,175,55,0.07)" strokeWidth="1" />
        <circle  cx="720" cy="160" r="10" fill="rgba(212,175,55,0.04)" />
        {/* Distant arch */}
        <path d="M 1100 900 Q 1200 600 1300 900" fill="none" stroke="rgba(100,150,200,0.05)" strokeWidth="2" />
        {/* Floating geometric */}
        <rect x="1300" y="200" width="60" height="60" rx="4" fill="none" stroke="rgba(212,175,55,0.05)" strokeWidth="1.5" transform="rotate(18 1330 230)" />
      </svg>

      <div className="hero-content">
        <p className="hero-eyebrow">Full-Stack Developer &amp; Creative Technologist</p>

        <h1 className="hero-title">
          <span className="title-name">Mason Sabin</span>
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
            <div className="stat-number">6</div>
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
