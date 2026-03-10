import Link from "next/link";
import { ArrowRight, ChevronRight, Check, BookOpen, Cpu, Palette } from "lucide-react";

const timeline = [
    { year: "2025–26", label: "Live Pilot — Class 5 at Ayadi Glocal Online School", active: true },
    { year: "July 2026", label: "Cambridge IGCSE approval process begins", active: false },
    { year: "Jan 2027", label: "AyaTech IGCSE School — admissions open", active: false },
    { year: "July 2027", label: "First full Cambridge academic year begins", active: false },
    { year: "2028–29", label: "Grade-by-grade expansion (Class 5 → 6 → 7 → 8…)", active: false },
];

const trackA = [
    "All subjects converge on one real-world theme each term",
    "Term 1: WATER — data, ecosystems, advocacy writing",
    "Term 2: SMART COMMUNITIES — electricity, urban planning, basic coding",
    "Term 3: FOOD FUTURES — ecosystems, ratios, packaging design",
    "Each theme ends with a student Design Exhibition or Prototype Day",
];

const trackB = [
    "Full Cambridge Primary / Lower Secondary curriculum",
    "English, Maths, Science, Social Studies, ICT, Arts",
    "Cambridge-aligned checkpoints and subject tests",
    "Academic rigour — not solely project-based",
    "Progresses toward IGCSE qualification from Class 9",
];

const fees = [
    { label: "Tuition (Cambridge curriculum + live classes + LMS)", amount: "₹60,000–₹80,000", period: "per year" },
    { label: "Tinkering Kit (3 kits/year shipped to door)", amount: "₹4,500–₹6,000", period: "per year" },
    { label: "Cambridge Exam Fees (from Year 3)", amount: "₹8,000–₹12,000", period: "per year" },
    { label: "One-time Registration Fee", amount: "₹2,000", period: "once" },
];

