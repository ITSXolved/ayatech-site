import Link from "next/link";
import { ArrowRight, MapPin, Globe, Zap, Award, ChevronRight } from "lucide-react";

const mentors = [
    { name: "Sainul Abid M", role: "Founder & Director", initials: "SA", description: "Visionary leader driving AyaTech's mission to democratise technology education across India and the GCC." },
    { name: "Mentor 2", role: "Lead — AI & Data Science", initials: "M2", description: "Industry practitioner with 10+ years in ML and AI, making complex topics accessible for every learner." },
    { name: "Mentor 3", role: "Lead — UI/UX & Design", initials: "M3", description: "Award-winning designer who bridges neuromarketing principles with intuitive digital experiences." },
    { name: "Mentor 4", role: "Lead — Full Stack Dev", initials: "M4", description: "Senior engineer with fintech and edtech experience, mentor to 500+ developers across India." },
    { name: "Mentor 5", role: "Lead — IoT & Hardware", initials: "M5", description: "Embedded systems expert who has deployed IoT solutions across 15+ countries." },
    { name: "Mentor 6", role: "Entrepreneurship Coach", initials: "M6", description: "Startup founder and angel investor, helping emerging founders navigate from idea to funded venture." },
];

const values = [
    { title: "Democratise Tech Education", icon: Globe, desc: "World-class tech education should be accessible to every student regardless of geography or background." },
    { title: "Learn by Building", icon: Zap, desc: "We believe in hands-on projects over theoretical lectures. Every course produces a real-world portfolio piece." },
    { title: "Cambridge Rigour", icon: Award, desc: "Our IGCSE school holds the bar of Cambridge academic standards while pioneering Design Thinking integration." },
    { title: "Community First", icon: MapPin, desc: "Rooted in Calicut, Kerala, we create economic opportunity for India while connecting to a global learner network." },
];

