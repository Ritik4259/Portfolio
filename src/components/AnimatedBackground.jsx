import { motion } from "framer-motion";

const particles = Array.from({ length: 16 }).map((_, index) => ({
  id: index,
  size: 4 + (index % 5) * 4,
  top: `${(index * 13) % 100}%`,
  left: `${(index * 19) % 100}%`,
  duration: 9 + (index % 4) * 2,
  delay: index * 0.3,
}));

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-40" />
      <motion.div
        className="absolute inset-x-[-20%] top-[-10%] h-[40rem] rounded-full bg-sky-400/10 blur-3xl"
        animate={{ x: ["-4%", "4%", "-2%"], y: ["0%", "8%", "0%"] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-emerald-300/10 blur-3xl"
        animate={{ x: ["0%", "-10%", "0%"], y: ["0%", "-6%", "0%"] }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/20"
          style={{
            width: particle.size,
            height: particle.size,
            top: particle.top,
            left: particle.left,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.9, 0.2],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(2,6,23,0.58)_100%)]" />
    </div>
  );
}

export default AnimatedBackground;
