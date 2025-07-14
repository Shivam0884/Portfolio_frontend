import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CustomTitle({ title }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true, threshold: 0.5 });

  return (
    <motion.h1
      ref={ref}
      initial={{ y: "150%", color: "#ffffff" }} // Starting white
      animate={isInView ? { y: 0, color: "#FF6D3D" } : {}} // Animate to yellow
      transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 1 }}
      className="font-bold text-4xl md:text-5xl lg:text-6xl text-center mt-16 sm:mt-16 md:mt-24 lg:mt-10"
    >
      {title}
    </motion.h1>
  );
}
