import { motion } from 'framer-motion';

export default function Emergency({ darkMode, setChatOpen }) {
    return (
        <>
            {/* Fixed floating SanjeevanAI shortcut (replacing SOS) */}
            <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
                <button
                    onClick={() => setChatOpen(true)}
                    className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-2xl shadow-violet-500/50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
                >
                    {/* Pulse rings */}
                    <span className="absolute inset-0 rounded-2xl bg-violet-400 animate-ping opacity-20" />
                    <span className="absolute inset-0 rounded-2xl bg-violet-400 animate-ping opacity-10 animation-delay-300" />

                    {/* Brand Logo (Lightning Bolt) */}
                    <img
                        src="/favicon.svg"
                        alt="SanjeevanAI Logo"
                        className="w-10 h-10 drop-shadow-md brightness-0 invert"
                    />

                    {/* Tooltip */}
                    <span className="absolute right-full mr-4 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-white text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all pointer-events-none">
                        Chat with SanjeevanAI
                    </span>
                </button>
            </div>

            {/* Emergency section */}
            <section id="emergency" className={`py-24 ${darkMode ? 'bg-[#0f172a]' : 'bg-red-50/30'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className={`rounded-3xl p-8 sm:p-12 border ${darkMode ? 'bg-gradient-to-br from-red-950/30 to-slate-900 border-red-900/30' : 'bg-gradient-to-br from-red-50 to-white border-red-200'
                        }`}>
                        <div className="grid md:grid-cols-2 gap-10 items-center">
                            <div>
                                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/20 mb-6 uppercase tracking-widest">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    Emergency Services
                                </span>
                                <h2 className={`text-3xl sm:text-4xl font-bold font-sora mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                    Help is Always<br />a Tap Away
                                </h2>
                                <p className={`text-base mb-8 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                    Our 24/7 emergency system instantly connects you to the nearest hospital, ambulance, and medical team.
                                </p>
                                <div className="flex flex-wrap gap-3">
                                    <a href="tel:102" className="flex items-center gap-2 px-6 py-3 rounded-xl bg-red-500 text-white font-semibold text-sm hover:bg-red-600 transition-colors shadow-lg shadow-red-500/30">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
                                        Call Ambulance
                                    </a>
                                    <a href="#contact" className={`flex items-center gap-2 px-6 py-3 rounded-xl border font-semibold text-sm transition-colors ${darkMode ? 'border-slate-600 text-slate-300 hover:border-red-500/50' : 'border-slate-300 text-slate-700 hover:border-red-400/50'
                                        }`}>
                                        Find Hospital
                                    </a>
                                </div>
                            </div>

                            {/* Emergency cards */}
                            <div className="space-y-4">
                                {[
                                    { icon: '🚑', label: 'Ambulance Response', value: '< 8 min', sub: 'Average city response time' },
                                    { icon: '🏥', label: 'Partner Hospitals', value: '47+ Centers', sub: 'Within 10km radius' },
                                    { icon: '👨‍⚕️', label: 'On-Call Doctors', value: '200+', sub: 'Available right now' },
                                ].map((item) => (
                                    <div key={item.label} className={`flex items-center gap-4 p-4 rounded-2xl ${darkMode ? 'bg-slate-800/60 border border-slate-700' : 'bg-white border border-slate-200'
                                        }`}>
                                        <div className="text-2xl">{item.icon}</div>
                                        <div className="flex-1">
                                            <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{item.label}</div>
                                            <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{item.sub}</div>
                                        </div>
                                        <div className={`text-sm font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>{item.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
