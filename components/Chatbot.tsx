
import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { getPlaniBotResponse } from '../services/geminiService';
import { RobotIcon, SendIcon, CloseIcon } from './Icons';

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(scrollToBottom, [messages]);
    
    useEffect(() => {
        if(isOpen && messages.length === 0) {
            setIsLoading(true);
            setTimeout(async () => {
                const initialMessage = await getPlaniBotResponse("Hola");
                 setMessages([{ sender: 'bot', text: initialMessage }]);
                 setIsLoading(false);
            }, 500);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        const botResponseText = await getPlaniBotResponse(input);
        const botMessage: Message = { sender: 'bot', text: botResponseText };
        
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
    };
    
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 w-16 h-16 bg-fuchsia-600 text-white rounded-full shadow-2xl flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-50 focus:outline-none focus:ring-4 focus:ring-fuchsia-400"
                aria-label="Toggle Chatbot"
            >
                {isOpen ? <CloseIcon /> : <RobotIcon />}
            </button>

            {isOpen && (
                <div className="fixed bottom-24 right-6 w-[90vw] max-w-sm h-[70vh] max-h-[600px] flex flex-col bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-2xl z-50 overflow-hidden">
                    <header className="p-4 flex items-center justify-between border-b border-white/50 bg-white/20">
                        <div className="flex items-center space-x-3">
                             <div className="w-10 h-10 bg-fuchsia-600 text-white rounded-full flex items-center justify-center">
                                <RobotIcon />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-800">PlaniBot</h3>
                                <p className="text-sm text-gray-600">Asistente de IA</p>
                            </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-gray-800">
                           <CloseIcon />
                        </button>
                    </header>
                    <main className="flex-1 p-4 overflow-y-auto">
                        <div className="space-y-4">
                            {messages.map((msg, index) => (
                                <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-fuchsia-600 text-white rounded-br-none' : 'bg-gray-200 text-gray-800 rounded-bl-none'}`}>
                                        <p className="text-sm">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="max-w-[80%] p-3 rounded-2xl bg-gray-200 text-gray-800 rounded-bl-none">
                                        <div className="flex items-center space-x-2">
                                            <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-75"></span>
                                            <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-150"></span>
                                            <span className="w-2 h-2 bg-fuchsia-500 rounded-full animate-bounce delay-300"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>
                    </main>
                    <footer className="p-4 border-t border-white/50 bg-white/20">
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Escribe tu mensaje..."
                                className="w-full bg-gray-100/50 border border-gray-300/50 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition"
                                disabled={isLoading}
                            />
                            <button onClick={handleSend} disabled={isLoading} className="bg-fuchsia-600 text-white p-3 rounded-full hover:bg-fuchsia-700 disabled:bg-fuchsia-400 transition">
                                <SendIcon />
                            </button>
                        </div>
                    </footer>
                </div>
            )}
        </>
    );
};

export default Chatbot;
