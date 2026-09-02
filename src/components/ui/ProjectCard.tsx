import * as React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../../types';
import { ReactIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      className="group relative flex flex-col justify-between rounded-lg border border-[#333333] bg-[#1e1e1e]/90 p-4 backdrop-blur-sm transition-all duration-200 hover:border-[#007acc]/70 hover:shadow-[0_0_20px_rgba(0,122,204,0.15)]"
    >
      <div className="absolute top-0 left-3 right-3 h-[1px] bg-gradient-to-r from-transparent via-[#007acc]/0 to-transparent transition-opacity group-hover:via-[#007acc]/40" />

      <div>
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center gap-2">
            <ReactIcon className="w-4 h-4 text-[#00d8ff] shrink-0" />
            <h3 className="font-semibold text-[#e6e6e6] text-sm sm:text-base group-hover:text-white transition-colors">
              {project.title}
            </h3>
          </div>
          <span className="text-[11px] font-mono text-[#6e6e6e] bg-[#252526] px-1.5 py-0.5 rounded border border-[#333333] shrink-0">
            {project.year}
          </span>
        </div>

        <p className="text-xs text-[#9e9e9e] leading-relaxed mb-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#252526] text-[#9cdcfe] border border-[#3c3c3c]/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-2.5 border-t border-[#2d2d2d] flex items-center justify-between mt-auto text-xs">
        <div className="flex items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#cccccc] hover:text-[#007acc] transition-colors font-mono text-xs"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[#007acc] hover:text-[#38bdf8] transition-colors font-mono font-medium text-xs"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}
        </div>

        <span className="text-[10px] text-[#858585] font-mono">
          {project.category}
        </span>
      </div>
    </motion.div>
  );
};
