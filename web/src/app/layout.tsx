import type { Metadata } from "next";
import { Inter, Outfit } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "AyaTech Global Academy — Empowering Next-Gen Innovators",
  description: "Join AyaTech Global Academy for live courses in AI, coding, design, and hardware. World-class technical mentorship and IGCSE school programs.",
  icons: {
    icon: "/favicon.ico",
  },
};

import WhatsAppButton from "@/components/layout/WhatsAppButton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased text-gray-900 overflow-x-hidden`}>
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
