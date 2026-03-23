import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorX = useSpring(mouseX, { damping: 28, stiffness: 280 });
  const cursorY = useSpring(mouseY, { damping: 28, stiffness: 280 });
  const glowX = useSpring(mouseX, { damping: 40, stiffness: 160 });
  const glowY = useSpring(mouseY, { damping: 40, stiffness: 160 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX - 12);
      mouseY.set(event.clientY - 12);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[80] hidden h-6 w-6 rounded-full border border-sky-200/60 bg-sky-300/10 mix-blend-screen md:block"
        style={{ x: cursorX, y: cursorY }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[79] hidden h-16 w-16 rounded-full bg-sky-300/10 blur-2xl md:block"
        style={{ x: glowX, y: glowY }}
      />
    </>
  );
}

export default CustomCursor;
