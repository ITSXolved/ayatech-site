import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AyaTech — Empowering Innovation. Building Futures.",
  description:
    "Live tech courses, Cambridge IGCSE online school & maker spaces from Calicut, Kerala. From ₹999. Join 3,700+ learners in 30+ countries.",
  keywords: [
    "AyaTech",
    "online courses",
    "IGCSE school",
    "tinkering kits",
    "AI courses",
    "coding bootcamp",
    "Kerala edtech",
    "Calicut",
  ],
  openGraph: {
    title: "AyaTech — Empowering Innovation. Building Futures.",
    description:
      "Live courses in AI, coding, design, and hardware. IGCSE school. Tinkering labs. From Calicut, Kerala, to the world.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
