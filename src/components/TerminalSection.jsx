import { motion } from "framer-motion";
import { fadeInUp, sectionStagger } from "../lib/motion";

function TerminalSection({ lines }) {
  return (
    <section className="section-shell pt-0">
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="glass-panel border-theme overflow-hidden rounded-[30px]"
      >
        <div className="border-theme flex items-center gap-2 border-b px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-rose-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <p className="text-theme-muted ml-3 text-xs uppercase tracking-[0.3em]">terminal.fun</p>
        </div>
        <div className="space-y-5 p-6 font-mono text-sm">
          {lines.map((line) => (
            <motion.div key={line.command} variants={fadeInUp}>
              <p className="text-emerald-300">$ {line.command}</p>
              <p className="text-theme-soft mt-2">{line.output}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TerminalSection;
