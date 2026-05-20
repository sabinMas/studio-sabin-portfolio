import { NextResponse } from 'next/server';
import { projectAPIs, getTotalAPICount } from '@/config/projectAPIs';

export async function GET() {
  try {
    const totalAPIs = getTotalAPICount();
    const totalProjects = projectAPIs.length;

    return NextResponse.json(
      {
        totalAPIs,
        totalProjects,
        breakdown: projectAPIs.map(p => ({
          projectName: p.projectName,
          apiCount: p.apis.length,
          apis: p.apis,
        })),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching API stats:', error);
    return NextResponse.json(
      { totalAPIs: null, error: 'Failed to fetch API stats' },
      { status: 500 }
    );
  }
}
