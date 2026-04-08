import React, { useState, useEffect } from "react";
import { HiMenu, HiX, HiMoon, HiSun } from "react-icons/hi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Home");

  const links = ["Home", "About", "Services", "Skills", "Projects", "Contact"];

  // Scroll listener for active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100; // Offset for navbar height
      links.forEach((link) => {
        const section = document.getElementById(link.toLowerCase());
        if (section) {
          if (
            scrollPos >= section.offsetTop &&
            scrollPos < section.offsetTop + section.offsetHeight
          ) {
            setActiveSection(link);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav
      className="fixed w-full z-50 transition-colors duration-500 overflow-hidden"
      aria-label="Primary"
      style={{
        backgroundColor: darkMode ? "var(--color-bg)" : "var(--color-text)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-16 sm:h-20 relative">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold cursor-pointer animate-slide-in"
          aria-label="Go to Fardin Hasan Mayen home section"
          style={{
            color: darkMode ? "var(--color-main)" : "var(--color-bg)",
            fontFamily: "var(--font-serif)",
          }}
        >
          
        </a>

        {/* Desktop Menu (centered) */}
        <ul
          className="hidden md:flex space-x-6 lg:space-x-12 font-medium absolute left-1/2 transform -translate-x-1/2 animate-fade-up text-sm lg:text-base"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {links.map((link) => (
            <li
              key={link}
              className={`cursor-pointer transition-colors duration-300 ${
                activeSection === link
                  ? "text-main"
                  : darkMode
                  ? "text-textCustom hover:text-main"
                  : "text-bg hover:text-main"
              }`}
            >
              <a
                href={`#${link.toLowerCase()}`}
                aria-label={`Go to ${link} section`}
                aria-current={activeSection === link ? "page" : undefined}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Right icons: Dark Mode & Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button
            type="button"
            className="cursor-pointer text-textCustom md:text-xl"
            onClick={toggleDarkMode}
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
          >
            {darkMode ? (
              <HiMoon size={24} />
            ) : (
              <HiSun size={24} style={{ color: "var(--color-main)" }} />
            )}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden cursor-pointer z-50 p-2 rounded-md active:scale-95 transition-transform"
            onClick={() => setNavOpen(!navOpen)}
            aria-label={navOpen ? "Close navigation menu" : "Open navigation menu"}
            title={navOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {navOpen ? (
              <HiX
                size={28}
                style={{
                  color: darkMode ? "var(--color-text)" : "var(--color-bg)",
                }}
              />
            ) : (
              <HiMenu
                size={28}
                style={{
                  color: darkMode ? "var(--color-text)" : "var(--color-bg)",
                }}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 sm:space-y-10 overflow-y-auto px-4 transition-transform duration-500 ${
          navOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          fontFamily: "var(--font-sans)",
          backgroundColor: darkMode
            ? "var(--color-bg-secondary)"
            : "var(--color-text)",
          color: darkMode ? "var(--color-text)" : "var(--color-bg)",
          transition: "background-color 0.5s, color 0.5s",
        }}
      >
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setNavOpen(false)}
            aria-label={`Go to ${link} section`}
            className={`text-2xl cursor-pointer transition-colors duration-300 ${
              activeSection === link
                ? "text-main"
                : darkMode
                ? "text-textCustom hover:text-main"
                : "text-bg hover:text-main"
            }`}
          >
            {link}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
