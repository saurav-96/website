import { motion } from 'framer-motion';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Hero({ darkMode }) {
    return (
        <section
            className={`relative min-h-screen flex items-center overflow-hidden pt-16 ${darkMode
                    ? 'bg-gradient-to-br from-[#0a0f1e] via-[#0f172a] to-[#09090b]'
                    : 'bg-gradient-to-br from-slate-50 via-blue-50/40 to-teal-50/30'
                }`}
        >
            {/* Background grid dots */}
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: darkMode
                        ? 'radial-gradient(circle, #334155 1px, transparent 1px)'
                        : 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
                    backgroundSize: '32px 32px',
                }}
            />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
                    {/* LEFT COLUMN */}
                    <div className="space-y-8">
                        {/* Badge */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            className="inline-flex items-center gap-2"
                        >
                            <span className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${darkMode
                                    ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                    : 'bg-blue-50 text-blue-600 border border-blue-200'
                                }`}>
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                                Expert Intelligence
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={1}>
                            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight font-sora ${darkMode ? 'text-white' : 'text-slate-900'
                                }`}>
                                Smarter Healthcare<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                                    Powered by AI &amp;
                                </span>
                                <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                                    Connected Devices
                                </span>
                            </h1>
                        </motion.div>

                        {/* Subtext */}
                        <motion.p
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            className={`text-lg leading-relaxed max-w-lg ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}
                        >
                            Monitor, analyze, and improve your health through intelligent healthcare services, wearable integrations, and real-time health insights.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                            className="flex flex-wrap gap-4"
                        >
                            <a
                                href="#booking"
                                className="flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300"
                            >
                                Book Appointment
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </a>
                            <a
                                href="#dashboard"
                                className={`flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border transition-all duration-300 hover:scale-105 ${darkMode
                                        ? 'border-slate-600 text-slate-300 hover:border-blue-500 hover:text-blue-400 bg-slate-800/50'
                                        : 'border-slate-300 text-slate-700 hover:border-blue-400 hover:text-blue-600 bg-white/80'
                                    }`}
                            >
                                Explore Dashboard
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </a>
                        </motion.div>

                        {/* Stats bar */}
                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            animate="visible"
                            custom={4}
                            className="flex gap-8 pt-4"
                        >
                            {[
                                { value: '99.9%', label: 'DNA Accuracy' },
                                { value: '24/7', label: 'AI Monitoring' },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className={`text-2xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        {stat.value}
                                    </div>
                                    <div className={`text-xs uppercase tracking-widest mt-0.5 ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN – Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                        className="relative flex items-center justify-center"
                    >
                        {/* Central rotating orb / heart visual */}
                        <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Outer glow rings */}
                            <div className={`absolute inset-0 rounded-full ${darkMode ? 'bg-teal-500/5' : 'bg-teal-100/50'} animate-[pulse_3s_ease-in-out_infinite]`} />
                            <div className={`absolute inset-4 rounded-full ${darkMode ? 'bg-teal-500/8' : 'bg-teal-100/70'} animate-[pulse_3s_ease-in-out_infinite_0.5s]`} />
                            <div className={`absolute inset-8 rounded-full ${darkMode ? 'bg-blue-600/10' : 'bg-blue-100/80'}`} />

                            {/* Heart/body icon in center */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className={`w-48 h-48 rounded-full flex items-center justify-center ${darkMode ? 'bg-gradient-to-br from-teal-900/60 to-blue-900/60 border border-teal-500/30' : 'bg-gradient-to-br from-teal-50 to-blue-50 border border-teal-200'
                                    } shadow-2xl`}>
                                    <svg viewBox="0 0 100 120" className="w-32 h-32" fill="none">
                                        {/* Human body silhouette */}
                                        <circle cx="50" cy="18" r="13" fill={darkMode ? '#14b8a6' : '#0d9488'} opacity="0.9" />
                                        <path d="M30 45 Q50 35 70 45 L75 85 Q65 82 60 90 L50 115 L40 90 Q35 82 25 85 Z"
                                            fill={darkMode ? '#0f766e' : '#0d9488'} opacity="0.7" />
                                        {/* Heart in chest */}
                                        <path d="M43 52 C41 48 35 48 35 54 C35 60 43 66 50 72 C57 66 65 60 65 54 C65 48 59 48 57 52 C55 49 52 48 50 50 C48 48 45 49 43 52Z"
                                            fill="#ef4444" opacity="0.9" style={{ animation: 'heartbeat 1.2s ease-in-out infinite' }} />
                                        {/* Pulse/signal lines */}
                                        <path d="M5 70 L20 70 L25 58 L30 82 L35 70 L45 70" stroke={darkMode ? '#14b8a6' : '#0d9488'} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Floating card: Real-time Vitals */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                            className={`absolute -top-4 right-0 lg:-right-6 w-44 rounded-2xl p-3 shadow-2xl ${darkMode ? 'bg-slate-800/90 border border-slate-700' : 'bg-white border border-slate-200'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 21.593c-5.63-5.539-11-10.297-11-14.402 0-3.791 3.068-5.191 5.281-5.191 1.312 0 4.151.501 5.719 4.457 1.59-3.968 4.464-4.447 5.726-4.447 2.54 0 5.274 1.621 5.274 5.181 0 4.069-5.136 8.625-11 14.402z" />
                                </svg>
                                <span className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Real-time Vitals</span>
                            </div>
                            <div className="flex items-end gap-1 mb-2">
                                <span className={`text-3xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>72</span>
                                <span className={`text-xs mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>BPM</span>
                            </div>
                            <div className="flex gap-0.5 items-end h-8">
                                {[3, 5, 4, 8, 6, 9, 7, 10, 8, 6, 9].map((h, i) => (
                                    <div
                                        key={i}
                                        className="flex-1 rounded-sm bg-blue-500"
                                        style={{
                                            height: `${h * 8}%`,
                                            opacity: i === 10 ? 1 : 0.4 + i * 0.05,
                                            minHeight: '4px'
                                        }}
                                    />
                                ))}
                            </div>
                        </motion.div>

                        {/* Floating card: Sync Active */}
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut', delay: 0.5 }}
                            className={`absolute bottom-8 left-0 lg:-left-6 w-36 rounded-2xl p-3 shadow-2xl ${darkMode ? 'bg-slate-800/90 border border-slate-700' : 'bg-white border border-slate-200'
                                }`}
                        >
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-400 flex items-center justify-center mb-2`}>
                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </div>
                            <div className={`text-sm font-semibold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>Sync Active</div>
                            <div className={`text-xs mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>All devices connected</div>
                        </motion.div>

                        {/* Floating card: AI Health Insight */}
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 1 }}
                            className={`absolute bottom-0 right-0 lg:-right-4 w-48 rounded-2xl p-3 shadow-2xl ${darkMode ? 'bg-slate-800/90 border border-slate-700' : 'bg-white border border-slate-200'
                                }`}
                        >
                            <div className="flex items-center gap-2 mb-1">
                                <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <span className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>AI Health Insight</span>
                            </div>
                            <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                Glucose levels: normal. Protein standard diet...
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll hint */}
            <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Scroll to explore</span>
                <div className={`w-px h-8 ${darkMode ? 'bg-gradient-to-b from-slate-500 to-transparent' : 'bg-gradient-to-b from-slate-400 to-transparent'}`} />
            </motion.div>
        </section>
    );
}
