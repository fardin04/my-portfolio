import React, { useEffect, useState } from "react";
import { FaLaptopCode, FaHandsHelping, FaUserSecret } from "react-icons/fa";

const Service = ({ darkMode }) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const services = [
    {
      title: "Web Development",
      description:
        "I am a full-stack developer who brings ideas to life. I build dynamic user interfaces with React, style them efficiently with Tailwind CSS, and power them with custom Node.js/Express APIs. By designing and integrating the right database, I ensure the entire application is cohesive, data-driven, and delivers a compelling user journey from start to finish.",
      icon: <FaLaptopCode className="text-4xl text-main mb-4" />,
    },
    {
      title: "Virtual Assistance",
      description:
        "As a virtual assistant, I ensure efficient business operations by managing schedules, emails, research, and data entry with precision and confidentiality. I leverage key productivity tools to streamline workflows and support project coordination. My goal is to provide organized, reliable support that empowers clients to stay focused and achieve their core objectives.",
      icon: <FaHandsHelping className="text-4xl text-main mb-4" />,
    },
    {
      title: "OSINT Expert",
      description:
        "As an OSINT specialist, I uncover actionable intelligence by analyzing digital footprints and public data. I conduct deep web investigations and verify identities to compile reliable reports. My work supports clients with the critical insights needed for due diligence, risk assessment, and confident strategic planning.",
      icon: <FaUserSecret className="text-4xl text-main mb-4" />,
    },
  ];

  return (
    <section
      id="services"
      className="w-full min-h-screen relative flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden transition-colors duration-500"
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
        className={`text-center mb-8 opacity-0 transform translate-y-6 ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-200 animate-fade-up"
            : ""
        }`}
      >
        <h2
          className="text-4xl font-bold"
          style={{ fontFamily: "var(--font-serif)", marginBottom: "1rem" }}
        >
          My <span className="text-main">Services</span>
        </h2>
        <p className="text-lg font-sans">What I do with passion and precision</p>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 z-10 relative w-full">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className={`p-6 rounded-2xl shadow-lg bg-opacity-10 backdrop-blur-md transition-all duration-300 transform opacity-0 translate-y-6 ${
              animate
                ? `opacity-100 translate-y-0 transition-all duration-700 delay-${
                    300 + idx * 200
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
              {service.icon}
              <h3 className="text-2xl font-bold mb-2 text-main">{service.title}</h3>
              <p className="text-sm font-sans">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;