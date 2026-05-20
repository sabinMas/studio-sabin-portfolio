'use client';

import './AboutSection.css';

const skills = [
  { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'CSS / Tailwind'] },
  { category: 'Backend', items: ['Node.js', 'Python', 'SQLite', 'REST APIs'] },
  { category: 'Geospatial & Data', items: ['CesiumJS', 'Mapbox', 'D3.js', 'GeoJSON'] },
  { category: 'Tooling & Other', items: ['Git', 'Vercel', 'Ollama / LLMs', 'C++ / GBA'] },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header reveal">
          <h2 className="section-title">About Me</h2>
          <p className="section-description">
            The person behind the pixels.
          </p>
        </div>

        <div className="about-body">
          <div className="about-text reveal">
            <p>
              I&apos;m Mason Sabin, a full-stack developer based in the Pacific Northwest.
              I studied at <strong>Green River College</strong> where I built games for the Game Boy
              Advance with a cohort of 25+ developers, which taught me as much about
              collaboration as it did about low-level programming.
            </p>
            <p>
              My work lives at the intersection of <strong>data and story</strong> — whether that&apos;s
              mapping salmon watersheds, building an AI that trades like Warren Buffett, or
              designing a marketplace for developer tools. I&apos;m drawn to problems where the
              visual layer matters as much as the logic underneath it.
            </p>
            <p>
              Outside of code I&apos;m inspired by surrealist art — particularly Salvador Dalí&apos;s
              ability to make the impossible feel inevitable. That sensibility shows up in
              how I approach UI: precise, a little unexpected, and always intentional.
            </p>

            <div className="about-links">
              <a href="https://github.com/sabinMas" target="_blank" rel="noopener noreferrer" className="about-link">
                GitHub
              </a>
              <a href="https://linkedin.com/in/mason-sabin" target="_blank" rel="noopener noreferrer" className="about-link">
                LinkedIn
              </a>
              <a href="mailto:masonsabin@gmail.com" className="about-link">
                Email
              </a>
              <a href="/resume.pdf" download className="about-link primary">
                Download Resume
              </a>
            </div>
          </div>

          <div className="about-skills reveal" style={{ transitionDelay: '120ms' }}>
            {skills.map(({ category, items }) => (
              <div key={category} className="skill-group">
                <h4 className="skill-category">{category}</h4>
                <ul className="skill-list">
                  {items.map((item) => (
                    <li key={item} className="skill-item">
                      <span className="skill-dot" aria-hidden>◆</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
