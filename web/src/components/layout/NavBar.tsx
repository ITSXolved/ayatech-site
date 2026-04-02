'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { Search, ChevronDown, Menu, X, ArrowRight } from "lucide-react";

/**
 * NavBar - High conversion navigation menu with premium aesthetics
 */

const navLinks: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "Courses", href: "/courses" },
    { label: "Hackathons", href: "/hackathons" },
    { label: "About", href: "/about" },
];

export default function NavBar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header style={{
            position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
            padding: scrolled ? "1rem 0" : "1.25rem 0",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            ...(scrolled ? {
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                backdropFilter: "blur(12px)",
                boxShadow: "0 4px 15px -1px rgba(0, 0, 0, 0.04), 0 2px 6px -1px rgba(0, 0, 0, 0.02)",
                borderBottom: "1px solid rgba(0, 0, 0, 0.04)",
            } : { background: "transparent" }),
        }}>
            <div className="container-main flex items-center justify-between">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform overflow-hidden" style={{ boxShadow: "0 8px 16px -4px rgba(0, 86, 210, 0.3)" }}>
                        <img src="/logo.png" alt="AyaTech Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <div>
                        <div className="font-display font-bold text-lg leading-none tracking-tight" style={{ color: "#1F2432" }}>AyaTech</div>
                        <div className="font-mono-custom text-[9px] uppercase tracking-widest mt-1" style={{ color: "#c2a055" }}>Global Academy</div>
                    </div>
                </Link>

                {/* Primary Nav Items */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link 
                            key={link.label}
                            href={link.href}
                            className="nav-link font-semibold text-sm tracking-wide bg-[#1F2432]/5 hover:bg-[#1F2432]/10 py-1.5 px-3 rounded-lg transition-all"
                            style={{ color: "#1F2432" }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link href="/apply">
                        <button className="btn-gold text-xs px-6 py-2.5 shadow-md flex items-center gap-2">
                            Apply Now <ArrowRight size={14} />
                        </button>
                    </Link>
                </nav>

                {/* Mobile Trigger */}
                <button 
                    className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center p-0 transition-colors"
                    onClick={() => setMobileMenuOpen(true)}
                    style={{ backgroundColor: "rgba(31, 36, 50, 0.05)" }}
                >
                    <Menu size={24} style={{ color: "#1F2432" }} />
                </button>
            </div>

            {/* Mobile Sidebar */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-[60] lg:hidden backdrop-blur-md" style={{ backgroundColor: "rgba(31, 36, 50, 0.1)" }}>
                    <div className="ml-auto h-full w-[280px] bg-white shadow-2xl p-6 flex flex-col" style={{ animation: "slideLeft 0.4s var(--ease) both" }}>
                        <button 
                            className="self-end p-2 mb-8 rounded-lg bg-[#F5F7F8]"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={20} style={{ color: "#1F2432" }} />
                        </button>

                        <div className="flex flex-col gap-1.5 flex-1">
                            {navLinks.map((link) => (
                                <Link 
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-4 rounded-xl font-bold flex items-center justify-between transition-colors hover:bg-[#F5F7F8]"
                                    style={{ color: "#1F2432" }}
                                >
                                    {link.label}
                                    <ChevronDown size={14} className="-rotate-90 opacity-40" />
                                </Link>
                            ))}
                        </div>

                        <Link href="/apply" onClick={() => setMobileMenuOpen(false)} className="mt-auto">
                            <button className="btn-gold w-full py-4 text-sm font-bold shadow-lg">
                                Enrol Now
                            </button>
                        </Link>
                    </div>
                    {/* Overlay Click Target */}
                    <div className="absolute inset-0 -z-10" onClick={() => setMobileMenuOpen(false)} />
                </div>
            )}
        </header>
    );
}
