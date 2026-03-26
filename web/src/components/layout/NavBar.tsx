"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const C = {
// ... existing constants ...
    primaryBlue: "#c2a055",
    navyDark: "#1a202c",
    bgLight: "#f9fafb",
    white: "#FFFFFF",
    textMuted: "#4b5563",
    accentGold: "#c2a055",
};

// ... navLinks constant ...
const navLinks: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "About", href: "/about" },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <nav style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
                transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                padding: scrolled ? "0.75rem 0" : "1.25rem 0",
                ...(scrolled ? {
                    backdropFilter: "blur(12px) saturate(180%)",
                    WebkitBackdropFilter: "blur(12px) saturate(180%)",
                    background: "rgba(255,255,255,0.95)",
                    borderBottom: "1px solid rgba(0,0,0,0.08)",
                    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)"
                } : { background: "transparent" }),
            }}>
                <div className="container-main" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
                        <Image
                            src="/logo_transparent.png"
                            alt="AyaTech Logo"
                            width={120}
                            height={40}
                            style={{ height: "42px", width: "auto" }}
                        />
                    </Link>

                    {/* Right side nav + CTA */}
                    <div style={{ alignItems: "center", gap: "2rem" }} className="hidden lg:flex">
                        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
                            {navLinks.map(link => (
                                <Link key={link.href} href={link.href} className="nav-link" style={{ color: C.textMuted, fontSize: "0.95rem", fontWeight: 500 }}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <Link href="/apply">
                            <button className="btn-gold" style={{ padding: "0.6rem 1.5rem", fontSize: "0.9rem", fontWeight: 600, backgroundColor: "#c2a055", color: "#FFFFFF", borderRadius: "8px", border: "none", cursor: "pointer" }}>
                                JOIN AYATECH
                            </button>
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: C.navyDark, padding: "0.5rem", zIndex: 100 }}
                        className="lg:hidden flex items-center justify-center"
                        aria-label="Menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer with AnimatePresence */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ position: "fixed", inset: 0, zIndex: 45 }}
                    >
                        {/* Overlay */}
                        <div 
                            style={{ position: "absolute", inset: 0, background: "rgba(26, 32, 44, 0.4)", backdropFilter: "blur(6px)" }} 
                            onClick={() => setMobileOpen(false)} 
                        />
                        
                        {/* Drawer Content */}
                        <motion.div 
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            style={{ 
                                position: "absolute", top: 0, right: 0, bottom: 0, 
                                width: "min(300px, 85vw)", background: C.white, 
                                borderLeft: "1px solid rgba(0,0,0,0.08)", 
                                padding: "6rem 2rem 2rem", 
                                boxShadow: "-15px 0 40px rgba(0,0,0,0.1)",
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + (i * 0.05) }}
                                    >
                                        <Link 
                                            href={link.href} 
                                            onClick={() => setMobileOpen(false)} 
                                            style={{ 
                                                display: "flex", alignItems: "center", justifyContent: "space-between", 
                                                padding: "1rem", borderRadius: 12, color: C.navyDark, 
                                                textDecoration: "none", fontWeight: 700, fontSize: "1.1rem",
                                                background: "rgba(0,0,0,0.02)",
                                                transition: "all 0.2s" 
                                            }}
                                        >
                                            {link.label}
                                            <ChevronRight size={18} color={C.primaryBlue} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                style={{ marginTop: "auto", paddingTop: "2rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}
                            >
                                <Link href="/apply" onClick={() => setMobileOpen(false)}>
                                    <button className="btn-gold" style={{ width: "100%", justifyContent: "center", padding: "1rem", borderRadius: "12px", fontSize: "1.1rem" }}>
                                        Apply Now
                                    </button>
                                </Link>
                                <p style={{ textAlign: "center", fontSize: "0.85rem", color: C.textMuted, marginTop: "1.5rem" }}>
                                    Join 3,700+ global learners
                                </p>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 1024px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 1025px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
        </>
    );
}

