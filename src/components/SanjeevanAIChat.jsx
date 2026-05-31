import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_API_KEY_HERE';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`;

const SYSTEM_PROMPT = `You are SanjeevanAI, a friendly and knowledgeable healthcare assistant developed by SwasthyaSutra. You provide general health information, wellness tips, and help users understand medical concepts. 

Important guidelines:
- Always be empathetic and supportive
- Provide evidence-based health information
- Recommend consulting a doctor for specific medical conditions
- Never diagnose or prescribe medication
- Keep responses concise and easy to understand
- Use emojis occasionally to be friendly
- If asked about emergencies, always advise calling emergency services immediately`;

export default function SanjeevanAIChat({ darkMode, chatOpen, setChatOpen }) {
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            text: "Hello! 👋 I'm SanjeevanAI, your personal health assistant by SwasthyaSutra. How can I help you today? You can ask me about health tips, symptoms, wellness advice, or anything health-related!",
        },
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, loading]);

    useEffect(() => {
        if (chatOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [chatOpen]);

    // Mock AI responses
    const getMockResponse = (userText) => {
        const lowerText = userText.toLowerCase();
        const responses = {
            greeting: [
                "Hello! 👋 I'm here to help with your health questions. What would you like to know?",
                "Hi there! Feel free to ask me anything about wellness, fitness, or general health tips.",
            ],
            tips: [
                "🏃 Here are some wellness tips: Stay hydrated (drink 8 glasses of water daily), exercise regularly (at least 30 minutes), get 7-9 hours of sleep, and eat balanced meals with fruits and vegetables.",
                "💪 For better health: Practice stress management through meditation or yoga, maintain good posture, avoid prolonged sitting, and take regular breaks.",
            ],
            sleep: [
                "😴 Sleep tips: Keep a consistent sleep schedule, avoid screens 30 minutes before bed, create a dark and cool environment, and try relaxation techniques like deep breathing.",
            ],
            exercise: [
                "🏋️ Exercise benefits: Start with 150 minutes of moderate activity weekly, combine cardio and strength training, and always warm up before exercising.",
            ],
            food: [
                "🥗 Nutrition tips: Include whole grains, lean proteins, fruits, and vegetables in your diet. Limit sugar and processed foods. Remember, balanced nutrition is key!",
            ],
            stress: [
                "🧘 Stress management: Try meditation, deep breathing, yoga, or going for a walk in nature. Regular exercise also helps reduce stress significantly.",
            ],
            doctor: [
                "👨‍⚕️ For specific medical concerns: Please consult with a qualified healthcare professional. I can provide general information, but professional diagnosis and treatment are important.",
            ],
        };

        if (lowerText.match(/hello|hi|hey|greetings/)) return responses.greeting[0];
        if (lowerText.match(/tip|advice|help|suggestion/)) return responses.tips[0];
        if (lowerText.match(/sleep|rest|insomnia|fatigue/)) return responses.sleep[0];
        if (lowerText.match(/exercise|workout|fitness|gym|running/)) return responses.exercise[0];
        if (lowerText.match(/food|eat|nutrition|diet|meal/)) return responses.food[0];
        if (lowerText.match(/stress|anxiety|tension|worry|calm/)) return responses.stress[0];
        if (lowerText.match(/doctor|diagnose|medicine|prescription|treatment/)) return responses.doctor[0];
        
        return "That's a great question! While I can provide general health information, for specific concerns, please consult a healthcare professional. Is there anything else I can help you with? 😊";
    };

    const sendMessage = async () => {
        const trimmed = input.trim();
        if (!trimmed || loading) return;

        const userMsg = { role: 'user', text: trimmed };
        const newMessages = [...messages, userMsg];
        setMessages(newMessages);
        setInput('');
        setLoading(true);

        try {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 800));
            
            const aiText = getMockResponse(trimmed);
            setMessages((prev) => [...prev, { role: 'assistant', text: aiText }]);
        } catch (err) {
            console.error('SanjeevanAI Error:', err);
            setMessages((prev) => [
                ...prev,
                {
                    role: 'assistant',
                    text: "Sorry, something went wrong. Please try again! 💙",
                },
            ]);
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <AnimatePresence>
            {chatOpen && (
                <>
                    {/* Mobile backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[998] sm:hidden"
                        onClick={() => setChatOpen(false)}
                    />

                    {/* Chat Panel */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 30, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        className={`fixed z-[999] flex flex-col overflow-hidden
                            /* Mobile: full screen with safe area */
                            inset-0 sm:inset-auto
                            /* Desktop: floating panel bottom-right */
                            sm:bottom-6 sm:right-6 sm:w-[420px] sm:h-[600px] sm:rounded-2xl
                            ${darkMode
                                ? 'bg-[#0d1225] border border-slate-700/50'
                                : 'bg-white border border-slate-200'
                            } shadow-2xl`}
                    >
                        {/* Header */}
                        <div className={`flex items-center justify-between px-5 py-4 border-b shrink-0 ${darkMode ? 'border-slate-700/50 bg-slate-900/50' : 'border-slate-200 bg-slate-50'
                            }`}>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center shadow-lg shadow-violet-500/20">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className={`font-bold text-sm ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                                        SanjeevanAI
                                    </h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        <span className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                                            Online • Health Assistant
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setChatOpen(false)}
                                className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors cursor-pointer ${darkMode ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-200 text-slate-500'
                                    }`}
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4" style={{ scrollBehavior: 'smooth' }}>
                            {messages.map((msg, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.25 }}
                                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${msg.role === 'user'
                                                ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-br-md'
                                                : darkMode
                                                    ? 'bg-slate-800 text-slate-200 border border-slate-700/50 rounded-bl-md'
                                                    : 'bg-slate-100 text-slate-800 border border-slate-200 rounded-bl-md'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}

                            {/* Loading indicator */}
                            {loading && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex justify-start"
                                >
                                    <div className={`px-4 py-3 rounded-2xl rounded-bl-md ${darkMode ? 'bg-slate-800 border border-slate-700/50' : 'bg-slate-100 border border-slate-200'
                                        }`}>
                                        <div className="flex items-center gap-1.5">
                                            <div className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                                            <div className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                                            <div className="w-2 h-2 rounded-full bg-violet-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className={`px-4 py-3 border-t shrink-0 ${darkMode ? 'border-slate-700/50 bg-slate-900/30' : 'border-slate-200 bg-slate-50'
                            }`}>
                            <div className={`flex items-center gap-2 rounded-xl px-4 py-2 ${darkMode ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-slate-200'
                                }`}>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder="Ask SanjeevanAI anything..."
                                    disabled={loading}
                                    className={`flex-1 bg-transparent text-sm outline-none placeholder-slate-400 ${darkMode ? 'text-white' : 'text-slate-900'
                                        } disabled:opacity-50`}
                                />
                                <button
                                    onClick={sendMessage}
                                    disabled={!input.trim() || loading}
                                    className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all cursor-pointer ${input.trim() && !loading
                                            ? 'bg-gradient-to-r from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40'
                                            : darkMode
                                                ? 'bg-slate-700 text-slate-500'
                                                : 'bg-slate-200 text-slate-400'
                                        } disabled:cursor-not-allowed`}
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                    </svg>
                                </button>
                            </div>
                            <p className={`text-center text-[10px] mt-2 ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}>
                                SanjeevanAI may make mistakes. Consult a doctor for medical advice.
                            </p>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
