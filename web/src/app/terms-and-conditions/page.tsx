import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsAndConditions() {
  const lastUpdated = "March 12, 2026";
  
  return (
    <div className="min-h-screen bg-[#F5F7F8] pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#6A7081] hover:text-[#c2a055] mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-black/5">
          <h1 className="font-display text-4xl font-bold text-[#1a202c] mb-4">Terms and Conditions</h1>
          <p className="text-[#6A7081] mb-8">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-slate max-w-none text-[#1f2937] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">1. Introduction</h2>
              <p>
                Welcome to AyaTech! These Terms and Conditions govern your use of <Link href="https://ayatech.org" className="text-[#c2a055]">https://ayatech.org</Link> and all associated services, courses, and digital products provided by <strong>AYADI CLOUDVERSITY LLP</strong> (referred to as "AyaTech," "we," "us," or "our").
              </p>
              <p>
                By enrolling in any of our courses or using our platform, you agree to comply with and be bound by these terms. If you disagree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">2. Use of Services</h2>
              <p>
                You must be at least 13 years old to use our services independently. If you are under 18, you must have parental or guardian consent. You agree to provide accurate, current, and complete information during the application or registration process.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">3. Course Enrollment and Payments</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Fees:</strong> Course fees are as listed on the website and must be paid in full (or as per agreed installments) to gain access to the educational materials and live sessions.</li>
                <li><strong>Payment Processing:</strong> We use third-party payment gateways like Razorpay to process payments. By making a payment, you agree to their terms and conditions as well.</li>
                <li><strong>Currency:</strong> All fees are listed in Indian Rupees (INR) unless otherwise specified.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">4. Intellectual Property</h2>
              <p>
                All content provided on AyaTech, including but not limited to course materials, videos, logos, text, and graphics, is the property of AYATECH TECHNICAL SCHOOL LLP or its licensors and is protected by copyright and other intellectual property laws. You are granted a limited, non-exclusive license to access the materials for your personal, non-commercial educational use.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">5. Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Share your account credentials with anyone else.</li>
                <li>Download, record, or redistribute course materials without explicit permission.</li>
                <li>Use our services for any illegal purpose or in violation of any local, state, or international law.</li>
                <li>Interfere with the security or operation of our website or services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, AYATECH TECHNICAL SCHOOL LLP shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">7. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your access to our services at our sole discretion, without notice, for conduct that we believe violates these Terms and Conditions or is harmful to other users or our business interests.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">8. Changes to Terms</h2>
              <p>
                We may update these Terms and Conditions from time to time. Your continued use of the services after any changes indicates your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">9. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Kozhikode, Kerala.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">9. Contact Us</h2>
              <p>
                If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
              </p>
              <p className="mt-2">
                <strong>AYADI CLOUDVERSITY LLP</strong><br />
                Door No. 63/2243-L, Orbitz Complex, Jafarkhan Colony Road, Mavoor Road, Calicut Beach, Kozhikode, Kerala, India - 673032<br />
                Email: <Link href="mailto:ayatectechnicalschool@gmail.com" className="text-[#c2a055]">ayatectechnicalschool@gmail.com</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
