'use client';

import { useEffect, useRef } from 'react';
import { frames } from '../data/bambooFrames';

const INTERVAL    = 1000 / 30;
const MAX_IDX     = frames.length - 1;
const CYCLE_LEN   = MAX_IDX * 2; // ping-pong: 0→89→0, seamless at both ends

export default function BambooFrames({ theme }) {
  const preRef    = useRef(null);
  const rafRef    = useRef(null);
  const posRef    = useRef(0);   // position in [0, CYCLE_LEN)
  const lastTsRef = useRef(null);

  useEffect(() => {
    const tick = (ts) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const elapsed = ts - lastTsRef.current;

      if (elapsed >= INTERVAL) {
        lastTsRef.current = ts - (elapsed % INTERVAL);
        posRef.current = (posRef.current + 1) % CYCLE_LEN;
        const frameIdx = posRef.current <= MAX_IDX
          ? posRef.current
          : CYCLE_LEN - posRef.current;
        if (preRef.current) {
          preRef.current.textContent = frames[frameIdx];
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
