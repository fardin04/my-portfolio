import * as React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Download, ExternalLink, Printer, CheckCircle, Mail, MapPin, Globe } from 'lucide-react';
import { developerProfile, skillCategories, projects } from '../../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative flex flex-col w-full max-w-4xl max-h-[90vh] bg-[#1e1e1e] border border-[#3c3c3c] rounded-xl shadow-2xl overflow-hidden font-mono"
        >
          <div className="flex items-center justify-between px-5 py-3 bg-[#252526] border-b border-[#333333] text-xs">
            <div className="flex items-center gap-2 text-[#cccccc]">
              <span className="text-[#007acc]">📄</span>
              <span className="font-semibold text-white">Resume_Of_Fardin_Hasan.pdf</span>
              <span className="text-[#858585] hidden sm:inline">— Preview & Export</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1 bg-[#2d2d2d] hover:bg-[#383838] text-[#cccccc] hover:text-white rounded border border-[#3c3c3c] transition-colors cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5 text-[#007acc]" />
                <span className="hidden sm:inline">Print / Save as PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1 rounded hover:bg-[#383838] text-[#858585] hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#1e1e1e] text-[#cccccc] space-y-6 text-xs sm:text-sm leading-relaxed">
            <div className="border-b border-[#333333] pb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                {developerProfile.name}
              </h1>
              <p className="text-base text-[#9cdcfe] font-semibold mb-3">
                {developerProfile.title}
              </p>

              <div className="flex flex-wrap gap-4 text-xs text-[#858585]">
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#007acc]" />
                  <span>{developerProfile.email}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#4ec9b0]" />
                  <span>{developerProfile.location}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#dcdcaa]" />
                  <span>{developerProfile.domain}</span>
                </div>
              </div>
            </div>

            <section className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#007acc]">
              </h2>
              <p className="text-[#9e9e9e] leading-relaxed">
                {developerProfile.shortBio} Specialized in constructing reactive frontends, resilient
                REST APIs, and conducting methodical digital intelligence & OSINT research.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#007acc]">
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {skillCategories.map((cat) => (
                  <div key={cat.title} className="p-3 rounded bg-[#252526] border border-[#333333]">
                    <div className="font-semibold text-white mb-1.5">{cat.title}:</div>
                    <div className="text-[#9cdcfe]">
                      {cat.skills.map((s) => s.name).join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#007acc]">
              </h2>
              <div className="space-y-3">
                {projects.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded bg-[#252526] border border-[#333333]">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-white text-sm">{proj.title}</h3>
                      <span className="text-xs text-[#858585]">{proj.year}</span>
                    </div>
                    <p className="text-xs text-[#9e9e9e] mb-2">{proj.description}</p>
                    <div className="text-[11px] text-[#4ec9b0]">
                      <span className="text-[#858585]">Tech Stack: </span>
                      {proj.technologies.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-[#007acc]">
              </h2>
              <div className="p-3 rounded bg-[#252526] border border-[#333333] space-y-1">
                <div className="font-semibold text-white">BSc in Computer Science & Engineering (CSE)</div>
                <div className="text-[#858585]">Presidency University, Dhaka, Bangladesh</div>
                <div className="text-xs text-[#9cdcfe]">Focus: Software Engineering, Web Technologies & Algorithms</div>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
