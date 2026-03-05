import { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../data/siteData";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-2xl border border-black/10 bg-white/75 px-5 py-3 shadow-soft backdrop-blur-xl md:px-7"
      >
        <a href="#home" className="font-display text-lg tracking-wide text-gold">
          Pro First Events
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="rounded-lg border border-black/20 px-3 py-1.5 text-sm text-jet md:hidden"
          aria-label="Toggle menu"
        >
          Menu
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-sm text-ivory/85 transition-colors duration-300 hover:text-gold after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#booking"
          className="hidden rounded-full border border-gold/50 bg-gold/10 px-5 py-2 text-sm font-medium text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-jet hover:shadow-goldGlow md:inline-flex"
        >
          Book Now
        </a>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto mt-2 w-full max-w-7xl overflow-hidden rounded-2xl border border-black/10 bg-white/90 px-5 backdrop-blur-xl md:hidden"
      >
        <ul className="flex flex-col gap-3 py-4">
          {navLinks.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-2 text-ivory/85 transition hover:bg-black/5 hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </header>
  );
}

export default Navbar;
