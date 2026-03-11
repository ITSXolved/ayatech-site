"use client";
import { useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { CheckCircle, ArrowRight, Home, AlertTriangle } from "lucide-react";
import Link from "next/link";

function SuccessContent() {
  const searchParams = useSearchParams();
  const paymentId = searchParams.get("paymentId") || "";
  const course = searchParams.get("course") || "your course";
  const name = searchParams.get("name") || "Student";
  const hasWarning = searchParams.get("warn") === "1";

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #f9fafb 0%, #fff 100%)",
        padding: "2rem 1rem",
      }}
    >
      <div
        style={{
          maxWidth: "540px",
          width: "100%",
          background: "#fff",
          borderRadius: "28px",
          padding: "3rem 2.5rem",
          boxShadow: "0 30px 60px -15px rgba(0,0,0,0.12)",
          border: "1px solid rgba(0,0,0,0.05)",
          textAlign: "center",
          animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            background: "rgba(194,160,85,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 1.5rem",
          }}
        >
          <CheckCircle size={42} color="#c2a055" strokeWidth={1.8} />
        </div>

        {/* Heading */}
        <h1
          className="font-display"
          style={{
            fontSize: "2rem",
            color: "#1a202c",
            marginBottom: "0.75rem",
            lineHeight: 1.25,
          }}
        >
          Payment{" "}
          <span style={{ color: "#c2a055" }}>Successful!</span>
        </h1>

        <p style={{ color: "#4b5563", marginBottom: "2rem", fontSize: "1.05rem", lineHeight: 1.6 }}>
          Hi <strong style={{ color: "#1a202c" }}>{name}</strong>, your enrollment for{" "}
          <strong style={{ color: "#1a202c" }}>{course}</strong> has been confirmed. We'll be in touch shortly with your access details.
        </p>

        {/* Payment ID box */}
        {paymentId && (
          <div
            style={{
              background: "#f9fafb",
              borderRadius: "12px",
              padding: "1rem 1.25rem",
              marginBottom: "2rem",
              border: "1px solid rgba(0,0,0,0.07)",
            }}
          >
            <p style={{ fontSize: "0.78rem", color: "#4b5563", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "0.35rem", fontFamily: "'JetBrains Mono', monospace" }}>
              Payment ID
            </p>
            <p
              style={{
                fontSize: "0.95rem",
                fontFamily: "'JetBrains Mono', monospace",
                color: "#1a202c",
                wordBreak: "break-all",
              }}
            >
              {paymentId}
            </p>
          </div>
        )}

        {/* Warning if verification had an issue */}
        {hasWarning && (
          <div
            style={{
              background: "rgba(251,191,36,0.1)",
              border: "1px solid rgba(251,191,36,0.3)",
              borderRadius: "10px",
              padding: "0.9rem 1rem",
              marginBottom: "1.5rem",
              display: "flex",
              gap: "0.6rem",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <AlertTriangle size={18} color="#d97706" style={{ flexShrink: 0, marginTop: "2px" }} />
            <p style={{ fontSize: "0.88rem", color: "#92400e" }}>
              Your payment was received but we had a temporary issue confirming it on our systems. Please save your Payment ID above and reach out to <strong>info@ayatech.org</strong> if you don't receive access within 2 hours.
            </p>
          </div>
        )}

        {/* What happens next */}
        <div
          style={{
            background: "rgba(194,160,85,0.06)",
            borderRadius: "14px",
            padding: "1.25rem",
            marginBottom: "2rem",
            textAlign: "left",
          }}
        >
          <p style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1a202c", marginBottom: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            What happens next?
          </p>
          {[
            "📧 You'll receive a confirmation email shortly",
            "🎓 Course access details will be sent within 2 hours",
            "📞 Our team will contact you to schedule your first session",
          ].map((step, i) => (
            <p key={i} style={{ fontSize: "0.93rem", color: "#374151", marginBottom: i < 2 ? "0.5rem" : 0, lineHeight: 1.5 }}>
              {step}
            </p>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <Link href="/courses" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "100%",
                padding: "0.9rem",
                borderRadius: "10px",
                background: "#c2a055",
                color: "#fff",
                border: "none",
                fontSize: "1rem",
                fontWeight: 600,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              Explore More Courses <ArrowRight size={16} />
            </button>
          </Link>

          <Link href="/" style={{ textDecoration: "none" }}>
            <button
              style={{
                width: "100%",
                padding: "0.9rem",
                borderRadius: "10px",
                background: "transparent",
                color: "#4b5563",
                border: "1px solid rgba(0,0,0,0.1)",
                fontSize: "0.95rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
              }}
            >
              <Home size={16} /> Back to Home
            </button>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ width: 40, height: 40, border: "3px solid #c2a055", borderTopColor: "transparent", borderRadius: "50%", animation: "spin 0.8s linear infinite" }} />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      }
    >
      <SuccessContent />
    </Suspense>
  );
}
