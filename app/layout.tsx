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
        <meta name="theme-color" content="#fafafa" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='80' font-size='80' fill='%231c1c1e'>S</text></svg>"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
