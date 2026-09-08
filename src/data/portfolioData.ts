import { DeveloperProfile, Project, SkillCategory, ServiceItem, TabItem } from '../types';

export const developerProfile: DeveloperProfile = {
  name: 'Fardin Hasan Mayen',
  alias: 'fardin04',
  title: 'Full-Stack Developer',
  shortBio: 'Engineering robust, user-centric web applications with React, Node.js, TypeScript, and modern full-stack architectures. Driven by analytical problem-solving and clean code aesthetics.',
  location: 'Dhaka, Bangladesh',
  email: 'fardinhasan.mayen@gmail.com',
  openToWork: true,
  domain: 'fardinhasanmayen.dev',
  resumeFileName: 'Resume_Of_Fardin_Hasan .pdf',
  roles: [
    'Full-Stack Developer',
    'React & Next.js Enthusiast',
    'Backend & API Architect',
    'TypeScript Developer',
    'Analytical Problem Solver'
  ],
  stats: [
    { label: 'Completed Projects', value: '15+' },
    { label: 'Core Technologies', value: '12+' },
    { label: 'Code Quality', value: '100%' },
    { label: 'Open Source Repos', value: '25+' }
  ],
  socials: {
    github: 'https://github.com/fardin04',
    linkedin: 'https://www.linkedin.com/in/fardinhasanmayen/',
    facebook: 'https://www.facebook.com/fardin.hasan.mayen.000',
    instagram: 'https://www.instagram.com/__fardin__hasan__/',
    email: 'fardinhasan.mayen@gmail.com'
  }
};

export const navigationTabs: TabItem[] = [
  {
    id: 'home.tsx',
    name: 'home.tsx',
    path: 'src/pages/home.tsx',
    iconType: 'tsx'
  },
  {
    id: 'about.tsx',
    name: 'about.tsx',
    path: 'src/pages/about.tsx',
    iconType: 'tsx'
  },
  {
    id: 'projects.tsx',
    name: 'projects.tsx',
    path: 'src/pages/projects.tsx',
    iconType: 'tsx'
  },
  {
    id: 'contact.tsx',
    name: 'contact.tsx',
    path: 'src/pages/contact.tsx',
    iconType: 'tsx'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages & Runtimes',
    iconName: 'Code',
    skills: [
      { name: 'JavaScript (ES6+)', level: 'Advanced' },
      { name: 'TypeScript', level: 'Intermediate' },
      { name: 'Node.js', level: 'Proficient' },
      { name: 'HTML5', level: 'Expert' },
      { name: 'CSS3', level: 'Advanced' }
    ]
  },
  {
    title: 'Frameworks & Libraries',
    iconName: 'Layout',
    skills: [
      { name: 'React.js', level: 'Advanced' },
      { name: 'Next.js', level: 'Intermediate' },
      { name: 'Tailwind CSS', level: 'Expert' },
      { name: 'Express.js', level: 'Proficient' },
      { name: 'Bootstrap', level: 'Advanced' },
      { name: 'Framer Motion', level: 'Intermediate' }
    ]
  },
  {
    title: 'Databases & Backend Services',
    iconName: 'Database',
    skills: [
      { name: 'MongoDB', level: 'Proficient' },
      { name: 'PostgreSQL', level: 'Intermediate' },
      { name: 'Firebase', level: 'Proficient' },
      { name: 'Appwrite', level: 'Proficient' },
      { name: 'REST APIs', level: 'Advanced' }
    ]
  },
  {
    title: 'DevOps, Tools & Specializations',
    iconName: 'Terminal',
    skills: [
      { name: 'Git & GitHub', level: 'Advanced' },
      { name: 'VS Code Ecosystem', level: 'Expert' },
      { name: 'Postman API Testing', level: 'Proficient' },
      { name: 'OSINT & Intelligence Analysis', level: 'Specialist' },
      { name: 'Generative AI Workflows', level: 'Proficient' }
    ]
  }
];

