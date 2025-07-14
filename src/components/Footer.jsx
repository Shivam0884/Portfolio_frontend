import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const sentence = "All rights reserved.";
  const letters = sentence.split("");

  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative z-10 text-white border-t-2 border-t-white mt-20">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="text-2xl sm:text-3xl font-bold">
          <img
            src="Screenshot 2025-07-14 150839.png"
            alt="LOGO"
            style={{ borderRadius: "100%", height: "50px", width: "50px" }}
          />
        </div>

        <nav className="flex flex-wrap justify-center sm:justify-start ml-0 sm:ml-2 text-sm sm:text-base lg:mr-20">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`inline-block ${letter === " " ? "mr-3 " : "mr-1"}`}
            >
              {letter}
            </motion.span>
          ))}
        </nav>
      </div>
    </footer>
  );
}
