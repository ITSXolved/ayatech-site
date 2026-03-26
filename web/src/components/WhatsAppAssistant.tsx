"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

export default function WhatsAppAssistant() {
    const [isOpen, setIsOpen] = React.useState(false);

    const whatsappNumber = "919037665777";
    const welcomeMessage = "Hi! How can we help you today?";

    const handleWhatsAppClick = () => {
        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("I'm interested in AyaTech's courses. Can you help me?")}`;
        window.open(url, "_blank");
    };

    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: "bottom right" }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9 }}
                        className="w-[320px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden mb-2"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-6 text-white relative">
                            <button 
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                            >
                                <X size={20} />
                            </button>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                    <MessageCircle size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">AyaTech Support</h3>
                                    <p className="text-white/80 text-xs">Typically replies in under an hour</p>
                                </div>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-6 bg-gray-50/50">
                            <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 max-w-[85%] mb-4">
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {welcomeMessage}
                                </p>
                                <span className="text-[10px] text-gray-400 mt-1 block">AyaTech Assistant</span>
                            </div>

                            <button
                                onClick={handleWhatsAppClick}
                                className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white py-3.5 px-6 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-[#25D366]/20 active:scale-[0.98]"
                            >
                                <Send size={18} />
                                Start WhatsApp Chat
                            </button>
                        </div>
                        
                        <div className="px-6 py-3 bg-white border-t border-gray-50 text-[10px] text-gray-400 text-center">
                            AyaTech Online Learning Ecosystem
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Pulsing Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full flex items-center justify-center shadow-xl relative transition-shadow"
                style={{ 
                    background: isOpen ? "#1F2937" : "#25D366",
                    color: "white" 
                }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
                            <X size={28} />
                        </motion.div>
                    ) : (
                        <motion.div key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}>
                            <MessageCircle size={32} />
                        </motion.div>
                    )}
                </AnimatePresence>
                
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 border-4 border-white rounded-full flex items-center justify-center">
                         <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    </span>
                )}
            </motion.button>
        </div>
    );
}
