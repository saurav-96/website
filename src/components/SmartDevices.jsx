import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const devices = [
    {
        icon: '🩸',
        name: 'Glucometer',
        model: 'FreeStyle Libre 3',
        metrics: [
            { label: 'Blood Glucose', value: '94 mg/dL', status: 'green', detail: 'Normal (70–140)' },
            { label: 'Trend', value: '↗ Rising', status: 'yellow', detail: 'Monitor soon' },
            { label: 'Last Reading', value: '12 mins ago', status: 'green', detail: 'Synced' },
        ],
    },
    {
        icon: '⌚',
        name: 'Smartwatch',
        model: 'Apple Watch Ultra 2',
        metrics: [
            { label: 'Heart Rate', value: '72 BPM', status: 'green', detail: 'Normal' },
            { label: 'SpO₂', value: '98%', status: 'green', detail: 'Excellent' },
            { label: 'Steps Today', value: '8,432', status: 'green', detail: 'Goal: 10,000' },
        ],
    },
    {
        icon: '💊',
        name: 'BP Monitor',
        model: 'Omron Platinum',
        metrics: [
            { label: 'Systolic', value: '142 mmHg', status: 'red', detail: 'High – consult doctor' },
            { label: 'Diastolic', value: '88 mmHg', status: 'yellow', detail: 'Elevated' },
            { label: 'Pulse', value: '76 BPM', status: 'green', detail: 'Normal' },
        ],
    },
];

const statusMap = {
    green: { dot: 'bg-green-400', badge: 'bg-green-400/10 text-green-400' },
    yellow: { dot: 'bg-amber-400', badge: 'bg-amber-400/10 text-amber-400' },
    red: { dot: 'bg-red-400', badge: 'bg-red-400/10 text-red-400' },
};

export default function SmartDevices({ darkMode }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section id="devices" ref={ref} className={`py-24 ${darkMode ? 'bg-[#080c18]' : 'bg-white'}`}>
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
                        Smart Devices Integration
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Connected Health Ecosystem
                    </h2>
                    <p className={`mt-3 text-base max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Real-time data from your wearables and medical devices, all in one place.
                    </p>
                </motion.div>

                {/* Device cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    {devices.map((device, di) => (
                        <motion.div
                            key={device.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: di * 0.12 }}
                            className={`rounded-3xl p-6 group transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${darkMode
                                    ? 'bg-slate-900 border border-slate-800 hover:border-teal-500/30 hover:shadow-teal-500/10'
                                    : 'bg-slate-50 border border-slate-200 hover:border-teal-400/40 hover:shadow-teal-100'
                                }`}
                        >
                            {/* Device header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl ${darkMode ? 'bg-slate-800' : 'bg-white'
                                    } shadow-lg`}>
                                    {device.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className={`font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>{device.name}</h3>
                                    <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{device.model}</p>
                                </div>
                                <div className="flex items-center gap-1.5 text-xs text-green-400 bg-green-400/10 px-2.5 py-1 rounded-full">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Synced
                                </div>
                            </div>

                            {/* Metrics */}
                            <div className="space-y-3">
                                {device.metrics.map((m, mi) => (
                                    <motion.div
                                        key={m.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={inView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: di * 0.12 + mi * 0.08 + 0.2 }}
                                        className={`flex items-center justify-between p-3 rounded-2xl ${darkMode ? 'bg-slate-800/60' : 'bg-white'
                                            }`}
                                    >
                                        <div>
                                            <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-500'}`}>{m.label}</div>
                                            <div className={`font-bold text-sm mt-0.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{m.value}</div>
                                        </div>
                                        <div className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${statusMap[m.status].badge}`}>
                                            <span className={`w-1.5 h-1.5 rounded-full ${statusMap[m.status].dot}`} />
                                            {m.detail}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Legend */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex items-center justify-center gap-6 mt-10"
                >
                    {[
                        { color: 'bg-green-400', label: 'Healthy' },
                        { color: 'bg-amber-400', label: 'Warning' },
                        { color: 'bg-red-400', label: 'Risk – Action Required' },
                    ].map((l) => (
                        <div key={l.label} className="flex items-center gap-2 text-xs">
                            <span className={`w-2.5 h-2.5 rounded-full ${l.color}`} />
                            <span className={darkMode ? 'text-slate-400' : 'text-slate-500'}>{l.label}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
