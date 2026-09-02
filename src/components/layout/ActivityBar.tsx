import * as React from 'react';
import { useState } from 'react';
import { Files, Search, Blocks, Github, Linkedin, Mail, FileText } from 'lucide-react';
import { developerProfile } from '../../data/portfolioData';
import { SourceControlIcon } from '../ui/Icons';

interface ActivityBarProps {
  activeSidebar: 'explorer' | 'search' | 'git';
  onSelectSidebar?: (bar: 'explorer' | 'search' | 'git') => void;
  onResumeClick: () => void;
}

export const ActivityBar: React.FC<ActivityBarProps> = ({
  activeSidebar = 'explorer',
  onResumeClick,
}) => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <aside className="w-12 bg-[#181818] border-r border-[#2d2d2d] flex flex-col justify-between items-center py-1 select-none z-20 shrink-0 font-mono">
      <div className="flex flex-col items-center w-full">
        <div
          onMouseEnter={() => setHoveredItem('explorer')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex items-center justify-center w-full h-11 cursor-pointer"
        >
          <div
            className={`absolute left-0 top-0 bottom-0 w-0.5 ${
              activeSidebar === 'explorer' ? 'bg-[#007acc]' : 'bg-transparent'
            }`}
          />
          <div className="p-2 rounded hover:bg-[#252526] transition-colors">
            <Files
              className={`w-5 h-5 transition-colors ${
                activeSidebar === 'explorer' ? 'text-white' : 'text-[#858585] hover:text-white'
              }`}
            />
          </div>

          {hoveredItem === 'explorer' && (
            <div className="absolute left-12 ml-1 z-50 px-2 py-1 bg-[#252526] text-[#cccccc] text-[11px] rounded border border-[#3c3c3c] shadow-lg whitespace-nowrap pointer-events-none">
              Explorer (Ctrl+Shift+E)
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setHoveredItem('search')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex items-center justify-center w-full h-11 cursor-pointer"
        >
          <div className="p-2 rounded hover:bg-[#252526] text-[#858585] hover:text-white transition-colors">
            <Search className="w-5 h-5" />
          </div>

          {hoveredItem === 'search' && (
            <div className="absolute left-12 ml-1 z-50 px-2 py-1 bg-[#252526] text-[#cccccc] text-[11px] rounded border border-[#3c3c3c] shadow-lg whitespace-nowrap pointer-events-none">
              Search (Ctrl+Shift+F)
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setHoveredItem('source')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex items-center justify-center w-full h-11 cursor-pointer"
        >
          <div className="p-2 rounded hover:bg-[#252526] text-[#858585] hover:text-white transition-colors">
            <SourceControlIcon className="w-5 h-5" />
          </div>

          {hoveredItem === 'source' && (
            <div className="absolute left-12 ml-1 z-50 px-2 py-1 bg-[#252526] text-[#cccccc] text-[11px] rounded border border-[#3c3c3c] shadow-lg whitespace-nowrap pointer-events-none">
              Source Control (Ctrl+Shift+G)
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setHoveredItem('extensions')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex items-center justify-center w-full h-11 cursor-pointer"
        >
          <div className="p-2 rounded hover:bg-[#252526] text-[#858585] hover:text-white transition-colors relative">
            <Blocks className="w-5 h-5" />
            <span className="absolute bottom-1 right-1 flex items-center justify-center w-3.5 h-3.5 bg-[#007acc] text-white text-[9px] font-bold rounded-full">
              5
            </span>
          </div>

          {hoveredItem === 'extensions' && (
            <div className="absolute left-12 ml-1 z-50 px-2 py-1 bg-[#252526] text-[#cccccc] text-[11px] rounded border border-[#3c3c3c] shadow-lg whitespace-nowrap pointer-events-none">
              Extensions (Ctrl+Shift+X)
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col items-center w-full pt-2 border-t border-[#252526]">
        <div
          onMouseEnter={() => setHoveredItem('resume')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex items-center justify-center w-full h-10 cursor-pointer"
        >
          <button
            onClick={onResumeClick}
            className="p-2 rounded hover:bg-[#007acc]/20 text-[#007acc] hover:text-[#38bdf8] transition-colors cursor-pointer"
            aria-label="View / Download Resume"
          >
            <FileText className="w-5 h-5" />
          </button>

          {hoveredItem === 'resume' && (
            <div className="absolute left-12 ml-1 z-50 px-2 py-1 bg-[#252526] text-[#cccccc] text-[11px] rounded border border-[#3c3c3c] shadow-lg whitespace-nowrap pointer-events-none">
              Resume_Of_Fardin_Hasan.pdf
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setHoveredItem('github')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex items-center justify-center w-full h-10 cursor-pointer"
        >
          <a
            href={developerProfile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-[#252526] text-[#858585] hover:text-white transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>

          {hoveredItem === 'github' && (
            <div className="absolute left-12 ml-1 z-50 px-2 py-1 bg-[#252526] text-[#cccccc] text-[11px] rounded border border-[#3c3c3c] shadow-lg whitespace-nowrap pointer-events-none">
              GitHub Profile (External)
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setHoveredItem('linkedin')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex items-center justify-center w-full h-10 cursor-pointer"
        >
          <a
            href={developerProfile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded hover:bg-[#252526] text-[#858585] hover:text-[#007acc] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {hoveredItem === 'linkedin' && (
            <div className="absolute left-12 ml-1 z-50 px-2 py-1 bg-[#252526] text-[#cccccc] text-[11px] rounded border border-[#3c3c3c] shadow-lg whitespace-nowrap pointer-events-none">
              LinkedIn Profile (External)
            </div>
          )}
        </div>

        <div
          onMouseEnter={() => setHoveredItem('email')}
          onMouseLeave={() => setHoveredItem(null)}
          className="relative flex items-center justify-center w-full h-10 cursor-pointer"
        >
          <a
            href={`mailto:${developerProfile.socials.email}`}
            className="p-2 rounded hover:bg-[#252526] text-[#858585] hover:text-[#ce9178] transition-colors"
            aria-label="Send Direct Email"
          >
            <Mail className="w-5 h-5" />
          </a>

          {hoveredItem === 'email' && (
            <div className="absolute left-12 ml-1 z-50 px-2 py-1 bg-[#252526] text-[#cccccc] text-[11px] rounded border border-[#3c3c3c] shadow-lg whitespace-nowrap pointer-events-none">
              fardinhasan.mayen@gmail.com
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
