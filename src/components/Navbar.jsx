import React, { useState, useEffect, useRef } from "react";
import { useAnimate, motion, stagger } from "framer-motion";

const Path = (props) => (
  <path fill="transparent" stroke="white" strokeLinecap="round" {...props} />
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const wrapperRef = useRef(null); // Wraps nav + button

  // Animate navbar open/close
  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            { transform: "translateX(0%)" },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.7 },
          ],
          [
            "li",
            { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];

    animate([
      ["Path.top", { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" }],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "Path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);

  // Handle clicks outside nav
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("scroll", handleScroll, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const handleNavItemClicked = (sectionId) => {
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 500);
  };

  const NavItems = [
    { id: "skills", text: "Skills & Achievements" },
    { id: "Experience", text: "Education" },
    { id: "work", text: "Projects" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <div className="relative flex justify-between py-12">
      <div className="relative" ref={scope}>
        {/* Wrapper for nav + button */}
        <div ref={wrapperRef}>
          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-4 z-40 left-8 w-12 h-12 rounded-full custom-gradient flex items-center justify-center"
          >
            <svg width={25} height={30} viewBox="0 0 23 18">
              <Path d="M 2 2.5 L 20 2.5" className="top" />
              <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
              <Path d="M 2 16.346 L 20 16.346" opacity="1" className="bottom" />
            </svg>
          </button>

          {/* Sidebar Nav */}
          <nav
            className={`fixed top-0 left-0 h-full w-72 z-30  flex items-center bg-gradient-to-br custom-gradient transform transition-transform duration-300 ${
              isOpen
                ? "translate-x-0 pointer-events-auto"
                : "-translate-x-full pointer-events-none"
            }`}
          >
            <ul className="flex flex-col p-12 pt-20">
              {NavItems.map((item) => (
                <li
                  key={item.id}
                  className="text-white text-3xl font-bold mt-12 cursor-pointer"
                >
                  <a onClick={() => handleNavItemClicked(item.id)}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Logo */}
      <h1 className="font-bold text-2xl text-white top-5 right-8 p-8 lg:top-10 lg:pr-16">
        <img
          src="Screenshot 2025-07-14 150839.png"
          alt="LOGO"
          style={{ borderRadius: "100%", height: "50px", width: "50px" }}
        />
      </h1>
    </div>
  );
}
