'use client';

import type { Project } from '@/components/ProjectShowcase';
import './ProjectCard.css';

export default function ProjectCard({ project }: { project: Project }) {
  const hasLiveDemo = !!project.liveLink;

  return (
    <article className="project-card">
      <div className="card-inner">
        <div className="project-header">
          <div className="project-emoji" aria-hidden>
            {project.emoji}
          </div>
          <h3 className="project-title">{project.title}</h3>
        </div>

        <p className="project-description">{project.description}</p>

        <div className="project-stats">
          {project.stats.map((stat) => (
            <div key={stat.label} className="stat-item">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>

        <div className={`project-links ${!hasLiveDemo ? 'single-link' : ''}`}>
          {hasLiveDemo && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-btn primary"
            >
              Live Demo ↗
            </a>
          )}
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`link-btn ${hasLiveDemo ? 'secondary' : 'primary'}`}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}
