'use client';

import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-brand">StudioSabin</span>
            <p>Full-Stack Developer &amp; Creative Technologist based in the Pacific Northwest.</p>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <ul>
              <li><a href="https://github.com/sabinMas" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a href="https://linkedin.com/in/mason-sabin" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a href="mailto:masonsabin@gmail.com">Email</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Tech Stack</h4>
            <ul>
              <li>Next.js / React</li>
              <li>TypeScript / Python</li>
              <li>CesiumJS / Mapbox</li>
              <li>Ollama / Local LLMs</li>
            </ul>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p>© {year} Mason Sabin. Built with Next.js · Inspired by Salvador Dalí.</p>
          <p className="footer-sub">Cursor trails rendered on canvas. Background breathing by CSS. Always evolving.</p>
        </div>
      </div>
    </footer>
  );
}
