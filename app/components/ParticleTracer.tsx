'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  colorIdx: number;
}

const COLORS = [
  [212, 175, 55],   // gold
  [255, 215, 0],    // bright gold
  [224, 185, 80],   // warm gold
];

export default function ParticleTracer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -500, y: -500 });
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawBg = () => {
      const g = ctx.createLinearGradient(0, canvas.height * 0.55, canvas.width, canvas.height);
      g.addColorStop(0, '#0a0a0a');
      g.addColorStop(0.55, '#1a1a2e');
      g.addColorStop(1, '#16213e');
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

    let raf: number;

    const tick = () => {
      // Fade-trail instead of full clear
      ctx.fillStyle = 'rgba(10, 10, 10, 0.18)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Spawn 1-2 particles per frame
      if (Math.random() > 0.45) {
        const colorIdx = Math.floor(Math.random() * COLORS.length);
        particlesRef.current.push({
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          vx: (Math.random() - 0.5) * 3.5,
          vy: (Math.random() - 0.5) * 3.5 - 0.3,
          life: 1,
          size: Math.random() * 2.5 + 0.8,
          colorIdx,
        });
      }

      particlesRef.current = particlesRef.current.filter((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.04;     // gentle gravity
        p.vx *= 0.98;     // air resistance
        p.life -= 0.016;

        const [r, g, b] = COLORS[p.colorIdx];
        const a = p.life;

        // Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${a * 0.8})`;
        ctx.fill();

        // Glow halo
        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        grad.addColorStop(0, `rgba(${r},${g},${b},${a * 0.25})`);
        grad.addColorStop(1, `rgba(${r},${g},${b},0)`);
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
