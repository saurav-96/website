import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import DoctorDirectory from './components/DoctorDirectory';
import Appointment from './components/Appointment';
import Dashboard from './components/Dashboard';
import SmartDevices from './components/SmartDevices';
import Emergency from './components/Emergency';
import AIInsights from './components/AIInsights';
import Articles from './components/Articles';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SanjeevanAIChat from './components/SanjeevanAIChat';
import AuthModal from './components/AuthModal';
import Preloader from './components/Preloader';

export default function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('swasthya-dark-mode');
    if (saved !== null) return saved === 'true';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [chatOpen, setChatOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for premium feel
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('swasthya-dark-mode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-[#0a0f1e] text-slate-100' : 'bg-white text-slate-900'}`}>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="loader" darkMode={darkMode} />
        ) : (
          <div key="content">
            <Navbar
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              chatOpen={chatOpen}
              setChatOpen={setChatOpen}
              setAuthOpen={setAuthOpen}
            />
            <Hero darkMode={darkMode} />
            <Stats darkMode={darkMode} />
            <DoctorDirectory darkMode={darkMode} />
            <Appointment darkMode={darkMode} />
            <Dashboard darkMode={darkMode} />
            <SmartDevices darkMode={darkMode} />
            <AIInsights darkMode={darkMode} />
            <Articles darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <Emergency darkMode={darkMode} setChatOpen={setChatOpen} />
            <Footer darkMode={darkMode} />
            <SanjeevanAIChat darkMode={darkMode} chatOpen={chatOpen} setChatOpen={setChatOpen} />
            <AuthModal darkMode={darkMode} isOpen={authOpen} onClose={() => setAuthOpen(false)} />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
