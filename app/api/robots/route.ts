export async function GET() {
  return new Response(
    `User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://studio-sabin.vercel.app/sitemap.xml
`,
    {
      headers: {
        'Content-Type': 'text/plain',
      },
    }
  );
}
