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
    Facebook,
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
        { label: "Contact Us", href: "/contact" },
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
                        <Link href="/" className="flex items-center mb-4">
                            <div style={{ background: '#FFFFFF', padding: '0.5rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <Image
                                    src="/logo_transparent.png"
                                    alt="AyaTech Logo"
                                    width={110}
                                    height={36}
                                    className="h-8 w-auto"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Empowering the next generation of innovators through live courses
                            and world-class technical mentorship.
                        </p>
                        <div className="flex gap-3">
                            {[
                                { Icon: Instagram, href: "https://www.instagram.com/ayadicloudversity/?hl=en" },
                                { Icon: Facebook, href: "https://www.facebook.com/people/Ayadi-Cloudversity/61573185167388/" },
                                { Icon: Youtube, href: "https://www.youtube.com/channel/UCXbWhD_Cw4i7atIDJjGttaQ" },
                                // { Icon: Twitter, href: "#" },
                                // { Icon: Linkedin, href: "#" },
                            ].map(({ Icon, href }, i) => (
                                <a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                            text: "Door No. 63/2243-L, Orbitz Complex, Jafarkhan Colony Road, Mavoor Road, Calicut Beach, Kozhikode, Kerala, India - 673032",
                            href: "https://maps.google.com/?q=Door No. 63/2243-L, Orbitz Complex, Jafarkhan Colony Road, Mavoor Road, Calicut Beach, Kozhikode, Kerala, India - 673032"
                        },
                        {
                            Icon: Mail,
                            text: "ayatectechnicalschool@gmail.com",
                            href: "mailto:ayatectechnicalschool@gmail.com"
                        },
                        {
                            Icon: Phone,
                            text: "090379 85004",
                            href: "tel:09037985004"
                        },
                    ].map(({ Icon, text, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            className="flex items-center gap-2 text-gray-400 text-sm hover:text-white transition-colors"
                        >
                            <Icon size={14} className="shrink-0 text-gold-400 opacity-80" />
                            <span>{text}</span>
                        </a>
                    ))}
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
                    <p>© 2026 AyaTech. All rights reserved. Professional Theme.</p>
                    <div className="flex gap-4">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
                            Terms of Use
                        </Link>
                        <Link href="/refund-policy" className="hover:text-white transition-colors">
                            Refund Policy
                        </Link>
                        <Link href="/shipping-policy" className="hover:text-white transition-colors">
                            Shipping Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
