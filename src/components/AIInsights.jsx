import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const insights = [
    {
        title: 'Cardiovascular Risk',
        level: 'Low',
        color: 'green',
        score: 18,
        recs: ['Continue daily 30-min walks', 'Reduce sodium intake', 'Monitor BP weekly'],
        icon: '❤️',
    },
    {
        title: 'Metabolic Health',
        level: 'Moderate',
        color: 'yellow',
        score: 54,
        recs: ['Limit refined carbs', 'Increase fiber intake', 'Fast blood glucose test'],
        icon: '⚡',
    },
    {
        title: 'Mental Wellness',
        level: 'Good',
        color: 'blue',
        score: 72,
        recs: ['8 hrs sleep recommended', 'Mindfulness 10 min/day', 'Social activity weekly'],
        icon: '🧠',
    },
];

const colorMap = {
    green: { bg: 'bg-green-500/10', text: 'text-green-400', bar: 'from-green-400 to-emerald-400', border: 'border-green-500/20' },
    yellow: { bg: 'bg-amber-500/10', text: 'text-amber-400', bar: 'from-amber-400 to-orange-400', border: 'border-amber-500/20' },
    blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', bar: 'from-blue-400 to-cyan-400', border: 'border-blue-500/20' },
};

export default function AIInsights({ darkMode }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="health-pulse" ref={ref} className={`py-24 ${darkMode ? 'bg-[#080c18]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${darkMode ? 'bg-violet-500/10 text-violet-400 border border-violet-500/20' : 'bg-violet-50 text-violet-600 border border-violet-200'
                        }`}>
                        AI-Powered Analysis
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Your Personal AI Health Report
                    </h2>
                    <p className={`mt-3 text-base max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Advanced machine learning models analyze your health patterns and predict risks before they become problems.
                    </p>
                </motion.div>

                {/* AI Scanning banner */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className={`rounded-3xl p-6 mb-10 relative overflow-hidden ${darkMode ? 'border border-violet-500/20 bg-violet-950/20' : 'border border-violet-200 bg-violet-50'
                        }`}
                >
                    <div className="flex items-center justify-between flex-wrap gap-4">
                        <div className="flex items-center gap-4">
                            <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center`}>
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <div>
                                <div className={`font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>SanjeevanAI Health Engine</div>
                                <div className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Last full scan: Today, 6:30 AM • Next: Tomorrow</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20">
                            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-green-400 text-sm font-medium">Monitoring Active</span>
                        </div>
                    </div>

                    {/* Scan line animation */}
                    <div className="mt-4 h-1.5 rounded-full overflow-hidden" style={{ background: darkMode ? '#1e2d45' : '#e2d9f3' }}>
                        <motion.div
                            animate={{ x: ['-100%', '100%'] }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                            className="h-full w-1/3 bg-gradient-to-r from-transparent via-violet-500 to-transparent rounded-full"
                        />
                    </div>
                </motion.div>

                {/* Insight cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {insights.map((ins, i) => {
                        const c = colorMap[ins.color];
                        return (
                            <motion.div
                                key={ins.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.12 }}
                                className={`rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode ? `bg-slate-900 border-slate-800 hover:${c.border}` : `bg-white border-slate-200`
                                    }`}
                            >
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <div className="text-2xl mb-2">{ins.icon}</div>
                                        <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>{ins.title}</h3>
                                    </div>
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${c.bg} ${c.text}`}>
                                        {ins.level}
                                    </span>
                                </div>

                                {/* Risk meter */}
                                <div className="mb-6">
                                    <div className="flex justify-between text-xs mb-2">
                                        <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>Risk Score</span>
                                        <span className={`font-bold ${c.text}`}>{ins.score}/100</span>
                                    </div>
                                    <div className={`h-3 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'} overflow-hidden`}>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={inView ? { width: `${ins.score}%` } : {}}
                                            transition={{ duration: 1, delay: i * 0.12 + 0.3 }}
                                            className={`h-full rounded-full bg-gradient-to-r ${c.bar}`}
                                        />
                                    </div>
                                </div>

                                {/* Recommendations */}
                                <div className="space-y-2">
                                    {ins.recs.map((r) => (
                                        <div key={r} className={`flex items-start gap-2 text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                            <svg className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${c.text}`} fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {r}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
