'use client';

import { useState, useEffect, useRef } from 'react';

export function useGravity() {
  const [gravityOn, setGravityOn] = useState(false);
  const gravityCleanupRef = useRef(null);

  useEffect(() => {
    return () => { gravityCleanupRef.current?.(); };
  }, []);

  const activateGravity = async () => {
    if (gravityOn) return;

    // Snap to top so all elements are in viewport
    window.scrollTo({ top: 0, behavior: 'instant' });
    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    const Matter = await import('matter-js');
    const { Engine, Bodies, Body, World, Mouse, MouseConstraint } = Matter;

    // Query the full page content (hero + work section), excluding nav & gravity controls
    const root = document.querySelector('.p-content') || document.body;
    const elements = Array.from(
      root.querySelectorAll(
        '.p-hero-greeting, .p-hero-sub, .p-section-label, .p-project-card, .p-view-repos-btn, .p-list-item'
      )
    ).filter(el => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    });
    if (elements.length === 0) return;

    const physicsItems = elements.map(el => {
      const rect = el.getBoundingClientRect();
      return {
        el,
        rect,
        savedStyle: el.style.cssText,
        cx: rect.left + rect.width / 2,
        cy: rect.top + rect.height / 2,
      };
    });

    // Lock scroll
    document.body.style.overflow = 'hidden';

    // Detach elements into fixed position
    physicsItems.forEach(({ el, rect }) => {
      const extra = el.classList.contains('p-list-item')
        ? `border:1px solid var(--border);border-radius:8px;background:var(--bg-raised);`
        : '';
      el.style.cssText = `
        position:fixed;top:${rect.top}px;left:${rect.left}px;
        width:${rect.width}px;height:${rect.height}px;
        margin:0;z-index:9001;pointer-events:none;
        transform:none;transform-origin:center center;${extra}
      `;
    });

    // Invisible overlay — captures mouse events for drag
    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:9000;cursor:grab;user-select:none;';
    document.body.appendChild(overlay);
    overlay.addEventListener('mousedown', () => { overlay.style.cursor = 'grabbing'; });
    overlay.addEventListener('mouseup',   () => { overlay.style.cursor = 'grab'; });

    // Physics
    const engine = Engine.create({ gravity: { y: 2 } });
    const world  = engine.world;
    const W = window.innerWidth, H = window.innerHeight;

    const matterBodies = physicsItems.map(({ cx, cy, rect }) => {
      const b = Bodies.rectangle(cx, cy, rect.width, rect.height, {
        restitution: 0.4,
        friction: 0.8,
        frictionAir: 0.009,
      });
      Body.setAngularVelocity(b, (Math.random() - 0.5) * 0.08);
      return b;
    });

    World.add(world, [
      ...matterBodies,
      Bodies.rectangle(W / 2,  H + 25,  W * 2, 50,    { isStatic: true }), // floor
      Bodies.rectangle(-25,    H / 2,   50,    H * 3, { isStatic: true }), // left
      Bodies.rectangle(W + 25, H / 2,   50,    H * 3, { isStatic: true }), // right
    ]);

    const mouse = Mouse.create(overlay);
    World.add(world, MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.15, render: { visible: false } },
    }));

    // Sync DOM to physics each frame
    let raf;
    let lastTime = performance.now();
    const tick = (now) => {
      Engine.update(engine, Math.min(now - lastTime, 50));
      lastTime = now;
      physicsItems.forEach(({ el, cx, cy }, i) => {
        const b = matterBodies[i];
        el.style.transform = `translate(${b.position.x - cx}px,${b.position.y - cy}px) rotate(${b.angle}rad)`;
      });
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    gravityCleanupRef.current = () => {
      cancelAnimationFrame(raf);
      World.clear(world);
      Engine.clear(engine);
      document.body.style.overflow = '';
      overlay.remove();
      physicsItems.forEach(({ el, savedStyle }) => {
        el.style.cssText = savedStyle;
      });
    };

    setGravityOn(true);
  };

  const deactivateGravity = () => {
    gravityCleanupRef.current?.();
    gravityCleanupRef.current = null;
    setGravityOn(false);
  };

  return { gravityOn, activateGravity, deactivateGravity };
}
