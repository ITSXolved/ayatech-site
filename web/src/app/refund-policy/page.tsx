import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
  const lastUpdated = "March 12, 2026";
  
  return (
    <div className="min-h-screen bg-[#F5F7F8] pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#6A7081] hover:text-[#c2a055] mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-black/5">
          <h1 className="font-display text-4xl font-bold text-[#1a202c] mb-4">Refund and Cancellation Policy</h1>
          <p className="text-[#6A7081] mb-8">Last Updated: {lastUpdated}</p>
          
          <div className="prose prose-slate max-w-none text-[#1f2937] space-y-6">
            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">1. Introduction</h2>
              <p>
                At AyaTech, we want to ensure that our students are satisfied with the educational experience we provide. This policy outlines our refund and cancellation procedures for all courses and programs offered through <Link href="https://ayatech.org" className="text-[#c2a055]">https://ayatech.org</Link>, operated by <strong>AYATECH TECHNICAL SCHOOL LLP</strong>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">2. Cancellation Policy</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Student Cancellations:</strong> You may cancel your enrollment in a course at any time. However, refunds are subject to the conditions outlined below.</li>
                <li><strong>AyaTech Cancellations:</strong> We reserve the right to cancel or reschedule any live batch due to low enrollment, mentor unavailability, or technical issues. In such cases, students will be offered a full refund or the option to transfer to the next available batch.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">3. Refund Eligibility</h2>
              <p>A refund may be requested under the following conditions:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Full Refund:</strong> If a refund request is made at least 7 days before the start date of the live course or batch.</li>
                <li><strong>Partial Refund:</strong> If a refund request is made between 1 to 6 days before the start date, a 50% refund will be issued.</li>
                <li><strong>No Refund:</strong> No refunds will be issued once the live batch has started, or once access to self-paced course materials has been provided.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">4. Refund Process</h2>
              <p>
                To request a refund, please send an email to <Link href="mailto:ayatectechnicalschool@gmail.com" className="text-[#c2a055]">ayatectechnicalschool@gmail.com</Link> with your name, course details, and reason for the request. 
              </p>
              <p>
                Once approved, refunds will be processed within 5-7 working days and will be credited back to the original payment method used during enrollment.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">5. Exceptional Circumstances</h2>
              <p>
                We understand that emergencies happen. If you have an exceptional circumstance (e.g., medical emergency) that prevents you from attending a course, please contact us, and we may consider a batch transfer or a credit toward a future course on a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#1a202c]">6. Contact Us</h2>
              <p>
                For any questions regarding our Refund and Cancellation Policy, please contact:
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
