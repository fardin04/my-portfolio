import './App.css'
import Navbar from './assets/components/Navbar'
import Hero from './assets/components/Hero'
import About from './assets/components/About'
import Service from './assets/components/Services'
import Skills from './assets/components/Skills'
import { useState } from 'react'

function App() {
  const sections = ["Services", "Skills", "Projects", "Contact"];
  const colorsDark = [
    "from-green-700 to-green-500",
    "from-yellow-700 to-yellow-500",
    "from-blue-700 to-blue-500",
    "from-pink-700 to-pink-500"
  ];
  const colorsLight = [
    "from-green-200 to-green-100",
    "from-yellow-200 to-yellow-100",
    "from-blue-200 to-blue-100",
    "from-pink-200 to-pink-100"
  ];

  const [darkMode, setDarkMode] = useState(true);

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

      {/* Other Sections (placeholders for now) */}
      <div className="pt-20">
        {sections.map((section, idx) => (
          <section
            id={section.toLowerCase()}
            key={section}
            className={`h-screen flex items-center justify-center bg-gradient-to-r ${
              darkMode ? colorsDark[idx] : colorsLight[idx]
            } text-white transition-colors duration-500`}
          >
            <h1 className="text-6xl font-bold">{section}</h1>
          </section>
        ))}
      </div>
    </div>
  )
}

export default App


