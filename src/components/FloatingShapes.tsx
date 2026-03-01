"use client";

const SHAPES = [
  { left: "6%", top: "12%", size: 220, color: "bg-cyan-300/6" },
  { left: "78%", top: "16%", size: 200, color: "bg-sky-300/5" },
  { left: "16%", top: "56%", size: 180, color: "bg-blue-300/5" },
  { left: "70%", top: "62%", size: 230, color: "bg-cyan-200/5" },
];

export function FloatingShapes() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          className={`absolute rounded-full blur-3xl ${shape.color}`}
          style={{ left: shape.left, top: shape.top, height: shape.size, width: shape.size }}
        />
      ))}
    </div>
  );
}
