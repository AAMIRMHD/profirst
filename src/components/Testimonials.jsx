import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { testimonials } from "../data/siteData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4200);
    return () => window.clearInterval(timer);
  }, []);

  const active = testimonials[index];

  return (
    <section id="testimonials" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Testimonials"
          title="Trusted By Clients Who Value Excellence"
          description="Our clients choose us for polished execution, immersive design, and an elevated event journey."
        />

        <Reveal>
          <div className="mx-auto max-w-4xl rounded-3xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur-xl md:p-10">
            <div className="mb-7 h-1.5 overflow-hidden rounded-full bg-black/10">
              <motion.div
                key={index}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 4.2, ease: "linear" }}
                className="h-full rounded-full bg-gradient-to-r from-gold/80 to-amber-300/90"
              />
            </div>
            <AnimatePresence mode="wait">
              <motion.figure
                key={active.name}
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -14, scale: 0.99 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <blockquote className="font-display text-2xl leading-relaxed text-ivory md:text-3xl">
                  “{active.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="text-lg font-medium text-gold">{active.name}</p>
                  <p className="text-sm text-ivory/70">{active.role}</p>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((item, dotIndex) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setIndex(dotIndex)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === dotIndex ? "w-8 bg-gold" : "w-2.5 bg-black/20"
                  }`}
                  aria-label={`Go to testimonial ${dotIndex + 1}`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Testimonials;
