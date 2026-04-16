'use client';

import { useRef, useEffect } from 'react';

const SCENE = `
  *      .           *        .              *        .       *
       .        *         .          *            .
                              ___
                    _________( ∩ )_________
               ____/         /|\\          \\____          /\\
          ____/             / | \\              \\____    /  \\____
     ____/           ↑    _/  |  \\_    ↑           \\__/         \\____
    /               /|\\  /    |    \\  /|\\                              \\
___/_______________________________________________/________________________\\___
________________________________________________________________________________`.trimStart();

const AMPLITUDE = 3;
const SPEED     = 0.002;
const FREQ      = 0.28;

export default function AsciiHills() {
  const containerRef = useRef(null);
  const rafRef       = useRef(null);
  const spansRef     = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const rows = SCENE.split('\n');
    containerRef.current.innerHTML = '';
    spansRef.current = [];

    rows.forEach((row) => {
      const rowDiv = document.createElement('div');
      const spans = [];

      Array.from(row).forEach((char, colIdx) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.dataset.col = colIdx;
        rowDiv.appendChild(span);
        spans.push(span);
      });

      containerRef.current.appendChild(rowDiv);
      spansRef.current.push(...spans);
    });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const startWave = () => {
    if (rafRef.current) return;
    spansRef.current.forEach(span => { span.style.transition = 'none'; });
    const startTime = performance.now();

    const tick = (timestamp) => {
      const elapsed = timestamp - startTime;
      spansRef.current.forEach((span) => {
        const col = parseInt(span.dataset.col, 10);
        const y   = Math.sin(elapsed * SPEED + col * FREQ) * AMPLITUDE;
        span.style.transform = `translateY(${y}px)`;
      });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  const stopWave = () => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    spansRef.current.forEach((span) => {
      span.style.transition = 'transform 0.5s ease';
      span.style.transform  = 'translateY(0)';
    });
  };

  return (
    <div
      ref={containerRef}
      className="p-ascii-hills"
      onMouseEnter={startWave}
      onMouseLeave={stopWave}
      aria-hidden="true"
    />
  );
}
