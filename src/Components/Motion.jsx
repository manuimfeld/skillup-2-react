import { motion } from "framer-motion";

export default function Motion({ children }) {
  const pageTransition = {
    in: {
      opacity: 1,
    },
    out: {
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="page"
      initial="out"
      animate="in"
      exit="out"
      variants={pageTransition}
    >
      {children}
    </motion.div>
  );
}
