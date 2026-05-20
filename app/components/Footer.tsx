'use client';

import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-headline reveal">
          <span className="footer-get">Get in</span>
          <a href="mailto:masonsabin@gmail.com" className="footer-touch">
            touch.
          </a>
        </div>

        <div className="footer-bottom reveal">
          <div className="footer-links">
            <a href="https://github.com/sabinMas" target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/mason-sabin" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
            <a href="mailto:masonsabin@gmail.com">
              Email ↗
            </a>
            <a href="/resume.pdf" download>
              Resume ↗
            </a>
          </div>

          <p className="footer-copy">
            © {year}_ALL RIGHTS RESERVED · BUILT WITH NEXT.JS
          </p>
        </div>

      </div>
    </footer>
  );
}
