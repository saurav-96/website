import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Animated ECG SVG path
function ECGLine({ darkMode }) {
    return (
        <svg viewBox="0 0 300 60" className="w-full h-12" fill="none">
            <polyline
                points="0,30 40,30 55,10 65,50 75,20 90,40 100,30 300,30"
                stroke={darkMode ? '#14b8a6' : '#2563eb'}
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ecg-line"
            />
        </svg>
    );
}

// Circular progress for AI Health Score
function CircularProgress({ percent, size = 80, color = '#2563eb', darkMode }) {
    const r = (size - 12) / 2;
    const circ = 2 * Math.PI * r;
    const offset = circ - (percent / 100) * circ;

    return (
        <svg width={size} height={size} className="-rotate-90">
            <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke={darkMode ? '#1e293b' : '#e2e8f0'} strokeWidth="8" />
            <circle
                cx={size / 2} cy={size / 2} r={r} fill="none"
                stroke={color} strokeWidth="8"
                strokeDasharray={circ}
                strokeDashoffset={offset}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 1.5s ease' }}
            />
        </svg>
    );
}

// Mini bar chart for blood sugar
function MiniChart({ data, color, darkMode }) {
    const max = Math.max(...data);
    return (
        <div className="flex items-end gap-0.5 h-10">
            {data.map((v, i) => (
                <div
                    key={i}
                    className="flex-1 rounded-t-sm transition-all duration-500"
                    style={{
                        height: `${(v / max) * 100}%`,
                        background: i === data.length - 1 ? color : (darkMode ? '#334155' : '#e2e8f0'),
                        minHeight: '4px'
                    }}
                />
            ))}
        </div>
    );
}

