'use client';

import { useRef, useEffect } from 'react';

// Deterministic pseudo-random so layout is stable across renders
function rng(i, salt) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function makeStalks(count) {
  return Array.from({ length: count }, (_, i) => ({
    xFrac:     (i + 0.1 + rng(i, 0) * 0.8) / count,
    rows:      10 + Math.floor(rng(i, 1) * 14),
    speed:     0.12 + rng(i, 2) * 0.22,
    phase:     rng(i, 3) * Math.PI * 2,
    sway:      2 + rng(i, 4) * 7,
    size:      9 + Math.floor(rng(i, 5) * 9),    // 9–17 px
    alpha:     0.25 + rng(i, 6) * 0.55,
    nodeEvery: 4 + Math.floor(rng(i, 7) * 3),
    leafDir:   rng(i, 8) > 0.5 ? 1 : -1,
  })).sort((a, b) => a.size - b.size); // small (far) drawn first
}

const STALKS = makeStalks(58);

export default function HillsCanvas({ theme }) {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = 300;
    };
    resize();
    window.addEventListener('resize', resize);

    const getColor = () => theme === 'light' ? '#6e6f67' : '#a2ab9b';

    let t = 0;
    let lastTs = 0;

    const draw = (ts) => {
      const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.05) : 0.016;
      lastTs = ts;
      t += dt;

      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const color = getColor();
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'bottom';

      STALKS.forEach(({ xFrac, rows, speed, phase, sway, size, alpha, nodeEvery, leafDir }) => {
        const lineH  = size * 1.3;
        const charW  = size * 0.62;
        const x      = xFrac * width + Math.sin(t * speed + phase) * sway;

        ctx.font      = `${size}px ui-monospace, 'SF Mono', Menlo, monospace`;
        ctx.fillStyle = color;

        for (let row = 0; row < rows; row++) {
          const y = height - row * lineH;
          if (y < lineH) break;

          const isNode     = row > 0 && row % nodeEvery === 0;
          const isLeafRow  = row > 0 && row % nodeEvery === nodeEvery - 1;
          const isTop      = row === rows - 1;

          if (isTop) {
            ctx.globalAlpha = alpha * 0.8;
            ctx.fillText(leafDir > 0 ? '~/' : '\\~', x, y);
          } else if (isNode) {
            ctx.globalAlpha = alpha;
            ctx.fillText('o', x, y);
          } else if (isLeafRow) {
            ctx.globalAlpha = alpha;
            ctx.fillText('|', x, y);
            // leaf branch off to one side
            ctx.globalAlpha = alpha * 0.65;
            const leafX = x + (leafDir > 0 ? charW * 1.6 : -charW * 1.6);
            ctx.fillText(leafDir > 0 ? '/' : '\\', leafX, y - lineH * 0.3);
          } else {
            ctx.globalAlpha = alpha;
            ctx.fillText('|', x, y);
          }
        }
      });

      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="p-hills-canvas"
      aria-hidden="true"
    />
  );
}
