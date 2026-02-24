"use client";

const SHAPES = [
  { icon: "🥤", size: "text-4xl", left: "10vw", top: "20vh", rotate: -15 },
  { icon: "🥤", size: "text-5xl", left: "80vw", top: "30vh", rotate: 10 },
  { icon: "🥤", size: "text-3xl", left: "30vw", top: "70vh", rotate: 5 },
  { icon: "🍴", size: "text-4xl", left: "20vw", top: "50vh", rotate: 20 },
  { icon: "🍴", size: "text-5xl", left: "70vw", top: "80vh", rotate: -5 },
  { icon: "🍽️", size: "text-5xl", left: "90vw", top: "60vh", rotate: 15 },
  { icon: "🍽️", size: "text-4xl", left: "5vw", top: "80vh", rotate: -20 },
  { icon: "🍽️", size: "text-6xl", left: "42vw", top: "40vh", rotate: 0 },
];

export function FloatingShapes() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {SHAPES.map((shape, i) => (
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
