import React from "react";
import { useEffect, useState } from "react";
import aboutPic from "../images/profile/fardin-about-image.jpeg";
;

const About = ({ darkMode }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="about"
      className="w-full min-h-screen relative flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 md:gap-20 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "var(--color-bg-secondary)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      {/* Floating Background Shapes */}
     <div className="absolute top-10 left-10 w-32 h-32 opacity-20 rounded-full animate-bounce-slow"
     style={{ backgroundColor: "var(--color-main)" }}></div>
<div className="absolute bottom-20 right-20 w-40 h-40 opacity-10 rounded-full animate-ping-slow"
     style={{ backgroundColor: "var(--color-main)" }}></div>
<div className="absolute top-1/2 left-1/4 w-24 h-24 opacity-15 rounded-full animate-spin-slow"
     style={{ backgroundColor: "var(--color-main)" }}></div>


      {/* Left: Image */}
      <div
          className={`flex-1 flex justify-center md:justify-start opacity-0 transform translate-y-6 animate-slide-in ${
    animate ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : ""
  } animate-fade-up`}
      >
        <div className="relative">
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow:
                "0 0 25px 6px var(--color-main), 0 0 50px 15px var(--color-main)",
              opacity: 0.6,
              zIndex: 0,
              animation: "glowPulse 3s infinite alternate",
            }}
          ></span>
          <img
            src={aboutPic}
            alt="Fardin Hasan Mayen"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 animate-float relative"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>

      {/* Right: Text */}
      <div
          className={`flex-1 mt-8 md:mt-0 text-center md:text-left opacity-0 transform translate-y-6 animate-fade-up ${
            animate ? "opacity-100 translate-y-0 transition-all duration-700 delay-400" : ""
          }`}
      >
        <h2
            className={`text-3xl sm:text-4xl md:text-5xl  font-semibold opacity-0 transform translate-y-6 animate-slide-in ${
              animate ? "opacity-100 translate-y-0 transition-all duration-400 delay-200" : ""
            } animate-fade-up`}
          style={{ fontFamily: "var(--font-serif)",fontSize:"2.5rem",marginBottom:"3rem" }}
        >
          About <span className="text-[var(--color-main)]">Me</span>
        </h2>
        <p className="text-base sm:text-lg leading-relaxed font-sans mb-5 px-2 sm:px-0">
          I'm <span className="text-[var(--color-main)] font-bold"><strong>Fardin Hasan Mayen</strong></span>,a dedicated 
          <span className="font-semibold"> Full-Stack Developer</span>. with a passion for building intuitive and impactful digital experiences. I blend strong computer science fundamentals with a creative eye to engineer robust solutions from front-end to back-end.



          
        </p>
        <p className="text-lg leading-relaxed font-sans">
          My background in technology and analysis fuels my methodical approach to problem-solving, allowing me to write clean, efficient code and create seamless user interactions. I'm currently focused on expanding my portfolio with modern stacks like <strong className="text-[var(--color-main)]">React, Node.js, and TailwindCSS, PostgreSQL, and MongoDB</strong>.
        </p>
      </div>
    </section>
  );
};

export default About;
