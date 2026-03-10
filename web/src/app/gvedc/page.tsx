import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Star, ChevronRight } from "lucide-react";

const journey = [
    { month: "Month 1–2", title: "Discovery", desc: "Business idea validation, market research, competitor analysis, persona development" },
    { month: "Month 3–4", title: "Design", desc: "MVP design sprints, brand identity, customer journey mapping, prototype building" },
    { month: "Month 5–6", title: "Build", desc: "Tech stack selection, product development, landing page, beta user acquisition" },
    { month: "Month 7–8", title: "Launch", desc: "Go-to-market strategy, paid/organic growth channels, first revenue milestone" },
    { month: "Month 9–10", title: "Scale", desc: "Growth hacking, investor readiness, financial modelling, strategic partnerships" },
    { month: "Month 11–12", title: "Pitch", desc: "Pitch deck preparation, investor meetings, Demo Day — present to VCs and angels" },
];

const tiers = [
    {
        name: "Basic",
        price: "₹15,000",
        features: ["12-month programme access", "Weekly group sessions", "Course assignments + feedback", "Community access"],
    },
    {
        name: "Premium",
        price: "₹20,000",
        features: ["Everything in Basic", "Bi-weekly 1:1 mentor sessions", "Investor introduction network", "Demo Day spotlight"],
        highlight: true,
    },
    {
        name: "Elite",
        price: "₹25,000",
        features: ["Everything in Premium", "Dedicated co-founder mentor", "Legal & IP guidance", "Priority pitch to KSUM/Startup India"],
    },
];

export default function GVEDCPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-20 overflow-hidden" style={{ background: "linear-gradient(135deg, var(--navy-950) 0%, rgba(232,168,0,0.05) 100%)" }}>
                <div className="absolute inset-0 geo-grid opacity-30" />
                <div className="container-main text-center relative z-10">
                    <div className="section-eyebrow mb-4">Global Virtual Entrepreneurship Development Centre</div>
                    <h1 className="font-display text-5xl md:text-7xl font-semibold text-white mb-6" style={{ animation: "fadeUp 0.75s var(--ease) both" }}>
                        Build Your Startup{" "}
                        <span className="text-gradient-gold italic">in 12 Months.</span>
                    </h1>
                    <p className="text-navy-200 text-xl max-w-2xl mx-auto mb-6" style={{ animation: "fadeUp 0.75s var(--ease) 0.2s both" }}>
                        A 12-month startup journey from idea to funded venture. Special focus on women founders aged 18–45.
                        Expert mentors. Government scheme connections. Investor network.
                    </p>
                    <div className="flex items-center justify-center gap-3 mb-10 flex-wrap" style={{ animation: "fadeUp 0.75s var(--ease) 0.3s both" }}>
                        {["Startup India", "KSUM", "Women Entrepreneurs", "Demo Day"].map((tag) => (
                            <span key={tag} className="font-mono-custom text-xs text-gold-400 border border-gold-400/30 px-3 py-1.5 rounded-full">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <button className="btn-gold px-8 py-4 text-base" style={{ animation: "fadeUp 0.75s var(--ease) 0.4s both" }}>
                        Apply Now <ArrowRight size={18} />
                    </button>
                </div>
            </section>

            {/* 12-Month Journey */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="text-center mb-12">
                        <div className="section-eyebrow mb-3">Programme Structure</div>
                        <h2 className="font-display text-4xl font-semibold text-white">
                            Discovery → Pitch.{" "}
                            <span className="text-gradient-gold italic">Every step, guided.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {journey.map((step, i) => (
                            <div key={i} className="phase-card p-7" style={{ animation: `fadeUp 0.5s var(--ease) ${i * 0.08}s both` }}>
                                <div className="font-mono-custom text-xs text-gold-400 tracking-widest mb-2">{step.month}</div>
                                <h3 className="font-display text-2xl font-semibold text-white mb-3">{step.title}</h3>
                                <p className="text-navy-200 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tiers */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="text-center mb-12">
                        <div className="section-eyebrow mb-3">Fee Tiers</div>
                        <h2 className="font-display text-4xl font-semibold text-white">
                            Invest in your{" "}
                            <span className="text-gradient-gold italic">entrepreneurial future.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto">
                        {tiers.map((tier, i) => (
                            <div
                                key={i}
                                className={`phase-card p-8 flex flex-col ${tier.highlight ? "border-gold-400/30 shadow-lg" : ""}`}
                                style={tier.highlight ? { boxShadow: "0 20px 60px rgba(232,168,0,0.15), 0 0 0 1px rgba(232,168,0,0.2)" } : {}}
                            >
                                {tier.highlight && (
                                    <div className="text-xs font-mono-custom text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full self-start mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="font-display text-2xl font-semibold text-white mb-1">{tier.name}</h3>
                                <div className="font-display text-4xl text-gold-300 font-semibold mb-6">{tier.price}</div>
                                <ul className="flex flex-col gap-3 mb-8 flex-1">
                                    {tier.features.map((feat, fi) => (
                                        <li key={fi} className="check-item text-sm">
                                            <div className="check-dot">✓</div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`${tier.highlight ? "btn-gold" : "btn-outline"} justify-center`}>
                                    Apply Now
                                </button>
                            </div>
                        ))}
                    </div>
                    <p className="text-center text-navy-200 text-sm mt-6">
                        Instalment option available — 3× Razorpay subscription charges. UPI · Cards · EMI · Net Banking.
                    </p>
                </div>
            </section>
        </>
    );
}
