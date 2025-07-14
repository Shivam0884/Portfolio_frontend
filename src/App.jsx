import "./App.css";
import ThreeBackground from "./components/ThreeBackground";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSecction";
// import NumbersSection from "./components/NumbersSection";
import SkillsSection from "./components/SkillsSection";
import Education from "./components/Education";
import ProjectsSection from "./components/ProjectsSection";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
function App() {
  return (
    <>
      <ThreeBackground />
      <Navbar />
      <HeroSection />

      <SkillsSection />
      <Education />
      <ProjectsSection />
      <ContactUs />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
