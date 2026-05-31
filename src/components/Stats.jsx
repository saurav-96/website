import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
    { value: 1200, suffix: '+', label: 'Expert Doctors', icon: '🩺' },
    { value: 50000, suffix: '+', label: 'Patients Served', icon: '👥' },
    { value: 24, suffix: '/7', label: 'Emergency Support', icon: '🚨' },
    { value: 98, suffix: '%', label: 'Satisfaction Rate', icon: '⭐' },
];

function AnimatedCounter({ target, suffix, active }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!active) return;
        let start = 0;
        const duration = 2000;
        const increment = target / (duration / 16);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, 16);
        return () => clearInterval(timer);
    }, [active, target]);

    return (
        <span>
            {count.toLocaleString()}{suffix}
        </span>
    );
}

export default function Stats({ darkMode }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section
            ref={ref}
            className={`py-24 ${darkMode ? 'bg-slate-900/50' : 'bg-white'}`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}>
                        Platform Impact
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Trusted by Thousands
                    </h2>
                    <p className={`mt-3 text-base max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Real numbers. Real impact. SwasthyaSutra is transforming healthcare delivery at scale.
                    </p>
                </motion.div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            className={`relative group rounded-3xl p-6 text-center cursor-default overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode
                                    ? 'bg-slate-800 border border-slate-700 hover:border-blue-500/50 hover:shadow-blue-500/10'
                                    : 'bg-slate-50 border border-slate-200 hover:border-blue-400/50 hover:shadow-blue-100'
                                }`}
                        >
                            {/* Glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />

                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <div className={`text-3xl sm:text-4xl font-extrabold font-sora mb-1 ${darkMode ? 'text-white' : 'text-slate-900'
                                }`}>
                                <AnimatedCounter target={stat.value} suffix={stat.suffix} active={inView} />
                            </div>
                            <div className={`text-sm font-medium ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {stat.label}
                            </div>

                            {/* Bottom accent */}
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-t-full bg-gradient-to-r from-blue-500 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
