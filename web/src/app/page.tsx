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
      <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 lg:px-8 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Live Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-xs md:text-sm font-bold text-primary tracking-wide uppercase">Admissions Open for 2026</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight animate-slide-up">
              Empower the next generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">innovators</span>.
            </h1>

            <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Live courses in AI, coding, design, and hardware. IGCSE school. Tinkering labs. From Calicut, Kerala, to the world. Join 3,700+ learners today.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link
                href="/apply"
                className="px-10 py-4 md:py-5 bg-primary text-white text-lg font-bold rounded-xl shadow-xl shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all text-center"
              >
                JOIN AYATECH
              </Link>
              <Link
                href="/about"
                className="px-10 py-4 md:py-5 bg-white border-2 border-gray-100 text-gray-900 text-lg font-bold rounded-xl hover:border-primary hover:text-primary transition-all text-center"
              >
                See Our Campus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-white relative">
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
