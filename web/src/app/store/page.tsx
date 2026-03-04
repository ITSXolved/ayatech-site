import Link from "next/link";
import { ArrowRight, ShoppingBag, Package, ChevronRight } from "lucide-react";

const categories = [
    { name: "Tinkering Kits", icon: "🎒", desc: "Grade 5–8 IGCSE kits with full project guides", count: "4 kits" },
    { name: "Microcontrollers", icon: "💻", desc: "Arduino, Raspberry Pi, ESP32 and accessories", count: "20+ SKUs" },
    { name: "Sensors & Actuators", icon: "⚡", desc: "Temperature, motion, light, servo motors", count: "50+ SKUs" },
    { name: "3D Printing", icon: "🖨️", desc: "FDM/SLA filaments, project STL files", count: "15+ SKUs" },
    { name: "Electronic Components", icon: "🔌", desc: "Resistors, capacitors, ICs, breadboards", count: "500+ SKUs" },
    { name: "Project Bundles", icon: "📦", desc: "Course-tied bundles for instant learning", count: "8 bundles" },
];

const featured = [
    {
        title: "Grade 5 IGCSE Tinkering Kit",
        price: "₹4,500",
        period: "/year",
        tag: "Best Seller",
        desc: "Electronics starter + structural materials + sensor pack + 3 printed project guides. Shipped to your door.",
        includes: ["Arduino Nano", "20 Sensors Kit", "Structural Kit", "Project Guides (3)"],
    },
    {
        title: "Arduino Starter Pack",
        price: "₹1,999",
        period: "",
        tag: "Beginner",
        desc: "Everything you need to start building IoT and automation projects from Day 1.",
        includes: ["Arduino Uno R3", "Sensor Pack (10)", "Project Workbook", "USB Cable + Breadboard"],
    },
    {
        title: "3D Printing Starter Bundle",
        price: "₹3,500",
        period: "",
        tag: "Maker",
        desc: "PLA filaments + 5 project STL files + access to Calicut Tinkering Lab for hands-on sessions.",
        includes: ["PLA Filament 1kg", "5 STL Project Files", "Lab Access (Calicut)", "Print Profile Guide"],
    },
];

export default function StorePage() {
    return (
        <>
            {/* Hero */}
            <section className="relative pt-36 pb-20 mesh-gradient geo-grid overflow-hidden">
                <div className="container-main text-center">
                    <div className="section-eyebrow mb-4">500+ Components · 8 Bundles · India & GCC Shipping</div>
                    <h1 className="font-display font-semibold text-white mb-6" style={{ fontSize: "clamp(3rem,6vw,5.5rem)", lineHeight: 1.05, animation: "fadeUp 0.75s var(--ease) both" }}>
                        Build something{" "}
                        <span className="text-gradient-gold italic">real.</span>
                    </h1>
                    <p className="text-navy-200 text-xl max-w-2xl mx-auto" style={{ animation: "fadeUp 0.75s var(--ease) 0.2s both" }}>
                        Shop the Tinkering Store — curated kits, Arduino components, 3D supplies, and course bundles delivered across India and GCC.
                    </p>
                </div>
            </section>

            {/* Featured Products */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="section-eyebrow mb-4">Featured Products</div>
                    <h2 className="font-display font-semibold text-white mb-10" style={{ fontSize: "clamp(2.2rem,4vw,3.2rem)", lineHeight: 1.15 }}>
                        Start with the right kit.
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {featured.map((item, i) => (
                            <div key={i} className="phase-card p-7 flex flex-col" style={{ animation: `fadeUp 0.5s var(--ease) ${i * 0.1}s both` }}>
                                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: "rgba(232,168,0,0.12)", border: "1px solid rgba(232,168,0,0.25)" }}>
                                    <Package size={22} className="text-gold-400" />
                                </div>
                                <span className="text-xs font-mono-custom text-teal-300 border border-teal-400/30 px-2 py-0.5 rounded-full inline-block mb-3 self-start">
                                    {item.tag}
                                </span>
                                <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                                <p className="text-navy-200 text-sm mb-4 leading-relaxed">{item.desc}</p>
                                <div className="mb-5 flex flex-col gap-1.5">
                                    {item.includes.map((inc, j) => (
                                        <div key={j} className="check-item text-xs">
                                            <div className="check-dot">✓</div>
                                            {inc}
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                    <div>
                                        <span className="font-display text-2xl font-semibold text-gold-300">{item.price}</span>
                                        <span className="text-navy-200 text-sm">{item.period}</span>
                                    </div>
                                    <button className="btn-gold py-2 px-5 text-sm">
                                        Add to Cart <ChevronRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="section-eyebrow mb-4">Browse by Category</div>
                    <h2 className="font-display font-semibold text-white mb-8" style={{ fontSize: "clamp(2rem,3.5vw,2.8rem)", lineHeight: 1.15 }}>Everything a maker needs.</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {categories.map((cat, i) => (
                            <div key={i} className="phase-card p-6 cursor-pointer group" style={{ animation: `fadeUp 0.4s var(--ease) ${i * 0.06}s both` }}>
                                <div className="text-3xl mb-3">{cat.icon}</div>
                                <h3 className="font-semibold text-white mb-1 group-hover:text-gold-300 transition-colors">{cat.name}</h3>
                                <p className="text-navy-200 text-xs mb-2">{cat.desc}</p>
                                <span className="font-mono-custom text-xs text-gold-400">{cat.count}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* School orders */}
            <section className="section-pad">
                <div className="container-main">
                    <div className="teal-card p-10 md:p-14">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <div className="section-eyebrow mb-3">School & Institution Orders</div>
                                <h3 className="font-display font-semibold text-white mb-4" style={{ fontSize: "clamp(1.8rem,3vw,2.5rem)", lineHeight: 1.15 }}>
                                    Bulk orders for schools.<br />
                                    <span className="text-gradient-teal italic">Special pricing available.</span>
                                </h3>
                                <p className="text-navy-200 mb-6 leading-relaxed">
                                    Order tinkering kits in bulk for your classroom. Custom quotes for school name, grade, quantity. Bank transfer / NEFT for orders over ₹50,000.
                                </p>
                                <button className="btn-gold">
                                    Request School Quote <ArrowRight size={16} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-3">
                                {[
                                    "📋 Custom quote — school name, grade, quantity",
                                    "🏦 Bank transfer / NEFT for orders over ₹50,000",
                                    "📦 Bulk dispatch with tracking",
                                    "🎥 Zoom onboarding session included",
                                    "💳 Razorpay for B2C (UPI, cards, EMI)",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-navy-200 text-sm bg-navy-900/30 border border-white/5 rounded-xl px-4 py-3">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
