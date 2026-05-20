export interface ProjectAPI {
  projectId: string;
  projectName: string;
  apis: string[];
}

export const projectAPIs: ProjectAPI[] = [
  {
    projectId: '1',
    projectName: 'GeoSight',
    apis: [
      'USGS API',
      'NOAA API',
      'NASA Earth API',
      'Google Maps API',
      'OpenWeather API',
      'Natural Earth Data API',
      'GEBCO Bathymetry API',
      'Copernicus Climate API',
      'Sentinel Hub API',
      'Planet Labs API',
      'GIS Cloud API',
      'HERE Maps API',
      'ArcGIS REST API',
      'Overpass API',
      'Nominatim API',
      'Gemini AI API',
      'Cerebras API',
    ],
  },
  {
    projectId: '2',
    projectName: "Paunchy's List",
    apis: [], // Curated database, no external APIs
  },
  {
    projectId: '3',
    projectName: 'Buffet-bot',
    apis: [
      'Alpaca Trading API',
      'Alpha Vantage API',
      'IEX Cloud API',
    ],
  },
  {
    projectId: '4',
    projectName: 'Puget Salmon Health',
    apis: [
      'NOAA Fisheries API',
      'Washington State Department of Ecology API',
      'USGS Water Resources API',
    ],
  },
  {
    projectId: '5',
    projectName: 'Microjam GBA',
    apis: [], // Game development, no external APIs
  },
  {
    projectId: '6',
    projectName: 'Wild Washington',
    apis: [
      'Washington State GIS API',
      'USGS Biodiversity API',
      'iNaturalist API',
    ],
  },
  {
    projectId: '7',
    projectName: 'PDGA Tournament Director Marketplace',
    apis: [
      'Overpass API',
      'Nominatim API',
      'Stripe API',
      'SendGrid Email API',
    ],
  },
  {
    projectId: '8',
    projectName: 'CloudForge',
    apis: [], // Self-contained file hosting
  },
  {
    projectId: '9',
    projectName: 'PR-TRAINER',
    apis: [
      'Vercel Postgres API',
    ],
  },
];

export function getTotalAPICount(): number {
  const uniqueAPIs = new Set<string>();
  projectAPIs.forEach(project => {
    project.apis.forEach(api => {
      uniqueAPIs.add(api);
    });
  });
  return uniqueAPIs.size;
}

export function getAPICountByProject(projectId: string): number {
  const project = projectAPIs.find(p => p.projectId === projectId);
  return project?.apis.length ?? 0;
}
