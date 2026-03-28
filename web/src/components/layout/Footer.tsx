'use client';

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, ExternalLink, ArrowUpRight } from "lucide-react";

/**
 * Modern Premium Footer - Built with high-fidelity design tokens
 */

const footerLinks = {
    programs: [
        { label: "Online Courses", href: "/courses" },
        { label: "Hackathons", href: "/hackathons" },
        { label: "Entrepreneurship Centre", href: "/gvedc" },
    ],
    company: [
        { label: "About AyaTech", href: "/about" },
        { label: "Contact Us", href: "/contact" },
        { label: "Our Mentors", href: "/about#mentors" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
    ],
    resources: [
        { label: "Student Dashboard", href: "/dashboard" },
        { label: "Blog", href: "/blog" },
        { label: "Community", href: "/community" },
        { label: "FAQs", href: "/contact#faq" },
    ],
};

const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:ayatectechnicalschool@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:9037665777", label: "Call Us" },
];

export default function Footer() {
    return (
        <footer className="footer-premium pt-24 pb-12 overflow-hidden" 
            style={{ 
                backgroundColor: "#1F2432", 
                borderTop: "1px solid rgba(255,255,255,0.08)",
                background: "linear-gradient(180deg, #1F2432 0%, #151923 100%)"
            }}
        >
            <div className="container-main relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-20">
                    
                    {/* Brand Column */}
                    <div className="lg:col-span-2 max-w-sm">
                        <Link href="/" className="inline-flex items-center gap-3 mb-8 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform" style={{ backdropFilter: "blur(8px)" }}>
                                <span className="font-display font-bold text-white text-2xl">A</span>
                            </div>
                            <div>
                                <div className="font-display font-bold text-xl text-white leading-none">AyaTech</div>
                                <div className="font-mono-custom text-[10px] uppercase tracking-[0.2em] mt-1 text-[#c2a055] opacity-90 font-bold">Global Academy</div>
                            </div>
                        </Link>
                        <p className="text-[#6A7081] leading-relaxed mb-10 text-[15px]" style={{ color: "rgba(255,255,255,0.6)" }}>
                            Democratising elite technology education across India and the GCC. 
                            From IGCSE pathways to industrial IoT, we build the next generation of global innovators.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <Link 
                                        key={social.label} 
                                        href={social.href} 
                                        className="h-11 w-11 rounded-xl flex items-center justify-center transition-all bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20"
                                        aria-label={social.label}
                                    >
                                        <Icon size={18} className="text-white opacity-60" />
                                    </Link>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Link Groups */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="flex flex-col gap-6">
                            <h4 className="text-white font-display font-bold text-sm uppercase tracking-widest opacity-40">{title}</h4>
                            <ul className="flex flex-col gap-4">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <Link 
                                            href={link.href} 
                                            className="text-sm font-semibold transition-colors flex items-center group whitespace-nowrap"
                                            style={{ color: "rgba(255,255,255,0.5)" }}
                                        >
                                            <span className="group-hover:text-white group-hover:translate-x-1 transition-all inline-flex items-center gap-1.5 leading-none">
                                                {link.label}
                                            </span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 mt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 order-2 md:order-1">
                        <span className="text-[13px] opacity-30 text-white font-medium">© 2026 AyaTech</span>
                        <div className="flex gap-6">
                            <Link href="/privacy" className="text-[13px] opacity-30 text-white hover:opacity-100 transition-opacity">Privacy Policy</Link>
                            <Link href="/terms" className="text-[13px] opacity-30 text-white hover:opacity-100 transition-opacity">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
