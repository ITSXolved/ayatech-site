"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Zap, BookOpen, Globe, TrendingUp, ShoppingBag, Star } from "lucide-react";

/* ─── Design Tokens ─── */
const C = {
<<<<<<< HEAD
  primaryBlue: "#c2a055", // AILT Gold
  primaryBlueHover: "#a68940",
  navyDark: "#1a202c",
  navyLight: "#2a3441",
  bgLight: "#f9fafb",
  white: "#FFFFFF",
  textMain: "#1f2937",
  textMuted: "#4b5563",
  accentGold: "#c2a055",
  teal300: "#c2a055",
  teal400: "#c2a055",
  gold300: "#c2a055",
  gold400: "#c2a055",
  navy200: "#4b5563",
  navy400: "#1a202c",
  navy600: "#1a202c",
  navy700: "#f9fafb",
=======
  primaryBlue: "#1F2432", // Dark blue from new branding
  primaryBlueHover: "#171B26",
  navyDark: "#1F2432",
  navyLight: "#2A3142",
  bgLight: "#F5F7F8",
  white: "#FFFFFF",
  textMain: "#1F2432",
  textMuted: "#6A7081",
  accentGold: "#C5A059", // Gold color from AILT screenshot
  teal300: "#0056D2",
  teal400: "#0056D2",
  gold300: "#C5A059",
  gold400: "#C5A059",
  navy200: "#6A7081",
  navy400: "#1F2432",
  navy600: "#1F2432",
  navy700: "#F5F7F8",
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
  navy800: "#FFFFFF",
  navy900: "#FFFFFF",
  navy950: "#FFFFFF",
};

/* ─── Count-up hook ─── */
function useCountUp(target: number, duration = 1800, active = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, active]);
  return count;
}

/* ─── Stats data ─── */
const stats = [
  { pre: "", val: 10, suf: "+", label: "Years Excellence", dec: false },
  { pre: "", val: 500, suf: "+", label: "Global Students", dec: false },
  { pre: "", val: 98, suf: "%", label: "Placement Rate", dec: false },
  { pre: "", val: 30, suf: "+", label: "Countries Reached", dec: false },
  { pre: "", val: 15, suf: "+", label: "Live Courses", dec: false },
  { pre: "M", val: 7, suf: "", label: "Break-even Month", dec: false },
];

/* ─── Phases ─── */
const phases = [
  { num: "V1", tag: "LIVE NOW", tagColor: C.teal300, title: "Online Training", Icon: BookOpen, color: C.teal400, desc: "15+ live courses in AI, coding, design, IoT, and robotics. ₹999–₹2,499. 10 expert mentors. Break-even Month 7.", href: "/courses" },
  { num: "V2", tag: "MONTH 9", tagColor: C.gold300, title: "Entrepreneurship Centre", Icon: TrendingUp, color: C.gold400, desc: "12-month startup journey from idea to funded venture. Special focus: women founders aged 18–45. ₹15,000–₹25,000 per participant.", href: "/gvedc" },
  { num: "V3", tag: "MONTH 19", tagColor: C.navy200, title: "Tinkering Centres & Store", Icon: Zap, color: C.navy400, desc: "Physical maker spaces in Calicut, Bangalore, Dubai. 3D printing, electronics, robotics labs. Online component store with 500+ SKUs.", href: "/tinkering" },
  { num: "V4", tag: "MONTH 23", tagColor: C.navy200, title: "Hackathons & Programs", Icon: Globe, color: C.navy400, desc: "Grand hackathons with Google, Microsoft, AWS. School workshops, bootcamps, Women in Tech programs across India and the Middle East.", href: "/hackathons" },
];

