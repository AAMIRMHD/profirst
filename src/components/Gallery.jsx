import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { galleryImages } from "../data/siteData";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Gallery"
          title="Signature Moments, Beautifully Captured"
          description="A glimpse into the elevated experiences we design for weddings, private events, and corporate celebrations."
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 0.05}>
              <motion.button
                type="button"
                onClick={() => setActiveImage(image)}
                whileHover={{ scale: 1.03, y: -4 }}
                className="group relative overflow-hidden rounded-2xl border border-black/10"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-40 w-full object-cover transition duration-500 group-hover:scale-110 sm:h-52"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-jet opacity-0 transition duration-300 group-hover:opacity-100">
                  View
                </span>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setActiveImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/40"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="max-h-[80vh] w-full object-cover"
              />
              <button
                type="button"
                onClick={() => setActiveImage(null)}
                className="absolute right-3 top-3 rounded-full border border-white/40 bg-black/50 px-3 py-1 text-sm text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
