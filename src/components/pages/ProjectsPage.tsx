import * as React from 'react';
import { motion } from 'motion/react';
import { projects } from '../../data/portfolioData';
import { ProjectCard } from '../ui/ProjectCard';
import { Kw, Var, Typ, Str, Comment, Punct } from '../ui/CodeSyntax';
import { CodeGutter } from '../layout/CodeGutter';

export const ProjectsPage: React.FC = () => {
  return (
    <div className="flex w-full min-h-full font-mono">
      <CodeGutter linesCount={32} />

      <div className="flex-1 py-6 px-4 sm:px-2 max-w-5xl space-y-5">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1 text-xs sm:text-sm text-[#d4d4d4]"
        >
          <div>
            <Kw>import</Kw> <Punct>{`{`}</Punct> <Typ>Project</Typ> <Punct>{`}`}</Punct> <Kw>from</Kw> <Str>'@/data/projects'</Str><Punct>;</Punct>
          </div>
          <div className="pt-2">
            <Comment>// Featured Full-Stack & Frontend Applications built by Fardin Hasan Mayen</Comment>
          </div>
          <div className="pt-1">
            <Kw>const</Kw> <Var>Projects</Var><Punct>:</Punct> <Typ>Project</Typ><Punct>[]</Punct> <Punct>=</Punct> <Punct>[</Punct>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="pt-4 text-xs text-[#d4d4d4] space-y-1"
        >
          <div>
            <Punct>];</Punct>
          </div>
          <div className="pt-2">
            <Kw>export default</Kw> <Var>Projects</Var><Punct>;</Punct>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
