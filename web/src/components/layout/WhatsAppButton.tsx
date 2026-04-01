'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = '919037985004'; // Ayatech contact
  const message = 'Hello AyaTech! I would like to know more about the courses.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3"
      aria-label="Contact us on WhatsApp"
    >
      {/* Tooltip */}
      <span className="bg-white text-gray-900 px-4 py-2 rounded-2xl text-sm font-bold shadow-xl border border-gray-100 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 translate-y-0 group-hover:translate-x-0 pointer-events-none">
        Need help? Chat with us!
      </span>
      
      {/* Icon Button */}
      <div className="w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all duration-300 relative overflow-hidden">
        {/* Particle animation layer */}
        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
        
        <MessageCircle size={32} className="relative z-10" />
      </div>
      
      {/* Pulse effect */}
      <div className="absolute inset-0 w-16 h-16 bg-[#25D366] rounded-full animate-ping opacity-20 pointer-events-none" 
           style={{ right: '0', left: 'auto', top: 'auto', bottom: '0' }} />
    </a>
  );
}
