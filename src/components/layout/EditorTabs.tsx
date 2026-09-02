import * as React from 'react';
import { X } from 'lucide-react';
import { PageId } from '../../types';
import { ReactIcon } from '../ui/Icons';

interface EditorTabsProps {
  openTabs: PageId[];
  activePage: PageId;
  onSelectTab: (page: PageId) => void;
  onCloseTab: (page: PageId, e: React.MouseEvent) => void;
}

export const EditorTabs: React.FC<EditorTabsProps> = ({
  openTabs,
  activePage,
  onSelectTab,
  onCloseTab,
}) => {
  return (
    <div className="h-9 w-full bg-[#181818] border-b border-[#2d2d2d] flex items-center overflow-x-auto select-none font-mono text-xs scrollbar-none shrink-0">
      {openTabs.map((tabId) => {
        const isActive = activePage === tabId;
        return (
          <div
            key={tabId}
            onClick={() => onSelectTab(tabId)}
            className={`group relative flex items-center gap-2 h-full px-3 border-r border-[#2d2d2d] cursor-pointer transition-colors duration-150 shrink-0 ${
              isActive
                ? 'bg-[#1e1e1e] text-white font-medium border-t-2 border-t-[#007acc]'
                : 'bg-[#181818] text-[#969696] hover:bg-[#1f1f1f] hover:text-[#cccccc] border-t-2 border-t-transparent'
            }`}
          >
            <ReactIcon className="w-3.5 h-3.5 text-[#00d8ff]" />

            <span className="text-xs font-mono tracking-tight">{tabId}</span>

            <button
              onClick={(e) => onCloseTab(tabId, e)}
              className={`p-0.5 rounded hover:bg-[#3c3c3c] transition-colors ml-1 ${
                isActive
                  ? 'opacity-70 hover:opacity-100 text-[#cccccc] hover:text-white'
                  : 'opacity-0 group-hover:opacity-80 hover:opacity-100 text-[#858585] hover:text-white'
              }`}
              title={`Close ${tabId}`}
              aria-label={`Close ${tabId}`}
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        );
      })}
    </div>
  );
};
