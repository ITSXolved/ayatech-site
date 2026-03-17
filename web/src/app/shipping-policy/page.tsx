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
          <p className="text-[#6A7081] mb-8">This Shipping & Delivery Policy is part of our Terms and Conditions ("Terms") and should be therefore read alongside our main Terms: <Link href="https://ayatech.org/terms-and-conditions" className="text-[#c2a055]">https://ayatech.org/terms-and-conditions</Link></p>
          <p className="text-[#6A7081] mb-8">Please carefully review our Shipping & Delivery Policy when purchasing our products. This policy will apply to any order you place with us.</p>
          
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
              <h2 className="text-xl font-bold text-[#1a202c]">HOW CAN YOU CONTACT US ABOUT THIS POLICY?</h2>
              <p>
                If you have any further questions or comments, you may contact us by:
              </p>
              <p className="mt-2">
                <strong>AYADI CLOUDVERSITY LLP</strong><br />
                Address: Door No. 63/2243-L, Orbitz Complex, Jafarkhan Colony Road, Mavoor Road, Calicut Beach, Kozhikode, Kerala, India - 673032<br />
                Email: <Link href="mailto:ayatectechnicalschool@gmail.com" className="text-[#c2a055]">ayatectechnicalschool@gmail.com</Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
