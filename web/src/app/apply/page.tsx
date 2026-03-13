"use client";
import { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRazorpay } from "@/hooks/useRazorpay";
import { ArrowRight, Loader2, Lock, ShieldCheck, ChevronDown } from "lucide-react";

// Course type from our API route
interface CourseItem {
  id: number;
  name: string;
  amount?: number;
}

const C = {
  primaryGold: "#c2a055",
  navyDark: "#1a202c",
  bgLight: "#f9fafb",
  textMuted: "#4b5563",
  white: "#ffffff",
  border: "rgba(0,0,0,0.09)",
};

const GRADE_OPTIONS = [
  "Class 1 - 4",
  "Class 5",
  "Class 6",
  "Class 7",
  "Class 8",
  "Class 9",
  "Class 10",
  "Class 11",
  "Class 12",
  "Undergraduate",
  "Postgraduate",
  "Working Professional",
  "Other"
];

// Fallback pricing for common courses if LMS doesn't provide price
const FALLBACK_PRICES: Record<string, number> = {
  "Intro to Python Programming": 999,
  "Vibe Coding: Build Apps with AI": 1499,
  "Web Development Bootcamp": 2499,
  "AI Tools Masterclass for Students": 999,
  "AI-Powered Video Creation & Editing": 1499,
  "Teaching AI: Educators' Toolkit": 1299,
  "Graphic Design with Canva & AI": 999,
  "UI/UX Design Fundamentals": 1999,
  "Mobile App Development (Flutter)": 2499,
};

