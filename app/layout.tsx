import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StudioSabin — Mason Sabin',
  description:
    'Mason Sabin — Full-Stack Developer & Creative Technologist. Geospatial reasoning, AI trading systems, and environmental storytelling.',
  keywords: ['Developer', 'Portfolio', 'Next.js', 'Full-Stack', 'Geospatial', 'AI', 'React'],
  openGraph: {
    title: 'StudioSabin — Mason Sabin',
    description: 'Surreal digital experiences by Mason Sabin',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0a0a" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80' fill='%23d4af37'>S</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
