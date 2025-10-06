import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import profilePic from "../images/profile/fardin-profile-image.jpg";
import resume from "../../../public/files/Resume of Fardin Hasan Mayen.pdf";

const Hero = ({ darkMode }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen relative flex flex-col md:flex-row items-center justify-center px-6 md:px-20 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "var(--color-bg)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-main opacity-20 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-main opacity-10 rounded-full animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-main opacity-15 rounded-full animate-spin-slow"></div>

      {/* Left Text */}
      <div className="flex-1 flex flex-col items-start md:items-start space-y-4 z-10">
        {/* Hi, I'm */}
        <h1
            className={`text-3xl md:text-4xl font-semibold opacity-0 transform translate-y-6 animate-slide-in ${
              animate ? "opacity-100 translate-y-0 transition-all duration-700 delay-200" : ""
            } animate-fade-up`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Hi, I’m
        </h1>

        {/* Name */}
        <h2
            className={`text-4xl md:text-4.5xl font-bold opacity-0 leading-[1.1] transform translate-y-6 animate-slide-in ${
              animate ? "opacity-100 translate-y-0 transition-all duration-700 delay-400" : ""
            } animate-fade-up`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Fardin Hasan Mayen
        </h2>

        {/* Typewriter with "And I'm" */}
        <h3
            className={`text-2xl md:text-3xl font-semibold opacity-0 leading-[1.1] transform translate-y-6 animate-fade-up ${
              animate ? "opacity-100 translate-y-0 transition-all duration-700 delay-600" : ""
            }`}
          style={{ marginBottom: "5px", fontFamily: "var(--font-serif)" }}
        >
          <span className="text-textCustom font-semibold" style={{ fontFamily: "var(--font-serif)" }}>
            And I’m{" "}
          </span>
          <span className="font-bold text-main">
            <Typewriter
              words={["Web Developer", "Virtual Assistant", "Data Investigator"]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>
        <p
          className={`text-textCustom whitespace-nowrap opacity-0 transform translate-y-6 ${
            animate ? "opacity-100 translate-y-0 transition-all duration-700 delay-700" : ""
          }`}
        >
          Computer Science Enthusiast Seeking Exciting Career Opportunities!!
        </p>

        {/* Social Icons */}
        <div
          className={`flex space-x-4 mt-4 justify-start w-full opacity-0 transform translate-y-6 ${
            animate ? "opacity-100 translate-y-0 transition-all duration-700 delay-800" : ""
          }`}
          style={{ marginBottom: "10px", marginLeft: "35px" }}
        >
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"

          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
           className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Download Resume Button*/}
        <div
          className={`mt-4 flex justify-start w-full opacity-0 transform translate-y-6 ${
            animate ? "opacity-100 translate-y-0 transition-all duration-700 delay-1000" : ""
          }`}
          
        >
         <a
    href={resume}
    download="Resume of Fardin Hasan Mayen.pdf"
    className="px-14 py-2 bg-main text-bg font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105"
    style={{
      boxShadow: "0 0 5px 2px var(--color-main), 0 0 3px 2px var(--color-main)",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.boxShadow = "0 0 8px 1px var(--color-main)")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.boxShadow = "0 0 5px 2px var(--color-main), 0 0 3px 2px var(--color-main)")
    }
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right: Profile Image with floating animation and glowing effect */}
      <div className="flex-1 mt-10 md:mt-0 flex justify-center md:justify-end z-10">
        <div
          className="relative animate-slide-in"
          style={{
            display: "inline-block",
          }}
        >
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow:
                "0 0 40px 10px var(--color-main), 0 0 80px 30px var(--color-main)",
              opacity: 0.6,
              zIndex: 0,
              animation: "glowPulse 2s infinite alternate",
            }}
          ></span>
          <img
            src={profilePic}
            alt="Fardin Hasan Mayen"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 animate-float relative"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
      {/* Add keyframes for glowPulse animation */}
    {/* glowPulse keyframes moved to index.css */}
    </section>
  );
};

export default Hero;