export const services: ServiceItem[] = [
  {
    title: 'Full-Stack Web Development',
    subtitle: 'From Concept to Scalable Deployment',
    description: 'Engineering dynamic user interfaces with React and Tailwind CSS, backed by robust RESTful APIs built on Node.js, Express, and structured MongoDB/SQL databases.',
    iconName: 'Laptop',
    capabilities: [
      'Interactive React & Next.js applications',
      'Secure REST API design & integration',
      'Database modeling with MongoDB & PostgreSQL',
      'Responsive, accessible UI architectures'
    ]
  },
  {
    title: 'OSINT & Digital Investigation',
    subtitle: 'Actionable Intelligence & Identity Verification',
    description: 'Conducting in-depth open-source intelligence research, digital footprint analysis, and public data verification to produce structured, actionable reports.',
    iconName: 'Shield',
    capabilities: [
      'Public records analysis & data synthesis',
      'Identity verification & threat modeling',
      'Digital footprint auditing',
      'Due diligence & intelligence reporting'
    ]
  },
  {
    title: 'Technical Assistance & Workflow Automation',
    subtitle: 'Process Optimization & Systems Management',
    description: 'Supporting technical workflows, project coordination, API integrations, and administrative systems with utmost precision and confidentiality.',
    iconName: 'Cpu',
    capabilities: [
      'Workflow automation & tooling',
      'Documentation & system architecture',
      'Technical coordination & problem-solving'
    ]
  }
];

export const projects: Project[] = [
  {
    id: 'zenith-ethnic',
    title: 'Zenith Ethnic E-Commerce',
    description: 'Full-stack apparel retail platform with catalog browsing, cart synchronization, secure checkout, and real-time inventory management.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://zenithethnic.com/',
    githubUrl: 'https://github.com/fardin04',
    year: '2025',
    category: 'Full-Stack',
    featured: true
  },
  {
    id: 'project-pulse',
    title: 'Project Pulse',
    description: 'Agile project tracking engine evaluating delivery velocity with automated health metrics, recurring check-ins, and risk matrices.',
    technologies: ['React.js', 'TypeScript', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://projectpluse.onrender.com/',
    githubUrl: 'https://github.com/fardin04',
    year: '2025',
    category: 'Full-Stack',
    featured: true
  },
  {
    id: 'baby-shop-ecom',
    title: 'Baby Shop E-Commerce',
    description: 'Digital retail storefront featuring categorized catalog navigation, responsive shopping cart, and customer order processing.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    liveUrl: 'https://babyshopbytamanna.com/',
    githubUrl: 'https://github.com/fardin04',
    year: '2025',
    category: 'Full-Stack',
    featured: true
  },
  {
    id: 'pu-found-lost',
    title: 'PU Found & Lost Hub',
    description: 'Centralized university campus portal for reporting, tracking, and reclaiming misplaced items with verification mechanisms.',
    technologies: ['React.js', 'Firebase Auth', 'Firestore', 'Tailwind CSS'],
    liveUrl: 'https://pu-found-and-lost-hub.web.app/',
    githubUrl: 'https://github.com/fardin04',
    year: '2024',
    category: 'Full-Stack'
  },
  {
    id: 'bloxxx-platform',
    title: 'Bloxxx Publishing Engine',
    description: 'Modern blogging platform built with Appwrite services for authentication, rich text composition, and cloud storage.',
    technologies: ['React.js', 'Vite', 'Appwrite', 'Tailwind CSS'],
    liveUrl: 'https://bloxxx.netlify.app/',
    githubUrl: 'https://github.com/fardin04',
    year: '2024',
    category: 'Front-End'
  },
  {
    id: 'tutor-trackk',
    title: 'Tutor Trackk',
    description: 'Tutoring coordination web app for session scheduling, lesson logging, automated reminders, and student academic monitoring.',
    technologies: ['React.js', 'Appwrite', 'Tailwind CSS', 'JavaScript'],
    liveUrl: 'https://tutortrackk.netlify.app/',
    githubUrl: 'https://github.com/fardin04',
    year: '2024',
    category: 'Front-End'
  },
  {
    id: 'pu-ai-club',
    title: 'Presidency University AI Club',
    description: 'Official digital portal showcasing student technology initiatives, workshop announcements, and ongoing AI research projects.',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
    liveUrl: 'https://github.com/fardin04',
    githubUrl: 'https://github.com/fardin04',
    year: '2024',
    category: 'Front-End'
  }
];
