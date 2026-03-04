import Link from "next/link";
import { ArrowRight, Trophy, Calendar, Users, Star } from "lucide-react";

const events = [
    {
        title: "AyaTech Grand Hackathon — AI for HealthTech",
        date: "March 2026",
        location: "Online + Calicut Hub",
        status: "Upcoming",
        tag: "AI",
        prize: "₹1,00,000",
        sponsors: ["Google", "Microsoft", "AWS"],
    },
    {
        title: "Women in Tech Innovation Sprint",
        date: "April 2026",
        location: "Online",
        status: "Upcoming",
        tag: "Women",
        prize: "₹50,000",
        sponsors: ["TCS", "Infosys"],
    },
    {
        title: "School Robotics Championship",
        date: "May 2026",
        location: "Calicut Tinkering Centre",
        status: "Upcoming",
        tag: "Robotics",
        prize: "₹25,000",
        sponsors: ["KSUM"],
    },
];

export default function HackathonsPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-20 mesh-gradient geo-grid overflow-hidden">
                <div className="container-main text-center">
                    <div className="section-eyebrow mb-4">Hackathons & Events</div>
                    <h1 className="font-display font-semibold text-white mb-6" style={{ fontSize: "clamp(3rem,6vw,5.5rem)", lineHeight: 1.05, animation: "fadeUp 0.75s var(--ease) both" }}>
                        Build. Compete.{" "}
                        <span className="text-gradient-gold italic">Win.</span>
                    </h1>
                    <p className="text-navy-200 text-xl max-w-2xl mx-auto mb-10" style={{ animation: "fadeUp 0.75s var(--ease) 0.2s both" }}>
                        Grand hackathons with Google, Microsoft, AWS. School workshops, bootcamps, and Women in Tech programs across India and the Middle East.
                    </p>
                    <button className="btn-gold px-8 py-4 text-base" style={{ animation: "fadeUp 0.75s var(--ease) 0.35s both" }}>
                        Register Your Team <ArrowRight size={18} />
                    </button>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="section-eyebrow mb-4">Upcoming Events</div>
                    <h2 className="font-display font-semibold text-white mb-10" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", lineHeight: 1.15 }}>
                        The next challenge awaits.
                    </h2>
                    <div className="flex flex-col gap-5">
                        {events.map((event, i) => (
                            <div key={i} className="phase-card p-7 flex flex-col md:flex-row items-start md:items-center gap-6" style={{ animation: `fadeUp 0.5s var(--ease) ${i * 0.1}s both` }}>
                                <div className="shrink-0 text-center bg-navy-800 border border-white/5 rounded-xl px-6 py-4">
                                    <div className="font-mono-custom text-xs text-navy-200 tracking-widest uppercase">{event.date.split(" ")[0]}</div>
                                    <div className="font-display text-3xl font-semibold text-gold-300">{event.date.split(" ")[1]}</div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-mono-custom text-teal-300 border border-teal-400/30 px-2 py-0.5 rounded-full">{event.tag}</span>
                                        <span className="text-xs font-mono-custom text-gold-400 border border-gold-400/30 px-2 py-0.5 rounded-full">{event.status}</span>
                                    </div>
                                    <h3 className="font-semibold text-white text-lg mb-2">{event.title}</h3>
                                    <div className="flex flex-wrap gap-4 text-xs text-navy-200">
                                        <span>📍 {event.location}</span>
                                        <span>🏆 Prize: {event.prize}</span>
                                        <div className="flex items-center gap-1">
                                            <span>Sponsors:</span>
                                            {event.sponsors.map((s, si) => (
                                                <span key={si} className="bg-navy-800 border border-white/5 px-2 py-0.5 rounded">{s}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <button className="btn-gold shrink-0 py-2 px-5 text-sm">
                                    Register <ArrowRight size={14} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="section-pad">
                <div className="container-main text-center">
                    <div className="section-eyebrow mb-6">Our Hackathon Sponsors & Partners</div>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {["Google", "Microsoft", "AWS", "TCS", "Infosys", "KSUM", "Startup India", "Atal Innovation Mission"].map((sp, i) => (
                            <div key={i} className="px-5 py-3 bg-navy-800 border border-white/5 rounded-xl text-navy-200 text-sm font-medium hover:border-gold-400/30 hover:text-gold-300 transition-all cursor-pointer">
                                {sp}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
