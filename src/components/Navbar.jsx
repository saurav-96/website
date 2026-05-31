import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'Health Pulse', href: '#health-pulse' },
    { name: 'Devices', href: '#devices' },
    { name: 'Booking', href: '#booking' },
    { name: 'Articles', href: '#articles' },
    { name: 'Contact Us', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode, chatOpen, setChatOpen, setAuthOpen }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? darkMode
                    ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-2xl'
                    : 'bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-lg'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-18">
                    {/* Logo with brand favicon */}
                    <a href="#" className="flex items-center gap-2.5 group">
                        <img
                            src="/favicon.svg"
                            alt="SwasthyaSutra Logo"
                            className="w-8 h-8 drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <span className={`font-sora font-bold text-lg tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            SwasthyaSutra
                        </span>
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-blue-500/10 hover:text-blue-500 ${darkMode ? 'text-slate-300' : 'text-slate-600'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-3">


                        {/* Dark mode toggle */}
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${darkMode
                                ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                                }`}
                        >
                            {darkMode ? (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 1.78a1 1 0 011.42 1.42l-.71.71a1 1 0 11-1.42-1.42l.71-.71zM21 11a1 1 0 110 2h-1a1 1 0 110-2h1zM17.66 17.66a1 1 0 010 1.42l-.71.71a1 1 0 11-1.42-1.42l.71-.71a1 1 0 011.42 0zM12 20a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-5.66-2.34a1 1 0 011.42 1.42l-.71.71a1 1 0 01-1.42-1.42l.71-.71zM4 11a1 1 0 110 2H3a1 1 0 110-2h1zm1.34-6.66a1 1 0 010 1.42l-.71.71a1 1 0 01-1.42-1.42l.71-.71A1 1 0 015.34 4.34zM12 8a4 4 0 100 8 4 4 0 000-8z" />
                                </svg>
                            ) : (
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                                </svg>
                            )}
                        </button>

                        {/* Quick Access AI Chatbot Icon (replaces Emergency/SOS) */}
                        <button
                            onClick={() => setChatOpen(!chatOpen)}
                            className={`hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-lg text-white text-sm font-semibold transition-all duration-300 shadow-lg cursor-pointer ${chatOpen
                                ? 'bg-gradient-to-r from-violet-600 to-blue-500 shadow-violet-500/40 scale-95'
                                : 'bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 shadow-violet-500/30 hover:shadow-violet-500/50 hover:scale-105'
                                }`}
                            title="Open SanjeevanAI Chat"
                        >
                            {/* AI Chat Bubble Icon */}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 3.582-9.75 8s4.365 8 9.75 8c1.097 0 2.15-.168 3.138-.488a.75.75 0 01.564.042l2.298 1.149a.75.75 0 001.05-.708V16.46a.75.75 0 01.33-.63C21.414 14.34 21.75 12.73 21.75 10.25c0-4.418-4.365-8-9.75-8z" />
                            </svg>
                            <span className="hidden md:inline">SanjeevanAI</span>
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                        </button>

                        {/* Login / Sign Up Button */}
                        <button
                            onClick={() => setAuthOpen(true)}
                            className={`hidden sm:flex items-center px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 cursor-pointer border ${darkMode
                                ? 'border-slate-600 text-slate-200 hover:bg-slate-700 hover:border-slate-500'
                                : 'border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400'
                                }`}
                        >
                            Login / Sign Up
                        </button>

                        {/* Mobile menu */}
                        <button
                            className={`lg:hidden w-9 h-9 rounded-lg flex items-center justify-center ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            {mobileOpen ? (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            ) : (
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                <AnimatePresence>
                    {mobileOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className={`lg:hidden border-t pb-4 ${darkMode ? 'border-slate-700' : 'border-slate-200'}`}
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`block px-4 py-3 text-sm font-medium rounded-lg mx-2 mt-1 ${darkMode ? 'text-slate-300 hover:bg-slate-700' : 'text-slate-600 hover:bg-slate-100'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            {/* Mobile AI Chatbot Button */}
                            <button
                                onClick={() => { setChatOpen(!chatOpen); setMobileOpen(false); }}
                                className="flex items-center gap-2 mx-2 mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-violet-500 to-blue-500 text-white text-sm font-semibold w-[calc(100%-16px)] cursor-pointer"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.25c-5.385 0-9.75 3.582-9.75 8s4.365 8 9.75 8c1.097 0 2.15-.168 3.138-.488a.75.75 0 01.564.042l2.298 1.149a.75.75 0 001.05-.708V16.46a.75.75 0 01.33-.63C21.414 14.34 21.75 12.73 21.75 10.25c0-4.418-4.365-8-9.75-8z" />
                                </svg>
                                SanjeevanAI Chat
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                            </button>
                            {/* Mobile Login / Sign Up */}
                            <button
                                onClick={() => { setAuthOpen(true); setMobileOpen(false); }}
                                className={`flex items-center justify-center mx-2 mt-2 px-4 py-3 rounded-lg text-sm font-semibold border w-[calc(100%-16px)] cursor-pointer ${darkMode
                                        ? 'border-slate-600 text-slate-200 hover:bg-slate-700'
                                        : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                                    }`}
                            >
                                Login / Sign Up
                            </button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
}
