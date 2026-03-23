import { motion } from "framer-motion";
import { fadeInUp } from "../lib/motion";

function SectionHeading({ eyebrow, title, description }) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="mb-14 max-w-3xl"
    >
      <span className="section-label">{eyebrow}</span>
      <h2 className="text-theme font-display text-3xl font-semibold tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="text-theme-soft mt-5 text-base leading-7 md:text-lg">{description}</p>
    </motion.div>
  );
}

export default SectionHeading;