/* ─── Courses ─── */
const courses = [
  { id: "01", title: "Intro to Python Programming", duration: "10 Days", price: "₹999", level: "Beginner", live: true },
  { id: "02", title: "Vibe Coding: Build Apps with AI", duration: "15 Days", price: "₹1,499", level: "Beginner", live: true },
  { id: "03", title: "Web Development Bootcamp", duration: "30 Days", price: "₹2,499", level: "Beginner", live: true },
  { id: "04", title: "AI Tools Masterclass", duration: "5 Days", price: "₹999", level: "All Levels", live: true },
  { id: "05", title: "UI/UX Design Fundamentals", duration: "15 Days", price: "₹1,999", level: "Intermediate", live: true },
  { id: "06", title: "Mobile App Dev (Flutter)", duration: "30 Days", price: "₹2,499", level: "Intermediate", live: true },
];

/* ─── Testimonials ─── */
const testimonials = [
  { q: "AyaTech's Python course gave my daughter genuine problem-solving skills in just 10 days. Live mentorship is what sets them apart.", name: "Priya Menon", role: "Parent · Bengaluru", av: "PM" },
  { q: "From zero to building my own Flutter app in 30 days. Curriculum is industry-relevant and mentors are practitioners, not just teachers.", name: "Adithya K.", role: "Student · Kochi", av: "AK" },
  { q: "Cambridge pathway with real tinkering kits shipped home — this is what modern education should look like. Our school is partnering with AyaTech.", name: "Mohammed Rashid", role: "Principal · Dubai", av: "MR" },
];

/* ─── Store items ─── */
const store = [
  { title: "Grade 5 IGCSE Tinkering Kit", price: "₹4,500/yr", tag: "Best Seller", desc: "Electronics + structural materials + sensor starter + printed project guides" },
  { title: "Arduino Starter Pack", price: "₹1,999", tag: "Beginner", desc: "Arduino Uno + sensors + project workbook. Start building IoT from Day 1." },
  { title: "3D Printing Starter Bundle", price: "₹3,500", tag: "Maker", desc: "PLA filaments + 5 project STL files + Calicut lab access" },
];

export default function Home() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/images/home/hero-slide-1.png",
    "/images/home/hero-slide-2.png",
    "/images/home/hero-slide-3.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setStatsActive(true); }, { threshold: 0.3 });
    if (statsRef.current) obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* ═══ HERO ═══ */}
