import { NextResponse } from 'next/server';

const REPOS = [
  'geosight-gspat',
  'Paunchy-sList',
  'buffet-bot',
  'puget-salmon-health',
  'microjam',
  'Wild-Washington',
  'pdga-TD-marketplace',
  'CloudForge',
  'PR-TRAINER',
];

const OWNER = 'sabinMas';

async function getCommitCount(repo: string): Promise<number> {
  try {
    const response = await fetch(
      `https://api.github.com/repos/${OWNER}/${repo}/commits?per_page=1`,
      {
        headers: {
          Accept: 'application/vnd.github.v3+json',
          ...(process.env.GITHUB_TOKEN && { Authorization: `token ${process.env.GITHUB_TOKEN}` }),
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) return 0;

    const link = response.headers.get('link');
    if (!link) {
      const data = await response.json();
      return Array.isArray(data) ? data.length : 0;
    }

    const lastMatch = link.match(/&page=(\d+)>; rel="last"/);
    if (lastMatch) {
      return parseInt(lastMatch[1], 10);
    }

    return 0;
  } catch (error) {
    console.error(`Failed to fetch commits for ${repo}:`, error);
    return 0;
  }
}

export async function GET() {
  try {
    const commitCounts = await Promise.all(
      REPOS.map(repo => getCommitCount(repo))
    );

    const total = commitCounts.reduce((sum, count) => sum + count, 0);

    return NextResponse.json({ commits: total }, { status: 200 });
  } catch (error) {
    console.error('Error fetching commit counts:', error);
    return NextResponse.json(
      { commits: null, error: 'Failed to fetch commit count' },
      { status: 500 }
    );
  }
}
