import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const specializations = ['All', 'Cardiologist', 'Neurologist', 'Orthopedic', 'Pediatrician', 'Dermatologist', 'Psychiatrist'];

const doctors = [
    { name: 'Dr. Priya Sharma', specialty: 'Cardiologist', exp: '15 yrs', rating: 4.9, available: true, avatar: 'PS' },
    { name: 'Dr. Arjun Mehta', specialty: 'Neurologist', exp: '12 yrs', rating: 4.8, available: true, avatar: 'AM' },
    { name: 'Dr. Kavya Reddy', specialty: 'Orthopedic', exp: '10 yrs', rating: 4.7, available: false, avatar: 'KR' },
    { name: 'Dr. Rohit Gupta', specialty: 'Pediatrician', exp: '8 yrs', rating: 4.9, available: true, avatar: 'RG' },
    { name: 'Dr. Ananya Singh', specialty: 'Dermatologist', exp: '11 yrs', rating: 4.8, available: true, avatar: 'AS' },
    { name: 'Dr. Vikram Nair', specialty: 'Psychiatrist', exp: '14 yrs', rating: 4.6, available: false, avatar: 'VN' },
];

const avatarColors = ['from-blue-500 to-cyan-400', 'from-teal-500 to-green-400', 'from-violet-500 to-purple-400', 'from-orange-400 to-red-400', 'from-pink-500 to-rose-400', 'from-indigo-500 to-blue-400'];

function DoctorCard({ doctor, index, darkMode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`rounded-3xl p-6 cursor-pointer transition-all duration-300 group ${darkMode
                    ? 'bg-slate-800 border border-slate-700 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/10'
                    : 'bg-white border border-slate-200 hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-100'
                }`}
        >
            {/* Avatar */}
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${avatarColors[index % avatarColors.length]} flex items-center justify-center text-white font-bold text-xl mb-4 shadow-lg`}>
                {doctor.avatar}
            </div>

            {/* Info */}
            <h3 className={`font-semibold text-base mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{doctor.name}</h3>
            <p className={`text-sm mb-3 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>{doctor.specialty}</p>

            <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{doctor.exp} exp</span>
                <span className="flex items-center gap-1 text-xs text-amber-400 font-medium">
                    ★ {doctor.rating}
                </span>
            </div>

            {/* Availability + Book */}
            <div className="flex items-center justify-between">
                <span className={`flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full ${doctor.available
                        ? 'bg-green-500/10 text-green-500'
                        : darkMode ? 'bg-slate-700 text-slate-400' : 'bg-slate-100 text-slate-500'
                    }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${doctor.available ? 'bg-green-500 status-green' : 'bg-slate-400'}`} />
                    {doctor.available ? 'Available' : 'Unavailable'}
                </span>
                <button className={`px-4 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 ${doctor.available
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-600/20'
                        : darkMode ? 'bg-slate-700 text-slate-400 cursor-not-allowed' : 'bg-slate-100 text-slate-400 cursor-not-allowed'
                    }`}>
                    Book
                </button>
            </div>
        </motion.div>
    );
}

export default function DoctorDirectory({ darkMode }) {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('All');
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const filtered = doctors.filter((d) => {
        const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.specialty.toLowerCase().includes(search.toLowerCase());
        const matchFilter = filter === 'All' || d.specialty === filter;
        return matchSearch && matchFilter;
    });

    return (
        <section ref={ref} className={`py-24 ${darkMode ? 'bg-[#0a0f1e]' : 'bg-slate-50'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 ${darkMode ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20' : 'bg-teal-50 text-teal-600 border border-teal-200'
                        }`}>
                        Expert Doctors
                    </span>
                    <h2 className={`text-3xl sm:text-4xl font-bold font-sora ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        Find Your Specialist
                    </h2>
                    <p className={`mt-3 text-base max-w-xl mx-auto ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Browse our network of certified healthcare professionals
                    </p>
                </motion.div>

                {/* Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-6"
                >
                    <div className="relative max-w-lg mx-auto">
                        <svg className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${darkMode ? 'text-slate-400' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search by name or specialty..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-blue-500/30 ${darkMode
                                    ? 'bg-slate-800 border-slate-700 text-white placeholder-slate-500 focus:border-blue-500'
                                    : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-blue-400'
                                }`}
                        />
                    </div>
                </motion.div>

                {/* Filter tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="flex flex-wrap gap-2 justify-center mb-10"
                >
                    {specializations.map((s) => (
                        <button
                            key={s}
                            onClick={() => setFilter(s)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${filter === s
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                    : darkMode
                                        ? 'bg-slate-800 text-slate-400 border border-slate-700 hover:border-blue-500/50 hover:text-blue-400'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400/50 hover:text-blue-600'
                                }`}
                        >
                            {s}
                        </button>
                    ))}
                </motion.div>

                {/* Doctor cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((doctor, i) => (
                        <DoctorCard key={doctor.name} doctor={doctor} index={i} darkMode={darkMode} />
                    ))}
                </div>
            </div>
        </section>
    );
}
