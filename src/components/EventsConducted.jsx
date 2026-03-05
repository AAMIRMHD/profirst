import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { conductedEvents } from "../data/siteData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function EventsConducted() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section id="events" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Events We Conducted"
          title="Our Signature Productions"
          description="Explore selected events we planned and executed with premium styling, production, and guest experience."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {conductedEvents.map((event, index) => (
            <Reveal key={event.title} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-3xl border border-black/10 bg-white/75 shadow-soft"
              >
                <div className="relative">
                  <video
                    src={event.videoUrl}
                    muted
                    loop
                    autoPlay
                    playsInline
                    preload="metadata"
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
                  <button
                    type="button"
                    onClick={() => setActiveVideo(event)}
                    className="absolute left-4 top-4 rounded-full border border-white/70 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-jet transition hover:bg-gold hover:text-jet"
                  >
                    Play
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold/85">
                    {event.location} • {event.year}
                  </p>
                  <h3 className="mt-2 font-display text-2xl text-ivory">
                    {event.title}
                  </h3>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveVideo(null)}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/80 p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-5xl overflow-hidden rounded-2xl border border-white/40 bg-black"
            >
              <div className="flex items-center justify-between border-b border-white/20 px-4 py-3">
                <p className="font-display text-lg text-white">
                  {activeVideo.title}
                </p>
                <button
                  type="button"
                  onClick={() => setActiveVideo(null)}
                  className="rounded-full border border-white/40 px-3 py-1 text-xs uppercase tracking-wider text-white"
                >
                  Close
                </button>
              </div>
              <div className="aspect-video w-full">
                <video
                  src={activeVideo.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="h-full w-full bg-black object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default EventsConducted;
