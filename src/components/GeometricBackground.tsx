import { motion } from "framer-motion";

const circles = [
  { size: "w-24 h-24", top: "8%", left: "15%", duration: 16, x: [0, 120, -80, 60, 0], y: [0, -90, 70, -40, 0], scale: [1, 1.02, 0.98, 1] },
  { size: "w-36 h-36", top: "25%", left: "60%", duration: 18, x: [0, -130, 90, -50, 0], y: [0, 80, -110, 30, 0], scale: [1, 0.97, 1.03, 1] },
  { size: "w-20 h-20", top: "50%", left: "10%", duration: 15, x: [0, 150, -60, 100, 0], y: [0, -60, 120, -80, 0], scale: [1, 1.03, 0.97, 1] },
  { size: "w-32 h-32", top: "55%", left: "75%", duration: 19, x: [0, -100, 140, -70, 0], y: [0, 70, -50, 90, 0], scale: [1, 0.98, 1.02, 1] },
  { size: "w-28 h-28", top: "30%", left: "40%", duration: 17, x: [0, 80, -120, 40, 0], y: [0, -100, 60, -30, 0], scale: [1, 1.02, 0.98, 1] },
  { size: "w-22 h-22", top: "70%", left: "30%", duration: 16, x: [0, -70, 110, -90, 0], y: [0, 90, -70, 50, 0], scale: [1, 0.97, 1.04, 1] },
  { size: "w-26 h-26", top: "15%", left: "80%", duration: 18, x: [0, -90, 60, -110, 0], y: [0, 60, -100, 40, 0], scale: [1, 1.03, 0.97, 1] },
  { size: "w-20 h-20", top: "45%", left: "55%", duration: 15, x: [0, 100, -80, 120, 0], y: [0, -80, 100, -60, 0], scale: [1, 0.98, 1.03, 1] },
  { size: "w-32 h-32", top: "65%", left: "50%", duration: 20, x: [0, -60, 130, -40, 0], y: [0, 50, -90, 70, 0], scale: [1, 1.02, 0.97, 1] },
  { size: "w-24 h-24", top: "80%", left: "20%", duration: 17, x: [0, 90, -100, 70, 0], y: [0, -70, 80, -50, 0], scale: [1, 0.98, 1.02, 1] },
];

const GeometricBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: -1 }}>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(to right, white 0%, hsl(var(--gradient-peach-light)) 40%, hsl(var(--gradient-peach)) 50%, hsl(var(--gradient-peach-light)) 60%, white 100%)",
      }}
    />
    {circles.map((c, i) => (
      <motion.div
        key={i}
        className={`absolute ${c.size} rounded-full border-[1px] border-orange-400/30 bg-transparent`}
        style={{ top: c.top, left: c.left }}
        animate={{ x: c.x, y: c.y, scale: c.scale, rotate: [0, 180, 360] }}
        transition={{ duration: c.duration, repeat: Infinity, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export default GeometricBackground;
