import * as React from 'react';
import { GitBranch, AlertCircle, CheckCircle2, Radio, Bell } from 'lucide-react';
import { PageId } from '../../types';

interface StatusBarProps {
  activePage: PageId;
}

export const StatusBar: React.FC<StatusBarProps> = ({ activePage }) => {
  return (
    <footer className="h-6 w-full bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px] font-mono select-none z-30 shrink-0">
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer transition-colors">
          <GitBranch className="w-3 h-3" />
          <span>main</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer transition-colors">
          <div className="flex items-center gap-0.5">
            <AlertCircle className="w-3 h-3" />
            <span>0</span>
          </div>
          <div className="flex items-center gap-0.5">
            <CheckCircle2 className="w-3 h-3" />
            <span>0</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer transition-colors">
          <Radio className="w-3 h-3 animate-pulse" />
          <span>Port: 3000</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden lg:inline hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer">
          Ln 1, Col 1
        </span>
        <span className="hidden sm:inline hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer">
          Spaces: 2
        </span>
        <span className="hidden sm:inline hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer">
          UTF-8
        </span>
        <span className="hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer font-medium">
          TypeScript 5.x
        </span>
        <span className="hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer">
          TSX
        </span>
        <div className="hover:bg-[#005a9e] px-1 py-0.5 rounded cursor-pointer">
          <Bell className="w-3 h-3" />
        </div>
      </div>
    </footer>
  );
};
