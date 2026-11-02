export interface ProjectAPI {
  projectId: string;
  projectName: string;
  apis: string[];
}

export const projectAPIs: ProjectAPI[] = [
  {
    projectId: '1',
    projectName: 'Job Application Tracker',
    apis: [
      'AWS Bedrock Claude API',
    ],
  },
  {
    projectId: '2',
    projectName: 'All Things Floral by Tab',
    apis: [
      'Formspree API',
    ],
  },
  {
    projectId: '3',
    projectName: 'Centroid Finder',
    apis: [], // Self-contained image-processing pipeline, no external APIs
  },
  {
    projectId: '4',
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
    projectId: '5',
    projectName: "Paunchy's List",
    apis: [], // Curated database, no external APIs
  },
  {
    projectId: '6',
    projectName: 'Puget Salmon Health',
    apis: [
      'NOAA Fisheries API',
      'Washington State Department of Ecology API',
      'USGS Water Resources API',
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
