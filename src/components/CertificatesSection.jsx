import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInUp, sectionStagger } from "../lib/motion";

function CertificatesSection({ items }) {
  return (
    <section id="certificates" className="section-shell pt-0">
      <SectionHeading
        eyebrow="Certificates"
        title="Focused learning milestones that strengthened my machine learning foundation."
        description="Selected certifications and structured learning from my CV, now linked directly for quick verification."
      />
      <motion.div
        variants={sectionStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid gap-6 md:grid-cols-2"
      >
        {items.map((item) => (
          <motion.a
            key={`${item.title}-${item.date}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            variants={fadeInUp}
            className="glass-panel border-theme group rounded-[30px] p-6 transition hover:-translate-y-1"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-300/10 text-sky-200">
                <Award className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-3">
                <span className="surface-soft border-theme text-theme-soft rounded-full border px-3 py-1 text-xs uppercase tracking-[0.2em]">
                  {item.date}
                </span>
                <ExternalLink className="text-theme-muted h-4 w-4 transition group-hover:text-[color:var(--accent)]" />
              </div>
            </div>
            <h3 className="text-theme mt-5 text-xl font-semibold">{item.title}</h3>
            <p className="text-theme-muted mt-3 text-sm">{item.issuer}</p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}

export default CertificatesSection;
