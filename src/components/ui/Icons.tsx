import * as React from 'react';

export const ReactIcon: React.FC<{ className?: string; size?: number }> = ({
  className = 'w-4 h-4 text-[#00d8ff]',
  size = 16,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="currentColor"
    className={`shrink-0 ${className}`}
  >
    <circle cx="0" cy="0" r="2.05" fill="#00d8ff" />
    <g stroke="#00d8ff" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const VsCodeLogo: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`text-[#007acc] shrink-0 ${className}`}
  >
    <path d="M17.82 2.12a1.5 1.5 0 0 0-1.12.33L9.62 8.35 6.13 5.67a1 1 0 0 0-1.28.05L2.3 8.07a1 1 0 0 0-.02 1.48l3.65 3.32-3.65 3.32a1 1 0 0 0 .02 1.48l2.55 2.35a1 1 0 0 0 1.28.05l3.49-2.68 7.08 5.9a1.5 1.5 0 0 0 2.45-1.14V3.26a1.5 1.5 0 0 0-.93-1.14zm-.32 3.65v12.46L11.4 13.5l6.1-7.73zM6.16 8.35l3.22 2.47-3.22 2.47V8.35z" />
  </svg>
);

export const SourceControlIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
  >
    <circle cx="6" cy="6" r="2.5" />
    <circle cx="6" cy="18" r="2.5" />
    <circle cx="18" cy="9" r="2.5" />
    <path d="M6 8.5v7" />
    <path d="M6 13a6 6 0 0 0 6-6V9" />
    <path d="M12 9h3.5" />
  </svg>
);

export const LinuxWindowControls: React.FC = () => (
  <div className="flex items-center h-full">
    <button
      className="flex items-center justify-center w-10 h-7 text-[#cccccc] hover:bg-[#333333] transition-colors"
      title="Minimize"
      aria-label="Minimize"
    >
      <svg width="11" height="1" viewBox="0 0 11 1" fill="currentColor">
        <rect width="11" height="1" />
      </svg>
    </button>

    <button
      className="flex items-center justify-center w-10 h-7 text-[#cccccc] hover:bg-[#333333] transition-colors"
      title="Maximize"
      aria-label="Maximize"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="0.5" y="0.5" width="9" height="9" />
      </svg>
    </button>

    <button
      className="flex items-center justify-center w-10 h-7 text-[#cccccc] hover:bg-[#e81123] hover:text-white transition-colors"
      title="Close"
      aria-label="Close"
    >
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M1 1l8 8M9 1L1 9" />
      </svg>
    </button>
  </div>
);