<<<<<<< HEAD
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: `radial-gradient(ellipse 80% 60% at 50% -10%, #FFFFFF 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 85% 70%, rgba(194, 160, 85,0.05) 0%, transparent 60%), ${C.bgLight}`, backgroundImage: "linear-gradient(rgba(194, 160, 85, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(194, 160, 85, 0.03) 1px, transparent 1px)", backgroundSize: "64px 64px, 64px 64px, auto, auto" }}>

        {/* Decorative rings (lighter) */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", border: `1px solid rgba(194, 160, 85, 0.06)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", border: `1px solid rgba(194, 160, 85, 0.08)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(194,160,85,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
=======
      <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", background: `radial-gradient(ellipse 80% 60% at 50% -10%, #FFFFFF 0%, transparent 70%), radial-gradient(ellipse 60% 50% at 85% 70%, rgba(0,86,210,0.05) 0%, transparent 60%), ${C.bgLight}`, backgroundImage: "linear-gradient(rgba(0,86,210,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,86,210,0.03) 1px, transparent 1px)", backgroundSize: "64px 64px, 64px 64px, auto, auto" }}>

        {/* Decorative rings (lighter) */}
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 700, height: 700, borderRadius: "50%", border: `1px solid rgba(0,86,210,0.06)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 500, height: 500, borderRadius: "50%", border: `1px solid rgba(0,86,210,0.08)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,86,210,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f

        <div className="container-main" style={{ paddingTop: "9rem", paddingBottom: "6rem", position: "relative", zIndex: 10 }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left Column: Text */}
            <div style={{ textAlign: "left" }}>
<<<<<<< HEAD
              {/* Admissions Badge */}
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "1.5rem", animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.05s both" }}>
                <div style={{ background: "rgba(179, 142, 61, 0.1)", border: "1px solid rgba(179, 142, 61, 0.2)", padding: "0.25rem 0.75rem", borderRadius: "100px", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#b38e3d", animation: "pulse 2s infinite" }}></div>
                  <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#b38e3d", textTransform: "uppercase", letterSpacing: "0.05em" }}>Admission Open 2026</span>
                </div>
                <p className="section-eyebrow" style={{ color: C.textMuted, margin: 0 }}>
                  Calicut · Kerala · Global
                </p>
              </div>
=======
              {/* Eyebrow */}
              <p className="section-eyebrow" style={{ marginBottom: "1.5rem", display: "inline-block", animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both", color: C.primaryBlue }}>
                Calicut · Kerala · Global
              </p>
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f

              {/* H1 */}
              <h1 className="font-display" style={{ fontSize: "clamp(2.5rem,6vw,4.5rem)", fontWeight: 700, lineHeight: 1.1, color: C.navyDark, marginBottom: "1.5rem", animation: "fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.25s both", letterSpacing: "-0.01em" }}>
                Empowering <br />
                innovative minds <br />
                <span style={{ color: C.accentGold }}>for sustainable <br /> futures.</span>
              </h1>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "3rem", animation: "fadeUp 0.75s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}>
                <Link href="https://erp.ayatech.org/apply">
                  <button className="btn-gold" style={{ padding: "1rem 2rem", fontSize: "1rem", backgroundColor: C.accentGold, color: "#fff", display: "flex", alignItems: "center", gap: "0.5rem", borderRadius: "8px" }}>
                    Start Application <ArrowRight size={17} />
                  </button>
                </Link>
                <Link href="/courses">
                  <button className="btn-outline" style={{ padding: "1rem 2rem", fontSize: "1rem", border: "1px solid rgba(0,0,0,0.1)", borderRadius: "8px", color: C.navyDark }}>
                    Explore Courses
                  </button>
                </Link>
              </div>

              {/* Trust marks */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "0.75rem", opacity: 0.7, animation: "fadeUp 1s ease 0.75s both" }}>
                {["Cambridge Pathway", "KSUM Partner", "Startup India", "Atal Innovation Mission"].map(m => (
                  <span key={m} className="font-mono-brand" style={{ fontSize: "0.80rem", letterSpacing: "0.05em", textTransform: "uppercase", color: C.textMuted, border: `1px solid rgba(0,0,0,0.1)`, padding: "0.35rem 0.9rem", borderRadius: "100px", backgroundColor: "#fff" }}>
                    {m}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Dynamic Image Slider */}
            <div style={{ position: "relative", animation: "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.35s both", display: "flex", justifyContent: "center", width: "100%" }}>
              {/* Frame Container */}
<<<<<<< HEAD
              <div style={{ position: "relative", backgroundColor: "#FFFFFF", padding: "12px", borderRadius: "32px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid rgba(0,0,0,0.05)", width: "100%", maxWidth: "560px" }}>
                {/* Floating Cards (Sticky Note Feature) - Moved outside overflow:hidden */}
                <div className="hidden md:block">
                  <FloatingCard
                    icon={<div className="w-10 h-10 bg-gradient-to-br from-[#c2a055] to-[#a68940] rounded-xl flex items-center justify-center text-white shadow-lg"><Star size={20} fill="currentColor" /></div>}
                    title="Advanced AI Lab"
                    subtitle="STATE OF THE ART"
                    style={{ top: "10%", left: "-5%", zIndex: 50 }}
                  />
                  <FloatingCard
                    icon={<div className="flex -space-x-3"><div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-400">S1</div><div className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-400">S2</div><div className="w-10 h-10 rounded-full bg-gray-400 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-400">S3</div></div>}
                    title="100+ Students"
                    subtitle="Joined this year"
                    style={{ bottom: "15%", right: "-12%", zIndex: 50 }}
                    delay="1.5s"
                  />
                </div>
                {/* Mobile version of floating cards - smaller and less offset */}
                <div className="md:hidden">
                  <FloatingCard
                    icon={<div className="w-8 h-8 bg-gradient-to-br from-[#c2a055] to-[#a68940] rounded-lg flex items-center justify-center text-white shadow-md"><Star size={16} fill="currentColor" /></div>}
                    title="AI Lab"
                    subtitle="PREMIUM"
                    style={{ top: "0%", left: "-5%", scale: "0.8", zIndex: 50 }}
                  />
                  <FloatingCard
                    icon={<div className="flex -space-x-2"><div className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px]">S1</div><div className="w-7 h-7 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center text-[10px]">S2</div></div>}
                    title="100+ Join"
                    subtitle="THIS YEAR"
                    style={{ bottom: "5%", right: "-5%", scale: "0.8", zIndex: 50 }}
                    delay="1.5s"
                  />
                </div>
=======
              <div style={{ backgroundColor: "#FFFFFF", padding: "12px", borderRadius: "32px", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.15)", border: "1px solid rgba(0,0,0,0.05)", width: "100%", maxWidth: "560px" }}>
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
                <div
                  className="hero-slider-container"
                  style={{
                    position: "relative",
                    width: "100%",
                    aspectRatio: "4/3",
                    borderRadius: "24px",
                    overflow: "hidden",
                    backgroundColor: "#f0f0f0", // Placeholder color during load
                  }}
                >
                  {/* Decorative glow behind image */}
<<<<<<< HEAD
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "120%", height: "120%", background: "radial-gradient(circle, rgba(194,160,85, 0.1) 0%, transparent 70%)", zIndex: -1 }}></div>

                  {/* Hero Image Container with Tilt (AILT Style) */}
                  <div
                    className="relative w-full h-full"
                    style={{ transition: "all 0.7s ease-out" }}
                  >
                    <div className="absolute inset-0 bg-white p-2 rounded-[2.5rem] shadow-2xl skew-y-1 rotate-1 hover:rotate-0 hover:skew-y-0 transition-all duration-700 ease-out z-10 overflow-hidden">
                      <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gray-100">
                        {heroImages.map((img, i) => (
                          <div
                            key={i}
                            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                            style={{ opacity: currentSlide === i ? 1 : 0 }}
                          >
                            <Image
                              src={img}
                              alt={`AyaTech slide ${i + 1}`}
                              fill
                              priority={i === 0}
                              style={{ objectFit: "cover" }}
                              sizes="(max-width: 768px) 100vw, 540px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                          </div>
                        ))}
                      </div>
                    </div>
=======
                  <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "120%", height: "120%", background: "radial-gradient(circle, rgba(0,123,255,0.15) 0%, transparent 70%)", zIndex: -1 }}></div>

                  {/* Slider Images */}
                  <div style={{ display: "flex", transition: "transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)", transform: `translateX(-${currentSlide * 100}%)`, height: "100%", width: "100%" }}>
                    {heroImages.map((src, i) => (
                      <div key={i} style={{ minWidth: "100%", height: "100%", position: "relative" }}>
                        <Image
                          src={src}
                          alt={`AyaTech slide ${i + 1}`}
                          fill
                          priority={i === 0}
                          style={{ objectFit: "cover" }}
                          className="shake-on-touch"
                          sizes="(max-width: 768px) 100vw, 540px"
                        />
                      </div>
                    ))}
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
                  </div>

                  {/* Slider Dots */}
                  <div style={{ position: "absolute", bottom: "1.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "0.5rem", zIndex: 20 }}>
                    {heroImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        style={{
                          width: i === currentSlide ? 24 : 8,
                          height: 8,
                          borderRadius: 4,
                          background: i === currentSlide ? C.accentGold : "rgba(255,255,255,0.5)",
                          border: "none",
                          cursor: "pointer",
                          transition: "all 0.3s ease"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.5 }}>
          <span className="font-mono-brand" style={{ fontSize: "0.85rem", letterSpacing: "0.2em", color: C.textMuted }}>SCROLL</span>
          <div style={{ width: 1, height: 40, background: `linear-gradient(${C.textMuted}, transparent)` }} />
        </div>
      </section >

      {/* ═══ STATS ═══ */}
      < section ref={statsRef} style={{ borderTop: "1px solid rgba(0,0,0,0.06)", borderBottom: "1px solid rgba(0,0,0,0.06)", background: C.white, padding: "3.5rem 0" }
      }>
        <div className="container-main">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "2rem", textAlign: "center" }}>
            {stats.map((s, i) => <StatNum key={i} s={s} active={statsActive} delay={i * 100} />)}
          </div>
        </div>
      </section >

      {/* ═══ FOUR VERTICALS ═══ */}
      < section className="section-pad" >
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>Our Ecosystem</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3.5rem)", fontWeight: 600, color: C.navyDark, lineHeight: 1.15 }}>
              One ecosystem.{" "}
              <span className="text-gradient-primary">Four pathways</span>{" "}
              to innovation.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {phases.map((p, i) => {
              const Icon = p.Icon;
              return (
                <Link href={p.href} key={i} style={{ textDecoration: "none" }}>
                  <div className="phase-card" style={{ padding: "2rem", height: "100%", cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.5rem" }}>
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: `${p.color}15`, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={22} color={p.color} />
                      </div>
                      <span className="font-mono-brand" style={{ fontSize: "0.85rem", letterSpacing: "0.05em", color: p.color, border: `1px solid ${p.color}40`, padding: "0.25rem 0.7rem", borderRadius: "100px", backgroundColor: `${p.color}10` }}>
                        {p.tag}
                      </span>
                    </div>
                    <p className="font-mono-brand" style={{ fontSize: "0.90rem", color: C.primaryBlue, letterSpacing: "0.05em", marginBottom: "0.5rem" }}>{p.num}</p>
                    <h3 className="font-display" style={{ fontSize: "1.5rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.75rem" }}>{p.title}</h3>
                    <p style={{ color: C.textMuted, fontSize: "1.1rem", lineHeight: 1.6 }}>{p.desc}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "1.5rem", color: C.primaryBlueHover, fontSize: "1.05rem", fontWeight: 600 }}>
                      Learn more <ChevronRight size={15} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section >

      {/* ═══ IGCSE BANNER ═══ */}
      < section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container-main">
          <div style={{ background: `linear-gradient(135deg, ${C.primaryBlue} 0%, ${C.primaryBlueHover} 100%)`, border: `1px solid rgba(0,0,0,0.1)`, borderRadius: 24, padding: "3.5rem", position: "relative", overflow: "hidden", boxShadow: "0 10px 30px -10px rgba(0,86,210,0.3)" }}>
            <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <span className="section-eyebrow" style={{ color: C.white }}>Introducing</span>
                  <span className="badge-live" style={{ backgroundColor: "rgba(255,255,255,0.2)", borderColor: "rgba(255,255,255,0.4)", color: C.white }}>Admissions Jan 2027</span>
                </div>
                <h2 className="font-display" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)", color: "#fff", lineHeight: 1.2, marginBottom: "1rem" }}>
                  AyaTech IGCSE Online{" "}
                  <span style={{ fontStyle: "italic", opacity: 0.9 }}>Design Thinking School</span>
                </h2>
                <p style={{ color: "rgba(255,255,255,0.85)", maxWidth: "42rem", lineHeight: 1.6, marginBottom: "1.75rem", fontSize: "1.15rem" }}>
                  A Cambridge IGCSE school built around Design Thinking. Every subject connects to a real-world challenge. 100% online. Tinkering kits delivered. Piloting Class 5 in 2025–26.
                </p>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <Link href="/igcse-school">
<<<<<<< HEAD
                    <button className="btn-gold" style={{ backgroundColor: "#FFFFFF", color: C.navyDark }}>Learn More <ArrowRight size={16} /></button>
=======
                    <button className="btn-gold" style={{ backgroundColor: "#FFFFFF", color: C.primaryBlue }}>Learn More <ArrowRight size={16} /></button>
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
                  </Link>
                  <button className="btn-outline" style={{ borderColor: "#FFFFFF", color: "#FFFFFF" }}>Register Interest</button>
                </div>
              </div>
              {/* Timeline */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", minWidth: 220 }}>
                {[
                  { y: "2025–26", l: "Live Pilot · Class 5", done: true },
                  { y: "July 2026", l: "Cambridge approval", done: false },
                  { y: "Jan 2027", l: "Admissions open", done: false },
                  { y: "July 2027", l: "First Cambridge year", done: false },
                ].map((s, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: s.done ? "#FFFFFF" : "rgba(255,255,255,0.3)", flexShrink: 0 }} />
                    <span className="font-mono-brand" style={{ fontSize: "0.88rem", color: s.done ? "#FFFFFF" : "rgba(255,255,255,0.7)", letterSpacing: "0.05em", minWidth: 60 }}>{s.y}</span>
                    <span style={{ fontSize: "1.1rem", color: s.done ? "#fff" : "rgba(255,255,255,0.7)" }}>{s.l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* ═══ FEATURED COURSES ═══ */}
      < section className="section-pad" >
        <div className="container-main">
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
            <div>
              <p className="section-eyebrow" style={{ marginBottom: "0.75rem" }}>15+ Expert-Led Programs</p>
              <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: C.navyDark, lineHeight: 1.15 }}>
                Learn the tech building<br />
                <span className="text-gradient-primary">the future.</span>
              </h2>
            </div>
            <Link href="/courses">
              <button className="btn-outline">All Courses <ArrowRight size={16} /></button>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
            {courses.map((c, i) => (
              <div key={i} className="course-card" style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
<<<<<<< HEAD
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(194, 160, 85, 0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "1rem", color: C.primaryBlue }}>
=======
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: "rgba(0,86,210,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, fontSize: "1rem", color: C.primaryBlue }}>
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
                    {c.id}
                  </div>
                  {c.live && <span className="badge-live">Live</span>}
                </div>
                <div style={{ display: "inline-block", fontSize: "0.85rem", padding: "0.2rem 0.6rem", borderRadius: 100, border: `1px solid rgba(0,0,0,0.1)`, color: C.textMuted, marginBottom: "0.75rem", fontFamily: "'JetBrains Mono',monospace", backgroundColor: "#F5F7F8" }}>
                  {c.level}
                </div>
                <h3 className="font-display" style={{ color: C.navyDark, lineHeight: 1.35, marginBottom: "0.5rem", fontSize: "1.30rem" }}>{c.title}</h3>
                <p style={{ fontSize: "0.95rem", color: C.textMuted, marginBottom: "1.25rem" }}>⏱ {c.duration}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <span className="font-display" style={{ fontSize: "1.6rem", color: C.navyDark }}>{c.price}</span>
                  <button style={{ display: "flex", alignItems: "center", gap: "0.3rem", fontSize: "1.05rem", color: C.primaryBlue, fontWeight: 600, background: "none", border: "none", cursor: "pointer" }}>
                    Enroll <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ═══ TINKERING STORE PREVIEW ═══ */}
      < section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "0.75rem" }}>Tinkering Store</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: C.navyDark }}>
              Build something{" "}
              <span className="text-gradient-primary">real.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem", marginBottom: "2.5rem" }}>
            {store.map((item, i) => (
              <div key={i} className="phase-card" style={{ padding: "2rem" }}>
<<<<<<< HEAD
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(194, 160, 85, 0.1)", border: "1px solid rgba(194, 160, 85, 0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <ShoppingBag size={22} color={C.primaryBlue} />
                </div>
                <span className="font-mono-brand" style={{ fontSize: "0.85rem", color: C.primaryBlue, backgroundColor: "rgba(194, 160, 85, 0.05)", border: `1px solid rgba(194, 160, 85, 0.2)`, padding: "0.2rem 0.6rem", borderRadius: 100, display: "inline-block", marginBottom: "0.75rem" }}>{item.tag}</span>
=======
                <div style={{ width: 48, height: 48, borderRadius: 12, background: "rgba(0,86,210,0.1)", border: "1px solid rgba(0,86,210,0.2)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem" }}>
                  <ShoppingBag size={22} color={C.primaryBlue} />
                </div>
                <span className="font-mono-brand" style={{ fontSize: "0.85rem", color: C.primaryBlue, backgroundColor: "rgba(0,86,210,0.05)", border: `1px solid rgba(0,86,210,0.2)`, padding: "0.2rem 0.6rem", borderRadius: 100, display: "inline-block", marginBottom: "0.75rem" }}>{item.tag}</span>
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
                <h3 className="font-display" style={{ color: C.navyDark, marginBottom: "0.5rem", fontSize: "1.3rem" }}>{item.title}</h3>
                <p style={{ color: C.textMuted, fontSize: "1.05rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>{item.desc}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "1.25rem", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <span className="font-display" style={{ fontSize: "1.5rem", color: C.navyDark }}>{item.price}</span>
                  <button style={{ fontSize: "1.05rem", color: C.primaryBlue, fontWeight: 600, display: "flex", alignItems: "center", gap: "0.3rem", background: "none", border: "none", cursor: "pointer" }}>
                    Add to Cart <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/store"><button className="btn-outline">Shop All Kits <ArrowRight size={16} /></button></Link>
          </div>
        </div>
      </section >

      {/* ═══ TESTIMONIALS ═══ */}
      < section className="section-pad" >
        <div className="container-main">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <p className="section-eyebrow" style={{ marginBottom: "0.75rem" }}>Community</p>
            <h2 className="font-display" style={{ fontSize: "clamp(2rem,4vw,3rem)", color: C.navyDark }}>
              Join <span className="text-gradient-primary">3,700+</span> learners worldwide
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }}>
            {testimonials.map((t, i) => (
              <div key={i} className="phase-card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.25rem" }}>
                  {Array(5).fill(0).map((_, si) => <Star key={si} size={14} fill={C.primaryBlue} color={C.primaryBlue} />)}
                </div>
                <p style={{ color: C.textMain, lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "1.1rem", fontStyle: "italic" }}>&ldquo;{t.q}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: C.bgLight, border: `1px solid rgba(0,0,0,0.1)`, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'JetBrains Mono',monospace", fontSize: "0.95rem", fontWeight: 700, color: C.primaryBlue }}>{t.av}</div>
                  <div>
                    <p style={{ fontWeight: 600, color: C.navyDark, fontSize: "1.1rem" }}>{t.name}</p>
                    <p style={{ color: C.textMuted, fontSize: "0.95rem" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* ═══ FINAL CTA ═══ */}
      < section className="section-pad" style={{ paddingTop: 0 }}>
        <div className="container-main">
          <div style={{ borderRadius: 24, overflow: "hidden", position: "relative", background: C.bgLight, border: "1px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(0,86,210,0.04) 0%, transparent 55%), radial-gradient(ellipse 60% 80% at 80% 50%, rgba(0,86,210,0.03) 0%, transparent 55%)", pointerEvents: "none" }} />
            <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: "5rem 2rem" }}>
              <p className="section-eyebrow" style={{ marginBottom: "1rem" }}>Start Today</p>
              <h2 className="font-display" style={{ fontSize: "clamp(2.5rem,5vw,5rem)", color: C.navyDark, marginBottom: "1rem" }}>
                Ready to build your{" "}
                <span className="text-gradient-primary">future?</span>
              </h2>
              <p style={{ color: C.textMuted, fontSize: "1.15rem", marginBottom: "2.5rem", maxWidth: "32rem", margin: "0 auto 2.5rem" }}>
                Join 3,700+ students already coding, creating, and launching with AyaTech. First course from ₹999.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
                <Link href="/courses">
<<<<<<< HEAD
                  <button className="btn-gold" style={{ padding: "1rem 3rem", fontSize: "1.15rem", boxShadow: "0 4px 14px 0 rgba(194, 160, 85, 0.39)" }}>
=======
                  <button className="btn-gold" style={{ padding: "1rem 3rem", fontSize: "1.15rem", boxShadow: "0 4px 14px 0 rgba(0,86,210,0.39)" }}>
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
                    Explore Courses <ArrowRight size={18} />
                  </button>
                </Link>
                <Link href="/about">
                  <button className="btn-outline" style={{ padding: "1rem 3rem", fontSize: "1.15rem" }}>
                    About AyaTech
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section >
      <style jsx global>{`
        @keyframes shake {
          0% { transform: translate(1px, 1px) rotate(0deg); }
          10% { transform: translate(-1px, -2px) rotate(-1deg); }
          20% { transform: translate(-3px, 0px) rotate(1deg); }
          30% { transform: translate(3px, 2px) rotate(0deg); }
          40% { transform: translate(1px, -1px) rotate(1deg); }
          50% { transform: translate(-1px, 2px) rotate(-1deg); }
          60% { transform: translate(-3px, 1px) rotate(0deg); }
          70% { transform: translate(3px, 1px) rotate(-1deg); }
          80% { transform: translate(-1px, -1px) rotate(1deg); }
          90% { transform: translate(1px, 2px) rotate(0deg); }
          100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
        .hero-slider-container:hover .shake-on-touch,
        .hero-slider-container:active .shake-on-touch {
<<<<<<< HEAD
          /* Animation removed as per user request */
        }
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .floating-element {
          animation: floating 3s ease-in-out infinite;
        }
        @keyframes pulse {
          0% { transform: scale(0.95); opacity: 0.5; }
          50% { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.95); opacity: 0.5; }
=======
          animation: shake 0.5s infinite;
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
        }
      `}</style>
    </>
  );
}

<<<<<<< HEAD
/* ─── FloatingCard Component ─── */
function FloatingCard({ icon, title, subtitle, style, delay = "0s" }: { icon: React.ReactNode; title: string; subtitle: string; style: React.CSSProperties; delay?: string }) {
  return (
    <div
      className="floating-element"
      style={{
        position: "absolute",
        zIndex: 30,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        padding: "0.85rem 1.5rem",
        borderRadius: "24px",
        boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
        display: "flex",
        alignItems: "center",
        gap: "1.25rem",
        border: "1px solid rgba(255,255,255,0.5)",
        animationDelay: delay,
        minWidth: "fit-content",
        whiteSpace: "nowrap",
        ...style
      }}
    >
      {icon}
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ fontSize: "1rem", fontWeight: 700, color: "#1a202c", lineHeight: 1.2 }}>{title}</span>
        <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.08em" }}>{subtitle}</span>
      </div>
    </div>
  );
}

=======
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
/* ─── StatNum Component ─── */
function StatNum({ s, active, delay }: { s: typeof stats[0]; active: boolean; delay: number }) {
  const n = useCountUp(s.val, 1800, active);
  const display = s.dec ? (n / 100).toFixed(2) : n;
  return (
    <div style={{ animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${delay}ms both` }}>
      <div className="font-display" style={{ fontSize: "clamp(2rem,4vw,3.2rem)", color: C.primaryBlue, lineHeight: 1, letterSpacing: "-0.02em" }}>
        {s.pre}{display}{s.suf}
      </div>
      <div className="font-mono-brand" style={{ fontSize: "0.80rem", color: C.textMuted, letterSpacing: "0.05em", textTransform: "uppercase", marginTop: "0.5rem" }}>
        {s.label}
      </div>
    </div>
  );
}
