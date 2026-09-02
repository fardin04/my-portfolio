export type PageId = 'home.tsx' | 'about.tsx' | 'projects.tsx' | 'contact.tsx';

export interface TabItem {
  id: PageId;
  name: string;
  path: string;
  iconType: 'tsx' | 'json' | 'pdf';
  isModified?: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  category?: 'Full-Stack' | 'Front-End' | 'Tools & Utilities';
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface ServiceItem {
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  capabilities: string[];
}

export interface DeveloperProfile {
  name: string;
  alias: string;
  title: string;
  shortBio: string;
  location: string;
  email: string;
  openToWork: boolean;
  domain: string;
  resumeFileName: string;
  roles: string[];
  stats: {
    label: string;
    value: string;
  }[];
  socials: {
    github: string;
    linkedin: string;
    facebook: string;
    instagram: string;
    email: string;
  };
}
