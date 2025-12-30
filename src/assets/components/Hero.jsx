import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import profilePic from "../images/profile/fardin-profile-image.jpg";
import resume from "../../../public/files/Fardin_Hasan_Mayen_Resume.pdf";

const Hero = ({ darkMode }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-4 sm:px-8 lg:px-20 py-16 md:py-0 relative overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "var(--color-bg)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-5 z-10">
        <h1
          className={`text-2xl sm:text-3xl md:text-4xl font-semibold opacity-0 translate-y-6 ${
            animate
              ? "opacity-100 translate-y-0 transition-all duration-700 delay-200 animate-slide-in"
              : ""
          } animate-fade-up`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Hi, I’m
        </h1>
        <h2
          className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight opacity-0 translate-y-6 ${
            animate
              ? "opacity-100 translate-y-0 transition-all duration-700 delay-400 animate-slide-in"
              : ""
          } animate-fade-up`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Fardin Hasan Mayen
        </h2>
        <h3
          className={`text-lg sm:text-xl md:text-2xl font-semibold opacity-0 translate-y-6 ${
            animate
              ? "opacity-100 translate-y-0 transition-all duration-700 delay-600 animate-fade-up"
              : ""
          }`}
          style={{ fontFamily: "var(--font-serif)" }}
        >
          <span className="text-textCustom font-semibold">
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
          className={`text-sm sm:text-base md:text-lg text-textCustom opacity-0 translate-y-6 ${
            animate
              ? "opacity-100 translate-y-0 transition-all duration-700 delay-700 animate-fade-up"
              : ""
          }`}
        >
          Computer Science Enthusiast Seeking Exciting Career Opportunities!!
        </p>
        <div
          className={`flex flex-wrap items-center justify-center md:justify-start gap-4 w-full opacity-0 translate-y-6 ${
            animate
              ? "opacity-100 translate-y-0 transition-all duration-700 delay-800 animate-fade-up"
              : ""
          }`}
        >
          <a
            href="https://www.linkedin.com/in/fardinhasanmayen/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"

          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/fardin04"
            target="_blank"
            rel="noopener noreferrer"
           className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/fardin.hasan.mayen.000"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/__fardin__hasan__/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"
          >
            <FaInstagram />
          </a>
        </div>
        <div
          className={`w-full flex justify-center md:justify-start opacity-0 translate-y-6 ${
            animate
              ? "opacity-100 translate-y-0 transition-all duration-700 delay-1000 animate-fade-up"
              : ""
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

      <div className="flex-1 w-full flex justify-center md:justify-end z-10">
        <div
          className="relative animate-slide-in w-61 h-61 sm:w-57 sm:h-57 md:w-73 md:h-73 xl:w-80 xl:h-80 mt-25 opacity-0 translate-y-10"
          style={{ display: "inline-block" }}
        >
          <span
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              boxShadow:
                "0 0 30px 8px var(--color-main), 0 0 60px 24px var(--color-main)",
              opacity: 0.5,
              zIndex: 0,
              animation: "glowPulse 2s infinite alternate",
            }}
          ></span>
          <img
            src={profilePic}
            alt="Fardin Hasan Mayen"
            className="w-60 h-60 sm:w-56 sm:h-56 md:w-72 md:h-72 xl:w-80 xl:h-80 rounded-full object-cover shadow-2xl hover:scale-105 transition-transform duration-500 animate-float relative"
            style={{ zIndex: 1 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

