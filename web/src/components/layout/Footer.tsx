import Link from "next/link";
import Image from "next/image";
import {
    MapPin,
    Mail,
    Phone,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
} from "lucide-react";

const links = {
    programs: [
        { label: "Online Courses", href: "/courses" },
        // { label: "IGCSE School", href: "/igcse-school" },
        // { label: "Tinkering Centres", href: "/tinkering" },
        { label: "Entrepreneurship Centre", href: "/gvedc" },
        // { label: "Hackathons", href: "/hackathons" },
    ],
    company: [
        { label: "About AyaTech", href: "/about" },
        { label: "Our Mentors", href: "/about#mentors" },
        { label: "Careers", href: "/careers" },
        { label: "Press Kit", href: "/press" },
    ],
    resources: [
        // { label: "Tinkering Store", href: "/store" },
        { label: "Student Dashboard", href: "/dashboard" },
        { label: "Blog", href: "/blog" },
        { label: "FAQs", href: "/faq" },
    ],
};

export default function Footer() {
    return (
        <footer className="footer-bg">
            <div className="container-main">
                {/* Top */}
                <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-3 mb-4">
                            <Image
                                src="/logo_transparent.png"
                                alt="AyaTech Logo"
                                width={120}
                                height={40}
                                className="h-10 w-auto"
                                style={{ mixBlendMode: 'multiply' }}
                            />
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Empowering the next generation of innovators through live courses
                            and world-class technical mentorship.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Twitter, href: "#" },
                                { Icon: Instagram, href: "#" },
                                { Icon: Linkedin, href: "#" },
                                { Icon: Youtube, href: "#" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 transition-all"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    {Object.entries(links).map(([key, items]) => (
                        <div key={key}>
                            <h4 className="font-semibold text-white text-sm uppercase tracking-wider mb-4 capitalize">
                                {key === "programs" ? "Programs" : key === "company" ? "Company" : "Resources"}
                            </h4>
                            <ul className="flex flex-col gap-2">
                                {items.map((item) => (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className="text-gray-400 text-sm hover:text-white transition-colors"
                                        >
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact strip */}
                <div className="border-t border-white/10 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        {
                            Icon: MapPin,
                            text: "Calicut (Kozhikode), Kerala, India",
                        },
                        {
                            Icon: Mail,
                            text: "hello@ayatech.in",
                        },
                        {
                            Icon: Phone,
                            text: "+91 xxx xxxx xxxx",
                        },
                    ].map(({ Icon, text }, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-2 text-gray-400 text-sm"
                        >
                            <Icon size={14} className="shrink-0 text-gold-400 opacity-80" />
                            <span>{text}</span>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© 2026 AyaTech. All rights reserved. Professional Theme.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="hover:text-white transition-colors">
                            Terms of Use
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
