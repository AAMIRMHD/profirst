import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import EventsConducted from "./components/EventsConducted";
import Gallery from "./components/Gallery";
import Booking from "./components/Booking";
import Footer from "./components/Footer";
import IntroOverlay from "./components/IntroOverlay";

const pageAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setShowIntro(false), 2200);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-obsidian text-ivory">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-[-10%] top-[-10%] h-[40rem] w-[40rem] rounded-full bg-gold/15 blur-[120px]" />
        <div className="absolute bottom-[-15%] right-[-5%] h-[35rem] w-[35rem] rounded-full bg-amber-200/20 blur-[140px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(199,154,43,0.12),_transparent_45%)]" />
        <motion.div
          animate={{ y: [0, -18, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(199,154,43,0.08),transparent_28%)]"
        />
      </div>

      <AnimatePresence>{showIntro ? <IntroOverlay /> : null}</AnimatePresence>

      <Navbar />

      <motion.main
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        className="relative"
      >
        <Hero />
        <About />
        <Services />
        <EventsConducted />
        <Gallery />
        <Booking />
      </motion.main>

      <Footer />
    </div>
  );
}

export default App;
