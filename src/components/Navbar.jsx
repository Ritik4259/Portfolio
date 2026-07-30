import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar({ links, onThemeToggle, themeIcon }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-50 px-4 py-4 md:px-8"
    >
      <div className="glass-panel border-theme relative mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-6">
        <a href="#home" className="text-theme font-display text-sm font-semibold uppercase tracking-[0.35em]">
          RB
        </a>
        <nav className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-theme-soft hover:text-theme text-sm transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onThemeToggle}
            className="surface-soft border-theme text-theme-soft flex h-10 w-10 items-center justify-center rounded-full border transition hover:scale-105"
            aria-label="Toggle theme"
          >
            {themeIcon}
          </button>
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="surface-soft border-theme text-theme flex h-10 w-10 items-center justify-center rounded-full border lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <AnimatePresence>
          {isOpen ? (
            <motion.nav
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="glass-panel border-theme absolute left-0 right-0 top-[calc(100%+0.7rem)] grid grid-cols-2 gap-1 rounded-3xl p-3 lg:hidden"
            >
              {links.map((link) => (
                <a key={link.href} href={link.href} onClick={closeMenu} className="text-theme-soft rounded-2xl px-4 py-3 text-sm transition hover:bg-white/10 hover:text-[color:var(--text)]">
                  {link.label}
                </a>
              ))}
            </motion.nav>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}

export default Navbar;
