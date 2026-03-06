"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Menu, X } from "lucide-react";

const C = {
    primaryBlue: "#0056D2",
    navyDark: "#1F2432",
    bgLight: "#F5F7F8",
    white: "#FFFFFF",
    textMuted: "#6A7081",
};

const navLinks = [
    // { label: "Courses", href: "/courses" },
    // // { label: "IGCSE School", href: "/igcse-school" },
    // // { label: "Tinkering", href: "/tinkering" },
    // // { label: "Store", href: "/store" },
    // // { label: "Hackathons", href: "/hackathons" },
    // { label: "About", href: "/about" },
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
                        <div style={{ position: "relative" }}>
                            <div style={{ width: 38, height: 38, borderRadius: 8, background: C.primaryBlue, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: C.white }}>
                                A
                            </div>
                            <div style={{ position: "absolute", bottom: -2, right: -2, width: 10, height: 10, borderRadius: "50%", background: "#FFFFFF", border: `2px solid ${C.primaryBlue}` }} />
                        </div>
                        <div>
                            <div style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: C.navyDark, lineHeight: 1.1 }}>AyaTech</div>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.58rem", color: C.textMuted, letterSpacing: "0.12em", textTransform: "uppercase" }}>Calicut · Kerala · Global</div>
                        </div>
                    </Link>

                    {/* Desktop nav links */}
                    <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="nav-link" style={{ color: C.textMuted }}>
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem" }} className="hidden-mobile">
                        <Link href="/courses" className="nav-link">Courses</Link>
                        <Link href="/about" className="nav-link">About</Link>


                        {/*<Link href="/dashboard" className="nav-link" style={{ fontSize: "0.85rem", color: C.textMuted }}>Dashboard</Link>*/}
                        <Link href="/courses">
                            <button className="btn-gold" style={{ padding: "0.6rem 1.4rem", fontSize: "0.82rem", letterSpacing: "0.06em", backgroundColor: C.primaryBlue, color: C.white }}>
                                Start Learning <ChevronRight size={14} />
                            </button>
                        </Link>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        style={{ background: "none", border: "none", cursor: "pointer", color: C.navyDark, padding: "0.5rem", display: "none" }}
                        className="show-mobile"
                        aria-label="Menu"
                    >
                        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            {mobileOpen && (
                <div style={{ position: "fixed", inset: 0, zIndex: 40 }}>
                    <div style={{ position: "absolute", inset: 0, background: "rgba(31,36,50,0.5)", backdropFilter: "blur(4px)" }} onClick={() => setMobileOpen(false)} />
                    <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: 280, background: C.white, borderLeft: "1px solid rgba(0,0,0,0.08)", padding: "5rem 1.5rem 2rem", boxShadow: "-10px 0 25px rgba(0,0,0,0.05)" }}>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                            {navLinks.map(link => (
                                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.85rem 1rem", borderRadius: 8, color: C.navyDark, textDecoration: "none", fontWeight: 600, transition: "all 0.2s" }}>
                                    {link.label}
                                    <ChevronRight size={15} color={C.primaryBlue} />
                                </Link>
                            ))}
                        </div>
                        <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                            <Link href="/courses" onClick={() => setMobileOpen(false)}>
                                <button className="btn-gold" style={{ width: "100%", justifyContent: "center" }}>Start Learning</button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}

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

