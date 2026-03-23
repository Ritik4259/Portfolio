import { Github, Linkedin } from "lucide-react";

function Footer({ socialLinks }) {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="surface-soft border-theme text-theme-soft hover:text-theme flex h-10 w-10 items-center justify-center rounded-full border transition"
              aria-label={link.label}
            >
              {link.label === "GitHub" ? <Github className="h-4 w-4" /> : <Linkedin className="h-4 w-4" />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
