"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useRazorpay } from "@/hooks/useRazorpay";
import { ArrowRight, Loader2 } from "lucide-react";

const C = {
  primaryGold: "#c2a055",
  primaryGoldHover: "#a68940",
  navyDark: "#1a202c",
  navyLight: "#2d3748",
  bgLight: "#f9fafb",
  textMuted: "#4b5563",
  white: "#ffffff"
};

function ApplyForm() {
  const searchParams = useSearchParams();
  const courseId = searchParams.get('course') || "General Enrollment";
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseId,
  });
  const [submitting, setSubmitting] = useState(false);
  
  const { processPayment } = useRazorpay();

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Typically you'd call your backend to create a genuine Razorpay Order ID here
    // For now we'll simulate the flow and invoke the Razorpay SDK
    
    // Use a default amount or fetch from course data if available
    const amount = 999; 
    
    setTimeout(async () => {
      try {
        await processPayment({
          amount,
          courseName: formData.course,
          userName: formData.name,
          userEmail: formData.email
        });
      } catch (err) {
        console.error("Payment failed", err);
      } finally {
        setSubmitting(false);
      }
    }, 1000);
  };

  return (
    <section style={{ minHeight: "100vh", padding: "8rem 1rem 5rem", backgroundColor: C.bgLight, display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
      <div style={{ maxWidth: "500px", width: "100%", backgroundColor: C.white, borderRadius: "24px", padding: "3rem 2rem", boxShadow: "0 25px 50px -12px rgba(0,0,0,0.1)", border: "1px solid rgba(0,0,0,0.05)" }}>
        
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p className="section-eyebrow" style={{ marginBottom: "0.5rem" }}>Secure Enrollment</p>
          <h1 className="font-display" style={{ fontSize: "2.2rem", color: C.navyDark, lineHeight: 1.2 }}>
            Complete your <span style={{ color: C.primaryGold }}>registration</span>
          </h1>
        </div>

        <form onSubmit={handlePayment} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          
          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.5rem" }}>Course Name</label>
            <input 
              type="text" 
              value={formData.course}
              onChange={e => setFormData({...formData, course: e.target.value})}
              required
              style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", backgroundColor: C.bgLight, color: C.navyDark, fontSize: "1rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.5rem" }}>Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              required
              style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", fontSize: "1rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.5rem" }}>Email Address</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              required
              style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", fontSize: "1rem" }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.9rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.5rem" }}>Phone Number</label>
            <input 
              type="tel" 
              placeholder="+91 99999 99999"
              value={formData.phone}
              onChange={e => setFormData({...formData, phone: e.target.value})}
              required
              style={{ width: "100%", padding: "0.85rem", borderRadius: "8px", border: "1px solid rgba(0,0,0,0.1)", fontSize: "1rem" }}
            />
          </div>

          <button 
            type="submit" 
            disabled={submitting}
            className="btn-gold" 
            style={{ marginTop: "1rem", padding: "1rem", fontSize: "1.1rem", display: "flex", justifyContent: "center", alignItems: "center", gap: "0.5rem", borderRadius: "8px", width: "100%", backgroundColor: C.primaryGold, color: C.white, border: "none" }}
          >
            {submitting ? (
              <><Loader2 size={18} className="animate-spin" /> Processing...</>
            ) : (
              <>Proceed to Payment <ArrowRight size={18} /></>
            )}
          </button>
        </form>
        
        <p style={{ textAlign: "center", fontSize: "0.85rem", color: C.textMuted, marginTop: "1.5rem" }}>
          Payments are secured by Razorpay
        </p>

      </div>
    </section>
  );
}

export default function ApplyPage() {
  return (
    <Suspense fallback={<div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}><Loader2 className="animate-spin" color={C.primaryGold} size={40} /></div>}>
      <ApplyForm />
    </Suspense>
  );
}
