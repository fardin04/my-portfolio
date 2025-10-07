import React, { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import bloxImage from "../images/projects/blox-image.jpeg"
import tutorTrackImage from "../images/projects/tutor-track-image.jpeg"
import puaicImage from "../images/projects/puaic-image.jpeg"
import quizAppImage from "../images/projects/quiz-app-image.png"
import pupcImage from "../images/projects/pupc-image.jpeg"
import basicEcomImage from "../images/projects/basic-Ecom-image.png"
import osintImage from "../images/projects/osint-image.png"
import portfolioImage from "../images/projects/portfolio-image.jpeg"
import weatherAppImage from "../images/projects/weather-app-image.png"
import landingPageImage from "../images/projects/landing-page-image.png"
import stopWatchImage from "../images/projects/stopwatch-image.png"



const Projects = ({ darkMode }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const projects = [
    {
      title: "Bloxxx",
      description: "A modern, full-featured blog application built with React, Vite, and Appwrite. This application allows users to create, read, update, and delete blog posts with featured images and rich text content",
      image: bloxImage,
      link: "https://bloxxx.netlify.app/",
    },
    {
      title: "Tutor Trackk",
      description: "A React.js tutoring management system with automated scheduling, student tracking, and class logging features. Built with Appwrite backend and Tailwind CSS.",
      image: tutorTrackImage,
      link: "https://tutortrackk.netlify.app/",
    },
    {
      title: "Presidency University AI Club",
      description: "Built the Presidency University AI Club website using HTML, CSS, and JavaScript, ensuring a responsive design, smooth navigation, and an engaging user experience.",
      image: puaicImage,
      link: "https://puaic.netlify.app/",
    },
    {
      title: "Quiz App",
      description: "An engaging quiz app developed with HTML, CSS, and JavaScript. Designed to provide a dynamic learning experience with interactive questions, real-time feedback, and an intuitive user interface.",
      image: quizAppImage,
      link: "https://fardin04.github.io/Demo-Quiz-App/",
    },
    {
      title: "PUPC",
      description: "Developed the club's official ex-website with a responsive, interactive image gallery.Used vanilla JavaScript to create smooth animations for an elegant cross-device experience.",
      image: pupcImage,
      link: "https://fardin04.github.io/PUPC/",
    },
    {
      title: "E-Com Website",
      description: "A simple e-commerce website built with HTML, CSS, and JavaScript. Designed to showcase products with a clean layout, this website features a shopping cart, product filtering, and a user-friendly interface.",
      image: basicEcomImage,
      link: "https://fardin04.github.io/Demo-Website/",
    },
    {
      title: "Portfolio Website",
      description: " personal portfolio website showcasing my projects, skills, and experience. Built with HTML, CSS, and JavaScript, this site features a clean layout, responsive design, and smooth animations.",
      image: portfolioImage,
      link: "https://fardin04.github.io/portfolio/",
    },
    {
      title: "OSINT Investigation",
      description: "An intuitive OSINT platform for essential people-finding and basic investigations. Locate names, addresses, and contact information quickly for social and verification purposes.",
      image: osintImage,
      link: "https://www.fiverr.com/fardin__hasan__?up_rollout=true",
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather updates and forecasts. Built with HTML, CSS, and JavaScript, this app fetches data from a weather API and displays it in a user-friendly interface.",
      image: weatherAppImage,
      link: "https://fardin04.github.io/Weather-App/",
    },
    {
      title: "Landing Page",
      description: "A responsive landing page designed to capture user interest and drive conversions. Built with HTML, CSS, and JavaScript, this landing page features a clean layout, engaging visuals, and clear calls to action.",
      image: landingPageImage,
      link: "https://fardin04.github.io/Landing_Page/",
    },
    {
      title: "Stopwatch App",
      description: "A simple stopwatch application built with HTML, CSS, and JavaScript. This app allows users to start, stop, and reset a timer, making it perfect for timing activities or workouts.",
      image: stopWatchImage,
      link: "https://fardin04.github.io/Stopwatch/",
    },
  ];
  return (
    <section
      id="projects"
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-20 py-20 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "var(--color-bg)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-main opacity-20 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-main opacity-10 rounded-full animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-main opacity-15 rounded-full animate-spin-slow"></div>

      {/* Section Title */}
      <div
        className={`text-center mb-12 opacity-0 transform translate-y-6 ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-200 animate-fade-up"
            : ""
        }`}
      >
        <h2
          className="text-4xl font-bold"
          style={{ fontFamily: "var(--font-serif)", marginBottom: "1rem" }}
        >
          My <span className="text-main">Projects</span>
        </h2>
        <p className="text-lg font-sans">Some of my featured works and experiments</p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 z-10 relative w-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-700 opacity-0 translate-y-6 ${
              animate
                ? `opacity-100 translate-y-0 transition-all duration-700 delay-${
                    300 + idx * 200
                  } animate-fade-up`
                : ""
            } ${
              darkMode
                ? "bg-[rgba(255,255,255,0.05)]"
                : "bg-[rgba(178,34,52,0.1)]"
            } group hover:scale-105  hover:border-main cursor-pointer`}
            style={{
                transition: "all 0.5s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 6px 3px var(--color-main), 0 0 10px 4px var(--color-main)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-center p-4">
              <h3 className="text-2xl font-bold text-main mb-2">{project.title}</h3>
              <p className="text-sm mb-4 font-sans text-white">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white border border-main px-4 py-2 rounded-full hover:bg-main transition-all duration-300"
              >
                View Project <FaExternalLinkAlt className="text-sm" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