export default function Dashboard({ darkMode }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const bloodSugar = [72, 78, 82, 76, 88, 85, 91, 87, 84, 90, 88, 94];

    return (
        <section id="dashboard" ref={ref} className={`py-24 ${darkMode ? 'bg-[#06090f]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div>
                            <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-3 ${darkMode ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-600 border border-teal-200'
                                }`}>
                                Real-time Monitoring
                            </span>
                            <h2 className={`text-3xl sm:text-4xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Health Pulse Dashboard
                            </h2>
                            <p className={`mt-2 text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                Real-time clinical data with AI & 6 hospitals
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="flex items-center gap-1.5 text-xs font-medium text-green-400">
                                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                                Live
                            </span>
                            <span className={`text-xs px-3 py-1.5 rounded-lg ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-white text-slate-500 border border-slate-200'}`}>
                                Oct 24, 2025
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Main grid */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Heart Rate – large card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`lg:col-span-2 rounded-3xl p-6 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-xl`}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Risk Indicator</div>
                                <div className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Heart Rate</div>
                            </div>
                            <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium ${darkMode ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}>
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                Normal Range
                            </div>
                        </div>

                        <div className="flex items-center gap-8 mb-6">
                            {/* Big number */}
                            <div className="relative">
                                <div className={`text-7xl font-extrabold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}
                                    style={{ animation: 'heartbeat 1.2s ease-in-out infinite' }}>
                                    15
                                </div>
                                <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>bpm</div>
                            </div>

                            {/* ECG chart */}
                            <div className="flex-1">
                                <ECGLine darkMode={darkMode} />
                                <div className={`flex justify-between text-xs mt-1 ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                                    <span>00:00</span><span>06:00</span><span>12:00</span><span>18:00</span><span>24:00</span>
                                </div>
                            </div>
                        </div>

                        <div className={`rounded-2xl p-4 ${darkMode ? 'bg-slate-800/60' : 'bg-slate-50'}`}>
                            <div className={`text-xs font-medium mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Status Indicator</div>
                            <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Your heart rate is 15 BPM lower than yesterday.</div>
                        </div>
                    </motion.div>

                    {/* AI Health Score */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className={`rounded-3xl p-6 flex flex-col ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-xl`}
                    >
                        <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>AI Health Score</div>
                        <div className={`text-sm font-medium mb-6 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>Oct 24</div>

                        <div className="flex items-center justify-center mb-6 relative">
                            {inView && <CircularProgress percent={82} size={120} color="#2563eb" darkMode={darkMode} />}
                            <div className="absolute text-center">
                                <div className={`text-3xl font-extrabold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>82</div>
                                <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>/ 100</div>
                            </div>
                        </div>

                        <div className={`rounded-2xl p-3 text-center ${darkMode ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-blue-50 border border-blue-100'}`}>
                            <span className={`text-sm font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Excellent</span>
                        </div>

                        <div className="mt-4 space-y-3">
                            {[
                                { label: 'Cardiovascular', val: 88 },
                                { label: 'Metabolic', val: 76 },
                                { label: 'Mental', val: 82 },
                            ].map((m) => (
                                <div key={m.label}>
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>{m.label}</span>
                                        <span className={`font-medium ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{m.val}</span>
                                    </div>
                                    <div className={`h-1.5 rounded-full ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${m.val}%` } : {}}
                                            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
                                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-teal-400"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Blood Sugar */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.25 }}
                        className={`rounded-3xl p-6 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-xl`}
                    >
                        <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Blood Sugar</div>
                        <div className="flex items-end gap-2 mb-4">
                            <span className={`text-4xl font-extrabold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>94</span>
                            <span className={`text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>mg/dL</span>
                            <span className="ml-auto px-2.5 py-1 rounded-lg text-xs font-medium bg-green-500/10 text-green-500">Normal</span>
                        </div>
                        <MiniChart data={bloodSugar} color="#22c55e" darkMode={darkMode} />
                    </motion.div>

                    {/* Sleep Tracking */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className={`rounded-3xl p-6 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-xl`}
                    >
                        <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Sleep Tracking</div>
                        <div className="flex items-end gap-2 mb-4">
                            <span className={`text-4xl font-extrabold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>7h 10m</span>
                        </div>
                        <div className={`h-3 rounded-full mb-3 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'} overflow-hidden`}>
                            <motion.div
                                initial={{ width: 0 }}
                                animate={inView ? { width: '74%' } : {}}
                                transition={{ duration: 1.2, delay: 0.6, ease: 'easeOut' }}
                                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-400"
                            />
                        </div>
                        <div className="flex justify-between text-xs">
                            {['10pm', '12am', '2am', '4am', '6am'].map((t) => (
                                <span key={t} className={darkMode ? 'text-slate-500' : 'text-slate-400'}>{t}</span>
                            ))}
                        </div>
                        <div className="flex gap-3 mt-4">
                            {[
                                { label: 'Deep', val: '2h 40m', color: 'text-violet-400' },
                                { label: 'REM', val: '1h 30m', color: 'text-blue-400' },
                                { label: 'Light', val: '3h', color: 'text-teal-400' },
                            ].map((s) => (
                                <div key={s.label} className="flex-1 text-center">
                                    <div className={`text-sm font-bold ${s.color}`}>{s.val}</div>
                                    <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{s.label}</div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Daily Activity */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        className={`rounded-3xl p-6 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-xl`}
                    >
                        <div className={`text-xs font-semibold uppercase tracking-widest mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Daily Activity</div>
                        <div className="flex items-end gap-2 mb-4">
                            <span className={`text-4xl font-extrabold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>24K</span>
                            <span className={`text-sm mb-1 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>steps</span>
                        </div>
                        <div className="flex items-end gap-1 h-16">
                            {[4, 7, 5, 9, 6, 8, 10, 7, 9, 8, 6, 9, 10, 8].map((h, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={inView ? { height: `${h * 9}%` } : {}}
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.04 }}
                                    className="flex-1 rounded-t-sm"
                                    style={{ background: i === 13 ? '#2563eb' : (darkMode ? '#334155' : '#e2e8f0'), minHeight: '4px' }}
                                />
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