const milestones = [
    { label: "Founded", value: "2026", desc: "AyaTech launched from Calicut, Kerala" },
    { label: "Break-even", value: "Month 7", desc: "Revenue target through online courses" },
    { label: "3-Year Students", value: "54,000+", desc: "Projected learners across all programs" },
    { label: "Revenue Projected", value: "₹15.95Cr", desc: "3-year projected revenue across all verticals" },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "radial-gradient(ellipse 80% 60% at 50% -20%, #FFFFFF 0%, transparent 70%), #F5F7F8" }}>
                <div className="absolute inset-0 geo-grid opacity-20" />
                <div className="container-main text-center relative z-10">
                    <div className="section-eyebrow mb-4" style={{ color: "#1F2432" }}>About AyaTech</div>
                    <h1 className="font-display font-semibold mb-6" style={{ color: "#1F2432", fontSize: "clamp(3rem,5vw,5rem)", lineHeight: 1.05, animation: "fadeUp 0.75s var(--ease) both" }}>
                        Technology education,{" "}
                        <span className="text-gradient-primary italic">reimagined.</span>
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: "#6A7081", animation: "fadeUp 0.75s var(--ease) 0.2s both" }}>
                        AyaTech is an edtech organisation born in Calicut, Kerala, with a mission to empower the next generation
                        of innovators through live courses, Cambridge IGCSE pathways, and hands-on maker spaces — serving learners
                        across India and 30+ countries.
                    </p>
                </div>
            </section>

            {/* Key Milestones */}
            <section className="py-10" style={{ borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", background: "#FFFFFF" }}>
                <div className="container-main grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    {milestones.map((m, i) => (
                        <div key={i} style={{ animation: `fadeUp 0.5s var(--ease) ${i * 0.1}s both`, padding: "1rem" }}>
                            <div className="font-display font-bold mb-2" style={{ color: "#0056D2", fontSize: "clamp(2rem, 4vw, 3.5rem)", lineHeight: 1 }}>{m.value}</div>
                            <div className="font-semibold text-sm mb-1" style={{ color: "#1F2432" }}>{m.label}</div>
                            <div className="font-mono-custom text-xs" style={{ color: "#6A7081" }}>{m.desc}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="section-pad" style={{ background: "#F5F7F8" }}>
                <div className="container-main grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <div>
                        <div className="section-eyebrow mb-3" style={{ color: "#6A7081" }}>Our Purpose</div>
                        <h2 className="font-display font-semibold mb-5" style={{ color: "#1F2432", fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}>
                            Empowering every learner with the skills to{" "}
                            <span className="text-gradient-primary italic">build the future.</span>
                        </h2>
                        <p className="leading-relaxed mb-5" style={{ color: "#6A7081" }}>
                            AyaTech was founded on a simple belief: the best tech education is live, project-based, and mentored
                            by practitioners — not just lecturers. We combine the rigour of Cambridge IGCSE standards with the
                            innovation of Design Thinking and the tactility of physical tinkering kits.
                        </p>
                        <p className="leading-relaxed mb-8" style={{ color: "#6A7081" }}>
                            Our community of 10+ expert mentors guide students from their first line of Python code to pitching
                            fundable ventures, building IoT devices, and earning Cambridge qualifications — all online, starting
                            at ₹999.
                        </p>
                        <Link href="/courses">
                            <button className="btn-gold" style={{ boxShadow: "0 4px 14px 0 rgba(0,86,210,0.39)" }}>
                                Start Learning Today <ArrowRight size={16} />
                            </button>
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <div key={i} className="phase-card p-6 flex items-start gap-4" style={{ background: "#FFFFFF", borderColor: "rgba(0,0,0,0.06)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)", animation: `fadeUp 0.5s var(--ease) ${i * 0.1}s both` }}>
                                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: "rgba(0,86,210,0.1)", border: "1px solid rgba(0,86,210,0.2)" }}>
                                        <Icon size={18} style={{ color: "#0056D2" }} />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1" style={{ color: "#1F2432" }}>{v.title}</h4>
                                        <p className="text-sm leading-relaxed" style={{ color: "#6A7081" }}>{v.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="mentors" className="section-pad" style={{ background: "#FFFFFF" }}>
                <div className="container-main">
                    <div className="text-center mb-12">
                        <div className="section-eyebrow mb-3" style={{ color: "#6A7081" }}>The Minds Behind AyaTech</div>
                        <h2 className="font-display font-semibold" style={{ color: "#1F2432", fontSize: "clamp(2rem,4vw,3rem)", lineHeight: 1.15 }}>
                            Practitioners, not just{" "}
                            <span className="text-gradient-primary italic">professors.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {mentors.map((mentor, i) => (
                            <div key={i} className="phase-card p-7 group" style={{ background: "#F5F7F8", borderColor: "rgba(0,0,0,0.05)", animation: `fadeUp 0.5s var(--ease) ${i * 0.08}s both` }}>
                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-mono-custom font-bold text-lg mb-4 cursor-pointer transition-colors" style={{ backgroundColor: "#FFFFFF", border: "2px solid rgba(0,86,210,0.1)", color: "#0056D2" }}>
                                    {mentor.initials}
                                </div>
                                <h3 className="font-semibold mb-1" style={{ color: "#1F2432" }}>{mentor.name}</h3>
                                <div className="font-mono-custom text-xs mb-3 tracking-wide" style={{ color: "#0056D2" }}>{mentor.role}</div>
                                <p className="text-sm leading-relaxed" style={{ color: "#6A7081" }}>{mentor.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Location */}
            <section className="section-pad" style={{ background: "#F5F7F8" }}>
                <div className="container-main">
                    <div className="teal-card p-10 md:p-14 flex flex-col lg:flex-row items-start lg:items-center gap-8" style={{ background: "linear-gradient(135deg, #0056D2 0%, #0046AA 100%)", borderRadius: "20px" }}>
                        <div className="flex-1">
                            <div className="section-eyebrow mb-3" style={{ color: "#FFFFFF", opacity: 0.9 }}>Headquarters</div>
                            <h3 className="font-display font-semibold text-white mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", lineHeight: 1.15 }}>
                                Rooted in Calicut.<br />
                                <span className="italic" style={{ opacity: 0.9 }}>Reaching the world.</span>
                            </h3>
                            <p className="leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                                Our headquarters in Calicut (Kozhikode), Kerala, India — the heart of the Malabar Coast — is where
                                we develop curriculum, host live sessions, and operate our flagship Tinkering Centre. From here, we
                                serve learners across India, UAE, Saudi Arabia, and 30+ countries globally.
                            </p>
                            <div className="flex items-center gap-2 text-sm" style={{ color: "rgba(255,255,255,0.9)" }}>
                                <MapPin size={16} />
                                Calicut (Kozhikode), Kerala, India
                            </div>
                        </div>
                        <div className="shrink-0 grid grid-cols-2 gap-3">
                            {["🇮🇳 India", "🇦🇪 UAE", "🇸🇦 Saudi Arabia", "🌐 30+ Countries"].map((place, i) => (
                                <div key={i} className="border rounded-xl px-4 py-3 text-sm text-center" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)", color: "#FFFFFF" }}>
                                    {place}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
