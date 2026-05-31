const links = {
    Platform: ['Dashboard', 'Health Pulse', 'Smart Devices', 'Appointments'],
    Services: ['AI Diagnostics', 'Doctor Directory', 'Emergency Care', 'Teleconsult'],
    Company: ['About Us', 'Careers', 'Press', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Use', 'HIPAA Compliance', 'Cookie Policy'],
};

export default function Footer({ darkMode }) {
    return (
        <footer className={`py-16 border-t ${darkMode ? 'bg-[#030711] border-slate-800' : 'bg-slate-900 border-slate-800'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
                    {/* Brand */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2.5">
                                    <path d="M4.5 12.75l6 6 9-13.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className="font-sora font-bold text-lg text-white">SwasthyaSutra</span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-5">
                            AI-powered Smart Healthcare Platform for modern, connected health management.
                        </p>
                        <div className="flex gap-3">
                            {['twitter', 'linkedin', 'instagram', 'github'].map((s) => (
                                <a key={s} href="#" className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-blue-500/20 border border-slate-700 hover:border-blue-500/40 flex items-center justify-center transition-all duration-200">
                                    <span className="text-slate-400 text-xs capitalize">{s[0].toUpperCase()}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([group, items]) => (
                        <div key={group}>
                            <h4 className="text-white font-semibold text-sm mb-4">{group}</h4>
                            <ul className="space-y-2.5">
                                {items.map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors duration-150">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800">
                    <p className="text-slate-500 text-sm">
                        © 2025 SwasthyaSutra. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
