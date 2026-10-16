import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { fadeInUp, sectionStagger } from "../lib/motion";

function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="A practical toolkit across AI, software, and collaboration."
        description="The languages, frameworks, tools, and working strengths listed in my latest CV."
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
            className="glass-panel border-theme panel-interactive rounded-[30px] p-6"
          >
            <h3 className="text-theme font-display text-2xl font-semibold">{group.title}</h3>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <span
                  key={skill.name}
                  className="surface-soft border-theme text-theme-soft rounded-full border px-3 py-2 text-sm"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default SkillsSection;
