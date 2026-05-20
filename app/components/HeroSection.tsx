'use client';

import { useCommitCount } from '@/hooks/useCommitCount';
import './HeroSection.css';

export default function HeroSection() {
  const { count: commitCount, repoCount, loading: commitLoading } = useCommitCount();

  return (
    <section className="hero" id="home">
      {/* Top-left metadata tag */}
      <p className="hero-meta">MASON_SABIN · KENT_WA · PORTFOLIO_2026</p>

      <div className="hero-content">
        <h1 className="hero-name">
          <span>Mason</span>
          <span>Sabin</span>
        </h1>

        <div className="hero-descriptor">
          <p>Full-Stack Developer &amp; Creative Technologist.</p>
          <p>Building at the intersection of data, AI, and design.</p>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number" style={{ opacity: commitLoading ? 0.5 : 1 }}>
              {commitLoading ? '···' : repoCount ?? '9'}
            </span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number" style={{ opacity: commitLoading ? 0.5 : 1 }}>
              {commitLoading ? '···' : commitCount ?? '400'}
            </span>
            <span className="stat-label">Commits</span>
          </div>
        </div>

        <a href="#projects" className="hero-scroll-label">
          [SCROLL TO EXPLORE]
        </a>
      </div>
    </section>
  );
}
