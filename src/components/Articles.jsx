import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const articles = [
    { category: 'Nutrition', title: '10 Superfoods That Boost Your Immunity', time: '5 min read', emoji: '🥗', color: 'from-green-400 to-emerald-500' },
    { category: 'Exercise', title: "HIIT vs Steady Cardio: What's Best for You?", time: '7 min read', emoji: '🏃', color: 'from-blue-400 to-cyan-500' },
    { category: 'Mental Health', title: 'How Sleep Quality Affects Brain Performance', time: '4 min read', emoji: '🧘', color: 'from-violet-400 to-purple-500' },
    { category: 'Nutrition', title: 'The Science of Intermittent Fasting', time: '6 min read', emoji: '⏰', color: 'from-amber-400 to-orange-500' },
    { category: 'Exercise', title: 'Building a Sustainable Fitness Routine', time: '5 min read', emoji: '💪', color: 'from-teal-400 to-cyan-500' },
    { category: 'Mental Health', title: 'Mindfulness Practices for Stress Reduction', time: '3 min read', emoji: '🌿', color: 'from-pink-400 to-rose-500' },
];

const catColors = {
    Nutrition: { bg: 'bg-green-500/10', text: 'text-green-400' },
    Exercise: { bg: 'bg-blue-500/10', text: 'text-blue-400' },
    'Mental Health': { bg: 'bg-violet-500/10', text: 'text-violet-400' },
};

export default function Articles({ darkMode }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="articles" ref={ref} className={`py-24 ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${darkMode ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-600 border border-teal-200'
                        }`}>
                        Health Library
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Health Tips &amp; Articles
                    </h2>
                    <p className={`mt-3 text-base max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Evidence-based articles curated by our medical team
                    </p>
                </motion.div>

                {/* Articles grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((a, i) => {
                        const cat = catColors[a.category];
                        return (
                            <motion.article
                                key={a.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                                className={`group rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl ${darkMode ? 'bg-slate-900 border border-slate-800 hover:border-teal-500/30' : 'bg-slate-50 border border-slate-200 hover:border-teal-400/40'
                                    }`}
                            >
                                {/* Gradient banner */}
                                <div className={`h-36 bg-gradient-to-br ${a.color} flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500 overflow-hidden`}>
                                    {a.emoji}
                                </div>

                                <div className="p-5">
                                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3 ${cat.bg} ${cat.text}`}>
                                        {a.category}
                                    </span>
                                    <h3 className={`font-semibold text-base leading-snug mb-3 group-hover:text-blue-500 transition-colors duration-200 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        {a.title}
                                    </h3>
                                    <div className="flex items-center justify-between">
                                        <span className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{a.time}</span>
                                        <button className={`text-xs font-medium flex items-center gap-1 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
                                            Read
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
