"use client";
import { motion } from "framer-motion";

export function FloatingShapes() {
  const shapes = [
    // Plastic Cups
    { icon: "🥤", size: "text-4xl", x: "10vw", y: "20vh", rotate: -15, duration: 20 },
    { icon: "🥤", size: "text-5xl", x: "80vw", y: "30vh", rotate: 10, duration: 25 },
    { icon: "🥤", size: "text-3xl", x: "30vw", y: "70vh", rotate: 5, duration: 18 },

    // Forks
    { icon: "🍴", size: "text-4xl", x: "20vw", y: "50vh", rotate: 20, duration: 22 },
    { icon: "🍴", size: "text-5xl", x: "70vw", y: "80vh", rotate: -5, duration: 30 },
    { icon: "🍴", size: "text-3xl", x: "50vw", y: "10vh", rotate: -10, duration: 15 },

    // One-way Plates
    { icon: "🍽️", size: "text-5xl", x: "90vw", y: "60vh", rotate: 15, duration: 28 },
    { icon: "🍽️", size: "text-4xl", x: "5vw", y: "80vh", rotate: -20, duration: 23 },
    { icon: "🍽️", size: "text-6xl", x: "40vw", y: "40vh", rotate: 0, duration: 19 },
  ];

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.size} opacity-5`}
          initial={{ x: shape.x, y: shape.y, rotate: shape.rotate }}
          animate={{
            y: [shape.y, `calc(${shape.y} - 20px)`, shape.y],
            x: [shape.x, `calc(${shape.x} + 15px)`, shape.x],
            rotate: [shape.rotate, shape.rotate + 5, shape.rotate],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          {shape.icon}
        </motion.div>
      ))}
    </div>
  );
}