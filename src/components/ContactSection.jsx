import { motion } from "framer-motion";
import { Github, Linkedin, Mail, SendHorizontal } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { fadeInLeft, fadeInRight } from "../lib/motion";

function ContactSection({ contact }) {
  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something meaningful, ambitious, and beautifully engineered."
        description={contact.intro}
      />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel border-theme rounded-[32px] p-7"
        >
          <div className="space-y-5">
            <div className="surface-soft border-theme rounded-[24px] border p-5">
              <Mail className="h-5 w-5 text-sky-200" />
              <p className="text-theme-muted mt-4 text-sm">Email</p>
              <a href={`mailto:${contact.email}`} className="text-theme mt-2 block text-lg font-medium">
                {contact.email}
              </a>
            </div>
            {contact.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="surface-soft border-theme flex items-center justify-between rounded-[24px] border p-5 transition hover:border-sky-300/30"
              >
                <div>
                  <p className="text-theme-muted text-sm">{social.label}</p>
                  <p className="text-theme mt-1 text-base font-medium">{social.href.replace("https://", "")}</p>
                </div>
                {social.label === "GitHub" ? (
                  <Github className="text-theme h-5 w-5" />
                ) : (
                  <Linkedin className="text-theme h-5 w-5" />
                )}
              </a>
            ))}
          </div>
        </motion.div>
        <motion.form
          variants={fadeInRight}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="glass-panel border-theme rounded-[32px] p-7"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block">
              <span className="text-theme-soft mb-2 block text-sm">Name</span>
              <input
                type="text"
                placeholder="Your name"
                className="surface-soft border-theme text-theme w-full rounded-2xl border px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-sky-300/40 focus:ring-4 focus:ring-sky-300/10"
              />
            </label>
            <label className="block">
              <span className="text-theme-soft mb-2 block text-sm">Email</span>
              <input
                type="email"
                placeholder="you@example.com"
                className="surface-soft border-theme text-theme w-full rounded-2xl border px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-sky-300/40 focus:ring-4 focus:ring-sky-300/10"
              />
            </label>
          </div>
          <label className="mt-5 block">
            <span className="text-theme-soft mb-2 block text-sm">Message</span>
            <textarea
              rows="6"
              placeholder="Tell me about the opportunity or idea you have in mind."
              className="surface-soft border-theme text-theme w-full rounded-2xl border px-4 py-3 outline-none transition placeholder:text-slate-500 focus:border-sky-300/40 focus:ring-4 focus:ring-sky-300/10"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            Send Message
            <SendHorizontal className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </section>
  );
}

export default ContactSection;
