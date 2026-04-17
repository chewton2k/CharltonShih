'use client';

import { useRef, useEffect } from 'react';

function rng(i, salt) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export default function HillsCanvas({ theme }) {
  const canvasRef = useRef(null);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const CELL_W    = 9;
    const CELL_H    = 14;
    const FONT_SIZE = 13;

    let cols = 0, rows = 0, dispW = 0, dispH = 0;
    let stalks = [];

    const buildStalks = () => {
      const density = 0.22;
      const n = Math.max(22, Math.floor(cols * density));
      stalks = Array.from({ length: n }, (_, i) => {
        const depth = rng(i, 10);            // 0 far → 1 near
        const front = depth > 0.55;
        return {
          col:       Math.floor((i + 0.5 + (rng(i, 0) - 0.5) * 0.95) * (cols / n)),
          height:    front
                       ? 8  + Math.floor(rng(i, 1) * 18)   // 8–26 tall foreground
                       : 4  + Math.floor(rng(i, 1) * 13),  // 4–17 short background
          speed:     0.45 + rng(i, 2) * 0.9,
          phase:     rng(i, 3) * Math.PI * 2,
          nodeEvery: 4 + Math.floor(rng(i, 4) * 3),
          leafDir:   rng(i, 5) > 0.5 ? 1 : -1,
          alpha:     front
                       ? 0.62 + depth * 0.32 + rng(i, 6) * 0.06
                       : 0.14 + depth * 0.30 + rng(i, 6) * 0.07,
          maxBend:   front ? 1.4 + rng(i, 7) * 1.2 : 0.6 + rng(i, 7) * 0.6,
          leafyMask: (rng(i, 8) * 1e6) | 0,
          front,
          depth,
        };
      }).sort((a, b) => a.depth - b.depth);
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr  = window.devicePixelRatio || 1;
      dispW = rect.width;
      dispH = rect.height || 220;
      canvas.width  = dispW * dpr;
      canvas.height = dispH * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.max(1, Math.floor(dispW / CELL_W));
      rows = Math.max(1, Math.floor(dispH / CELL_H));
      buildStalks();
    };
    resize();
    window.addEventListener('resize', resize);

    const getColor = () => theme === 'light' ? '#6e6f67' : '#a2ab9b';

    let t = 0, lastTs = 0;
    let gustAmp = 0, gustDir = 1;
    let nextGustAt = 2 + Math.random() * 3;

    const leaves = [];

    const drawCell = (col, row, ch, alpha) => {
      if (col < 0 || col >= cols || row < 0 || row >= rows) return;
      ctx.globalAlpha = alpha;
      ctx.fillText(ch, col * CELL_W + CELL_W / 2, row * CELL_H + CELL_H / 2);
    };

    const draw = (ts) => {
      const dt = lastTs ? Math.min((ts - lastTs) / 1000, 0.05) : 0.016;
      lastTs = ts;
      t += dt;

      nextGustAt -= dt;
      if (nextGustAt <= 0) {
        gustAmp    = Math.min(1.5, gustAmp + 0.55 + Math.random() * 0.55);
        gustDir    = Math.random() > 0.5 ? 1 : -1;
        nextGustAt = 3 + Math.random() * 5;
      }
      gustAmp *= Math.exp(-dt * 0.55);

      ctx.clearRect(0, 0, dispW, dispH);
      ctx.font = `${FONT_SIZE}px ui-monospace, 'SF Mono', Menlo, monospace`;
      ctx.textAlign    = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle    = getColor();

      for (let si = 0; si < stalks.length; si++) {
        const s = stalks[si];
        const { col, height, speed, phase, nodeEvery, leafDir, alpha, maxBend, leafyMask, front } = s;
        const bend = Math.sin(t * speed + phase) + gustDir * gustAmp * 0.4;

        let prevCol = col;
        for (let r = 0; r < height; r++) {
          const gridRow = rows - 1 - r;
          if (gridRow < 0) break;

          const frac    = r / Math.max(1, height - 1);
          const weight  = frac * frac;
          const offsetF = bend * maxBend * weight;
          const drawCol = col + Math.round(offsetF);
          const dCol    = drawCol - prevCol;
          const culm    = dCol >= 1 ? '/' : dCol <= -1 ? '\\' : '|';

          const isNode    = r > 0 && r % nodeEvery === 0;
          const isLeafRow = r > 0 && r % nodeEvery === nodeEvery - 1;
          const isTop     = r === height - 1;
          const leafy     = ((leafyMask >> (r % 31)) & 1) === 1;
          const wind      = offsetF > 0.3 ? 1 : offsetF < -0.3 ? -1 : leafDir;

          if (!front) {
            // ── BACKGROUND: 1-col thin, dim, minimal ──
            if (isTop) {
              drawCell(drawCol, gridRow, culm, alpha);
              if (gridRow - 1 >= 0) {
                drawCell(drawCol,        gridRow - 1, '|', alpha * 0.8);
                drawCell(drawCol + wind, gridRow - 1, wind > 0 ? '/' : '\\', alpha * 0.7);
              }
            } else if (isNode) {
              drawCell(drawCol, gridRow, '=', alpha);
            } else if (isLeafRow && leafy) {
              drawCell(drawCol, gridRow, culm, alpha);
              drawCell(drawCol + wind, gridRow, wind > 0 ? '/' : '\\', alpha * 0.75);
            } else {
              drawCell(drawCol, gridRow, culm, alpha);
            }

          } else {
            // ── FOREGROUND: 2-col thick culms, one side leaf per leaf row ──
            if (isTop) {
              drawCell(drawCol,     gridRow, culm, alpha);
              drawCell(drawCol + 1, gridRow, culm, alpha);
              if (gridRow - 1 >= 0) {
                drawCell(drawCol,     gridRow - 1, '|', alpha * 0.85);
                drawCell(drawCol + 1, gridRow - 1, '|', alpha * 0.85);
                // Single side leaf on the windward side of the crown.
                const sideCol = wind > 0 ? drawCol + 2 : drawCol - 1;
                drawCell(sideCol, gridRow - 1, wind > 0 ? '/' : '\\', alpha * 0.8);
              }
            } else if (isNode) {
              // Joint ring across 4 cells.
              drawCell(drawCol - 1, gridRow, '"', alpha * 0.7);
              drawCell(drawCol,     gridRow, '=', alpha);
              drawCell(drawCol + 1, gridRow, '=', alpha);
              drawCell(drawCol + 2, gridRow, '"', alpha * 0.7);
            } else if (isLeafRow && leafy) {
              drawCell(drawCol,     gridRow, culm, alpha);
              drawCell(drawCol + 1, gridRow, culm, alpha);
              // One leaf only, on the wind side.
              const leafCol = wind > 0 ? drawCol + 2 : drawCol - 1;
              drawCell(leafCol, gridRow, wind > 0 ? '/' : '\\', alpha * 0.9);

              // Gust break-off → drifting leaf particle.
              if (gustAmp > 0.5 && Math.random() < 0.012 * gustAmp) {
                leaves.push({
                  col:   leafCol,
                  row:   gridRow,
                  vx:    gustDir * (2.5 + Math.random() * 3),
                  vy:    -0.3 - Math.random() * 1.1,
                  life:  2 + Math.random() * 2.5,
                  age:   0,
                  glyph: Math.random() > 0.5 ? '~' : (gustDir > 0 ? '/' : '\\'),
                });
              }
            } else {
              drawCell(drawCol,     gridRow, culm, alpha);
              drawCell(drawCol + 1, gridRow, culm, alpha);
            }
          }

          prevCol = drawCol;
        }
      }

      // ── LEAF PARTICLES ─────────────────────────────────────────────────
      for (let i = leaves.length - 1; i >= 0; i--) {
        const L = leaves[i];
        L.age += dt;
        L.col += L.vx * dt;
        L.row += L.vy * dt;
        L.vy  += 0.35 * dt;
        L.vx  += (gustDir * gustAmp - Math.sign(L.vx) * 0.3) * dt;

        if (L.age > L.life || L.col < -1 || L.col > cols + 1 || L.row > rows + 1 || L.row < -3) {
          leaves.splice(i, 1);
          continue;
        }
        if (Math.random() < 0.03) {
          L.glyph = L.glyph === '~' ? (L.vx > 0 ? '/' : '\\') : '~';
        }
        const lifeFrac = 1 - L.age / L.life;
        drawCell(Math.round(L.col), Math.round(L.row), L.glyph, 0.55 * lifeFrac);
      }

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
