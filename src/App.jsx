import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ProductPage from './pages/ProductPage';
import DownloadPage from './pages/DownloadPage';
import ContactUsPage from './pages/ContactUsPage';
import ExploreModal from './components/modals/ExploreModal';
import VideoModal from './components/modals/VideoModal';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-container-lowest text-on-surface flex flex-col justify-between selection:bg-primary/30 selection:text-primary">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenExplore={() => setIsExploreOpen(true)}
      />

      {/* Main Content Area with Page Transitions */}
      <main className="pt-20 flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {activeTab === 'home' && (
              <HomePage
                onOpenExplore={() => setIsExploreOpen(true)}
                onOpenVideo={() => setIsVideoOpen(true)}
              />
            )}
            {activeTab === 'about' && (
              <AboutUsPage onOpenExplore={() => setIsExploreOpen(true)} />
            )}
            {activeTab === 'product' && (
              <ProductPage onOpenExplore={() => setIsExploreOpen(true)} />
            )}
            {activeTab === 'download' && <DownloadPage />}
            {activeTab === 'contact' && <ContactUsPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenExplore={() => setIsExploreOpen(true)}
      />

      {/* Modals */}
      <ExploreModal
        isOpen={isExploreOpen}
        onClose={() => setIsExploreOpen(false)}
      />
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />
    </div>
  );
}
