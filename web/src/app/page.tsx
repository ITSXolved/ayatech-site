'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F7F8] font-sans selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <NavBar />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-20 md:pb-32 px-6 lg:px-8 overflow-hidden">
        {/* Background glow blobs */}
        <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-80 -mt-40" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] -ml-32 -mb-32" />
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">

            {/* ── Left: Text Content ── */}
            <div className="flex flex-col items-start">
              {/* Live badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs md:text-sm font-bold text-primary tracking-wide uppercase">
                  Admissions Open for 2026
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1] tracking-tight animate-slide-up">
                Empower the next generation of{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  innovators
                </span>.
              </h1>

              <p
                className="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl animate-fade-in"
                style={{ animationDelay: '0.2s' }}
              >
                Live courses in AI, coding, design, and hardware. IGCSE school. Tinkering labs.
                From Calicut, Kerala, to the world. Join 3,700+ learners today.
              </p>

              <div
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in"
                style={{ animationDelay: '0.3s' }}
              >
                <Link
                  href="/apply"
                  className="px-9 py-4 bg-primary text-white text-base font-bold rounded-xl shadow-xl shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all text-center"
                >
                  JOIN AYATECH
                </Link>
                <Link
                  href="/about"
                  className="px-9 py-4 bg-white border-2 border-gray-100 text-gray-900 text-base font-bold rounded-xl hover:border-primary hover:text-primary transition-all text-center"
                >
                  See Our Campus
                </Link>
              </div>
            </div>

            {/* ── Right: Floating Image Card ── */}
            <div className="relative flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.4s' }}>
              {/* Main image card */}
              <div className="relative w-full max-w-[480px] animate-float rounded-3xl overflow-hidden shadow-2xl shadow-gray-900/20">
                <Image
                  src="/images/home/hero-slide-1.png"
                  alt="AyaTech student in AI lab"
                  width={480}
                  height={560}
                  className="w-full h-[380px] md:h-[480px] object-cover"
                  priority
                />
                {/* Subtle image overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              </div>

              {/* ── Floating badge: top-left — AI Lab ── */}
              <div
                className="absolute -left-6 top-8 flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-xl shadow-gray-900/10 z-10"
                style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.5s' }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.25 48.25 0 01-8.13-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">Advanced AI Lab</p>
                  <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">State of the Art</p>
                </div>
              </div>

              {/* ── Floating badge: bottom-right — Students ── */}
              <div
                className="absolute -right-4 bottom-10 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-xl shadow-gray-900/10 z-10"
                style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1.2s' }}
              >
                {/* Avatar stack */}
                <div className="flex -space-x-2">
                  {['S1', 'S2', 'S3'].map((s, i) => (
                    <div
                      key={s}
                      className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500"
                      style={{ zIndex: 3 - i }}
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 leading-tight">3,700+ Students</p>
                  <p className="text-[10px] font-semibold text-gray-400">Joined this year</p>
                </div>
              </div>

              {/* ── Decorative dot grid behind the card ── */}
              <div
                className="absolute -right-8 -bottom-8 w-48 h-48 -z-10 opacity-30"
                style={{
                  backgroundImage: 'radial-gradient(circle, #b38e3d 1.5px, transparent 1.5px)',
                  backgroundSize: '18px 18px',
                }}
              />
            </div>

          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-28 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            <div className="text-center group">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">3.7k+</div>
              <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Learners Global</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Expert Programs</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">30+</div>
              <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Countries Reached</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform">₹999</div>
              <div className="text-sm font-bold text-gray-400 tracking-widest uppercase">Starts At Only</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
