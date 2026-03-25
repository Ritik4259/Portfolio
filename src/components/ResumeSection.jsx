import { motion } from "framer-motion";
import { Download, Eye, FileText } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInLeft, fadeInRight } from "../lib/motion";

function ResumeSection({ resume }) {
  return (
    <section id="resume" className="section-shell pt-0">
      <SectionHeading
        eyebrow="Resume"
        title="A quick download for recruiters who want the full snapshot."
        description={resume.description}
      />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel border-theme rounded-[32px] p-7"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-200">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-theme-muted text-sm uppercase tracking-[0.25em]">Resume</p>
              <p className="text-theme mt-2 text-2xl font-semibold">Latest professional snapshot</p>
              <p className="text-theme-soft mt-3 text-sm leading-7">
                Download my latest resume or open it directly in the browser for a full view of my education, projects, training, certifications, and achievements.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel border-theme rounded-[32px] p-7"
        >
          <div className="flex flex-col gap-4">
            <a
              href={resume.href}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={resume.href}
              target="_blank"
              rel="noreferrer"
              className="surface-soft border-theme text-theme inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
            >
              <Eye className="h-4 w-4" />
              View Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResumeSection;
