'use client';

import './ResumeSection.css';

export default function ResumeSection() {
  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">

        <div className="resume-header reveal">
          <h2 className="resume-title">Resume</h2>
          <div className="resume-actions">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn secondary">
              View PDF ↗
            </a>
            <a href="/resume.pdf" download="Mason_Sabin_Resume.pdf" className="resume-btn primary">
              Download
            </a>
          </div>
        </div>

        <div className="resume-embed-wrap reveal" style={{ transitionDelay: '80ms' }}>
          <iframe
            src="/resume.pdf"
            className="resume-iframe"
            title="Mason Sabin Resume"
          />
          <div className="resume-mobile-fallback">
            <p>PDF preview unavailable on this device.</p>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="resume-btn secondary">
              Open Resume ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
