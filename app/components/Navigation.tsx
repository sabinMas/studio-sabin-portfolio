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
          STUDIO SABIN
        </a>

        <button
          className={`nav-toggle ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span />
          <span />
        </button>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`} role="list">
          <li><a href="#home"     onClick={close}>Index</a></li>
          <li><a href="#projects" onClick={close}>Projects</a></li>
          <li><a href="#about"    onClick={close}>About</a></li>
          <li><a href="/resume.pdf" download onClick={close}>Resume</a></li>
          <li>
            <a href="mailto:masonsabin@gmail.com" className="nav-cta" onClick={close}>
              Let&apos;s Talk
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
