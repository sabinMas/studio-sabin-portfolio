'use client';

export interface Theme {
  id: string;
  name: string;
  category: 'dark' | 'light' | 'mono';
  accent: string;
  bg: string;
  accentRgb: [number, number, number];
  trailRgb: [number, number, number];
  bgDeep: string;
  bgMid: string;
  isLight: boolean;
  vars: Record<string, string>;
}

export const themes: Theme[] = [
  // ── DARK ──────────────────────────────────────────────────────
  {
    id: 'dali-gold',
    name: 'Dalí Gold',
    category: 'dark',
    accent: '#d4af37',
    bg: '#0a0a0a',
    accentRgb: [212, 175, 55],
    trailRgb: [10, 10, 10],
    bgDeep: '#0a0a0a',
    bgMid: '#1a1a2e',
    isLight: false,
    vars: {
      '--bg-deep': '#0a0a0a',
      '--bg-mid': '#1a1a2e',
      '--bg-accent': '#16213e',
      '--accent': '#d4af37',
      '--accent-bright': '#ffd700',
      '--accent-rgb': '212, 175, 55',
      '--text': '#e0e0e0',
      '--text-rgb': '224, 224, 224',
      '--card-bg': 'rgba(22, 22, 42, 0.85)',
      '--card-border': 'rgba(212, 175, 55, 0.13)',
      '--nav-bg': 'rgba(10, 10, 10, 0.92)',
    },
  },
  {
    id: 'midnight-ocean',
    name: 'Midnight Ocean',
    category: 'dark',
    accent: '#00c8ff',
    bg: '#040d18',
    accentRgb: [0, 200, 255],
    trailRgb: [4, 13, 24],
    bgDeep: '#040d18',
    bgMid: '#0a1929',
    isLight: false,
    vars: {
      '--bg-deep': '#040d18',
      '--bg-mid': '#0a1929',
      '--bg-accent': '#0f2545',
      '--accent': '#00c8ff',
      '--accent-bright': '#40e0ff',
      '--accent-rgb': '0, 200, 255',
      '--text': '#cce8ff',
      '--text-rgb': '204, 232, 255',
      '--card-bg': 'rgba(10, 25, 45, 0.88)',
      '--card-border': 'rgba(0, 200, 255, 0.13)',
      '--nav-bg': 'rgba(4, 13, 24, 0.93)',
    },
  },
  {
    id: 'crimson-void',
    name: 'Crimson Void',
    category: 'dark',
    accent: '#ff4d6d',
    bg: '#0d0508',
    accentRgb: [255, 77, 109],
    trailRgb: [13, 5, 8],
    bgDeep: '#0d0508',
    bgMid: '#1a0a10',
    isLight: false,
    vars: {
      '--bg-deep': '#0d0508',
      '--bg-mid': '#1a0a10',
      '--bg-accent': '#240f18',
      '--accent': '#ff4d6d',
      '--accent-bright': '#ff7090',
      '--accent-rgb': '255, 77, 109',
      '--text': '#ffd6de',
      '--text-rgb': '255, 214, 222',
      '--card-bg': 'rgba(30, 10, 18, 0.88)',
      '--card-border': 'rgba(255, 77, 109, 0.13)',
      '--nav-bg': 'rgba(13, 5, 8, 0.93)',
    },
  },
  {
    id: 'emerald-night',
    name: 'Emerald Night',
    category: 'dark',
    accent: '#22c55e',
    bg: '#050d07',
    accentRgb: [34, 197, 94],
    trailRgb: [5, 13, 7],
    bgDeep: '#050d07',
    bgMid: '#0a1a0e',
    isLight: false,
    vars: {
      '--bg-deep': '#050d07',
      '--bg-mid': '#0a1a0e',
      '--bg-accent': '#0f2416',
      '--accent': '#22c55e',
      '--accent-bright': '#4ade80',
      '--accent-rgb': '34, 197, 94',
      '--text': '#d4f5de',
      '--text-rgb': '212, 245, 222',
      '--card-bg': 'rgba(10, 26, 14, 0.88)',
      '--card-border': 'rgba(34, 197, 94, 0.13)',
      '--nav-bg': 'rgba(5, 13, 7, 0.93)',
    },
  },
  {
    id: 'violet-dusk',
    name: 'Violet Dusk',
    category: 'dark',
    accent: '#a855f7',
    bg: '#0a0614',
    accentRgb: [168, 85, 247],
    trailRgb: [10, 6, 20],
    bgDeep: '#0a0614',
    bgMid: '#130b24',
    isLight: false,
    vars: {
      '--bg-deep': '#0a0614',
      '--bg-mid': '#130b24',
      '--bg-accent': '#1c1038',
      '--accent': '#a855f7',
      '--accent-bright': '#c084fc',
      '--accent-rgb': '168, 85, 247',
      '--text': '#ead6ff',
      '--text-rgb': '234, 214, 255',
      '--card-bg': 'rgba(20, 12, 38, 0.88)',
      '--card-border': 'rgba(168, 85, 247, 0.13)',
      '--nav-bg': 'rgba(10, 6, 20, 0.93)',
    },
  },

  // ── LIGHT ─────────────────────────────────────────────────────
  {
    id: 'ivory-studio',
    name: 'Ivory Studio',
    category: 'light',
    accent: '#b5720a',
    bg: '#f5f0e8',
    accentRgb: [181, 114, 10],
    trailRgb: [245, 240, 232],
    bgDeep: '#f5f0e8',
    bgMid: '#ede5d8',
    isLight: true,
    vars: {
      '--bg-deep': '#f5f0e8',
      '--bg-mid': '#ede5d8',
      '--bg-accent': '#e5dac8',
      '--accent': '#b5720a',
      '--accent-bright': '#d4880c',
      '--accent-rgb': '181, 114, 10',
      '--text': '#2d1f10',
      '--text-rgb': '45, 31, 16',
      '--card-bg': 'rgba(255, 250, 242, 0.9)',
      '--card-border': 'rgba(181, 114, 10, 0.18)',
      '--nav-bg': 'rgba(245, 240, 232, 0.95)',
    },
  },
  {
    id: 'arctic',
    name: 'Arctic',
    category: 'light',
    accent: '#2563eb',
    bg: '#f0f5ff',
    accentRgb: [37, 99, 235],
    trailRgb: [240, 245, 255],
    bgDeep: '#f0f5ff',
    bgMid: '#e5eeff',
    isLight: true,
    vars: {
      '--bg-deep': '#f0f5ff',
      '--bg-mid': '#e5eeff',
      '--bg-accent': '#dae4ff',
      '--accent': '#2563eb',
      '--accent-bright': '#3b82f6',
      '--accent-rgb': '37, 99, 235',
      '--text': '#0f1e3d',
      '--text-rgb': '15, 30, 61',
      '--card-bg': 'rgba(255, 255, 255, 0.88)',
      '--card-border': 'rgba(37, 99, 235, 0.15)',
      '--nav-bg': 'rgba(240, 245, 255, 0.96)',
    },
  },
  {
    id: 'rose-quartz',
    name: 'Rose Quartz',
    category: 'light',
    accent: '#e11d48',
    bg: '#fff5f7',
    accentRgb: [225, 29, 72],
    trailRgb: [255, 245, 247],
    bgDeep: '#fff5f7',
    bgMid: '#ffe8ed',
    isLight: true,
    vars: {
      '--bg-deep': '#fff5f7',
      '--bg-mid': '#ffe8ed',
      '--bg-accent': '#ffd6df',
      '--accent': '#e11d48',
      '--accent-bright': '#f43f63',
      '--accent-rgb': '225, 29, 72',
      '--text': '#3d0f1f',
      '--text-rgb': '61, 15, 31',
      '--card-bg': 'rgba(255, 255, 255, 0.88)',
      '--card-border': 'rgba(225, 29, 72, 0.15)',
      '--nav-bg': 'rgba(255, 245, 247, 0.96)',
    },
  },

  // ── MONOCHROMATIC ─────────────────────────────────────────────
  {
    id: 'pure-noir',
    name: 'Pure Noir',
    category: 'mono',
    accent: '#ffffff',
    bg: '#000000',
    accentRgb: [255, 255, 255],
    trailRgb: [0, 0, 0],
    bgDeep: '#000000',
    bgMid: '#0d0d0d',
    isLight: false,
    vars: {
      '--bg-deep': '#000000',
      '--bg-mid': '#0d0d0d',
      '--bg-accent': '#1a1a1a',
      '--accent': '#ffffff',
      '--accent-bright': '#ffffff',
      '--accent-rgb': '255, 255, 255',
      '--text': '#e8e8e8',
      '--text-rgb': '232, 232, 232',
      '--card-bg': 'rgba(18, 18, 18, 0.9)',
      '--card-border': 'rgba(255, 255, 255, 0.1)',
      '--nav-bg': 'rgba(0, 0, 0, 0.95)',
    },
  },
  {
    id: 'steel',
    name: 'Steel',
    category: 'mono',
    accent: '#6b8096',
    bg: '#0f1318',
    accentRgb: [107, 128, 150],
    trailRgb: [15, 19, 24],
    bgDeep: '#0f1318',
    bgMid: '#1c2128',
    isLight: false,
    vars: {
      '--bg-deep': '#0f1318',
      '--bg-mid': '#1c2128',
      '--bg-accent': '#252d38',
      '--accent': '#6b8096',
      '--accent-bright': '#8ba0b8',
      '--accent-rgb': '107, 128, 150',
      '--text': '#b8c8d8',
      '--text-rgb': '184, 200, 216',
      '--card-bg': 'rgba(28, 33, 40, 0.9)',
      '--card-border': 'rgba(107, 128, 150, 0.15)',
      '--nav-bg': 'rgba(15, 19, 24, 0.94)',
    },
  },
];

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.setAttribute('data-theme', theme.id);
  root.setAttribute('data-theme-type', theme.category);
  root.setAttribute('data-light', theme.isLight ? '1' : '0');
  localStorage.setItem('portfolio-theme', theme.id);
  window.dispatchEvent(new CustomEvent('theme-change', { detail: theme }));
}

export function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return themes[0];
  const saved = localStorage.getItem('portfolio-theme');
  return themes.find((t) => t.id === saved) ?? themes[0];
}
