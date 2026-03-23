import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeInUp, sectionStagger } from "../lib/motion";

function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A toolkit shaped by machine learning depth and modern product engineering."
        description="From model experimentation to polished web interfaces, these are the tools I rely on to translate ideas into working systems."
      />
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={fadeInUp}
            className="glass-panel border-theme rounded-[30px] p-6"
          >
            <h3 className="text-theme font-display text-2xl font-semibold">{group.title}</h3>
            <div className="mt-6 space-y-5">
              {group.items.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-theme-soft text-sm font-medium">{skill.name}</span>
                    <span className="text-theme-muted text-xs uppercase tracking-[0.2em]">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-3 overflow-hidden rounded-full bg-white/5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-sky-400 via-cyan-300 to-emerald-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SkillsSection;
