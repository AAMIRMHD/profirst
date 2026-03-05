import { motion } from "framer-motion";
import { services } from "../data/siteData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function Services() {
  return (
    <section id="services" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Services"
          title="Curated Event Solutions"
          description="Premium event services designed to deliver sophistication, style, and flawless execution."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-white/70 p-6 shadow-soft backdrop-blur-lg"
              >
                <motion.div
                  aria-hidden
                  className="pointer-events-none absolute -left-20 top-0 h-full w-14 rotate-[20deg] bg-gradient-to-r from-transparent via-white/60 to-transparent"
                  initial={{ x: -120, opacity: 0 }}
                  whileHover={{ x: 420, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                />
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/40 bg-gold/10 text-2xl transition duration-300 group-hover:shadow-goldGlow">
                  {service.icon}
                </div>
                <h3 className="font-display text-2xl font-medium text-ivory">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  {service.description}
                </p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
