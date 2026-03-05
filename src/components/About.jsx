import { motion } from "framer-motion";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function About() {
  return (
    <section id="about" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="About Us"
          title="Crafting Grand Experiences With Precision"
          description="We blend storytelling, design, and production expertise to create unforgettable events with a distinct luxury signature."
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <motion.div
              whileInView={{ y: [24, 0] }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-3xl border border-black/10 bg-white/70 p-2 shadow-soft backdrop-blur-xl"
            >
              <motion.img
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1200&q=80"
                alt="DJ performance with live audience"
                className="h-[20rem] w-full rounded-[1.2rem] object-cover object-center sm:h-[26rem]"
              />
            </motion.div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-3xl border border-black/10 bg-white/70 p-8 shadow-soft backdrop-blur-lg md:p-10">
              <h3 className="font-display text-3xl font-semibold text-ivory md:text-4xl">
                Elevated Design. Seamless Execution.
              </h3>
              <p className="mt-5 leading-relaxed text-ivory/75">
                At Pro First Events, we curate every detail from ambiance and
                decor to stagecraft and guest experience. Our approach merges
                luxury aesthetics with operational excellence, delivering events
                that feel effortless and unforgettable.
              </p>
              <p className="mt-4 leading-relaxed text-ivory/65">
                Whether intimate or large-scale, our team ensures every moment
                reflects your vision with polish, elegance, and precision.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default About;
