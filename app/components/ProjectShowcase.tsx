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
    title: 'Job Application Tracker',
    description:
      'Full-stack job-search automation platform that discovers listings, scores them with Bedrock Claude against your preferences, tailors a resume and cover letter per job, and auto-applies through a Playwright browser worker. FastAPI/SQLAlchemy backend and React/Vite frontend, deployed serverless on AWS Lambda and ECS Fargate for zero idle cost.',
    tags: ['FastAPI', 'React', 'AWS Lambda', 'Playwright', 'AI'],
    githubLink: 'https://github.com/sabinMas/JobApplicationTracker',
    emoji: '🗂️',
    stats: [
      { label: 'Commits', value: '199' },
      { label: 'ATS Platforms', value: '7' },
      { label: 'Pipeline Stages', value: '5' },
    ],
  },
  {
    id: '2',
    title: 'All Things Floral by Tab',
    description:
      'Mobile-first wedding florist website for a Buckley, WA florist, live in production. Built with Next.js (App Router) and Tailwind CSS, featuring a self-updating photo gallery, Formspree-powered wedding inquiry and review-submission forms, and SEO-optimized service pages.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Formspree'],
    liveLink: 'https://allthingsfloralbytab.com',
    githubLink: 'https://github.com/sabinMas/AllThingsFloralByTab',
    emoji: '💐',
    stats: [
      { label: 'Pages', value: '5' },
      { label: 'Commits', value: '32' },
      { label: 'Type', value: 'Client' },
    ],
  },
  {
    id: '3',
    title: 'Kalshi Research Assistant',
    description:
      'Prediction-market research dashboard powered by the Kalshi API: a composite-scored market scanner, live orderbook depth and EV calculator, multi-leg "Combo Lab" with correlation risk warnings, watchlists, price/volume alerts, and an AI research assistant grounded in live market data.',
    tags: ['Next.js', 'TypeScript', 'Prisma', 'Kalshi API', 'AI'],
    liveLink: 'https://precog-betting.vercel.app',
    githubLink: 'https://github.com/sabinMas/precog-betting',
    emoji: '🔮',
    stats: [
      { label: 'Core Modules', value: '6' },
      { label: 'Alert Types', value: '4' },
      { label: 'AI Assistant', value: 'Yes' },
    ],
  },
  {
    id: '4',
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
      { label: 'Commits', value: '351' },
    ],
  },
  {
    id: '5',
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
    id: '6',
    title: 'Wild Washington',
    description:
      "Environmental data visualization exploring Washington State's ecosystems, wildlife, and conservation initiatives through 8 interactive maps and 1000+ data points.",
    tags: ['React', 'Data Viz', 'Conservation', 'Maps'],
    liveLink: 'https://wild-washington.vercel.app/explore',
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
    id: '8',
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
    id: '9',
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
            These are the highlights — more projects, coursework, and experiments on{' '}
            <a href="https://github.com/sabinMas" target="_blank" rel="noopener noreferrer">
              GitHub →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
