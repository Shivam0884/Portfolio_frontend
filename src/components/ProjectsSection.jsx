import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { projects } from "./data/config";

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <header className="relative" id="work">
        <CustomTitle title="My Projects" className="mt-40" />
      </header>
      <article className="relative flex h-full justify-center items-center w-full p-4 mt-5 mb-20">
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
        <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#fff9c4] via-[#fff176] to-[#ffeb3b] opacity-20 blur-[100px] right-10 bottom-8 hidden md:block"></header>

        <nav
          onClick={prevSlide}
          className="absolute left-4 z-10 hover:scale-105"
          style={{ backgroundColor: "#FFC107", borderRadius: "100%" }}
        >
          <img
            src="icons8-left-arrow-64.png"
            alt="left"
            width={40}
            height={40}
          />
        </nav>

        <article className="relative w-full h-screen flex items-center justify-center">
          <AnimatePresence initial={false}>
            {projects.map(
              (project, index) =>
                index === currentIndex && (
                  <motion.article
                    key={project.id}
                    initial={{ opacity: 0, scale: 0, x: 100 }}
                    animate={{ opacity: 1, scale: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: -100 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
                    className="absolute w-[90%] max-w-5xl h-auto p-6 border border-[#FFC107] bg-[#ffffff29] rounded-3xl text-white overflow-hidden shadow-lg"
                    style={{ perspective: 1000 }}
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-auto max-h-[400px] sm:max-h-[500px]   object-cover rounded-t-lg mb-4"
                    />
                    <h2 className=" uppercase text-lg md:text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#FFC107] to-[#ff18b8]">
                      <a href={project.projectUrl}>{project.title}</a>{" "}
                    </h2>
                    <p className="text-sm sm:text-base text-wrap break-words mt-2">
                      {project.description}
                    </p>
                  </motion.article>
                )
            )}
          </AnimatePresence>
        </article>
        <nav
          onClick={nextSlide}
          className="absolute right-4 z-10 hover:scale-105"
          style={{ backgroundColor: "#FFC107", borderRadius: "100%" }}
        >
          <img
            src="icons8-right-arrow-64.png"
            alt="left"
            width={40}
            height={40}
          />
        </nav>
      </article>
    </>
  );
}
