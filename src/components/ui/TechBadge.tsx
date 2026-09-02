import * as React from 'react';

interface TechBadgeProps {
  name: string;
  size?: 'sm' | 'md';
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, size = 'sm' }) => {
  return (
    <span
      className={`inline-flex items-center gap-1 font-mono rounded border transition-colors ${
        size === 'sm' ? 'px-2 py-0.5 text-xs' : 'px-3 py-1 text-sm'
      } bg-[#2d2d2d]/80 text-[#9cdcfe] border-[#3c3c3c] hover:border-[#007acc] hover:bg-[#007acc]/10 hover:text-white`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[#007acc]/70" />
      {name}
    </span>
  );
};