export default function IGCSESchoolPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-24 overflow-hidden" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -20%, #FFFFFF 0%, transparent 70%), #F5F7F8" }}>
                <div className="absolute inset-0 geo-grid opacity-20" />
                <div className="container-main relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <span className="section-eyebrow" style={{ color: "#1F2432" }}>AyaTech × Ayadi Glocal Online School</span>
                            <span className="badge-live" style={{ backgroundColor: "rgba(0,86,210,0.1)", borderColor: "rgba(0,86,210,0.2)", color: "#0056D2" }}>Admissions Jan 2027</span>
                        </div>
                        <h1 className="font-display text-5xl md:text-7xl text-navy-dark mb-6 leading-tight" style={{ color: "#1F2432", animation: "fadeUp 0.75s var(--ease) both" }}>
                            From Classroom{" "}
                            <span className="text-gradient-primary italic">to Creator.</span>
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto mb-4 leading-relaxed" style={{ color: "#6A7081", animation: "fadeUp 0.75s var(--ease) 0.2s both" }}>
                            A Cambridge IGCSE school built around Design Thinking — where every subject connects to a
                            real-world challenge. 100% online. Physical tinkering kits delivered to your door.
                        </p>
                        <p className="font-mono-custom text-sm mb-10" style={{ color: "#0056D2", animation: "fadeUp 0.75s var(--ease) 0.3s both" }}>
                            In association with Cambridge IGCSE · Piloting 2025–26
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: "fadeUp 0.75s var(--ease) 0.4s both" }}>
                            <button className="btn-gold px-8 py-4 text-base" style={{ boxShadow: "0 4px 14px 0 rgba(0,86,210,0.39)" }}>
                                Register Your Interest <ArrowRight size={18} />
                            </button>
                            <button className="btn-outline px-8 py-4 text-base" style={{ borderColor: "rgba(0,0,0,0.1)", color: "#1F2432" }}>
                                Download Prospectus
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="section-pad" style={{ background: "#FFFFFF", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div className="container-main">
                    <div className="section-eyebrow text-center mb-4" style={{ color: "#6A7081" }}>Launch Roadmap</div>
                    <h2 className="font-display text-4xl text-center mb-12" style={{ color: "#1F2432" }}>
                        The journey ahead
                    </h2>
                    <div className="relative max-w-3xl mx-auto">
                        <div className="absolute left-4 top-0 bottom-0 w-px" style={{ background: "linear-gradient(to bottom, #0056D2, rgba(0,86,210,0.3), transparent)" }} />
                        <div className="flex flex-col gap-8">
                            {timeline.map((step, i) => (
                                <div key={i} className="flex items-start gap-8 pl-12 relative" style={{ animation: `fadeUp 0.5s var(--ease) ${i * 0.1}s both` }}>
                                    <div className={`absolute left-0 top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center`} style={{ borderColor: step.active ? "#0056D2" : "rgba(0,0,0,0.1)", backgroundColor: step.active ? "rgba(0,86,210,0.1)" : "#FFFFFF" }}>
                                        {step.active && <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#0056D2" }} />}
                                    </div>
                                    <div>
                                        <div className={`font-mono-custom text-xs tracking-widest uppercase mb-1`} style={{ color: step.active ? "#0056D2" : "#6A7081" }}>
                                            {step.year}
                                        </div>
                                        <div className={`text-base font-medium`} style={{ color: step.active ? "#1F2432" : "#6A7081" }}>
                                            {step.label}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Dual Track */}
            <section className="section-pad" style={{ background: "#F5F7F8" }}>
                <div className="container-main">
                    <div className="text-center mb-12">
                        <div className="section-eyebrow mb-3" style={{ color: "#6A7081" }}>Curriculum Design</div>
                        <h2 className="font-display text-4xl md:text-5xl mb-4" style={{ color: "#1F2432" }}>
                            Two tracks.{" "}
                            <span className="text-gradient-primary italic">One goal:</span>
                            <br />students who think, build, and lead.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Track A */}
                        <div className="phase-card p-8" style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,86,210,0.1)", border: "1px solid rgba(0,86,210,0.2)" }}>
                                    <Cpu size={20} style={{ color: "#0056D2" }} />
                                </div>
                                <div>
                                    <div className="font-mono-custom text-xs tracking-widest" style={{ color: "#0056D2" }}>TRACK A</div>
                                    <h3 className="font-semibold" style={{ color: "#1F2432" }}>Interdisciplinary Thematic Weeks</h3>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {trackA.map((item, i) => (
                                    <li key={i} className="check-item">
                                        <div className="check-dot text-primary-blue" style={{ color: "#0056D2" }}>✓</div>
                                        <span className="text-sm" style={{ color: "#6A7081" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Track B */}
                        <div className="phase-card p-8" style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "rgba(0,86,210,0.1)", border: "1px solid rgba(0,86,210,0.2)" }}>
                                    <BookOpen size={20} style={{ color: "#0056D2" }} />
                                </div>
                                <div>
                                    <div className="font-mono-custom text-xs tracking-widest" style={{ color: "#0056D2" }}>TRACK B</div>
                                    <h3 className="font-semibold" style={{ color: "#1F2432" }}>Cambridge Subject Syllabus</h3>
                                </div>
                            </div>
                            <ul className="flex flex-col gap-3">
                                {trackB.map((item, i) => (
                                    <li key={i} className="check-item">
                                        <div className="check-dot text-primary-blue" style={{ color: "#0056D2" }}>✓</div>
                                        <span className="text-sm" style={{ color: "#6A7081" }}>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Annual Themes */}
            <section className="section-pad" style={{ background: "#FFFFFF", borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                <div className="container-main">
                    <div className="text-center mb-10">
                        <div className="section-eyebrow mb-3" style={{ color: "#6A7081" }}>Annual Themes</div>
                        <h2 className="font-display text-3xl" style={{ color: "#1F2432" }}>
                            Real-world challenges. Real solutions.
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { theme: "Water", icon: "💧", description: "Data collection, ecosystems, advocacy writing, water supply systems" },
                            { theme: "Smart Communities", icon: "🏙️", description: "Electricity, urban planning, basic coding, civic design challenges" },
                            { theme: "Food Futures", icon: "🌱", description: "Ecosystems, ratios, packaging design, sustainability metrics" },
                        ].map((item, i) => (
                            <div key={i} className="phase-card p-8 text-center" style={{ background: "#F5F7F8", borderColor: "rgba(0,0,0,0.05)", animation: `fadeUp 0.5s var(--ease) ${i * 0.1}s both` }}>
                                <div className="text-4xl mb-4">{item.icon}</div>
                                <h3 className="font-display text-2xl font-semibold mb-3" style={{ color: "#1F2432" }}>{item.theme}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: "#6A7081" }}>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fees */}
            <section className="section-pad" style={{ background: "#F5F7F8" }}>
                <div className="container-main">
                    <div className="text-center mb-12">
                        <div className="section-eyebrow mb-3" style={{ color: "#6A7081" }}>Fee Structure</div>
                        <h2 className="font-display text-4xl mb-4" style={{ color: "#1F2432" }}>
                            World-class Cambridge education at{" "}
                            <span className="text-gradient-primary italic">a fraction of the cost.</span>
                        </h2>
                        <p style={{ color: "#6A7081" }}>Other IGCSE online schools charge ₹1.2–2.5 Lakhs/year. We deliver more for less.</p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        <div className="phase-card overflow-hidden" style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.08)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
                            <div className="p-2">
                                {fees.map((fee, i) => (
                                    <div key={i} className={`flex items-center justify-between p-4 ${i !== fees.length - 1 ? "border-b border-black/5" : ""}`}>
                                        <div className="text-sm" style={{ color: "#1F2432" }}>{fee.label}</div>
                                        <div className="text-right shrink-0 ml-4">
                                            <div className="font-display text-lg font-semibold" style={{ color: "#0056D2" }}>{fee.amount}</div>
                                            <div className="font-mono-custom text-xs" style={{ color: "#6A7081" }}>{fee.period}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="p-5 flex items-center justify-between border-t border-black/5" style={{ background: "rgba(0,86,210,0.03)" }}>
                                <div>
                                    <div className="font-semibold" style={{ color: "#1F2432" }}>Total per student</div>
                                    <div className="font-mono-custom text-xs" style={{ color: "#6A7081" }}>inclusive of all fees</div>
                                </div>
                                <div className="font-display text-3xl font-semibold" style={{ color: "#0056D2" }}>≈ ₹65K–₹86K/yr</div>
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button className="btn-gold px-10 py-4 text-base" style={{ boxShadow: "0 4px 14px 0 rgba(0,86,210,0.39)" }}>
                                Register Your Interest <ArrowRight size={18} />
                            </button>
                            <p className="text-xs mt-3 font-mono-custom" style={{ color: "#6A7081" }}>
                                Admissions open January 2027 · One-time registration ₹2,000
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
