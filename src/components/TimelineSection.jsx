import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeInUp, sectionStagger } from "../lib/motion";

function TimelineSection({ items }) {
  return (
    <section id="journey" className="section-shell">
      <SectionHeading
        eyebrow="Journey"
        title="A growth timeline shaped by coursework, certifications, and hands-on building."
        description="A clean vertical narrative helps recruiters scan progress quickly while still feeling dynamic and modern."
      />
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-4xl"
      >
        <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-sky-300 via-slate-500 to-transparent md:left-1/2" />
        <div className="space-y-10">
          {items.map((item, index) => (
            <motion.div
              key={`${item.year}-${item.title}`}
              variants={fadeInUp}
              className={`relative md:flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}
            >
              <div className="absolute left-5 top-8 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-slate-950 bg-sky-300 md:left-1/2" />
              <div className="pl-12 md:w-[calc(50%-2rem)] md:pl-0">
                <div className="glass-panel border-theme rounded-[28px] p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="surface-soft text-theme-soft rounded-full px-3 py-1 text-xs uppercase tracking-[0.25em]">
                      {item.type}
                    </span>
                    <span className="text-sm text-sky-200">{item.year}</span>
                  </div>
                  <h3 className="text-theme mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="text-theme-soft mt-3 text-sm leading-7">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default TimelineSection;
