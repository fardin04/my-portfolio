import * as React from 'react';
import { Search, Sun, Moon, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { PageId } from '../../types';
import { VsCodeLogo, LinuxWindowControls } from '../ui/Icons';

interface TitleBarProps {
  activePage: PageId;
  isDark: boolean;
  onToggleTheme: () => void;
  onToggleMobileSidebar: () => void;
}

export const TitleBar: React.FC<TitleBarProps> = ({
  activePage,
  isDark,
  onToggleTheme,
  onToggleMobileSidebar,
}) => {
  const menuItems = ['File', 'Edit', 'Selection', 'View', 'Go', 'Run', 'Terminal', 'Help'];

  return (
    <header className="h-9 w-full bg-[#181818] border-b border-[#2d2d2d] flex items-center justify-between pl-2 pr-0 text-xs select-none text-[#cccccc] z-30 shrink-0 font-mono">
      <div className="flex items-center gap-1.5 h-full">
        <button
          onClick={onToggleMobileSidebar}
          className="md:hidden p-1 rounded hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white transition-colors mr-1"
          title="Toggle Explorer"
          aria-label="Toggle Explorer"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex items-center justify-center px-1.5 h-full" title="Visual Studio Code">
          <VsCodeLogo className="w-4 h-4" />
        </div>

        <nav className="hidden md:flex items-center text-xs text-[#cccccc]">
          {menuItems.map((item) => (
            <button
              key={item}
              type="button"
              className="px-2 py-1 rounded hover:bg-[#2d2d2d] text-[#cccccc] hover:text-white cursor-default transition-colors text-[12px]"
            >
              {item}
            </button>
          ))}
          <span className="px-1.5 py-1 text-[#858585] text-xs cursor-default">...</span>
        </nav>
      </div>

      <div className="flex items-center gap-2 max-w-md w-full justify-center px-2">
        <div className="hidden lg:flex items-center gap-0.5 text-[#858585]">
          <button className="p-0.5 hover:text-white transition-colors cursor-default" title="Go Back">
            <ChevronLeft className="w-3.5 h-3.5" />
          </button>
          <button className="p-0.5 hover:text-white transition-colors cursor-default" title="Go Forward">
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div
          className="group relative flex items-center justify-center gap-2 bg-[#252526] hover:bg-[#2a2d2e] border border-[#333333] hover:border-[#007acc] px-4 py-0.5 rounded cursor-pointer transition-all duration-150 w-64 sm:w-80 shadow-sm"
          title="Quick Open (Ctrl+P)"
        >
          <Search className="w-3 h-3 text-[#858585] group-hover:text-[#007acc] transition-colors" />
          <span className="font-mono text-[11px] text-[#cccccc] group-hover:text-white transition-colors truncate">
            fardinhasanmayen.dev
          </span>
          <span className="text-[10px] text-[#6e6e6e] ml-auto hidden sm:inline font-mono">
            Ctrl+P
          </span>
        </div>
      </div>

      <div className="flex items-center h-full">
        <button
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          title={isDark ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
          className="flex items-center justify-center w-7 h-7 mr-1 rounded hover:bg-[#252526] text-[#858585] hover:text-[#e6e6e6] transition-colors cursor-pointer"
        >
          {isDark ? (
            <Sun className="w-3.5 h-3.5 text-[#dcdcaa]" />
          ) : (
            <Moon className="w-3.5 h-3.5 text-[#9cdcfe]" />
          )}
        </button>

        <div className="hidden sm:flex items-center h-full">
          <LinuxWindowControls />
        </div>
      </div>
    </header>
  );
};
