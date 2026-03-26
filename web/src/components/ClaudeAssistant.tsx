"use client";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Sparkles, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const C = {
  accentGold: "#c2a055",
  navyDark: "#1a202c",
  textMain: "#1f2937",
  textMuted: "#4b5563",
  white: "#FFFFFF",
  bgLight: "#f9fafb",
};

export default function ClaudeAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = { role: "user" as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg].slice(-10) }), // Send last 10 messages for context
      });

      const data = await res.json();
      if (data.content) {
        setMessages(prev => [...prev, { role: "assistant", content: data.content }]);
      } else {
        setMessages(prev => [...prev, { role: "assistant", content: "I'm sorry, I'm having trouble connecting right now. 😔" }]);
      }
    } catch (err) {
      console.error(err);
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong. Please try again later." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div style={{ position: "fixed", bottom: "1.5rem", right: "1.5rem", zIndex: 999 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.9 }}
            className="flex flex-col shadow-2xl overflow-hidden"
            style={{
              width: "380px",
              height: "550px",
              background: "#fff",
              borderRadius: "24px",
              border: "1px solid rgba(0,0,0,0.08)",
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem"
            }}
          >
            {/* Header */}
            <div style={{ padding: "1.25rem 1.5rem", background: C.navyDark, color: "#fff", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: C.accentGold, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Sparkles size={18} color="#fff" fill="#fff" />
                </div>
                <div>
                  <h4 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700 }}>AyaTech AI</h4>
                  <p style={{ margin: 0, fontSize: "0.75rem", opacity: 0.8, fontWeight: 500 }}>Powered by Claude 3.5</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", opacity: 0.7 }}>
                <X size={20} />
              </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} style={{ flex: 1, overflowY: "auto", padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", background: C.bgLight }}>
              {messages.length === 0 && (
                <div style={{ textAlign: "center", marginTop: "2rem", color: C.textMuted }}>
                  <p style={{ fontWeight: 600, fontSize: "1.1rem", marginBottom: "0.5rem" }}>Hi! I'm Claude. 👋</p>
                  <p style={{ fontSize: "0.9rem" }}>Ask me anything about AyaTech's AI and Robotics courses.</p>
                </div>
              )}
              {messages.map((m, i) => (
                <div key={i} style={{ alignSelf: m.role === "user" ? "flex-end" : "flex-start", maxWidth: "80%" }}>
                  <div style={{
                    padding: "0.85rem 1rem",
                    borderRadius: m.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                    background: m.role === "user" ? C.accentGold : "#fff",
                    color: m.role === "user" ? "#fff" : C.textMain,
                    fontSize: "0.95rem",
                    lineHeight: 1.5,
                    boxShadow: "0 2px 5px rgba(0,0,0,0.03)",
                    border: m.role === "user" ? "none" : "1px solid rgba(0,0,0,0.05)"
                  }}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{ alignSelf: "flex-start", padding: "0.85rem 1rem", background: "#fff", borderRadius: "20px 20px 20px 4px", display: "flex", gap: "3px" }}>
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.15 }} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                    <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ repeat: Infinity, duration: 0.5, delay: 0.3 }} className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                </div>
              )}
            </div>

            {/* Input */}
            <div style={{ padding: "1rem", borderTop: "1px solid rgba(0,0,0,0.06)", display: "flex", gap: "0.75rem", background: "#fff" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type your message..."
                style={{
                  flex: 1,
                  padding: "0.75rem 1.25rem",
                  borderRadius: "100px",
                  border: "1px solid #e5e7eb",
                  outline: "none",
                  fontSize: "0.95rem"
                }}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  background: C.accentGold,
                  border: "none",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  opacity: (!input.trim() || isTyping) ? 0.5 : 1
                }}
              >
                {isTyping ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: 64,
          height: 64,
          borderRadius: "50%",
          background: C.navyDark,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          border: `2px solid #fff`,
          cursor: "pointer",
          position: "relative"
        }}
      >
        {isOpen ? <X size={30} /> : <Sparkles size={30} color={C.accentGold} fill={C.accentGold} />}
        {!isOpen && (
            <div style={{ position: "absolute", top: -5, right: -5, width: 22, height: 22, borderRadius: "50%", background: "#ef4444", color: "#fff", fontSize: "12px", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "bold", border: "2px solid #fff" }}>1</div>
        )}
      </motion.button>
    </div>
  );
}
