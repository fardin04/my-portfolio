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
      className="w-full relative flex flex-wrap items-center justify-center md:justify-between gap-6 px-4 sm:px-10 lg:px-20 py-10 md:py-8 overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: darkMode ? "var(--color-bg-main)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      <div className="order-1 md:order-none flex-1 min-w-[220px] flex justify-center mb-5 md:justify-start opacity-0 translate-y-6 animate-slide-in animate-fade-up">
        <p
          className={`text-textCustom font-medium text-sm sm:text-base text-center md:text-left ${
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

      <div
        className={`order-2 md:order-none flex justify-center gap-4 flex-wrap min-w-[220px] mb-5 opacity-0 translate-y-6 ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-350"
            : ""
        }`}
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

      <div
        onClick={scrollToTop}
        className={`order-3 md:order-none flex items-center justify-center p-3 mt-5 bg-[var(--color-main)] rounded-lg cursor-pointer transition-all duration-500 hover:shadow-[0_0_1rem_var(--color-main)] ${
          animate
            ? "opacity-100 translate-y-0 transition-all duration-700 delay-500"
            : ""
        }`}
        
      >
        <FaAngleUp className="text-2xl text-[var(--color-bg-secondary)] transition-all duration-300" />
      </div>
    </footer>
  );
};

export default Footer;
