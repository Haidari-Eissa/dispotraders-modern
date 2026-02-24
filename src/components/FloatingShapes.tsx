"use client";
import { useMemo } from "react";

export function FloatingShapes() {
  const shapes = useMemo(
    () => [
    // Keep movement subtle but visible, and very slow for low CPU/GPU load.
    { icon: "🥤", size: "text-4xl", left: "10vw", top: "20vh", rotate: -15, dx: 18, dy: -22, duration: 56, delay: 0 },
    { icon: "🥤", size: "text-5xl", left: "80vw", top: "30vh", rotate: 10, dx: -14, dy: 20, duration: 68, delay: 4 },
    { icon: "🥤", size: "text-3xl", left: "30vw", top: "70vh", rotate: 5, dx: 16, dy: -16, duration: 60, delay: 9 },
    { icon: "🍴", size: "text-4xl", left: "20vw", top: "50vh", rotate: 20, dx: -20, dy: 14, duration: 72, delay: 2 },
    { icon: "🍴", size: "text-5xl", left: "70vw", top: "80vh", rotate: -5, dx: 12, dy: -18, duration: 84, delay: 7 },
    { icon: "🍽️", size: "text-5xl", left: "90vw", top: "60vh", rotate: 15, dx: -16, dy: -14, duration: 76, delay: 5 },
    { icon: "🍽️", size: "text-4xl", left: "5vw", top: "80vh", rotate: -20, dx: 14, dy: 18, duration: 80, delay: 10 },
    { icon: "🍽️", size: "text-6xl", left: "42vw", top: "40vh", rotate: 0, dx: -12, dy: 16, duration: 88, delay: 1 },
    ],
    []
  );
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <div
          key={i}
          className={`absolute ${shape.size} opacity-10 will-change-transform`}
          style={{ left: shape.left, top: shape.top, transform: `rotate(${shape.rotate}deg)` }}
        >
          {shape.icon}
        </div>
      ))}
    </div>
  );
}
