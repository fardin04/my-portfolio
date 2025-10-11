# 🌟 Fardin Hasan Mayen — Personal Portfolio

A sleek, animated, and responsive portfolio built with React + Tailwind CSS. It showcases my work, skills, and ways to connect — with smooth micro-interactions that feel alive.

## ✨ Highlights
- 🎯 Clean, modern design with dark/light mode
- 🌀 Smooth animations (slide-in, fade-up, float, glowPulse)
- 📊 Animated skill bars with soft glow
- 📩 Contact form with toast confirmation
- 📄 One-click resume download
- ⚡ Blazing fast dev experience (Vite)

## 🔗 Live Demo
- Deployed: add your live link here
- Preview locally: see Quick Start below

## 🧰 Tech Stack
- React + Vite
- Tailwind CSS
- react-icons
- react-hot-toast
- Framer Motion (optional)

## 🚀 Quick Start
1) Clone
   git clone <your-repo-url> && cd my-portfolio
2) Install
   npm install
3) Dev
   npm run dev
4) Build
   npm run build
5) Preview
   npm run preview

Node.js 18+ recommended.

## 🗂️ Structure
- src/
  - assets/components/
    - Navbar.jsx, Hero.jsx, About.jsx, Skills.jsx, Contact.jsx, ...
  - index.css (global styles + animations)
  - main.jsx (entry)
- public/ (static assets)

## 🎨 Animations Guide
Defined in src/index.css. Use these utility classes on elements:
- animate-slide-in → slides in from the right with fade
- animate-slide-out → slides out to the right with fade
- animate-fade-up → fades in while moving up
- animate-float → gentle up/down float (e.g., profile image)
- animate-bounce-slow / animate-ping-slow / animate-spin-slow → ambient background shapes
- glowPulse → used for subtle profile glow (applied via CSS/inline animation)

Example:
```jsx
<div className="opacity-0 translate-y-6 animate-fade-up">Hello!</div>
```

Skills progress bars animate width from 0% → target value on mount.

## 🧪 Environment & Scripts
- Dev: npm run dev
- Build: npm run build
- Preview: npm run preview

## 🛠️ Customization
- Colors/fonts: tweak CSS variables in src/index.css
- Profile, resume, links: edit in component files (Hero, Navbar, Contact)
- Animation timing: adjust keyframes/durations in src/index.css
- Skills: update names/icons/widths in src/assets/components/Skills.jsx

## 🐞 Troubleshooting
- Missing deps? Install:
  npm install react-icons react-hot-toast framer-motion
- Vite cache issues: stop dev server and run:
  rm -rf node_modules .vite && npm install

## 📫 Contact
- Portfolio: add your live link
- LinkedIn: https://www.linkedin.com/in/fardinhasanmayen/
- GitHub: https://github.com/fardin04
- Email: fardinhasan.mayen@gmail.com

## 📝 License
MIT — feel free to use and adapt.