function ApplyForm() {
  const searchParams = useSearchParams();
  const courseParam = searchParams.get("course") || "";
  const amountParam = parseInt(searchParams.get("amount") || "0", 10);

  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loadingCourses, setLoadingCourses] = useState(true);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: courseParam || "",
    grade: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const { processPayment } = useRazorpay();

  useEffect(() => {
    async function getCourses() {
      try {
        // Fetch from our server-side API route — has access to CANVAS_API_TOKEN
        const res = await fetch("/api/courses");
        if (!res.ok) throw new Error("Failed to load courses");
        const data: CourseItem[] = await res.json();
        setCourses(data || []);
      } catch (err) {
        console.error("Failed to load courses:", err);
      } finally {
        setLoadingCourses(false);
      }
    }
    getCourses();
  }, []);

  const getAmount = () => {
    // Priority 1: URL param (from direct enrollment link)
    if (amountParam > 0 && formData.course === courseParam) return amountParam;
    // Priority 2: Amount from the fetched API course list
    const apiCourse = courses.find(c => c.name === formData.course);
    if (apiCourse?.amount && apiCourse.amount > 0) return apiCourse.amount;
    // Priority 3: Static fallback map
    return FALLBACK_PRICES[formData.course] || 999;
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.grade) {
      setError("Please fill in all required fields.");
      return;
    }

    const phoneClean = formData.phone.replace(/\s+/g, "").replace(/^(\+91)/, "");
    if (!/^\d{10}$/.test(phoneClean)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    setSubmitting(true);
    try {
      await processPayment({
        amount: getAmount(),
        courseName: formData.course || "General Enrollment",
        userName: formData.name,
        userEmail: formData.email,
        userPhone: formData.phone,
        grade: formData.grade, // Pass grade to Razorpay order creation
      });
    } catch (err: any) {
      console.error("Payment initiation failed:", err);
      setError("Could not start payment. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const amount = getAmount();

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.85rem",
    borderRadius: "10px",
    border: `1.5px solid ${C.border}`,
    fontSize: "1rem",
    outline: "none",
    color: C.navyDark,
    boxSizing: "border-box",
    appearance: "none",
    backgroundColor: "#fff",
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "8rem 1rem 5rem",
        background: `radial-gradient(ellipse 80% 50% at 50% -10%, rgba(194,160,85,0.08) 0%, transparent 60%), ${C.bgLight}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          maxWidth: "520px",
          width: "100%",
          backgroundColor: C.white,
          borderRadius: "28px",
          padding: "3rem 2.25rem",
          boxShadow: "0 30px 60px -15px rgba(0,0,0,0.12)",
          border: `1px solid ${C.border}`,
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <p
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.4rem",
              fontSize: "0.78rem",
              fontWeight: 700,
              color: C.primaryGold,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "0.75rem",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            <Lock size={12} /> Secure Enrollment
          </p>
          <h1
            className="font-display"
            style={{ fontSize: "2rem", color: C.navyDark, lineHeight: 1.2, marginBottom: "0.5rem" }}
          >
            Admission <span style={{ color: C.primaryGold }}>Form</span>
          </h1>
          <p style={{ fontSize: "0.95rem", color: C.textMuted }}>
            Enter your details to proceed with the enrollment.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handlePayment} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          
          {/* LMS Course Dropdown */}
          <div style={{ position: "relative" }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.45rem" }}>
              Select Desired Course <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <select
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              required
              style={inputStyle}
            >
              <option value="">-- Choose a Course --</option>
              {loadingCourses ? (
                <option disabled>Loading LMS courses...</option>
              ) : (
                courses.map(c => (
                  <option key={c.id} value={c.name}>{c.name}</option>
                ))
              )}
              {/* Fallback internal list if LMS is empty or loading failed */}
              {courses.length === 0 && Object.keys(FALLBACK_PRICES).map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <ChevronDown size={18} style={{ position: "absolute", right: "1rem", top: "2.6rem", pointerEvents: "none", color: C.textMuted }} />
          </div>

          {/* Grade Dropdown */}
          <div style={{ position: "relative" }}>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.45rem" }}>
              Current Class/Grade <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <select
              value={formData.grade}
              onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
              required
              style={inputStyle}
            >
              <option value="">-- Select Grade --</option>
              {GRADE_OPTIONS.map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <ChevronDown size={18} style={{ position: "absolute", right: "1rem", top: "2.6rem", pointerEvents: "none", color: C.textMuted }} />
          </div>

          {/* Full Name */}
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.45rem" }}>
              Full Name <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="text"
              placeholder="Full name of the student"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={inputStyle}
            />
          </div>

          {/* Email */}
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.45rem" }}>
              Email Address <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={inputStyle}
            />
          </div>

          {/* Phone */}
          <div>
            <label style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, color: C.navyDark, marginBottom: "0.45rem" }}>
              Phone Number <span style={{ color: "#ef4444" }}>*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 99999 99999"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
              style={inputStyle}
            />
          </div>

          {/* Error message */}
          {error && (
            <div
              style={{
                background: "rgba(239,68,68,0.08)",
                border: "1px solid rgba(239,68,68,0.25)",
                borderRadius: "8px",
                padding: "0.75rem 1rem",
                fontSize: "0.9rem",
                color: "#b91c1c",
              }}
            >
              {error}
            </div>
          )}

          {/* Amount summary */}
          <div
            style={{
              background: "rgba(194,160,85,0.07)",
              border: "1px solid rgba(194,160,85,0.2)",
              borderRadius: "12px",
              padding: "1rem 1.25rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "0.5rem"
            }}
          >
            <span style={{ fontSize: "0.9rem", color: C.textMuted, fontWeight: 500 }}>Enrollment Fee</span>
            <span
              className="font-display"
              style={{ fontSize: "1.7rem", color: C.navyDark, letterSpacing: "-0.02em" }}
            >
              ₹{amount.toLocaleString("en-IN")}
            </span>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={submitting}
            style={{
              marginTop: "0.5rem",
              padding: "1rem",
              fontSize: "1.05rem",
              fontWeight: 700,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              borderRadius: "10px",
              width: "100%",
              backgroundColor: submitting ? "#a68940" : C.primaryGold,
              color: C.white,
              border: "none",
              cursor: submitting ? "not-allowed" : "pointer",
              transition: "background 0.2s, transform 0.15s",
              letterSpacing: "0.01em",
            }}
          >
            {submitting ? (
              <>
                <Loader2 size={18} className="animate-spin" /> Initializing Payment...
              </>
            ) : (
              <>
                Confirm and Pay ₹{amount.toLocaleString("en-IN")} <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Trust badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
            marginTop: "1.5rem",
          }}
        >
          <ShieldCheck size={14} color={C.textMuted} />
          <p style={{ textAlign: "center", fontSize: "0.82rem", color: C.textMuted }}>
            256-bit SSL · Secured by Razorpay
          </p>
        </div>
      </div>
    </section>
  );
}

export default function ApplyPage() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Loader2 className="animate-spin" color={C.primaryGold} size={40} />
        </div>
      }
    >
      <ApplyForm />
    </Suspense>
  );
}
