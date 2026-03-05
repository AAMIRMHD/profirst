import { motion } from "framer-motion";

function IntroOverlay() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        y: -20,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }}
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[#f7f4ee]"
    >
      <motion.div
        animate={{ rotate: [0, 6, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute h-[30rem] w-[30rem] rounded-full bg-gold/25 blur-[110px]"
      />

      <div className="relative text-center">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "0.5em", y: 20 }}
          animate={{ opacity: 1, letterSpacing: "0.22em", y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-xs uppercase tracking-[0.35em] text-gold/80"
        >
          Signature Event Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 26, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl text-jet sm:text-6xl"
        >
          Pro First Events
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-5 h-px w-40 origin-left bg-gradient-to-r from-transparent via-gold to-transparent"
        />
      </div>
    </motion.div>
  );
}

export default IntroOverlay;
