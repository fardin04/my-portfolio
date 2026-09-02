import * as React from 'react';
import { useState } from 'react';
import {
  ChevronDown,
  ChevronRight,
  Folder,
  FolderOpen,
  FileCode,
  FileJson,
  FileText,
  Download,
} from 'lucide-react';
import { PageId } from '../../types';
import { navigationTabs } from '../../data/portfolioData';
import { ReactIcon } from '../ui/Icons';

interface ExplorerSidebarProps {
  activePage: PageId;
  onSelectPage: (page: PageId) => void;
  onResumeClick: () => void;
}

export const ExplorerSidebar: React.FC<ExplorerSidebarProps> = ({
  activePage,
  onSelectPage,
  onResumeClick,
}) => {
  const [isWorkspaceOpen, setIsWorkspaceOpen] = useState(true);
  const [isSrcOpen, setIsSrcOpen] = useState(true);
  const [isPagesOpen, setIsPagesOpen] = useState(true);
  const [isVscodeOpen, setIsVscodeOpen] = useState(false);
  const [isPublicOpen, setIsPublicOpen] = useState(false);

  return (
    <div className="w-56 sm:w-60 bg-[#252526] border-r border-[#2d2d2d] flex flex-col h-full select-none text-xs text-[#cccccc] shrink-0 font-mono">
      <div className="flex items-center justify-between px-4 py-2 text-[11px] font-bold tracking-wider text-[#858585] uppercase border-b border-[#2d2d2d]/60">
        <span>Explorer</span>
        <span className="text-[10px] text-[#007acc] lowercase font-normal">workspace</span>
      </div>

      <div className="flex-1 overflow-y-auto py-1.5 scrollbar-thin">
        <div>
          <button
            onClick={() => setIsWorkspaceOpen(!isWorkspaceOpen)}
            className="flex items-center gap-1 w-full px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer text-left font-semibold text-[#e6e6e6]"
          >
            {isWorkspaceOpen ? (
              <ChevronDown className="w-3.5 h-3.5 text-[#858585]" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-[#858585]" />
            )}
            <span className="uppercase text-[11px] tracking-wide text-[#cccccc]">
              FARDINHASANMAYEN.DEV
            </span>
          </button>

          {isWorkspaceOpen && (
            <div className="pl-2">
              <div>
                <button
                  onClick={() => setIsVscodeOpen(!isVscodeOpen)}
                  className="flex items-center gap-1.5 w-full px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer text-left text-[#cccccc]"
                >
                  {isVscodeOpen ? (
                    <ChevronDown className="w-3 h-3 text-[#858585]" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-[#858585]" />
                  )}
                  {isVscodeOpen ? (
                    <FolderOpen className="w-3.5 h-3.5 text-[#dcb67a]" />
                  ) : (
                    <Folder className="w-3.5 h-3.5 text-[#dcb67a]" />
                  )}
                  <span>.vscode</span>
                </button>
                {isVscodeOpen && (
                  <div className="pl-6 py-0.5">
                    <div className="flex items-center gap-1.5 px-2 py-1 text-[#858585] hover:bg-[#2a2d2e] cursor-default rounded">
                      <FileJson className="w-3.5 h-3.5 text-[#cbcb41]" />
                      <span>settings.json</span>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsPublicOpen(!isPublicOpen)}
                  className="flex items-center gap-1.5 w-full px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer text-left text-[#cccccc]"
                >
                  {isPublicOpen ? (
                    <ChevronDown className="w-3 h-3 text-[#858585]" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-[#858585]" />
                  )}
                  {isPublicOpen ? (
                    <FolderOpen className="w-3.5 h-3.5 text-[#dcb67a]" />
                  ) : (
                    <Folder className="w-3.5 h-3.5 text-[#dcb67a]" />
                  )}
                  <span>public</span>
                </button>
                {isPublicOpen && (
                  <div className="pl-6 py-0.5">
                    <button
                      onClick={onResumeClick}
                      className="flex items-center gap-1.5 w-full px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer text-left text-[#007acc] hover:text-[#38bdf8] rounded"
                      title="Click to download Resume_Of_Fardin_Hasan.pdf"
                    >
                      <FileText className="w-3.5 h-3.5 text-[#e37933]" />
                      <span>Resume_Of_Fardin_Hasan.pdf</span>
                    </button>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => setIsSrcOpen(!isSrcOpen)}
                  className="flex items-center gap-1.5 w-full px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer text-left text-[#cccccc]"
                >
                  {isSrcOpen ? (
                    <ChevronDown className="w-3 h-3 text-[#858585]" />
                  ) : (
                    <ChevronRight className="w-3 h-3 text-[#858585]" />
                  )}
                  {isSrcOpen ? (
                    <FolderOpen className="w-3.5 h-3.5 text-[#dcb67a]" />
                  ) : (
                    <Folder className="w-3.5 h-3.5 text-[#dcb67a]" />
                  )}
                  <span>src</span>
                </button>

                {isSrcOpen && (
                  <div className="pl-4">
                    <div>
                      <button
                        onClick={() => setIsPagesOpen(!isPagesOpen)}
                        className="flex items-center gap-1.5 w-full px-2 py-1 hover:bg-[#2a2d2e] cursor-pointer text-left text-[#cccccc]"
                      >
                        {isPagesOpen ? (
                          <ChevronDown className="w-3 h-3 text-[#858585]" />
                        ) : (
                          <ChevronRight className="w-3 h-3 text-[#858585]" />
                        )}
                        {isPagesOpen ? (
                          <FolderOpen className="w-3.5 h-3.5 text-[#dcb67a]" />
                        ) : (
                          <Folder className="w-3.5 h-3.5 text-[#dcb67a]" />
                        )}
                        <span>pages</span>
                      </button>

                      {isPagesOpen && (
                        <div className="pl-4 space-y-0.5">
                          {navigationTabs.map((tab) => {
                            const isActive = activePage === tab.id;
                            return (
                              <button
                                key={tab.id}
                                onClick={() => onSelectPage(tab.id)}
                                className={`flex items-center gap-1.5 w-full px-2 py-1 text-left rounded cursor-pointer transition-colors duration-150 ${
                                  isActive
                                    ? 'bg-[#37373d] text-white font-medium shadow-sm'
                                    : 'text-[#cccccc] hover:bg-[#2a2d2e] hover:text-[#e6e6e6]'
                                }`}
                              >
                                <ReactIcon className="w-3.5 h-3.5 text-[#00d8ff]" />
                                <span>{tab.name}</span>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="pl-4 pt-1 space-y-0.5 text-[#858585]">
                <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-[#2a2d2e] cursor-default rounded text-[#9cdcfe]">
                  <ReactIcon className="w-3.5 h-3.5 text-[#00d8ff]" />
                  <span>App.tsx</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 hover:bg-[#2a2d2e] cursor-default rounded text-[#858585]">
                  <FileJson className="w-3.5 h-3.5 text-[#cbcb41]" />
                  <span>package.json</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="p-3 border-t border-[#2d2d2d] bg-[#1f1f20]/60">
        <button
          onClick={onResumeClick}
          className="flex items-center justify-center gap-1.5 w-full px-2.5 py-1.5 rounded bg-[#007acc]/15 hover:bg-[#007acc]/25 border border-[#007acc]/40 text-[#9cdcfe] hover:text-white transition-all text-xs font-mono font-medium cursor-pointer"
          title="Download Resume (Resume_Of_Fardin_Hasan.pdf)"
        >
          <Download className="w-3.5 h-3.5 text-[#007acc]" />
          <span>Download Resume</span>
        </button>
      </div>
    </div>
  );
};
