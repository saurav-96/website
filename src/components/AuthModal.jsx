import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AuthModal({ darkMode, isOpen, onClose }) {
    const [mode, setMode] = useState('login'); // 'login' or 'signup'

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`relative w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ${darkMode ? 'bg-[#0d1225] border border-slate-700/50' : 'bg-white'
                            }`}
                    >
                        {/* Header Image/Background */}
                        <div className="h-32 bg-gradient-to-br from-blue-600 to-violet-600 relative overflow-hidden">
                            <div className="absolute inset-0 opacity-20">
                                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white" />
                                </svg>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                    <img src="/favicon.svg" alt="Logo" className="w-10 h-10" />
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/20 text-white flex items-center justify-center hover:bg-black/40 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                        </div>

                        {/* Form Section */}
                        <div className="p-8">
                            <div className="text-center mb-8">
                                <h2 className={`text-2xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    {mode === 'login' ? 'Welcome Back' : 'Join SwasthyaSutra'}
                                </h2>
                                <p className={`text-sm mt-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                    {mode === 'login' ? 'Enter your details to access your health dashboard' : 'Start your journey towards smarter health monitoring'}
                                </p>
                            </div>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                {mode === 'signup' && (
                                    <div>
                                        <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Full Name</label>
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${darkMode ? 'bg-slate-800/50 border-slate-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                                                }`}
                                        />
                                    </div>
                                )}
                                <div>
                                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="name@company.com"
                                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${darkMode ? 'bg-slate-800/50 border-slate-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                                            }`}
                                    />
                                </div>
                                <div>
                                    <label className={`block text-xs font-semibold uppercase tracking-wider mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Password</label>
                                    <input
                                        type="password"
                                        placeholder="••••••••"
                                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all duration-200 ${darkMode ? 'bg-slate-800/50 border-slate-700 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                                            }`}
                                    />
                                </div>

                                <button className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all active:scale-[0.98] mt-2">
                                    {mode === 'login' ? 'Sign In' : 'Create Account'}
                                </button>
                            </form>

                            {/* Divider */}
                            <div className="relative my-8 text-center">
                                <div className={`absolute inset-0 flex items-center mb-1`}><div className={`w-full border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}></div></div>
                                <span className={`relative px-4 text-xs font-medium ${darkMode ? 'bg-[#0d1225] text-slate-500' : 'bg-white text-slate-400'}`}>OR CONTINUE WITH</span>
                            </div>

                            {/* Social Logins */}
                            <div className="grid grid-cols-2 gap-4">
                                <button className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-colors ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}>
                                    <svg className="w-4 h-4" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" /></svg>
                                    <span className="text-xs font-semibold">Google</span>
                                </button>
                                <button className={`flex items-center justify-center gap-2 py-2.5 rounded-xl border transition-colors ${darkMode ? 'border-slate-700 hover:bg-slate-800 text-slate-300' : 'border-slate-200 hover:bg-slate-50 text-slate-600'}`}>
                                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1V12h3l-.5 3H13v6.8c4.56-.93 8-4.96 8-9.8z" /></svg>
                                    <span className="text-xs font-semibold">Apple</span>
                                </button>
                            </div>

                            {/* Switch Mode */}
                            <p className={`text-center text-xs mt-8 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                {mode === 'login' ? "Don't have an account?" : "Already have an account?"}
                                <button
                                    onClick={() => setMode(mode === 'login' ? 'signup' : 'login')}
                                    className="ml-1.5 font-bold text-blue-500 hover:text-blue-400 transition-colors"
                                >
                                    {mode === 'login' ? 'Sign Up' : 'Log In'}
                                </button>
                            </p>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
