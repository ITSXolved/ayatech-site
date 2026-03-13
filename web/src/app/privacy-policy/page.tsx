import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "March 12, 2026";
  
  return (
    <div className="min-h-screen bg-[#F5F7F8] pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#6A7081] hover:text-[#c2a055] mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-black/5">
          <h1 className="font-display text-4xl font-bold text-[#1a202c] mb-4">Privacy Policy</h1>
          <p className="text-[#6A7081] mb-8">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-slate max-w-none text-[#1f2937] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">1. Introduction</h2>
              <p>
                AyaTech ("we," "us," or "our"), operated by <strong>AYATECH TECHNICAL SCHOOL LLP</strong>, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and share information about you when you visit our website at <Link href="https://ayatech.org" className="text-[#c2a055]">https://ayatech.org</Link> or its subdomains (including <Link href="https://erp.ayatech.org" className="text-[#c2a055]">erp.ayatech.org</Link>), and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">2. Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and physical address provided during course application or registration.</li>
                <li><strong>Payment Information:</strong> When you make a payment, your credit card or other payment details are processed by our payment gateway providers (e.g., Razorpay). We do not store your full card details on our servers.</li>
                <li><strong>Educational Information:</strong> Details provided in application forms, such as educational background and course preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Process your course applications and payments.</li>
                <li>Provide, maintain, and improve our educational services.</li>
                <li>Send you technical notices, updates, and support messages.</li>
                <li>Communicate with you about courses, programs, and news that may be of interest to you.</li>
                <li>Comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">4. Sharing of Information</h2>
              <p>
                We do not share your personal information with third parties except in the following circumstances:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>With service providers who need access to such information to carry out work on our behalf (e.g., payment processors, hosting services).</li>
                <li>In response to a request for information if we believe disclosure is in accordance with, or required by, any applicable law or legal process.</li>
                <li>Between and among AyaTech and our current and future parents, affiliates, and subsidiaries.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">5. Data Security</h2>
              <p>
                We use reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">6. Your Rights</h2>
              <p>
                Depending on your location, you may have the right to access, correct, or delete your personal data. You can contact us at any time to exercise these rights.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                <strong>AYATECH TECHNICAL SCHOOL LLP</strong><br />
                Calicut (Kozhikode), Kerala, India<br />
                Email: <Link href="mailto:ayatectechnicalschool@gmail.com" className="text-[#c2a055]">ayatectechnicalschool@gmail.com</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
