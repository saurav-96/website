import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Contact({ darkMode }) {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const handleSubmit = (e) => {
        e.preventDefault();
        setSent(true);
        setTimeout(() => setSent(false), 3000);
        setForm({ name: '', email: '', subject: '', message: '' });
    };

    const inputClass = `w-full px-4 py-3.5 rounded-2xl border text-sm outline-none transition-all duration-200 focus:ring-2 ${darkMode
            ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:ring-blue-500/20 focus:border-blue-500'
            : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:ring-blue-500/20 focus:border-blue-400'
        }`;

    return (
        <section id="contact" ref={ref} className={`py-24 ${darkMode ? 'bg-[#06090f]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-14"
                >
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${darkMode ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-50 text-blue-600 border border-blue-200'
                        }`}>
                        Get in Touch
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        We're Here For You
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`rounded-3xl p-8 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-xl`}
                    >
                        {sent ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>Message Sent!</h3>
                                <p className={`text-sm mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>We'll get back to you within 24 hours.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Name</label>
                                        <input required type="text" placeholder="John Doe" value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} className={inputClass} />
                                    </div>
                                    <div>
                                        <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Email</label>
                                        <input required type="email" placeholder="john@example.com" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} className={inputClass} />
                                    </div>
                                </div>
                                <div>
                                    <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Subject</label>
                                    <input required type="text" placeholder="How can we help?" value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))} className={inputClass} />
                                </div>
                                <div>
                                    <label className={`block text-xs font-semibold mb-1.5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>Message</label>
                                    <textarea required rows={5} placeholder="Describe your query..." value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} className={`${inputClass} resize-none`} />
                                </div>
                                <button type="submit" className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-teal-500 text-white font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-[1.01]">
                                    Send Message →
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Info + Map */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-6"
                    >
                        {/* Contact info */}
                        <div className={`rounded-3xl p-6 ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'} shadow-xl`}>
                            <h3 className={`font-bold text-lg mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Support Channels</h3>
                            <div className="space-y-4">
                                {[
                                    { icon: '📞', label: 'Phone', value: '+91 1800-HEALTH', sub: 'Mon–Sat, 9am–8pm' },
                                    { icon: '📧', label: 'Email', value: 'support@swasthyasutra.ai', sub: 'Response within 24h' },
                                    { icon: '💬', label: 'Live Chat', value: 'SanjeevanAI Bot', sub: '24/7 Available' },
                                ].map((c) => (
                                    <div key={c.label} className="flex items-center gap-4">
                                        <div className="text-xl w-8 text-center">{c.icon}</div>
                                        <div>
                                            <div className={`text-sm font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{c.value}</div>
                                            <div className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{c.sub}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Map placeholder */}
                        <div className={`rounded-3xl overflow-hidden shadow-xl h-64 relative ${darkMode ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-200'
                            }`}>
                            <div className={`absolute inset-0 flex items-center justify-center flex-col gap-3 ${darkMode ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-blue-50 to-teal-50'
                                }`}>
                                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="text-center">
                                    <div className={`font-semibold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>SwasthyaSutra HQ</div>
                                    <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Butwal, Nepal</div>
                                </div>
                                <div className={`absolute inset-0 opacity-10`}
                                    style={{
                                        backgroundImage: `repeating-linear-gradient(0deg, ${darkMode ? '#334155' : '#94a3b8'} 0, ${darkMode ? '#334155' : '#94a3b8'} 1px, transparent 0, transparent 50%)`,
                                        backgroundSize: '32px 32px'
                                    }}
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
