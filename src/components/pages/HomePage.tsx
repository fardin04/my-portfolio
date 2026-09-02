import * as React from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Mail, Terminal as TerminalIcon, User } from 'lucide-react';
import { developerProfile } from '../../data/portfolioData';
import { Kw, Var, Typ, Str, Comment, Punct } from '../ui/CodeSyntax';
import { CodeGutter } from '../layout/CodeGutter';
import { PageId } from '../../types';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onResumeClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = developerProfile.roles[roleIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % developerProfile.roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <div className="flex w-full min-h-full font-mono">
      <CodeGutter linesCount={28} />

      <div className="flex-1 py-6 px-4 sm:px-2 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-1.5 text-xs sm:text-sm text-[#d4d4d4] leading-relaxed mb-6"
        >
          <div>
            <Kw>import</Kw> <Typ>React</Typ> <Kw>from</Kw> <Str>'react'</Str><Punct>;</Punct>
          </div>
          <div>
            <Kw>import</Kw> <Punct>{`{`}</Punct> <Typ>Developer</Typ> <Punct>{`}`}</Punct> <Kw>from</Kw> <Str>'@/types'</Str><Punct>;</Punct>
          </div>
          <div className="pt-2">
            <Comment>// Fardin Hasan Mayen • Full-Stack Developer</Comment>
          </div>
          <div className="pt-1">
            <Kw>const</Kw> <Var>fardin</Var><Punct>:</Punct> <Typ>Developer</Typ> <Punct>=</Punct> <Punct>{`{`}</Punct>
          </div>
          <div className="pl-6 space-y-1">
            <div>
              <Var>name</Var><Punct>:</Punct> <Str>'{developerProfile.name}'</Str><Punct>,</Punct>
            </div>
            <div>
              <Var>alias</Var><Punct>:</Punct> <Str>'{developerProfile.alias}'</Str><Punct>,</Punct>
            </div>
            <div>
              <Var>title</Var><Punct>:</Punct> <Str>'{developerProfile.title}'</Str><Punct>,</Punct>
            </div>
            <div>
              <Var>location</Var><Punct>:</Punct> <Str>'{developerProfile.location}'</Str><Punct>,</Punct>
            </div>
            <div>
              <Var>email</Var><Punct>:</Punct> <Str>'{developerProfile.email}'</Str><Punct>,</Punct>
            </div>
            <div>
              <Var>openToWork</Var><Punct>:</Punct> <Kw>true</Kw><Punct>,</Punct>
            </div>
          </div>
          <div>
            <Punct>{`}`}</Punct> <Kw>satisfies</Kw> <Typ>Developer</Typ><Punct>;</Punct>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="my-6 rounded-xl border border-[#333333] bg-[#252526]/80 p-6 sm:p-8 backdrop-blur-md relative overflow-hidden shadow-2xl"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#007acc]/10 blur-3xl pointer-events-none" />

          <div className="flex items-center justify-between pb-4 mb-5 border-b border-[#333333] text-xs text-[#858585]">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-[#007acc]" />
              <span className="text-[#cccccc] font-semibold">fardin@workspace:~$</span>
              <span className="text-[#6a9955]">whoami --detailed</span>
            </div>
            <span className="hidden sm:inline text-[#6a9955] flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#4ec9b0] animate-pulse" />
              Available for Hire
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
              Fardin Hasan Mayen
            </h1>

            <div className="text-base sm:text-lg text-[#d4d4d4] flex items-center flex-wrap gap-2">
              <span className="text-[#858585]">Engineering with expertise as</span>
              <span className="text-[#dcdcaa] font-semibold border-b border-[#dcdcaa]/40">
                {displayedText}
              </span>
              <span className="typing-cursor" />
            </div>

            <p className="text-sm sm:text-base text-[#9e9e9e] leading-relaxed max-w-2xl pt-2">
              {developerProfile.shortBio}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-5">
              <button
                onClick={() => onNavigate('about.tsx')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#2d2d2d] hover:bg-[#383838] border border-[#3c3c3c] hover:border-[#007acc] text-[#e6e6e6] font-medium text-xs sm:text-sm transition-all cursor-pointer shadow-sm"
              >
                <User className="w-4 h-4 text-[#4ec9b0]" />
                <span>About Me</span>
              </button>

              <button
                onClick={() => onNavigate('projects.tsx')}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#007acc] hover:bg-[#0062a3] text-white font-medium text-xs sm:text-sm transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,122,204,0.4)] cursor-pointer"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact.tsx')}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-transparent hover:bg-[#2d2d2d] border border-transparent hover:border-[#3c3c3c] text-[#858585] hover:text-white font-medium text-xs sm:text-sm transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#ce9178]" />
                <span>Let's Connect</span>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25 }}
          className="pt-4 text-xs text-[#d4d4d4]"
        >
          <div>
            <Kw>export default</Kw> <Var>Home</Var><Punct>;</Punct>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
