import React, { useState, useRef, useEffect } from 'react';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi! How can I help you today?", isUser: false }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [backendType, setBackendType] = useState('checking'); // 'checking', 'local', 'gemini'
    const messagesEndRef = useRef(null);
    const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // Check Backend Availability on Mount
    useEffect(() => {
        const checkBackend = async () => {
            try {
                // Short timeout to avoid long wait
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 2000);

                const res = await fetch('http://localhost:20082/', {
                    method: 'GET',
                    signal: controller.signal
                });
                clearTimeout(timeoutId);

                if (res.ok) {
                    console.log("Connected to Local HostedLLM");
                    setBackendType('local');
                } else {
                    throw new Error("Local backend not ready");
                }
            } catch (error) {
                console.log("Local backend unavailable, using Gemini API");
                setBackendType('gemini');
            }
        };
        checkBackend();
    }, []);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const userMessage = inputValue;
        const newMessages = [...messages, { text: userMessage, isUser: true }];

        setMessages([...newMessages, { text: "...", isUser: false }]);
        setInputValue("");

        try {
            if (backendType === 'local') {
                // Local HostedLLM Logic
                const response = await fetch('http://localhost:20082/chat_stream', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ message: userMessage }),
                });

                if (!response.ok) throw new Error('Backend error');

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let accumulatedText = "";

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;
                    const chunk = decoder.decode(value, { stream: true });
                    accumulatedText += chunk;

                    setMessages(prev => {
                        const updated = [...prev];
                        updated[updated.length - 1] = { text: accumulatedText, isUser: false };
                        return updated;
                    });
                }
            } else if (backendType === 'gemini') {
                // Gemini API Logic
                if (!GEMINI_API_KEY) {
                    setMessages(prev => {
                        const updated = [...prev];
                        updated[updated.length - 1] = { text: "⚠️ API Key missing. Please set VITE_GEMINI_API_KEY in .env", isUser: false };
                        return updated;
                    });
                    return;
                }

                const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:streamGenerateContent?key=${GEMINI_API_KEY}`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        contents: [{ parts: [{ text: userMessage }] }]
                    })
                });

                if (!response.ok) throw new Error('Gemini API Error');

                const reader = response.body.getReader();
                const decoder = new TextDecoder();
                let accumulatedText = "";

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    const chunk = decoder.decode(value, { stream: true });

                    const matches = chunk.matchAll(/"text":\s*"((?:[^"\\]|\\.)*)"/g);
                    for (const match of matches) {
                        const text = JSON.parse(`"${match[1]}"`);
                        accumulatedText += text;
                        setMessages(prev => {
                            const updated = [...prev];
                            updated[updated.length - 1] = { text: accumulatedText, isUser: false };
                            return updated;
                        });
                    }
                }
            }

        } catch (error) {
            console.error("Chat Error", error);
            setMessages(prev => {
                const updated = [...prev];
                updated[updated.length - 1] = { text: "I'm currently unavailable. Please try again later.", isUser: false };
                return updated;
            });
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-80 h-96 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-fade-in-up">
                    {/* Header */}
                    <div className="p-4 bg-black flex justify-between items-center">
                        <h3 className="text-white font-semibold">Assistant</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.isUser
                                        ? 'bg-black text-white rounded-br-none'
                                        : 'bg-gray-100 text-black rounded-bl-none border border-gray-200'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input Area */}
                    <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100">
                        <div className="relative flex items-center">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type a message..."
                                className="w-full bg-gray-50 text-black placeholder-gray-400 rounded-full py-2.5 pl-4 pr-10 focus:outline-none focus:ring-1 focus:ring-black border border-gray-200 transition-all"
                            />
                            <button
                                type="submit"
                                disabled={!inputValue.trim()}
                                className="absolute right-1.5 p-1.5 bg-black rounded-full text-white hover:bg-gray-800 disabled:opacity-50 disabled:hover:bg-black transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="group relative flex items-center justify-center w-14 h-14 bg-black rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95"
            >
                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className={`absolute transition-all duration-300 ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </div>
            </button>
        </div>
    );
};

export default ChatWidget;
