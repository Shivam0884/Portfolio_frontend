import { delay } from "framer-motion";

//Hero section
const animationDuration = 1.5;

export const variants = {
  initial: { pathLength: 0, strokeOpacity: 1, fillOpacity: 0 },
  animate: {
    pathLength: 1,
    strokeOpacity: 0,
    fillOpacity: 1,
    transition: {
      duration: animationDuration,
      ease: "easeInOut",
      strokeOpacity: {
        delay: animationDuration,
      },
      fillOpacity: {
        delay: animationDuration,
      },
    },
  },
};

export const socialIcons = [
  {
    id: 1,
    url: "https://www.linkedin.com/in/shivamkumar0884/",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
    viewBox: "0 0 24 24",
  },

  {
    id: 2,
    url: "https://github.com/Shivam0884",
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.235-3.222-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.912 1.23 3.222 0 4.61-2.805 5.625-5.475 5.92.435.375.825 1.096.825 2.215 0 1.6-.015 2.885-.015 3.28 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z",
    viewBox: "0 0 24 24",
  },
  {
    id: 3,
    url: "https://x.com/Shivamkumar0884",
    path: "M23.954 4.569c-.885.392-1.83.656-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.924 2.207-4.924 4.924 0 .39.045.765.127 1.124C7.728 8.087 4.1 6.128 1.671 3.149c-.427.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.317 0-.626-.03-.928-.086.627 1.956 2.444 3.379 4.6 3.419-1.68 1.318-3.809 2.105-6.102 2.105-.396 0-.788-.023-1.176-.067 2.179 1.397 4.768 2.212 7.557 2.212 9.054 0 14.002-7.496 14.002-13.986 0-.213-.005-.425-.014-.637.962-.694 1.797-1.562 2.457-2.549z",
    viewBox: "0 0 24 24",
  },
  {
    id: 4,
    url: "https://www.instagram.com/shivamk.r_/",
    path: "M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z",
    viewBox: "0 0 24 24",
  },
];

export default variants;

//Number Section
export const Numbers = [
  { id: 1, number: 200, title: "DSA Questions" },
  { id: 2, number: 5, title: "Projects" },
];

//Skills Section
export const skills = [
  {
    skill: "React",
    percentage: 65,
    icon: "react-1 (1).svg",
  },
  {
    skill: "Node.js",
    percentage: 68,
    icon: "icons8-node-js-48.png",
  },
  {
    skill: "JavaScript",
    percentage: 70,
    icon: "icons8-javascript-48 (1).png",
  },
  {
    skill: "C++",
    percentage: 75,
    icon: "icons8-c++-48.png",
  },
  {
    skill: "TailwindCss",
    percentage: 70,
    icon: "icons8-tailwind-css-48.png",
  },
];

//Education
export const education = [
  {
    id: 1,
    degree: "National Institute of technology Rourkela",
    institution: "Industrial Design",
    year: "2023 - 2027",
    details:
      "Pursuing a B.Tech in Industrial Design with a focus on product design, user experience, and engineering principles. Gained hands-on experience in CAD modeling, kinematics, and design thinking. Active in campus clubs and technical projects, with interests in research,and problem-solving.",
    icon: "graduate-hat.png",
  },
  {
    id: 2,
    degree: "Senior Secondary Education (Class XII)",
    institution: "Mahatma Gandhi High school , Bihar (BSEB)",
    year: "2021 - 2023",
    details:
      "Completed Class XII from Bihar School Examination Board (BSEB) with a PCM stream, scoring 82.8%. Built a strong foundation in analytical reasoning and mathematics while preparing for engineering entrance exams.",
    icon: "graduate-hat.png",
  },
];

//projects
export const projects = [
  {
    id: 1,
    title: "WanderLust",
    description:
      "Wanderlust is a full-stack travel web application that helps users explore and share travel destinations. Built with Node.js, Express, MongoDB (Mongoose), and the MVC architecture, it uses EJS templates and Bootstrap for a responsive, user-friendly interface. The app features secure authentication with Passport.js, allowing users to create accounts, manage profiles, and add or review travel listings. Integrated Google Maps API provides interactive maps and location-based searches, while optimized database queries ensure fast and efficient performance.",
    imageUrl: "Screenshot 2025-09-15 033806.png",
    projectUrl: "https://github.com/Shivam0884/WanderLust",
  },
  {
    id: 2,
    title: "Zerodha",
    description:
      "A full-stack stock trading platform inspired by Zerodha, built using MongoDB, Express.js, React.js, and Node.js. Features include user authentication, stock charts using TradingView, watchlists, simulated buy/sell orders, and portfolio tracking. Designed with a clean UI and real-time data handling.",
    imageUrl: "Screenshot 2025-07-13 034658.png",
    projectUrl: "https://github.com/Shivam0884/Zerodha-clone",
  },
  {
    id: 3,
    title: "Simon_Game",
    description:
      "A memory-based color sequence game built with HTML, CSS, and JavaScript. The player must repeat an increasingly complex pattern of button presses generated by the game. Includes sound effects, visual feedback, and game-over animations.",
    imageUrl: "Screenshot 2025-07-13 040404.png",
    projectUrl: "https://github.com/Shivam0884/Simon_game",
  },
];

//Contact data
export const contactData = [
  {
    id: 1,
    title: "Adress",
    description: "Patna Bihar India",
    icon: "location.png",
  },
  {
    id: 2,
    title: "Phone Number",
    description: "7779858260",
    icon: "phone-call.png",
  },
  {
    id: 3,
    title: "Email",
    description: "shivam123id0884@gmail.com",
    icon: "email.png",
  },
];
