import React from "react";
import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { education } from "./data/config";

const SectionItem = ({ title, subtitle, year, details, icon }) => {
  return (
    <motion.article
      className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br before:from-[#FFC107] before:to-[ff18b8] before:z-[-10] after:absolute after:inset-0 after:bg-gradient-to-br after:from-[#ff18b8] after:to-[#FFC107] after:scale-[0.95] after:blur-[20px] hover:after:blur-[30px] mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false }}
    >
      <section className="bg-black z-30 text-white rounded-xl">
        <section className="border border-[#FFC107] bg-[#ffffff29] rounded-xl p-3 flex items-center">
          <img src={icon} alt="icon" width={64} height={64} />
          <div className="ml-10">
            {" "}
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-sm">{subtitle}</p>
            <p className="text-sm italic">{year}</p>
            {details && <p className="mt-2"> {details}</p>}
          </div>
        </section>
      </section>
    </motion.article>
  );
};

export default function Education() {
  return (
    <section
      className="relative container mx-auto px-4 py-12 lg:p-16"
      id="Experience"
    >
      <CustomTitle title="Education" />
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 mb-30">
        {education.map((edu) => (
          <SectionItem
            key={edu.id}
            title={edu.degree}
            subtitle={edu.institution}
            year={edu.year}
            details={edu.details}
            icon={edu.icon}
          />
        ))}
      </section>
    </section>
  );
}
