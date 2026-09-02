import * as React from 'react';
import { motion } from 'motion/react';
import { Kw, Var, Typ, Str, Comment, Punct } from '../ui/CodeSyntax';
import { CodeGutter } from '../layout/CodeGutter';

export const AboutPage: React.FC = () => {
  return (
    <div className="flex w-full min-h-full font-mono">
      <CodeGutter linesCount={36} />

      <div className="flex-1 py-6 px-4 sm:px-2 max-w-5xl space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1 text-xs sm:text-sm text-[#d4d4d4]"
        >
          <div>
            <Kw>import</Kw> <Punct>{`{`}</Punct> <Typ>DeveloperProfile</Typ><Punct>,</Punct> <Typ>Skills</Typ> <Punct>{`}`}</Punct> <Kw>from</Kw> <Str>'@/types'</Str><Punct>;</Punct>
          </div>
          <div className="pt-2">
            <Comment>/** About Fardin Hasan Mayen — Full-Stack Developer */</Comment>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="rounded-lg border border-[#333333] bg-[#252526]/80 p-4 sm:p-5 text-xs sm:text-sm font-mono leading-relaxed space-y-1 text-[#6a9955]"
        >
          <div className="text-[#858585] text-xs pb-1">
            <span>// Professional Narrative</span>
          </div>
          <div><Comment>/**</Comment></div>
          <div><Comment> * Full-Stack Developer specializing in modern TypeScript, React, and scalable Node.js architectures.</Comment></div>
          <div><Comment> * Passionate about crafting high-performance, responsive web systems with clean, modular, and maintainable code.</Comment></div>
          <div><Comment> * B.Sc. in Computer Science & Engineering graduate from Presidency University, Dhaka.</Comment></div>
          <div><Comment> */</Comment></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="rounded-lg border border-[#333333] bg-[#252526]/80 p-4 sm:p-5 text-xs sm:text-sm font-mono space-y-3"
        >
          <div className="flex items-center gap-2 pb-2 border-b border-[#333333] text-xs text-[#858585]">
            <span className="text-[#007acc] font-semibold">// Technical Competencies</span>
            <span className="text-[#6a9955]">// Full Stack & Tooling</span>
          </div>

          <div className="space-y-3 pt-1">
            <div>
              <Kw>const</Kw> <Var>Skills</Var> <Punct>=</Punct> <Punct>{`{`}</Punct>
            </div>

            <div className="pl-4 sm:pl-6 space-y-1.5">
              <div className="text-[#9cdcfe]">
                <Var>'LANGUAGES & RUNTIMES'</Var><Punct>:</Punct> <Punct>[</Punct>
              </div>
              <div className="pl-4 flex flex-wrap gap-1.5 py-1">
                {['JavaScript (ES6+)', 'TypeScript', 'Node.js', 'HTML5', 'CSS3'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#ce9178] hover:border-[#007acc] transition-colors"
                  >
                    '{skill}',
                  </span>
                ))}
              </div>
              <div><Punct>],</Punct></div>
            </div>

            <div className="pl-4 sm:pl-6 space-y-1.5">
              <div className="text-[#9cdcfe]">
                <Var>'FRAMEWORKS & LIBRARIES'</Var><Punct>:</Punct> <Punct>[</Punct>
              </div>
              <div className="pl-4 flex flex-wrap gap-1.5 py-1">
                {['React.js', 'Next.js', 'Tailwind CSS', 'Express.js', 'Bootstrap', 'Framer Motion'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#ce9178] hover:border-[#007acc] transition-colors"
                  >
                    '{skill}',
                  </span>
                ))}
              </div>
              <div><Punct>],</Punct></div>
            </div>

            <div className="pl-4 sm:pl-6 space-y-1.5">
              <div className="text-[#9cdcfe]">
                <Var>'DATABASES & BACKEND'</Var><Punct>:</Punct> <Punct>[</Punct>
              </div>
              <div className="pl-4 flex flex-wrap gap-1.5 py-1">
                {['MongoDB', 'PostgreSQL', 'Firebase', 'Appwrite', 'REST APIs'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#ce9178] hover:border-[#007acc] transition-colors"
                  >
                    '{skill}',
                  </span>
                ))}
              </div>
              <div><Punct>],</Punct></div>
            </div>

            <div className="pl-4 sm:pl-6 space-y-1.5">
              <div className="text-[#9cdcfe]">
                <Var>'TOOLS & DEVOPS'</Var><Punct>:</Punct> <Punct>[</Punct>
              </div>
              <div className="pl-4 flex flex-wrap gap-1.5 py-1">
                {['Git & GitHub', 'VS Code Ecosystem', 'Postman', 'Vite', 'npm / pnpm'].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 rounded bg-[#1e1e1e] border border-[#3c3c3c] text-[#ce9178] hover:border-[#007acc] transition-colors"
                  >
                    '{skill}',
                  </span>
                ))}
              </div>
              <div><Punct>],</Punct></div>
            </div>

            <div>
              <Punct>{`}`}</Punct><Punct>;</Punct>
            </div>
          </div>
        </motion.div>

        <div className="pt-4 text-xs text-[#d4d4d4]">
          <Kw>export default</Kw> <Var>About</Var><Punct>;</Punct>
        </div>
      </div>
    </div>
  );
};
