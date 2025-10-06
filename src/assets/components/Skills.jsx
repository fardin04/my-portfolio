import React, { useEffect, useState } from "react";
import { 
  SiHtml5, SiCss3, SiJavascript, SiBootstrap, SiTailwindcss, SiNodedotjs, SiReact, 
  SiGithub 
} from "react-icons/si";
import { FaDatabase, FaFileWord, FaRobot, FaGitAlt } from "react-icons/fa";

const skillsData = [
  { name: "HTML5", icon: <SiHtml5 />, width: "80%" },
  { name: "CSS3", icon: <SiCss3 />, width: "70%" },
  { name: "JavaScript", icon: <SiJavascript />, width: "70%" },
  { name: "Bootstrap", icon: <SiBootstrap />, width: "75%" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, width: "70%" },
  { name: "Node JS", icon: <SiNodedotjs />, width: "70%" },
  { name: "MongoDB", icon: <FaDatabase />, width: "60%" },
  { name: "MS Office", icon: <FaFileWord />, width: "85%" },
  { name: "Git", icon: <FaGitAlt />, width: "70%" },
  { name: "GitHub", icon: <SiGithub />, width: "75%" },
  { name: "Generative AI", icon: <FaRobot />, width: "65%" },
  { name: "React Js", icon: <SiReact />, width: "75%" },
];

const Skills = ({ darkMode }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section
      id="skills"
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-20 py-20 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "var(--color-bg-secondary)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-main opacity-20 rounded-full animate-bounce-slow"></div>
      <div className="absolute top-1/3 right-10 w-32 h-32 bg-main opacity-15 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-main opacity-10 rounded-full animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-main opacity-10 rounded-full animate-spin-slow"></div>

      {/* Section Title */}
      <div
        className={`text-center mb-12 opacity-0 transform translate-y-6 ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-200 animate-fade-up"
            : ""
        }`}
      >
        <h2
          className="text-4xl md:text-5xl font-serif mb-2"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          My <span className="text-main">Skills</span>
        </h2>
        <p className="text-lg font-sans">
          Here are some of the technologies and tools I work with
        </p>
      </div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full z-10 relative">
        {skillsData.map((skill, idx) => (
          <div
            key={skill.name}
            className={`p-6 rounded-2xl shadow-lg bg-opacity-10 backdrop-blur-md transition-all duration-300 transform opacity-0 translate-y-6 ${
              animate
                ? `opacity-100 translate-y-0 transition-all duration-700 delay-${
                    300 + idx * 150
                  } animate-fade-up`
                : ""
            } ${
              darkMode
                ? "bg-[rgba(255,255,255,0.05)]"
                : "bg-[rgba(178,34,52,0.1)]"
            } hover:scale-105 hover:border-2 hover:border-main cursor-pointer`}
            style={{ transition: "all 0.5s ease" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 12px 6px var(--color-main), 0 0 20px 8px var(--color-main)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "";
            }}
          >
            <div className="flex flex-col items-center text-center">
              <div className="text-3xl text-main mb-2">{skill.icon}</div>
              <span className="text-lg font-semibold text-main mb-4">
                {skill.name}
              </span>
              <div className="progress-line relative w-full h-4 rounded-full overflow-hidden bg-[var(--color-bg-secondary)]">
                <span
  className={`absolute h-full rounded-full bg-[var(--color-main)] skill-bar-glow transition-all duration-1500 ease-out`}
  style={{
    width: animate ? skill.width : "0%",
    transitionDelay: `${idx * 150}ms`
  }}
></span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
