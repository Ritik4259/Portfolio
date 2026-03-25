import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, sectionStagger } from "../lib/motion";

function CertificatesSection({ items }) {
  return (
    <section id="certificates" className="section-shell pt-0">
      <SectionHeading
        eyebrow="Certificates"
        title="Focused learning milestones that strengthened my machine learning foundation."
        description="Selected certifications and structured learning from my CV, added here to make recruiter review faster."
      />
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {items.map((item) => (
          <motion.article
            key={`${item.title}-${item.date}`}
            variants={fadeInUp}
            className="glass-panel border-theme rounded-[30px] p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-200">
                <Award className="h-5 w-5" />
              </div>
              <span className="surface-soft border-theme text-theme-soft rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]">
                {item.date}
              </span>
            </div>
            <h3 className="text-theme mt-5 text-xl font-semibold">{item.title}</h3>
            <p className="text-theme-muted mt-3 text-sm">{item.issuer}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default CertificatesSection;
