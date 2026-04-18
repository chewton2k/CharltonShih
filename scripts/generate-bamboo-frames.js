#!/usr/bin/env node
// Run: npm run gen:bamboo

const fs   = require('fs');
const path = require('path');

const COLS         = 120;
const ROWS         = 15;
const TOTAL_FRAMES = 90;
const DT           = 1 / 30;

// Identical to HillsCanvas.jsx — produces the same stalk layout deterministically
function rng(i, salt) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function buildStalks() {
  const density = 0.22;
  const n = Math.max(22, Math.floor(COLS * density));
  return Array.from({ length: n }, (_, i) => {
    const depth = rng(i, 10);
    const front = depth > 0.55;
    return {
      col:       Math.floor((i + 0.5 + (rng(i, 0) - 0.5) * 0.95) * (COLS / n)),
      height:    front ? 8  + Math.floor(rng(i, 1) * 18)
                       : 4  + Math.floor(rng(i, 1) * 13),
      speed:     0.45 + rng(i, 2) * 0.9,
      phase:     rng(i, 3) * Math.PI * 2,
      nodeEvery: 4 + Math.floor(rng(i, 4) * 3),
      leafDir:   rng(i, 5) > 0.5 ? 1 : -1,
      maxBend:   front ? 1.4 + rng(i, 7) * 1.2 : 0.6 + rng(i, 7) * 0.6,
      leafyMask: (rng(i, 8) * 1e6) | 0,
      front,
      depth,
    };
  }).sort((a, b) => a.depth - b.depth);
}

// 6 pre-computed drifting leaf glyphs staggered across the loop
function buildLeafParticles() {
  return Array.from({ length: 6 }, (_, i) => ({
    startFrame: Math.floor((i / 6) * TOTAL_FRAMES),
    col:   5  + Math.floor(rng(i, 200) * (COLS - 10)),
    row:   4  + Math.floor(rng(i, 201) * 7),
    life:  30 + Math.floor(rng(i, 202) * 30),
    vx:    (rng(i, 203) > 0.5 ? 1 : -1) * (0.08 + rng(i, 204) * 0.12),
    vy:    0.02 + rng(i, 205) * 0.06,
    glyph: rng(i, 206) > 0.5 ? '~' : (rng(i, 207) > 0.5 ? '/' : '\\'),
  }));
}

function renderFrame(t, stalks, leafParticles, frame) {
  const grid = Array.from({ length: ROWS }, () => new Array(COLS).fill(' '));

  const put = (col, row, ch) => {
    if (col >= 0 && col < COLS && row >= 0 && row < ROWS) grid[row][col] = ch;
  };

  for (const s of stalks) {
    const { col, height, speed, phase, nodeEvery, leafDir, maxBend, leafyMask, front } = s;
    const bend = Math.sin(t * speed + phase);   // no gusts — deterministic (loop boundary may have a small snap)

    let prevCol = col;
    for (let r = 0; r < height; r++) {
      const gridRow = ROWS - 1 - r;
      if (gridRow < 0) break;

      const frac    = r / Math.max(1, height - 1);
      const offsetF = bend * maxBend * frac * frac;
      const drawCol = col + Math.round(offsetF);
      const dCol    = drawCol - prevCol;
      const culm    = dCol >= 1 ? '/' : dCol <= -1 ? '\\' : '|';

      const isNode    = r > 0 && r % nodeEvery === 0;
      const isLeafRow = r > 0 && r % nodeEvery === nodeEvery - 1;
      const isTop     = r === height - 1;
      const leafy     = ((leafyMask >> (r % 31)) & 1) === 1;
      const wind      = offsetF > 0.3 ? 1 : offsetF < -0.3 ? -1 : leafDir;

      if (!front) {
        if (isTop) {
          put(drawCol, gridRow, culm);
          if (gridRow - 1 >= 0) {
            put(drawCol,        gridRow - 1, '|');
            put(drawCol + wind, gridRow - 1, wind > 0 ? '/' : '\\');
          }
        } else if (isNode) {
          put(drawCol, gridRow, '=');
        } else if (isLeafRow && leafy) {
          put(drawCol,        gridRow, culm);
          put(drawCol + wind, gridRow, wind > 0 ? '/' : '\\');
        } else {
          put(drawCol, gridRow, culm);
        }
      } else {
        if (isTop) {
          put(drawCol,     gridRow, culm);
          put(drawCol + 1, gridRow, culm);
          if (gridRow - 1 >= 0) {
            put(drawCol,     gridRow - 1, '|');
            put(drawCol + 1, gridRow - 1, '|');
            const sideCol = wind > 0 ? drawCol + 2 : drawCol - 1;
            put(sideCol, gridRow - 1, wind > 0 ? '/' : '\\');
          }
        } else if (isNode) {
          put(drawCol - 1, gridRow, '"');
          put(drawCol,     gridRow, '=');
          put(drawCol + 1, gridRow, '=');
          put(drawCol + 2, gridRow, '"');
        } else if (isLeafRow && leafy) {
          put(drawCol,     gridRow, culm);
          put(drawCol + 1, gridRow, culm);
          const leafCol = wind > 0 ? drawCol + 2 : drawCol - 1;
          put(leafCol, gridRow, wind > 0 ? '/' : '\\');
        } else {
          put(drawCol,     gridRow, culm);
          put(drawCol + 1, gridRow, culm);
        }
      }

      prevCol = drawCol;
    }
  }

  // Drifting leaf particles
  for (const p of leafParticles) {
    const age = (frame - p.startFrame + TOTAL_FRAMES) % TOTAL_FRAMES;
    if (age < p.life) {
      const c = Math.round(p.col + p.vx * age);
      const r = Math.round(p.row + p.vy * age);
      put(c, r, p.glyph);
    }
  }

  // Trim trailing spaces per row (reduces file size)
  return grid.map(row => row.join('').trimEnd()).join('\n');
}

const stalks        = buildStalks();
const leafParticles = buildLeafParticles();
const frames        = [];

for (let f = 0; f < TOTAL_FRAMES; f++) {
  frames.push(renderFrame(f * DT, stalks, leafParticles, f));
}

const output = `// Auto-generated by scripts/generate-bamboo-frames.js — do not edit by hand
// ${TOTAL_FRAMES} frames at 30fps (${(TOTAL_FRAMES / 30).toFixed(1)}s loop)
export const frames = ${JSON.stringify(frames, null, 2)};
`;

const outPath = path.join(__dirname, '..', 'app', 'data', 'bambooFrames.js');
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, output, 'utf8');
console.log(`✓ Generated ${frames.length} frames → ${outPath} (${(output.length / 1024).toFixed(1)} KB)`);
