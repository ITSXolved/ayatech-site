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
<<<<<<< HEAD
        <script src="https://checkout.razorpay.com/v1/checkout.js" async></script>
=======
>>>>>>> e21efb43fe3df5b84ea13a10e50b72907f0c5a5f
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
