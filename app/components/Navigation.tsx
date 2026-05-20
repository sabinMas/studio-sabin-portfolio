'use client';

import { useState, useEffect } from 'react';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#home" className="nav-brand" onClick={close}>
          <span className="brand-text">StudioSabin</span>
          <span className="brand-dot">·</span>
          <span className="brand-sub">Portfolio</span>
        </a>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`} role="list">
          <li><a href="#home"     onClick={close}>Home</a></li>
          <li><a href="#projects" onClick={close}>Projects</a></li>
          <li><a href="#about"    onClick={close}>About</a></li>
          <li>
            <a href="/resume.pdf" download className="nav-resume" onClick={close}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
