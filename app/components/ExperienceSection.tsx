'use client';

import './ExperienceSection.css';

interface Experience {
  role: string;
  org: string;
  dates: string;
  summary: string;
}

const experience: Experience[] = [
  {
    role: 'Power Platform Intern, Custom Development',
    org: 'Affirma',
    dates: 'Aug 2026 — Present',
    summary:
      "Built 10 event-driven Power Automate flows across 9 Dataverse tables for Seattle Public Utilities' hiring process; now building the canvas app for their temporary-hire workflow.",
  },
  {
    role: 'Full-Stack Web Development Intern — Project Manager',
    org: 'Green River College',
    dates: 'Feb 2026 — Present',
    summary:
      'Leading a 9-person team migrating 3 legacy PHP applications to Node.js — wrote the documentation, schema, and architecture plan, and shipped 4 new REST APIs to replace the legacy endpoints.',
  },
  {
    role: 'AI Training Fellow',
    org: 'Handshake AI',
    dates: 'Dec 2025 — Oct 2026',
    summary:
      'Trained and evaluated large language models across computer vision, speech analysis, and Java coding projects; audited hundreds of dataset entries weekly against detailed quality guidelines.',
  },
];

export default function ExperienceSection() {
  return (
    <section className="experience-section" id="experience">
      <div className="experience-container">
        <div className="section-header reveal">
          <h2 className="section-title">Experience</h2>
          <span className="section-count">[003]</span>
        </div>

        <div className="experience-list">
          {experience.map((job, i) => (
            <div
              key={job.org}
              className="experience-item reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="experience-dates">{job.dates}</div>
              <div className="experience-body">
                <h3 className="experience-role">{job.role}</h3>
                <div className="experience-org">{job.org}</div>
                <p className="experience-summary">{job.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
