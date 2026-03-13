import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ShippingPolicy() {
  const lastUpdated = "March 12, 2026";
  
  return (
    <div className="min-h-screen bg-[#F5F7F8] pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#6A7081] hover:text-[#c2a055] mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-black/5">
          <h1 className="font-display text-4xl font-bold text-[#1a202c] mb-4">Shipping and Delivery Policy</h1>
          <p className="text-[#6A7081] mb-8">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-slate max-w-none text-[#1f2937] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">1. Introduction</h2>
              <p>
                AyaTech (<Link href="https://ayatech.org" className="text-[#c2a055]">https://ayatech.org</Link>), operated by <strong>AYATECH TECHNICAL SCHOOL LLP</strong>, primarily provides digital educational services, including online live courses and digital learning materials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">2. Digital Delivery</h2>
              <p>For all online courses and digital programs:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Delivery Timeline:</strong> Upon successful payment, you will receive a confirmation email immediately. Access to the course materials or LMS (Learning Management System) credentials will be provided via email within 24-48 hours.</li>
                <li><strong>Method:</strong> All digital content is delivered electronically to the email address provided during checkout.</li>
                <li><strong>Access Duration:</strong> Your access to the course content is guaranteed for the duration specified on the course information page.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">3. Physical Goods (Tinkering Kits)</h2>
              <p>
                If your course enrollment includes physical tinkering kits or hardware components:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Shipping Timeline:</strong> Kits are dispatched via reputed courier services within 5-7 working days of enrollment.</li>
                <li><strong>Delivery Area:</strong> We currently ship within India and to select locations in the Middle East. Delivery times vary by location (typically 4-10 working days).</li>
                <li><strong>Shipping Charges:</strong> Shipping costs, if any, will be clearly mentioned on the checkout page.</li>
                <li><strong>Tracking:</strong> You will receive a tracking number via email once your kit has been dispatched.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">4. Delays</h2>
              <p>
                AyaTech is not liable for any delay in delivery by the courier company or postal authorities, but we will help you track and resolve any shipping issues with our partners.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">5. Contact Us</h2>
              <p>
                If you haven't received your course access or physical kit within the specified timeline, please contact:
              </p>
              <p className="mt-2">
                <strong>AYATECH TECHNICAL SCHOOL LLP</strong><br />
                Address: Calicut (Kozhikode), Kerala, India<br />
                Email: <Link href="mailto:ayatectechnicalschool@gmail.com" className="text-[#c2a055]">ayatectechnicalschool@gmail.com</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
