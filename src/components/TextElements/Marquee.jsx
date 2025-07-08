import { motion } from "framer-motion";

export const Marquee = ({ children, speed = 30 }) => {
  return (
    <>
      <motion.div
        className="testimonials-container"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="testimonials-container"
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

