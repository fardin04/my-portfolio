import * as React from 'react';

interface CodeGutterProps {
  linesCount: number;
}

export const CodeGutter: React.FC<CodeGutterProps> = ({ linesCount }) => {
  return (
    <div className="hidden sm:flex flex-col select-none text-right pr-4 text-[#858585] text-xs font-mono border-r border-[#2d2d2d] mr-6 py-6 opacity-60 leading-6 shrink-0">
      {Array.from({ length: linesCount }, (_, i) => (
        <span key={i + 1} className="w-6 inline-block">
          {i + 1}
        </span>
      ))}
    </div>
  );
};
