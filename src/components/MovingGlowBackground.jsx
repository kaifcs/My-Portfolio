// components/MovingGlowBackground.jsx
"use client";
import { useEffect, useRef } from "react";

export default function MovingGlowBackground() {
  const glowRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    // initial and target mouse coordinates (px)
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;

    // set initial position to center immediately (avoid off-screen flash)
    if (glowRef.current) {
      glowRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    }

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleTouch = (e) => {
      const t = e.touches[0];
      if (!t) return;
      mouseX = t.clientX;
      mouseY = t.clientY;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleTouch, { passive: true });

    const animate = () => {
      // smooth interpolation
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchmove", handleTouch);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Smooth cursor glow */}
      <div
        ref={glowRef}
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(circle, rgba(16,185,129,0.7), rgba(6,182,212,0.5), transparent 70%)",
          // keep element at top-left; transform will move it where we want
          top: 0,
          left: 0,
        }}
      />

      {/* Static soft mesh */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 30% 40%, rgba(16,185,129,0.25), transparent 40%), radial-gradient(circle at 70% 60%, rgba(6,182,212,0.25), transparent 45%)",
        }}
      />
    </div>
  );
}
