'use client';

import { useEffect, useRef } from 'react';
import { frames } from '../data/bambooFrames';

const INTERVAL = 1000 / 30;

export default function BambooFrames({ theme }) {
  const preRef    = useRef(null);
  const rafRef    = useRef(null);
  const indexRef  = useRef(0);
  const lastTsRef = useRef(null);

  useEffect(() => {
    const tick = (ts) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const elapsed = ts - lastTsRef.current;

      if (elapsed >= INTERVAL) {
        lastTsRef.current = ts - (elapsed % INTERVAL);
        indexRef.current  = (indexRef.current + 1) % frames.length;
        if (preRef.current) {
          preRef.current.textContent = frames[indexRef.current];
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    if (preRef.current) {
      preRef.current.textContent = frames[0];
    }
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <pre
      ref={preRef}
      className="p-hills-canvas"
      data-theme={theme}
      aria-hidden="true"
    />
  );
}
