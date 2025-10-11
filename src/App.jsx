import './App.css'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Service from './assets/components/Services'
import Skills from './assets/components/Skills'
import Projects from './assets/components/Projects'
import Contact from './assets/components/Contact'
import { useState, useEffect } from 'react'

function App() {

 

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : true;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500`}
      style={{
        backgroundColor: darkMode ? "var(--color-bg)" : "#F5E8E8",
        color: darkMode ? "var(--color-text)" : "var(--color-bg)",
      }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero darkMode={darkMode} />

      {/* About Section */}
      <About darkMode={darkMode} />

      {/* Services Section */}
      <Service darkMode={darkMode} />
      {/* Skills Section */}
      <Skills darkMode={darkMode} />

      {/* Projects Section */}
      <Projects darkMode={darkMode} />
      {/* Contact Section */}
      <Contact darkMode={darkMode} />

      
    </div>
  )
}

export default App


