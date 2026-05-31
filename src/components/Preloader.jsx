import { motion } from 'framer-motion';

const Preloader = ({ darkMode }) => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center ${darkMode ? 'bg-[#0a0f1e]' : 'bg-white'
                }`}
        >
            <div className="relative">
                {/* Animated Rings */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.2, 0.8],
                        opacity: [0.3, 0.6, 0.3],
                        rotate: 360
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -inset-8 border-2 border-dashed border-blue-500/30 rounded-full"
                />
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{
                        scale: [0.9, 1.1, 0.9],
                        opacity: [0.2, 0.4, 0.2],
                        rotate: -360
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute -inset-12 border border-blue-400/20 rounded-full"
                />

                {/* Branding */}
                <div className="text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold tracking-tighter"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            Swasthya
                        </span>
                        <span className={`${darkMode ? 'text-white' : 'text-slate-900'}`}>
                            Sutra
                        </span>
                    </motion.h1>

                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="h-1 bg-gradient-to-r from-blue-600 to-transparent mt-2 mx-auto"
                    />

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className={`mt-4 text-sm font-medium tracking-[0.2em] uppercase ${darkMode ? 'text-slate-400' : 'text-slate-500'
                            }`}
                    >
                        Sanjeevan AI Powered
                    </motion.p>
                </div>
            </div>

            {/* Loading bar bottom */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-48">
                <div className={`h-[2px] w-full rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-100'
                    }`}>
                    <motion.div
                        initial={{ x: "-100%" }}
                        animate={{ x: "100%" }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="h-full w-1/3 bg-blue-500"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default Preloader;
