import React from "react";
import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import InteractiveButton from "./InteractiveButton";
import { contactData } from "./data/config";

export default function ContactUs() {
  return (
    <article
      className="relative font-sans text-white rounded-lg p-16 "
      id="contact"
    >
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-[#FFC107] opacity-20 blur-[100px] left-10 top-0 hidden md:block"></header>
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#fff9c4] via-[#fff176] to-[#ffeb3b] opacity-20 blur-[100px] right-10 bottom-8 hidden md:block"></header>

      <header>
        <CustomTitle title="Get in Touch" />
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-25 ">
        <section>
          {contactData.map((data) => (
            <motion.article
              key={data.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-black z-20 md:w-11/12 w-full text-white rounded-xl">
                <div className="border border-[#FFC107] bg-[#ffffff29] rounded-xl p-3 flex flex-col sm:flex-row sm:items-center gap-4">
                  <img
                    src={data.icon}
                    alt={data.title}
                    width={60}
                    height={60}
                    className="shrink-0"
                  />
                  <div className="sm:ml-6 w-full">
                    <h3 className="text-xl font-semibold">{data.title}</h3>
                    <p className="text-sm break-words leading-snug">
                      {data.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
        <motion.article
          transition={{ duration: 0.5, delay: 0.6 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <form
            className="space-y-6"
            onSubmit={async (e) => {
              e.preventDefault();

              const form = e.target;
              const name = form.name.value;
              const email = form.email.value;
              const phone = form.phone.value;
              const message = form.message.value;

              try {
                const res = await fetch(
                  "https://portfolio-backend-oj9a.onrender.com/send-sms",
                  {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name, email, phone, message }),
                  }
                );

                const data = await res.json();
                if (data.success) {
                  alert("Message sent successfully!");
                  form.reset();
                } else {
                  alert("Message failed to send.");
                }
              } catch (err) {
                console.error(err);
                alert("An error occurred while sending.");
              }
            }}
          >
            <section className="mx-auto rounded-lg max-w-lg w-full px-4">
              <div className="grid grid-cols-1 gap-4 ">
                <label htmlFor="name" className="block border-b">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    placeholder="Your Name"
                    className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium break-words"
                  />
                </label>
                <label htmlFor="email" className="block border-b ">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Your Email"
                    className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium break-words"
                  />
                </label>
                <label htmlFor="phone" className="block border-b">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    placeholder="Your Phone Number"
                    className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium break-words"
                  />
                </label>
                <label htmlFor="message" className="block border-b">
                  <textarea
                    rows="4"
                    name="message"
                    id="message"
                    required
                    placeholder="Message!"
                    className="appearance-none bg-transparent border-none w-full py-2 px-3 leading-tight focus:outline-none text-lg font-medium resize-none"
                  ></textarea>
                </label>
                <div className="text-center">
                  <InteractiveButton text="Send Message" className="w-full" />
                </div>
              </div>
            </section>
          </form>
        </motion.article>
      </section>
    </article>
  );
}
