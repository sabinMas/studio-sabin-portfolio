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
    title: 'GeoSight',
    description:
      'Geospatial intelligence platform aggregating 80+ government and open-data APIs into real-time mission briefings across 9 lenses. Dual LLM pipelines (Cerebras + Gemini) power instant analysis and natural language report generation. Accepted into Handshake AI Learn Hub as a Codex Creator Challenge finalist.',
    tags: ['Next.js', 'TypeScript', 'CesiumJS', 'MapLibre GL', 'LLM'],
    liveLink: 'https://geosight.earth',
    githubLink: 'https://github.com/sabinMas/geosight-gspat',
    emoji: '🌍',
    stats: [
      { label: 'APIs', value: '80+' },
      { label: 'Mission Lenses', value: '9' },
      { label: 'LLM Pipelines', value: '2' },
    ],
  },
  {
    id: '2',
    title: "Paunchy's List",
    description:
      'Universal developer tool finder featuring 219+ extensions across 12 environments — VS Code, JetBrains, Unreal Engine, browsers, and AI agents — with filtering by dev type, category, and environment.',
    tags: ['React', 'Vite', 'Node.js / Express', 'SQLite'],
    liveLink: 'https://paunchyslist.vercel.app',
    githubLink: 'https://github.com/sabinMas/Paunchy-sList',
    emoji: '🛠️',
    stats: [
      { label: 'Extensions', value: '219+' },
      { label: 'Environments', value: '12' },
      { label: 'Filter Axes', value: '3' },
    ],
  },
  {
    id: '3',
    title: 'Buffet-bot',
    description:
      'Terminal-based AI trading assistant using local LLMs via Ollama, live market data, and Alpaca paper trading. Applies Buffett-style fundamental analysis through a 21-command CLI.',
    tags: ['Python', 'Ollama', 'Alpaca API', 'CLI'],
    githubLink: 'https://github.com/sabinMas/buffet-bot',
    emoji: '📈',
    stats: [
      { label: 'Commands', value: '21' },
      { label: 'LLM Models', value: '2' },
      { label: 'Commits', value: '60' },
    ],
  },
  {
    id: '4',
    title: 'Puget Salmon Health',
    description:
      'Interactive dashboard visualizing Chinook salmon population health across Puget Sound watersheds with real-time data integration from multiple environmental agencies.',
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
      'Game Boy Advance microgame collection built by the Green River College cohort — WarioWare-style gameplay themed around space and UFOs. 25+ contributors, 1100+ commits.',
    tags: ['C++', 'Butano', 'Game Dev', 'GBA'],
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
      "Environmental data visualization exploring Washington State's ecosystems, wildlife, and conservation initiatives through 8 interactive maps and 1000+ data points.",
    tags: ['React', 'Data Viz', 'Conservation', 'Maps'],
    liveLink: 'https://wild-washington.vercel.app',
    githubLink: 'https://github.com/sabinMas/Wild-Washington',
    emoji: '🌲',
    stats: [
      { label: 'Focus Areas', value: '5+' },
      { label: 'Interactive Maps', value: '8' },
      { label: 'Data Points', value: '1000+' },
    ],
  },
  {
    id: '7',
    title: 'PDGA Tournament Director Marketplace',
    description:
      'Full-featured e-commerce storefront for disc golf tournament directors to order event supplies. Features email token authentication, an interactive Leaflet.js map-based store locator via Overpass/Nominatim APIs, and a dynamic cart with tiered product recommendations.',
    tags: ['JavaScript', 'PHP', 'Leaflet.js', 'REST APIs'],
    githubLink: 'https://github.com/sabinMas/pdga-TD-marketplace',
    emoji: '🥏',
    stats: [
      { label: 'Commits', value: '259' },
      { label: 'Contributors', value: '4' },
      { label: 'API Integrations', value: '3' },
    ],
  },
  {
    id: '8',
    title: 'CloudForge',
    description:
      'Full-stack cloud file and image hosting platform with user authentication, session management, and a MySQL-backed profile dashboard. Built with Express 5, multer for file uploads, and deployed on a VM with protected routes.',
    tags: ['Node.js', 'Express', 'MySQL', 'EJS'],
    githubLink: 'https://github.com/sabinMas/CloudForge',
    emoji: '☁️',
    stats: [
      { label: 'Commits', value: '88' },
      { label: 'Contributors', value: '3' },
      { label: 'Auth System', value: 'Session' },
    ],
  },
  {
    id: '9',
    title: 'PR-TRAINER',
    description:
      'Mobile-first sprint tracking app for athletes to log training sessions, compare personal records across event types, and analyze performance trends. Serverless Node.js backend with Vercel Postgres and username/password auth.',
    tags: ['Node.js', 'Vercel', 'SQL', 'Vanilla JS'],
    liveLink: 'https://pr-trainer.vercel.app',
    githubLink: 'https://github.com/sabinMas/PR-TRAINER',
    emoji: '🏃',
    stats: [
      { label: 'Commits', value: '17' },
      { label: 'Database', value: 'Postgres' },
      { label: 'Platform', value: 'Vercel' },
    ],
  },
];

export default function ProjectShowcase() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="section-header reveal">
          <h2 className="section-title">Featured Works</h2>
          <span className="section-count">[009]</span>
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
