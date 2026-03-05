import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center px-4 pb-14 pt-36 md:px-8"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 3, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[-20%] top-[-30%] h-[32rem] w-[32rem] rounded-full bg-gold/25 blur-[100px]"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], x: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20%] right-[-12%] h-[26rem] w-[26rem] rounded-full bg-amber-100/60 blur-[110px]"
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold shadow-soft"
          >
            Premium Event Agency
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mb-4 text-sm uppercase tracking-[0.4em] text-gold/80"
          >
            Luxury Event Curation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-semibold leading-[1.05] text-ivory sm:text-6xl md:text-7xl"
          >
            Pro First
            <span className="block bg-gradient-to-r from-gold via-amber-200 to-gold bg-clip-text text-transparent">
              Events
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.75 }}
            className="mt-6 max-w-xl text-lg text-ivory/75 md:text-xl"
          >
            Turning Moments Into Memories
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-10"
          >
            <a
              href="#booking"
              className="inline-flex rounded-full border border-gold/50 bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-wide text-jet transition-all duration-300 hover:-translate-y-0.5 hover:shadow-goldGlow"
            >
              Book Your Event
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          whileHover={{ y: -8 }}
          className="group mx-auto w-full max-w-xl rounded-3xl border border-black/10 bg-white/70 p-2 shadow-soft backdrop-blur-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1496337589254-7e19d01cec44?auto=format&fit=crop&w=1200&q=80"
            alt="DJ program with audience"
            className="h-[22rem] w-full rounded-[1.3rem] object-cover object-center transition duration-500 group-hover:scale-[1.03] sm:h-[28rem]"
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 flex -translate-x-1/2 items-center gap-2 text-xs uppercase tracking-[0.3em] text-ivory/55"
      >
        Scroll
        <span className="inline-flex h-7 w-4 justify-center rounded-full border border-gold/60 p-1">
          <span className="h-2 w-1 rounded-full bg-gold" />
        </span>
      </motion.a>
    </section>
  );
}

export default Hero;
