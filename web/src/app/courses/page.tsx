"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronRight, Clock, Filter, Loader2 } from "lucide-react";
import { useRazorpay } from "@/hooks/useRazorpay";
import { fetchLMSCourses, CanvasCourse } from "@/lib/lms";

const C = {
    primaryGold: "#c2a055",
    primaryGoldHover: "#a68940",
    navyDark: "#1a202c",
    navyLight: "#2d3748",
    bgLight: "#f9fafb",
    white: "#FFFFFF",
    textMain: "#1a202c",
    textMuted: "#4b5563",
    teal300: "#c2a055",
    teal400: "#c2a055",
    gold300: "#c2a055",
    gold400: "#a68940",
    navy200: "#4b5563",
    navy400: "#1a202c",
    navy600: "#1a202c",
    navy700: "#f9fafb",
    navy800: "#FFFFFF",
    navy900: "#FFFFFF",
    navy950: "#FFFFFF",
};

const allCourses = [
    { id: "01", title: "Intro to Python Programming", duration: "10 Days", price: "₹999", amount: 999, level: "Beginner", format: "Live + Recorded", live: true, cat: "Coding" },
    { id: "02", title: "Vibe Coding: Build Apps with AI", duration: "15 Days", price: "₹1,499", amount: 1499, level: "Beginner", format: "Live Guided", live: true, cat: "AI" },
    { id: "03", title: "Web Development Bootcamp", duration: "30 Days", price: "₹2,499", amount: 2499, level: "Beginner", format: "Live + Projects", live: true, cat: "Coding" },
    { id: "04", title: "AI Tools Masterclass for Students", duration: "5 Days", price: "₹999", amount: 999, level: "All Levels", format: "Live Workshop", live: true, cat: "AI" },
    { id: "05", title: "AI-Powered Video Creation & Editing", duration: "10 Days", price: "₹1,499", amount: 1499, level: "Intermediate", format: "Live + Recorded", live: true, cat: "AI" },
    { id: "06", title: "Teaching AI: Educators' Toolkit", duration: "7 Days", price: "₹1,299", amount: 1299, level: "Educators", format: "Live Guided", live: true, cat: "AI" },
    { id: "07", title: "Graphic Design with Canva & AI", duration: "7 Days", price: "₹999", amount: 999, level: "Beginner", format: "Live + Recorded", live: true, cat: "Design" },
    { id: "08", title: "UI/UX Design Fundamentals", duration: "15 Days", price: "₹1,999", amount: 1999, level: "Intermediate", format: "Live + Projects", live: true, cat: "Design" },
    { id: "09", title: "Mobile App Development (Flutter)", duration: "30 Days", price: "₹2,499", amount: 2499, level: "Intermediate", format: "Live Guided", live: true, cat: "Coding" },
    { id: "10", title: "Arduino & IoT for Beginners", duration: "15 Days", price: "₹1,999", amount: 1999, level: "Beginner", format: "Hybrid", live: false, cat: "Hardware" },
    { id: "11", title: "Data Science with Python", duration: "20 Days", price: "₹2,499", amount: 2499, level: "Intermediate", format: "Live + Recorded", live: true, cat: "AI" },
    { id: "12", title: "Prompt Engineering & ChatGPT", duration: "5 Days", price: "₹999", amount: 999, level: "All Levels", format: "Live Workshop", live: true, cat: "AI" },
    { id: "13", title: "Robotics Programming Fundamentals", duration: "20 Days", price: "₹2,499", amount: 2499, level: "Advanced", format: "Hybrid", live: false, cat: "Hardware" },
    { id: "14", title: "Cybersecurity Essentials", duration: "10 Days", price: "₹1,499", amount: 1499, level: "Intermediate", format: "Live + Labs", live: true, cat: "Coding" },
    { id: "15", title: "Blockchain & Web3 Basics", duration: "10 Days", price: "₹1,999", amount: 1999, level: "Intermediate", format: "Live Guided", live: true, cat: "Coding" },
];

