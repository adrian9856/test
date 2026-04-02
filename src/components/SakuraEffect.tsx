import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

export function SakuraEffect() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const petalCount = isMobile ? 10 : 20;
    const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 20,
      size: 10 + Math.random() * 15,
      rotation: Math.random() * 360,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          initial={{ 
            top: "-10%", 
            left: `${petal.x}%`, 
            opacity: 0,
            rotate: petal.rotation 
          }}
          animate={{ 
            top: "110%", 
            left: `${petal.x + (Math.random() * 20 - 10)}%`,
            opacity: [0, 0.8, 0.8, 0],
            rotate: petal.rotation + 720
          }}
          transition={{ 
            duration: petal.duration, 
            repeat: Infinity, 
            delay: petal.delay,
            ease: "linear"
          }}
          className="absolute"
          style={{ width: petal.size, height: petal.size }}
        >
          <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full text-pink-200/60"
          >
            <path
              d="M256 0C256 0 200 100 200 200C200 300 256 400 256 400C256 400 312 300 312 200C312 100 256 0 256 0Z"
              fill="currentColor"
            />
            <path
              d="M256 0C256 0 312 100 312 200C312 300 256 400 256 400C256 400 200 300 200 200C200 100 256 0 256 0Z"
              fill="currentColor"
              opacity="0.5"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
