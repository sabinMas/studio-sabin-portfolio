'use client';

import ProjectCard from '@/components/ProjectCard';
import './ProjectShowcase.css';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  liveLink?: string;       // omit when same as githubLink (no real demo)
  githubLink: string;
  emoji: string;
  stats: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: '1',
    title: 'GeoSight-GSPAT',
    description:
      'Geospatial reasoning platform combining 3D globes, AI analysis, and deterministic scoring for infrastructure and climate assessment.',
    tags: ['Next.js', 'Cesium', 'AI', 'Geospatial'],
    liveLink: 'https://geosight-gspat.vercel.app',
    githubLink: 'https://github.com/sabinMas/geosight-gspat',
    emoji: '🌍',
    stats: [
      { label: 'Features', value: '5+' },
      { label: 'APIs', value: '10+' },
      { label: 'Commits', value: '32' },
    ],
  },
  {
    id: '2',
    title: "Paunchy's List",
    description:
      'Unified marketplace for discovering developer tools across VS Code, JetBrains, Unreal Engine, browsers, and AI agents.',
    tags: ['React', 'Node.js', 'SQLite', 'Marketplace'],
    liveLink: 'https://paunchy-s-list.vercel.app',
    githubLink: 'https://github.com/sabinMas/Paunchy-sList',
    emoji: '🛠️',
    stats: [
      { label: 'Extensions', value: '500+' },
      { label: 'Platforms', value: '5' },
      { label: 'Commits', value: '51' },
    ],
  },
  {
    id: '3',
    title: 'Buffet-bot',
    description:
      'Terminal-based AI trading assistant using local LLMs, live market data, and Alpaca paper trading with Buffett-style fundamental analysis.',
    tags: ['Python', 'Ollama', 'Alpaca API', 'CLI'],
    githubLink: 'https://github.com/sabinMas/buffet-bot',
    emoji: '📈',
    stats: [
      { label: 'Commands', value: '21' },
      { label: 'Models', value: '2' },
      { label: 'Commits', value: '60' },
    ],
  },
  {
    id: '4',
    title: 'Puget Salmon Health',
    description:
      'Interactive dashboard visualizing Chinook salmon population health across Puget Sound watersheds with real-time data integration.',
    tags: ['Next.js', 'TypeScript', 'Data Viz', 'Environmental'],
    liveLink: 'https://puget-salmon-health.vercel.app',
    githubLink: 'https://github.com/sabinMas/puget-salmon-health',
    emoji: '🐟',
    stats: [
      { label: 'Watersheds', value: '9' },
      { label: 'Data Sources', value: '3' },
      { label: 'Commits', value: '63' },
    ],
  },
  {
    id: '5',
    title: 'Microjam GBA',
    description:
      'Game Boy Advance microgame collection by the Green River College cohort — WarioWare-style gameplay themed around space and UFOs.',
    tags: ['C++', 'Game Dev', 'GBA', 'Butano'],
    liveLink: 'https://grc-cohort-23.github.io/microjam/',
    githubLink: 'https://github.com/grc-cohort-23/microjam',
    emoji: '🎮',
    stats: [
      { label: 'Microgames', value: '12+' },
      { label: 'Team Size', value: '25+' },
      { label: 'Commits', value: '1100+' },
    ],
  },
  {
    id: '6',
    title: 'Wild Washington',
    description:
      "Comprehensive environmental data visualization exploring Washington State's ecosystems, wildlife, and conservation initiatives.",
    tags: ['React', 'Data Viz', 'Conservation', 'Maps'],
    githubLink: 'https://github.com/sabinMas/Wild-Washington',
    emoji: '🌲',
    stats: [
      { label: 'Focus Areas', value: '5+' },
      { label: 'Interactive Maps', value: '8' },
      { label: 'Data Points', value: '1000+' },
    ],
  },
];

export default function ProjectShowcase() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header reveal">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-description">
            A selection of my most substantial work spanning full-stack development,
            geospatial analysis, AI trading systems, and environmental storytelling.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="projects-footer reveal">
          <p>
            Explore more on{' '}
            <a href="https://github.com/sabinMas" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
