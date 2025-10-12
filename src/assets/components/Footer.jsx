import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaAngleUp } from "react-icons/fa";

const Footer = ({ darkMode }) => {
  const [animate, setAnimate] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setAnimate(true);
  }, []);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer
      id="footer"
      className="w-full relative flex justify-between items-center flex-wrap py-2 md:px-20 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "var(--color-bg-main)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      {/* Floating Background Shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-main opacity-20 rounded-full animate-bounce-slow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-main opacity-10 rounded-full animate-ping-slow"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-main opacity-15 rounded-full animate-spin-slow"></div>

      {/* Left Section - Copyright */}
      <div className="flex-1 flex-col md:text-left items-start md:items-start opacity-0 transform translate-y-6 animate-slide-in animate-fade-up">
        <p
          className={`text-textCustom font-medium text-start mb-10 text-sm md:text-base ${
            animate
              ? "opacity-100 translate-y-0 transition-all duration-700 delay-200"
              : ""
          }`}
        >
          Copyright &copy; {currentYear} by{" "}
          <span className="text-[var(--color-main)] font-semibold">
            @Fardin Hasan Mayen
          </span>{" "}
          | All Rights Reserved.
        </p>
      </div>

      {/* Center Section - Social Media Icons */}
      <div
        className={`flex space-x-4 opacity-0 transform translate-y-6 ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-800"
            : ""
        }`}
        style={{ marginBottom: "40px", marginLeft: "35px" }}
      >
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
        <a
          href="https://github.com/fardin04"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/fardinhasanmayen/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full flex items-center justify-center border-2 border-main text-main transition-all duration-300 hover:bg-main hover:text-bg"
        >
          <FaLinkedin />
        </a>
      </div>

      {/* Right Section - Back to Top Button */}
      <div
        onClick={scrollToTop} // 👈 triggers smooth scroll
        className={`flex ml-5 p-2 bg-[var(--color-main)] rounded-lg cursor-pointer transition-all duration-500 hover:shadow-[0_0_1rem_var(--color-main)] ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-800"
            : ""
        }`}
      >
        <FaAngleUp className="text-[1.6rem] text-[var(--color-bg-secondary)] transition-all duration-300" />
      </div>
    </footer>
  );
};

export default Footer;
