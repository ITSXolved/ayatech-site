import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] pt-32 pb-20">
      <div className="container-main max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[#6A7081] hover:text-[#c2a055] mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-black/5">
          <h1 className="font-display text-4xl font-bold text-[#1a202c] mb-4">Contact Us</h1>
          <p className="text-[#6A7081] mb-12">We're here to help. Reach out to us for any queries regarding our courses, payments, or enrollment.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rgba(194, 160, 85, 0.1) flex items-center justify-center shrink-0 border border-rgba(194,160,85,0.2)">
                  <Mail className="text-[#c2a055]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a202c] mb-1">Email Us</h3>
                  <p className="text-sm text-[#6A7081] mb-2">For support, enrollment help, or corporate queries.</p>
                  <Link href="mailto:ayatectechnicalschool@gmail.com" className="text-[#c2a055] font-semibold">ayatectechnicalschool@gmail.com</Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rgba(194, 160, 85, 0.1) flex items-center justify-center shrink-0 border border-rgba(194,160,85,0.2)">
                  <Phone className="text-[#c2a055]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a202c] mb-1">Call Us</h3>
                  <p className="text-sm text-[#6A7081] mb-2">Mon-Sat, 9:00 AM to 6:00 PM IST</p>
                  <p className="text-[#c2a055] font-semibold">+91 9037665777</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rgba(194, 160, 85, 0.1) flex items-center justify-center shrink-0 border border-rgba(194,160,85,0.2)">
                  <MapPin className="text-[#c2a055]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a202c] mb-1">Our Location</h3>
                  <p className="text-sm text-[#6A7081]">
                    <strong>AYATECH TECHNICAL SCHOOL LLP</strong><br />
                    Calicut (Kozhikode), Kerala, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-rgba(194, 160, 85, 0.1) flex items-center justify-center shrink-0 border border-rgba(194,160,85,0.2)">
                  <Clock className="text-[#c2a055]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#1a202c] mb-1">Business Hours</h3>
                  <p className="text-sm text-[#6A7081]">
                    Monday - Saturday: 9:00 AM - 6:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F5F7F8] rounded-xl p-8 border border-black/5">
              <h3 className="font-bold text-[#1a202c] mb-4">Quick Support</h3>
              <p className="text-sm text-[#6A7081] mb-6">
                Most common questions about our programs, certifications, and fees are answered in our FAQ section.
              </p>
              <Link href="/faq">
                <button className="w-full py-3 bg-[#c2a055] text-white rounded-lg font-bold hover:bg-[#a68940] transition-colors shadow-sm">
                  Visit FAQ Center
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
