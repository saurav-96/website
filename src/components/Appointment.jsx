import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

const steps = ['Choose Doctor', 'Select Date', 'Select Time', 'Confirm'];

const mockDoctors = [
    { name: 'Dr. Priya Sharma', specialty: 'Cardiologist', avatar: 'PS' },
    { name: 'Dr. Arjun Mehta', specialty: 'Neurologist', avatar: 'AM' },
    { name: 'Dr. Kavya Reddy', specialty: 'Orthopedic', avatar: 'KR' },
];

const times = ['09:00 AM', '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM'];

export default function Appointment({ darkMode }) {
    const [step, setStep] = useState(0);
    const [selected, setSelected] = useState({ doctor: null, date: '', time: '' });
    const [confirmed, setConfirmed] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const today = new Date().toISOString().split('T')[0];

    const handleConfirm = () => {
        setConfirmed(true);
        setTimeout(() => { setStep(0); setSelected({ doctor: null, date: '', time: '' }); setConfirmed(false); }, 3000);
    };

    const cardClass = darkMode
        ? 'bg-slate-800 border border-slate-700'
        : 'bg-white border border-slate-200';

    return (
        <section id="booking" ref={ref} className={`py-24 ${darkMode ? 'bg-[#0f172a]' : 'bg-white'}`}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}>
                        Book Now
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Appointment Booking
                    </h2>
                </motion.div>

                {/* Progress bar */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mb-10"
                >
                    <div className="flex items-center justify-between mb-3">
                        {steps.map((s, i) => (
                            <div key={s} className="flex flex-col items-center flex-1 relative">
                                {i < steps.length - 1 && (
                                    <div className={`absolute left-1/2 top-4 w-full h-0.5 ${i < step ? 'bg-blue-500' : darkMode ? 'bg-slate-700' : 'bg-slate-200'}`} />
                                )}
                                <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold z-10 transition-all duration-300 ${i < step
                                        ? 'bg-blue-500 border-blue-500 text-white'
                                        : i === step
                                            ? 'border-blue-500 text-blue-500 ' + (darkMode ? 'bg-slate-800' : 'bg-white')
                                            : darkMode
                                                ? 'border-slate-600 text-slate-500 bg-slate-800'
                                                : 'border-slate-300 text-slate-400 bg-white'
                                    }`}>
                                    {i < step ? '✓' : i + 1}
                                </div>
                                <span className={`mt-2 text-xs font-medium hidden sm:block ${i === step ? (darkMode ? 'text-blue-400' : 'text-blue-600') : darkMode ? 'text-slate-500' : 'text-slate-400'
                                    }`}>{s}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Step content */}
                <AnimatePresence mode="wait">
                    {confirmed ? (
                        <motion.div
                            key="confirmed"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            className={`rounded-3xl p-12 text-center ${cardClass}`}
                        >
                            <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className={`text-2xl font-bold font-sora mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                Appointment Confirmed!
                            </h3>
                            <p className={`${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                                {selected.doctor?.name} • {selected.date} • {selected.time}
                            </p>
                        </motion.div>
                    ) : step === 0 ? (
                        <motion.div key="step0" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className={`rounded-3xl p-8 ${cardClass}`}>
                            <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Choose a Doctor</h3>
                            <div className="grid gap-4">
                                {mockDoctors.map((d) => (
                                    <button
                                        key={d.name}
                                        onClick={() => { setSelected(s => ({ ...s, doctor: d })); setStep(1); }}
                                        className={`flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-all duration-200 ${selected.doctor?.name === d.name
                                                ? 'border-blue-500 bg-blue-500/10'
                                                : darkMode ? 'border-slate-700 hover:border-blue-500/50' : 'border-slate-200 hover:border-blue-400/50'
                                            }`}
                                    >
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center text-white font-bold">
                                            {d.avatar}
                                        </div>
                                        <div>
                                            <div className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{d.name}</div>
                                            <div className={`text-sm ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>{d.specialty}</div>
                                        </div>
                                        <svg className={`w-5 h-5 ml-auto ${darkMode ? 'text-slate-500' : 'text-slate-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    ) : step === 1 ? (
                        <motion.div key="step1" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className={`rounded-3xl p-8 ${cardClass}`}>
                            <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Select a Date</h3>
                            <input
                                type="date"
                                min={today}
                                value={selected.date}
                                onChange={(e) => setSelected(s => ({ ...s, date: e.target.value }))}
                                className={`w-full p-4 rounded-2xl border text-sm outline-none focus:ring-2 focus:ring-blue-500/30 mb-6 ${darkMode ? 'bg-slate-700 border-slate-600 text-white focus:border-blue-500' : 'bg-white border-slate-200 text-slate-900 focus:border-blue-400'
                                    }`}
                            />
                            <div className="flex gap-3">
                                <button onClick={() => setStep(0)} className={`flex-1 py-3 rounded-2xl border font-medium text-sm ${darkMode ? 'border-slate-600 text-slate-300' : 'border-slate-200 text-slate-600'}`}>Back</button>
                                <button onClick={() => selected.date && setStep(2)} disabled={!selected.date} className="flex-1 py-3 rounded-2xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed">Continue</button>
                            </div>
                        </motion.div>
                    ) : step === 2 ? (
                        <motion.div key="step2" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className={`rounded-3xl p-8 ${cardClass}`}>
                            <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Select a Time</h3>
                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-6">
                                {times.map((t) => (
                                    <button
                                        key={t}
                                        onClick={() => setSelected(s => ({ ...s, time: t }))}
                                        className={`py-2.5 rounded-xl text-sm font-medium border-2 transition-all duration-150 ${selected.time === t
                                                ? 'border-blue-500 bg-blue-500 text-white'
                                                : darkMode ? 'border-slate-700 text-slate-300 hover:border-blue-500/50' : 'border-slate-200 text-slate-700 hover:border-blue-400/50'
                                            }`}
                                    >{t}</button>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setStep(1)} className={`flex-1 py-3 rounded-2xl border font-medium text-sm ${darkMode ? 'border-slate-600 text-slate-300' : 'border-slate-200 text-slate-600'}`}>Back</button>
                                <button onClick={() => selected.time && setStep(3)} disabled={!selected.time} className="flex-1 py-3 rounded-2xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed">Continue</button>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div key="step3" initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -40 }} className={`rounded-3xl p-8 ${cardClass}`}>
                            <h3 className={`text-lg font-semibold mb-6 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Confirm Appointment</h3>
                            <div className={`rounded-2xl p-5 mb-6 space-y-3 ${darkMode ? 'bg-slate-700/50' : 'bg-slate-50'}`}>
                                {[
                                    { label: 'Doctor', value: selected.doctor?.name },
                                    { label: 'Specialty', value: selected.doctor?.specialty },
                                    { label: 'Date', value: selected.date },
                                    { label: 'Time', value: selected.time },
                                ].map((row) => (
                                    <div key={row.label} className="flex justify-between items-center">
                                        <span className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{row.label}</span>
                                        <span className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{row.value}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="flex gap-3">
                                <button onClick={() => setStep(2)} className={`flex-1 py-3 rounded-2xl border font-medium text-sm ${darkMode ? 'border-slate-600 text-slate-300' : 'border-slate-200 text-slate-600'}`}>Back</button>
                                <button onClick={handleConfirm} className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300">
                                    Confirm Booking
                                </button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
