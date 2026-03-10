import Link from "next/link";
import { ArrowRight, MapPin, Zap, ChevronRight } from "lucide-react";

const locations = [
    { city: "Calicut", country: "Kerala, India", status: "Open Now", statusColor: "text-teal-300 border-teal-400/30", flag: "🇮🇳", desc: "Our flagship tinkering centre with 3D printing, electronics labs, robotics arena." },
    { city: "Bangalore", country: "Karnataka, India", status: "Month 19", statusColor: "text-gold-300 border-gold-400/30", flag: "🇮🇳", desc: "Planned expansion into India's tech capital with school partnership programmes." },
    { city: "Dubai", country: "UAE", status: "Month 23", statusColor: "text-navy-200 border-navy-400/30", flag: "🇦🇪", desc: "GCC hub serving Indian diaspora and MENA region learners." },
];

const labs = [
    { title: "3D Printing Lab", icon: "🖨️", desc: "FDM and SLA printers. Design and print real prototypes from digital models." },
    { title: "Electronics & Robotics", icon: "🤖", desc: "Fully stocked workbenches with soldering stations, oscilloscopes, and component libraries." },
    { title: "IoT & Sensors Lab", icon: "📡", desc: "Build connected devices. Arduino, Raspberry Pi, ESP32 with sensor packs and actuators." },
    { title: "Mechanical Workshop", icon: "⚙️", desc: "Laser cutter, drill press, and hand tools for structural and mechanical prototyping." },
];

export default function TinkeringPage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-20 mesh-gradient geo-grid overflow-hidden">
                <div className="container-main text-center">
                    <div className="section-eyebrow mb-4">Tinkering Centres & Online Store</div>
                    <h1 className="font-display font-semibold text-white mb-6" style={{ fontSize: "clamp(3rem,6vw,5.5rem)", lineHeight: 1.05, animation: "fadeUp 0.75s var(--ease) both" }}>
                        Where ideas become{" "}
                        <span className="text-gradient-gold italic">inventions.</span>
                    </h1>
                    <p className="text-navy-200 text-xl max-w-2xl mx-auto mb-10" style={{ animation: "fadeUp 0.75s var(--ease) 0.2s both" }}>
                        Physical maker spaces in Calicut, Bangalore, and Dubai. 3D printing, electronics, robotics labs. Plus an online store with 500+ components delivered to your door.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4" style={{ animation: "fadeUp 0.75s var(--ease) 0.35s both" }}>
                        <Link href="/store">
                            <button className="btn-gold px-8 py-4 text-base">
                                Shop Components <ArrowRight size={18} />
                            </button>
                        </Link>
                        <button className="btn-outline px-8 py-4 text-base">
                            Visit Calicut Lab <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </section>

            {/* Locations */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="section-eyebrow mb-4">Our Locations</div>
                    <h2 className="font-display font-semibold text-white mb-10" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", lineHeight: 1.15 }}>
                        Expanding across India{" "}
                        <span className="text-gradient-teal italic">and the Gulf.</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {locations.map((loc, i) => (
                            <div key={i} className="phase-card p-8" style={{ animation: `fadeUp 0.5s var(--ease) ${i * 0.1}s both` }}>
                                <div className="text-4xl mb-4">{loc.flag}</div>
                                <div className="flex items-center gap-2 mb-2">
                                    <h3 className="font-display font-semibold text-white" style={{ fontSize: "1.75rem", lineHeight: 1.2 }}>{loc.city}</h3>
                                    <span className={`font-mono-custom text-xs border px-2 py-0.5 rounded-full self-center ${loc.statusColor}`}>
                                        {loc.status}
                                    </span>
                                </div>
                                <div className="font-mono-custom text-xs text-navy-200 mb-4 flex items-center gap-1">
                                    <MapPin size={11} /> {loc.country}
                                </div>
                                <p className="text-navy-200 text-sm leading-relaxed">{loc.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Labs */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="text-center mb-12">
                        <div className="section-eyebrow mb-3">Lab Categories</div>
                        <h2 className="font-display font-semibold text-white" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", lineHeight: 1.15 }}>
                            State-of-the-art tools for{" "}
                            <span className="text-gradient-gold italic">every maker.</span>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {labs.map((lab, i) => (
                            <div key={i} className="phase-card p-8 flex items-start gap-5" style={{ animation: `fadeUp 0.5s var(--ease) ${i * 0.1}s both` }}>
                                <div className="text-3xl shrink-0">{lab.icon}</div>
                                <div>
                                    <h3 className="font-semibold text-white text-lg mb-2">{lab.title}</h3>
                                    <p className="text-navy-200 text-sm leading-relaxed">{lab.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* School Partnership */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="teal-card p-10 md:p-14 text-center">
                        <div className="section-eyebrow mb-4">School & Institution Partnerships</div>
                        <h3 className="font-display font-semibold text-white mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", lineHeight: 1.15 }}>
                            Bring tinkering to{" "}
                            <span className="text-gradient-teal italic">your school.</span>
                        </h3>
                        <p className="text-navy-200 max-w-xl mx-auto mb-8 leading-relaxed">
                            Partner with AyaTech to establish an in-school tinkering centre, deliver kit-based STEM curriculum, or run holiday bootcamps. Inquire for custom school pricing.
                        </p>
                        <button className="btn-gold px-10 py-4 text-base">
                            School Partnership Inquiry <ArrowRight size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
