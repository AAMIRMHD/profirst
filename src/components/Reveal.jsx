import { motion } from "framer-motion";

const baseVariant = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

function Reveal({ children, className = "", delay = 0, amount = 0.2 }) {
  return (
    <motion.div
      variants={baseVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
