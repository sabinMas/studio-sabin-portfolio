'use client';

import { useEffect, useRef } from 'react';
import type { Theme } from '@/themes';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  r: number;
  g: number;
  b: number;
}

interface CanvasTheme {
  accentRgb: [number, number, number];
  trailRgb: [number, number, number];
  bgDeep: string;
  bgMid: string;
  isLight: boolean;
}

const DEFAULT_THEME: CanvasTheme = {
  accentRgb: [212, 175, 55],
  trailRgb: [10, 10, 10],
  bgDeep: '#0a0a0a',
  bgMid: '#1a1a2e',
  isLight: false,
};

export default function ParticleTracer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -500, y: -500 });
  const particlesRef = useRef<Particle[]>([]);
  const themeRef = useRef<CanvasTheme>(DEFAULT_THEME);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawBg = () => {
      const t = themeRef.current;
      if (t.isLight) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      const g = ctx.createLinearGradient(0, 0, canvas.width * 0.6, canvas.height);
      g.addColorStop(0, t.bgDeep);
      g.addColorStop(1, t.bgMid);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawBg();
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', onMouseMove);

    const onThemeChange = (e: Event) => {
      const theme = (e as CustomEvent<Theme>).detail;
      themeRef.current = {
        accentRgb: theme.accentRgb,
        trailRgb: theme.trailRgb,
        bgDeep: theme.bgDeep,
        bgMid: theme.bgMid,
        isLight: theme.isLight,
      };
      // Immediately repaint background on theme switch
      drawBg();
    };
    window.addEventListener('theme-change', onThemeChange);

    let raf: number;

    const tick = () => {
      const t = themeRef.current;
      const [tr, tg, tb] = t.trailRgb;

      if (t.isLight) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.fillStyle = `rgba(${tr},${tg},${tb},0.15)`;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      // Spawn particles at cursor
      if (Math.random() > 0.45) {
        const [ar, ag, ab] = t.accentRgb;
        particlesRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          vx: (Math.random() - 0.5) * 3.5,
          vy: (Math.random() - 0.5) * 3.5 - 0.3,
          life: 1,
          size: Math.random() * 2.5 + 0.8,
          r: ar, g: ag, b: ab,
        });
      }

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;
        p.vx *= 0.98;
        p.life -= 0.016;

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${p.life * 0.8})`;
        ctx.fill();

        // Glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        grad.addColorStop(0, `rgba(${p.r},${p.g},${p.b},${p.life * 0.22})`);
        grad.addColorStop(1, `rgba(${p.r},${p.g},${p.b},0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        return p.life > 0;
      });

      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('theme-change', onThemeChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
