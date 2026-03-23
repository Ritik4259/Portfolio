import { motion } from "framer-motion";
import { BrainCircuit, Lightbulb, Rocket } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInLeft, fadeInRight, sectionStagger } from "../lib/motion";

const icons = [BrainCircuit, Lightbulb, Rocket];

function AboutSection({ about }) {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About"
        title="Engineering intelligence with curiosity, clarity, and product taste."
        description={about.intro}
      />
      <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="glass-panel border-theme relative overflow-hidden rounded-[32px] p-6 md:p-8"
        >
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-sky-300/15 to-transparent" />
          <motion.div
            whileHover={{ scale: 1.02, rotate: -1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950"
          >
            <img
              src="/portfolioPic.png"
              alt="Ritik Bhardwaj profile portrait"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,6,23,0.72),rgba(2,6,23,0.1)_45%,transparent)]" />
            <div className="glass-panel border-theme absolute bottom-6 left-6 right-6 rounded-3xl p-5">
              <p className="text-theme-muted text-xs uppercase tracking-[0.3em]">Profile Snapshot</p>
              <p className="text-theme mt-3 text-2xl font-semibold">AI & ML Student</p>
              <p className="text-theme-soft mt-2 text-sm leading-6">
                Building ambitious projects with a clean visual language and a strong engineering core.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={sectionStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-6"
        >
          <motion.p variants={fadeInRight} className="text-theme-soft text-lg leading-8">
            {about.story}
          </motion.p>
          {about.highlights.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={item.title}
                variants={fadeInRight}
                className="glass-panel border-theme rounded-[28px] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-200">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-theme text-xl font-semibold">{item.title}</h3>
                    <p className="text-theme-soft mt-2 text-sm leading-7">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
