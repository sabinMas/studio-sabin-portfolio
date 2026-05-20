'use client';

import './AboutSection.css';

const skills = [
  { category: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Vite', 'CSS'] },
  { category: 'Backend', items: ['Node.js / Express', 'Python', 'SQLite', 'REST APIs'] },
  { category: 'Geospatial & AI', items: ['CesiumJS', 'MapLibre GL', 'Ollama / LLMs', 'Gemini / Cerebras'] },
  { category: 'Tooling', items: ['Git / GitHub', 'Vercel', 'C++ / GBA (Butano)', 'PHP → Node migrations'] },
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
              I&apos;m Mason Sabin, a full-stack developer based in <strong>Kent, WA</strong> currently
              interning as a Full-Stack Web Developer at <strong>Green River College</strong> and
              training multimodal LLMs at <strong>Handshake AI</strong>. I&apos;m pursuing a
              Bachelor of Applied Science in IT Software Development (expected June 2027),
              having already earned my AAS in Data Analytics &amp; Software Development with a
              3.59 GPA.
            </p>
            <p>
              My work lives at the intersection of <strong>data and story</strong> — whether that&apos;s
              aggregating 80+ government APIs into a geospatial intelligence platform, building an AI
              that trades like Warren Buffett, or co-shipping a Game Boy Advance game with 25+ developers.
              Before tech, I spent two years as a volunteer representative in <strong>Rome, Italy</strong>,
              leading a media team, teaching English to 60+ students, and providing multilingual
              interpretation for refugees.
            </p>
            <p>
              Outside of code I&apos;m drawn to surrealist art — particularly Dalí&apos;s ability to
              make the impossible feel inevitable. That sensibility shows up in my UI work:
              precise, a little unexpected, and always intentional.
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
