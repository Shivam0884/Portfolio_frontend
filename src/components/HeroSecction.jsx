import { motion } from "framer-motion";
import { variants } from "./data/config";
// import InteractiveButton from "./InteractiveButton";
import SocialButtons from "./SocialButtons";

function HeroSection() {
  return (
    <section className="relative w-full lg:mb-50">
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#fff9c4] via-[#fff176] to-[#ffeb3b] opacity-20 blur-[100px] right-10 bottom-8 hidden md:block"></header>
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-8 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <section className="lg:py-6 flex justify-between">
            <SocialButtons />
            <section className="ml-0 md:ml-12 ">
              <header className="text-center lg:text-left">
                <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                  Hi, I'm &nbsp;
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 to-pink-500">
                    Shivam
                  </span>
                </h1>
              </header>
              <p className="text-gray-300 text-base pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl">
                I am a software Developer who enjoys building websites and
                solving <br /> complex problems. I love learning new things,
                exploring technologies, <br />
                and taking on challenges.
              </p>
              <section className="flex items-center gap-3 pt-6 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                {/* <figure className="w-56 e">
                <InteractiveButton text="Hire Me" />
              </figure> */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="cursor flex items-center px-4 py-2 bg-transparent text-yellow-400 border my-element rounded-3xl"
                >
                  <svg viewBox="0 0 24 24" width={40} height={40}>
                    <motion.path
                      d="M12 15.586l4.95-4.95-1.414-1.414L13 12.172V4h-2v8.172L8.464 9.636 7.05 11.05 12 15.586zm-7 2h14v2H5v-2z"
                      fill="#FFC107"
                      stroke="#FFC107"
                      strokeWidth={0.5}
                      variants={variants}
                      initial="initial"
                      animate="animate"
                    />
                  </svg>
                  <a href="Resume(cv).pdf" download>
                    <span className="cursor-pointer ">Download Resume</span>
                  </a>
                </motion.button>
              </section>
            </section>
          </section>
          <figure
            className="lg:full md:flex md:justify-end mt-20 md:mt-0"
            style={{ marginRight: "50px" }}
          >
            <motion.div
              className="w-[300px] h-[300px] md:w-[350px] md:h-[350px] flex justify-center items-center p-2 rounded-full overflow-hidden relative"
              animate={{
                backgroundColor: ["#FFC107", "#FF7556", "#ff6667"],
                scale: [1, 1, 1, 1],
                rotate: [1, 4, 4, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ffc107] to-[#ff6667] blur-3xl opacity-60" />
              <img
                src="\Gemini_Generated_Image_o3nx99o3nx99o3nx (1).png"
                alt="Hero Pic"
                className="relative z-10 w-full h-full object-cover rounded-full shadow-2xl transform transition-transform duration-300 ease-in-out hover:scale-110"
              />
            </motion.div>
          </figure>
        </article>
      </section>
    </section>
  );
}

export default HeroSection;
