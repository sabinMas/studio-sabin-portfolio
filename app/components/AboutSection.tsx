'use client';

import './AboutSection.css';

const skills = [
  { category: 'Frontend', items: ['React / Next.js', 'TypeScript', 'Vite', 'CSS'] },
  { category: 'Backend', items: ['Node.js / Express', 'Python', 'SQLite / MySQL', 'REST APIs'] },
  { category: 'Geospatial & AI', items: ['CesiumJS', 'MapLibre GL', 'ESRI ArcGIS', 'Ollama / LLMs'] },
  { category: 'Platform & Tooling', items: ['Power Automate / Dataverse', 'Git / GitHub', 'Vercel', 'PHP'] },
];

export default function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        <div className="about-header reveal">
          <h2 className="about-title">About</h2>
        </div>

        <div className="about-body">
          <div className="about-text reveal">
            <p>
              I&apos;m a full-stack developer and software engineering student at{' '}
              <strong>Green River College</strong> based in Kent, WA. I hold an AAS in
              Data Analytics &amp; Software Development and am pursuing a Bachelor of Applied
              Science — building toward a career at the intersection of geospatial
              intelligence, applied AI, and thoughtful engineering.
            </p>
            <p>
              I&apos;m currently a <strong>Power Platform Intern</strong> at Affirma, where
              I&apos;ve built 10 event-driven Power Automate flows across 9 Dataverse tables
              for Seattle Public Utilities&apos; hiring process and am now building the canvas
              app for their temporary-hire workflow. I&apos;m also the <strong>project manager
              for a 9-person team</strong> at Green River College migrating 3 legacy PHP
              applications to Node.js — writing the documentation, schema, and architecture
              plan, and shipping 4 new REST APIs to replace the legacy endpoints.
            </p>
            <p>
              Alongside those roles, I spent 10 months as an <strong>AI Training Fellow at
              Handshake AI</strong>, training and evaluating large language models across
              computer vision, speech analysis, and Java coding projects, and auditing
              hundreds of dataset entries weekly against detailed quality guidelines. I also
              built and maintain <strong>GeoSight</strong> — a full-stack platform that
              aggregates 80+ government and open-data APIs into real-time geospatial
              analytics for any place on earth.
            </p>
            <p>
              Before code, I spent two years as a <strong>Zone Leader in Rome, Italy</strong>,
              overseeing 14+ team members, teaching English to 60+ students, and providing
              multilingual interpretation for refugees. I&apos;ve since led multi-million dollar
              construction projects. I bring that same clarity of communication and
              leadership into every technical collaboration.
            </p>
            <p>
              Outside of work I&apos;m drawn to historical literature and the outdoors — learning
              how humans interact with and adapt to their environments, from the Pacific Northwest
              temperate rainforests to Arctic tundra to indigenous living practices. I spend time
              backpacking whenever possible and studying world cultures and their relationship
              with the land. These experiences inform how I think about design: rooted in context,
              aware of constraints, and always in conversation with the people and places it touches.
            </p>

            <div className="about-links">
              <a href="https://github.com/sabinMas" target="_blank" rel="noopener noreferrer" className="about-link">
                GitHub ↗
              </a>
              <a href="https://linkedin.com/in/mason-sabin" target="_blank" rel="noopener noreferrer" className="about-link">
                LinkedIn ↗
              </a>
              <a href="mailto:masonsabin@gmail.com" className="about-link">
                Email ↗
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
                    <li key={item} className="skill-item">{item}</li>
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
