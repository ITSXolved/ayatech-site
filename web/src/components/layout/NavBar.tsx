"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Menu, X } from "lucide-react";

const C = {
    primaryBlue: "#c2a055",
    navyDark: "#1a202c",
    bgLight: "#f9fafb",
    white: "#FFFFFF",
    textMuted: "#4b5563",
    accentGold: "#c2a055",
};


// { label: "Courses", href: "/courses" },
// { label: "IGCSE School", href: "/igcse-school" },
// { label: "Tinkering", href: "/tinkering" },
// { label: "Store", href: "/store" },
// { label: "Hackathons", href: "/hackathons" },
// { label: "About", href: "/about" },

const navLinks: { label: string; href: string }[] = [
    { label: "Courses", href: "/courses" },
    // { label: "IGCSE School", href: "/igcse-school" },
    // { label: "Tinkering", href: "/tinkering" },
    // { label: "Store", href: "/store" },
    // { label: "Hackathons", href: "/hackathons" },
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
                    <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }} className="hidden-mobile">
                        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                            {navLinks.map(link => (
                                <Link key={link.href} href={link.href} className="nav-link" style={{ color: C.textMuted }}>
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                        <Link href="https://erp.ayatech.org/apply">
                            <button className="btn-gold" style={{ padding: "0.6rem 1.4rem", fontSize: "0.82rem", letterSpacing: "0.06em", background: "linear-gradient(135deg, #c2a055 0%, #a68940 100%)", color: "#FFFFFF", borderRadius: "8px", border: "none" }}>
                                Apply Now <ChevronRight size={14} />
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
                            <Link href="/apply" onClick={() => setMobileOpen(false)}>
                                <button className="btn-gold" style={{ width: "100%", justifyContent: "center", backgroundColor: "#C5A059", color: "#FFFFFF" }}>Apply Now</button>
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