const levelColors: Record<string, { text: string; bg: string; border: string }> = {
    Beginner: { text: C.primaryGold, bg: "rgba(194,160,85,0.1)", border: "rgba(194,160,85,0.25)" },
    Intermediate: { text: C.primaryGold, bg: "rgba(194,160,85,0.08)", border: "rgba(194,160,85,0.2)" },
    Advanced: { text: "#f87171", bg: "rgba(248,113,113,0.08)", border: "rgba(248,113,113,0.2)" },
    Educators: { text: C.textMuted, bg: "rgba(75,85,99,0.08)", border: "rgba(75,85,99,0.15)" },
    "All Levels": { text: C.textMuted, bg: "rgba(75,85,99,0.08)", border: "rgba(75,85,99,0.15)" },
};

const cats = ["All", "AI", "Coding", "Design", "Hardware"];

export default function CoursesPage() {
    const [active, setActive] = useState("All");
    const [lmsCourses, setLmsCourses] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const { processPayment } = useRazorpay();

    useEffect(() => {
        async function loadCourses() {
            try {
                const data = await fetchLMSCourses();
                if (data && data.length > 0) {
                    const mapped = data.map((c: CanvasCourse, i: number) => ({
                        id: String(c.id).slice(-2),
                        title: c.name,
                        duration: "Self-Paced / Mentor Led", // Default since Canvas might not have this in a standard field
                        price: "Contact for Price", // Default
                        level: "All Levels",
                        format: "LMS Integrated",
                        live: c.workflow_state === "available" || c.workflow_state === "published",
                        cat: "Technology", // Default
                        originalId: c.id
                    }));
                    setLmsCourses(mapped);
                } else {
                    setLmsCourses(allCourses); // Fallback to static
                }
            } catch (err) {
                console.error(err);
                setLmsCourses(allCourses);
            } finally {
                setLoading(false);
            }
        }
        loadCourses();
    }, []);

    const displayCourses = lmsCourses.length > 0 ? lmsCourses : allCourses;
    const filtered = active === "All" ? displayCourses : displayCourses.filter(c => c.cat === active);

    return (
        <>
            {/* Hero */}
            <section style={{ paddingTop: "8rem", paddingBottom: "5rem", background: `radial-gradient(ellipse 80% 60% at 50% -20%, #FFFFFF 0%, transparent 70%), ${C.bgLight}`, backgroundImage: "linear-gradient(rgba(0,86,210,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,86,210,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px, 64px 64px, auto, auto", textAlign: "center" }}>
                <div className="container-main">
                    <p className="section-eyebrow" style={{ marginBottom: "1rem", display: "inline-block", animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both" }}>
                        15+ Expert-Led Programs
                    </p>
                    <h1 className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,5rem)", color: C.navyDark, lineHeight: 1.1, marginBottom: "1.25rem", animation: "fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.15s both" }}>
                        Learn the tech building{" "}
                        <span className="text-gradient-primary">the future.</span>
                    </h1>
                    <p style={{ color: C.textMuted, fontSize: "clamp(0.95rem,1.8vw,1.15rem)", maxWidth: "40rem", margin: "0 auto", lineHeight: 1.7, animation: "fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}>
                        Live-guided courses in AI, coding, design, and hardware. Certificates on completion.{" "}
                        <strong style={{ color: C.navyDark }}>Starting at ₹999.</strong>
                    </p>
                </div>
            </section>

            {/* Sticky filter bar */}
            <div style={{ position: "sticky", top: 64, zIndex: 30, borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.95)", backdropFilter: "blur(20px)", padding: "0.75rem 0" }}>
                <div className="container-main" style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                    <Filter size={14} color={C.textMuted} style={{ marginRight: "0.25rem" }} />
                    {cats.map(cat => (
                        <button key={cat} onClick={() => setActive(cat)} style={{ padding: "0.35rem 1rem", borderRadius: 100, fontSize: "0.85rem", fontWeight: 500, cursor: "pointer", border: "1px solid", transition: "all 0.25s", background: active === cat ? C.primaryGold : "transparent", color: active === cat ? C.white : C.textMuted, borderColor: active === cat ? C.primaryGold : "rgba(0,0,0,0.1)" }}>
                            {cat}
                        </button>
                    ))}
                    <span className="font-mono-brand" style={{ marginLeft: "auto", fontSize: "0.75rem", color: C.textMuted }}>{filtered.length} courses</span>
                </div>
            </div>

            {/* Courses grid */}
            <section style={{ padding: "3rem 0 5rem", minHeight: "400px" }}>
                <div className="container-main">
                    {loading ? (
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "5rem 0", color: C.primaryGold }}>
                            <Loader2 size={40} className="animate-spin" style={{ marginBottom: "1rem" }} />
                            <p className="font-display" style={{ fontSize: "1.2rem" }}>Loading live courses from LMS...</p>
                        </div>
                    ) : (
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
                            {filtered.map((c, i) => {
                                const lc = levelColors[c.level] ?? levelColors["All Levels"];
                                return (
                                    <div key={c.id + i} className="course-card" style={{ padding: "1.75rem", animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s both` }}>
                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                                            <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(0,86,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontWeight: 700, fontSize: "0.9rem", color: C.primaryGold }}>
                                                {c.id}
                                            </div>
                                            {c.live ? (
                                                <span className="badge-live">Live</span>
                                            ) : (
                                                <span className="font-mono-brand" style={{ fontSize: "0.68rem", color: C.navyDark, border: `1px solid rgba(0,0,0,0.1)`, padding: "0.15rem 0.5rem", borderRadius: 100 }}>Hybrid</span>
                                            )}
                                        </div>

                                        <span style={{ fontSize: "0.85rem", padding: "0.2rem 0.65rem", borderRadius: 100, background: lc.bg, border: `1px solid ${lc.border}`, color: lc.text, display: "inline-block", marginBottom: "0.75rem", fontFamily: "'JetBrains Mono',monospace" }}>
                                            {c.level}
                                        </span>

                                        <h3 className="font-display" style={{ color: C.navyDark, fontSize: "1.1rem", lineHeight: 1.4, marginBottom: "0.75rem" }}>{c.title}</h3>

                                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "1.25rem" }}>
                                            <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontSize: "0.85rem", color: C.textMuted }}>
                                                <Clock size={11} /> {c.duration}
                                            </span>
                                            <span style={{ width: 1, height: 14, background: "rgba(0,0,0,0.1)", alignSelf: "center" }} />
                                            <span style={{ fontSize: "0.85rem", color: C.textMuted }}>{c.format}</span>
                                        </div>

                                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                                            <span className="font-display" style={{ fontSize: "1.6rem", color: C.navyDark }}>{c.price}</span>
                                            <Link href={`https://erp.ayatech.org/apply?course=${encodeURIComponent(c.title)}&amount=${c.amount || 999}`}>
                                                <button
                                                    style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "0.95rem", color: C.primaryGold, fontWeight: 600, background: "none", border: "none", cursor: "pointer", transition: "color 0.2s" }}
                                                >
                                                    Enroll Now <ChevronRight size={15} />
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </div>
            </section>

            {/* Bottom CTA */}
            <section style={{ paddingBottom: "5rem" }}>
                <div className="container-main" style={{ textAlign: "center" }}>
                    <div style={{ display: "inline-block", background: `linear-gradient(135deg, ${C.primaryGold} 0%, ${C.primaryGoldHover} 100%)`, border: "1px solid rgba(0,0,0,0.1)", borderRadius: 24, padding: "3rem 4rem", maxWidth: "42rem", width: "100%", boxShadow: "0 10px 30px -10px rgba(0,86,210,0.3)" }}>
                        <h3 className="font-display" style={{ fontSize: "1.8rem", color: "#fff", marginBottom: "0.75rem" }}>
                            Not sure which course to pick?
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: "1.5rem", fontSize: "1.05rem" }}>Talk to our mentors and get a personalised recommendation.</p>
                        <button className="btn-gold" style={{ backgroundColor: "#FFFFFF", color: C.primaryGold }}>Book Free Consultation <ChevronRight size={16} /></button>
                    </div>
                </div>
            </section>
        </>
    );
}
