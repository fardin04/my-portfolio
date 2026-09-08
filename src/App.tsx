import * as React from 'react';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from './types';
import { TitleBar } from './components/layout/TitleBar';
import { ActivityBar } from './components/layout/ActivityBar';
import { ExplorerSidebar } from './components/layout/ExplorerSidebar';
import { EditorTabs } from './components/layout/EditorTabs';
import { StatusBar } from './components/layout/StatusBar';
import { ResumeModal } from './components/ui/ResumeModal';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { ContactPage } from './components/pages/ContactPage';
import { developerProfile } from './data/portfolioData';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home.tsx');
  const [openTabs, setOpenTabs] = useState<PageId[]>([
    'home.tsx',
    'about.tsx',
    'projects.tsx',
    'contact.tsx',
  ]);
  const [isDark, setIsDark] = useState<boolean>(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const handleSelectPage = (page: PageId) => {
    if (!openTabs.includes(page)) {
      setOpenTabs((prev) => [...prev, page]);
    }
    setActivePage(page);
    setIsMobileSidebarOpen(false);
  };

  const handleCloseTab = (page: PageId, e: React.MouseEvent) => {
    e.stopPropagation();
    const newTabs = openTabs.filter((tab) => tab !== page);
    setOpenTabs(newTabs);

    if (activePage === page) {
      if (newTabs.length > 0) {
        setActivePage(newTabs[newTabs.length - 1]);
      } else {
        setOpenTabs(['home.tsx']);
        setActivePage('home.tsx');
      }
    }
  };

  const handleResumeClick = () => {
    const link = document.createElement('a');
    link.href = `/${encodeURIComponent(developerProfile.resumeFileName)}`;
    link.download = developerProfile.resumeFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className={`flex flex-col h-screen w-screen ${
        isDark ? 'bg-[#1e1e1e] text-[#cccccc]' : 'bg-[#ffffff] text-[#333333]'
      } select-text overflow-hidden font-mono`}
    >
      <TitleBar
        activePage={activePage}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onToggleMobileSidebar={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
      />

      <div className="flex flex-1 overflow-hidden relative">
        <ActivityBar
          activeSidebar="explorer"
          onResumeClick={handleResumeClick}
        />

        <div className="hidden md:flex h-full">
          <ExplorerSidebar
            activePage={activePage}
            onSelectPage={handleSelectPage}
            onResumeClick={handleResumeClick}
          />
        </div>

        <AnimatePresence>
          {isMobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileSidebarOpen(false)}
                className="fixed inset-0 bg-black/70 z-40 md:hidden backdrop-blur-sm"
              />
              <motion.div
                initial={{ x: -260 }}
                animate={{ x: 0 }}
                exit={{ x: -260 }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed top-9 bottom-6 left-12 z-50 md:hidden shadow-2xl"
              >
                <ExplorerSidebar
                  activePage={activePage}
                  onSelectPage={handleSelectPage}
                  onResumeClick={handleResumeClick}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <main
          className={`flex-1 flex flex-col h-full overflow-hidden ${
            isDark ? 'bg-[#1e1e1e]' : 'bg-[#ffffff]'
          }`}
        >
          <EditorTabs
            openTabs={openTabs}
            activePage={activePage}
            onSelectTab={handleSelectPage}
            onCloseTab={handleCloseTab}
          />

          <div className="flex-1 overflow-y-auto overflow-x-hidden p-2 sm:p-4 scrollbar-thin">
            <AnimatePresence mode="wait">
              {activePage === 'home.tsx' && (
                <motion.div
                  key="home"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <HomePage
                    onNavigate={handleSelectPage}
                    onResumeClick={handleResumeClick}
                  />
                </motion.div>
              )}

              {activePage === 'about.tsx' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <AboutPage />
                </motion.div>
              )}

              {activePage === 'projects.tsx' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <ProjectsPage />
                </motion.div>
              )}

              {activePage === 'contact.tsx' && (
                <motion.div
                  key="contact"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  <ContactPage />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>

      <StatusBar activePage={activePage} />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
