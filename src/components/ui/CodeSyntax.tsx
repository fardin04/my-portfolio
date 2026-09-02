import * as React from 'react';

export const Kw: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#c586c0] font-semibold">{children}</span>
);

export const Var: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#9cdcfe]">{children}</span>
);

export const Typ: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#4ec9b0]">{children}</span>
);

export const Str: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#ce9178]">{children}</span>
);

export const Func: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#dcdcaa]">{children}</span>
);

export const Comment: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#6a9955] italic">{children}</span>
);

export const Num: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#b5cea8]">{children}</span>
);

export const Punct: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="text-[#808080]">{children}</span>
);
