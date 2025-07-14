import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Numbers } from "./data/config";
import CustomTitle from "./CustomTitle";

export default function NumbersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div>
      <CustomTitle title="Achievements" className="mb-10" />
      <section className="mx-auto w-full relative text-white  flex justify-center mt-15">
        <motion.section
          ref={sectionRef}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
          className="relative z-1 mx-auto w-11/12 lg:mx-0 p-5 sm:p-6 py-6 sm:py-8 rounded-3xl bg-[#ffffff29] shadow-lg grid gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] md:divide-x
"
        >
          {Numbers.map((item) => (
            <article key={item.id} className="text-center">
              <header>
                <h1 className="mb-2 font-semibold text-xl sm:text-2xl md:text-3xl">
                  {item.title}
                </h1>
                <h2 className="font-semibold text-xl sm:text-xl md:text-2xl">
                  +
                  {isVisible && (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2}
                      separator=","
                    />
                  )}
                </h2>
              </header>
            </article>
          ))}
        </motion.section>
      </section>
    </div>
  );
}
