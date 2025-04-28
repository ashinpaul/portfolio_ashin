import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import net from "./Resources/images/1.png"; // Replace with actual image path
import csharp from "./Resources/images/2.png"; 
import reacts from "./logo.svg"; 
import vb from "./Resources/images/3.png"; 
import htm from "./Resources/images/4.png"; 
import js from "./Resources/images/5.png"; 
import sql from "./Resources/images/6.png"; 
import apI from "./Resources/images/7.png";
import giT from "./Resources/images/8.png";
import { FaGithub, FaInstagram, FaDownload,FaMailchimp } from "react-icons/fa";
import resumeLink from "./Resources/images/Ashin_Paul_resume.pdf"; // Replace with the actual path to your resume
const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "projects", title: "Projects", content: "Here are some of my works." },
  { id: "contact", title: "Contact", content: "Get in touch with me." }
];

const App = () => {
  const containerRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (event) => {
      if (containerRef.current) {
        event.preventDefault();
        const scrollAmount = event.deltaY; // Use deltaY for vertical scroll to affect horizontal scroll
        containerRef.current.scrollLeft += scrollAmount;
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="error-message">
        We are sorry.
        Your screen size is not compatible
      </div>
      <div className="portfolio-container">
        {/* Navbar */}
        <nav className="navbar fixed-top bg-dark">
          {/* Menu Toggle Button for Mobile */}
          <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>

          {/* Navigation Links */}
          <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="nav-link" onClick={() => setMenuOpen(false)}>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Sections */}
        <div className="sections-container" ref={containerRef}>
          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              className="section"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {section.id === "home" ? (
                <div className="home-content">
                  <div className="text-section">
                    <h2>ASHIN PAUL P A</h2>
                    <p>A Creative Developer with expertise in .NET, React.js, and modern web technologies.</p>
                  </div>
                </div>
              ) : section.id === "about" ? (
                <div className="about-content">
                  {/* Left Side: About Me Card */}
                  <div className="about-card">
                    <h2>About Me</h2>
                    <p>
                      I'm a passionate <strong>Full-Stack Developer</strong> with a diverse educational background and professional experience. 
                      I hold a <strong>Master's Degree in Computer Applications (MCA)</strong> and a <strong>Bachelor's Degree in Computer Applications (BCA)</strong>. 
                      Currently, I work at <strong>Macom</strong> and have completed an internship at <strong>RLabz Artists</strong>, where I honed my skills in web and backend development.
                    </p>
                    <h3>Qualifications:</h3>
                    <ul>
                      <li> <strong>MCA at Rajagiri College of Social Sciences</strong></li>
                      <li> <strong>BCA Graduate at MGAJS Arts and Science College</strong></li>
                    </ul>
                  </div>

                  {/* Right Side: Tech Stack Cards */}
                  <div className="tech-cards">
                    {/* First row */}
                    <div className="tech-card">
                      <img src={net} alt=".NET" />
                    </div>
                    <div className="tech-card">
                      <img src={csharp} alt="C#" />
                    </div>
                    {/* Second row */}
                    <div className="tech-card">
                      <img src={reacts} alt="React" />
                    </div>
                    <div className="tech-card">
                      <img src={vb} alt="Visual Basic" />
                    </div>
                    {/* Third row */}
                    <div className="tech-card">
                      <img src={htm} alt="HTML" />
                    </div>
                    <div className="tech-card">
                      <img src={js} alt="JavaScript" />
                    </div>
                    <div className="tech-card">
                      <img src={apI} alt="API" />
                    </div>
                    <div className="tech-card">
                      <img src={giT} alt="git" />
                    </div>
                    <div className="tech-card">
                      <img src={sql} alt="SQL" />
                    </div>
                  </div>
                </div>
              ) : section.id==="projects"? (
                <div className="construction-message">
                  <h2>Page Under Construction</h2>
                  <p>We're working hard to bring you new content. Please check back soon!</p>
                  <img src="./Resources/images/construction.png" alt="Under Construction" className="construction-icon" />
                </div>) : section.id==="contact" ? (
                   <div className="contact-content">
    {/* <h2 className="contact-title">Contact Me</h2> */}
   <div className="text-center">
    <a href="mailto:ashinpaul46@gmail.com" 
       className="btn download-button ico-mail">
      <FaMailchimp className="me-5" /> MAIL ME
    </a>
</div>
    <div className="text-center">
    <a href="https://github.com/ashinpaul"  
       className="btn ico-git resume-download download-button"><FaGithub className="me-5"/>GITHUB</a></div>
  <div className="text-center">
    <a href={resumeLink} 
       download 
       className="btn btn-success resume-download download-button">
      <FaDownload className="me-2" /> Download Resume
    </a>
  </div>
</div>
                  ) : (
                    <p>{section.content}</p>
                  )}
            </motion.section>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
