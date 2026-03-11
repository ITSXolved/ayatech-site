"use client";

import { useCallback } from 'react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function useRazorpay() {
  const processPayment = useCallback(async ({ 
    amount, 
    orderId, 
    courseName,
    userName = "Student",
    userEmail = "student@ayatech.org"
  }: { 
    amount: number; 
    orderId?: string; 
    courseName: string;
    userName?: string;
    userEmail?: string;
  }) => {
    if (!window.Razorpay) {
      alert("Razorpay SDK not loaded. Please try again.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "", // Use live key from environment variable
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "AyaTech",
      description: `Enrollment for ${courseName}`,
      image: "https://ayatech.org/logo_transparent.png", // Full URL works best for Razorpay checkout
      order_id: orderId, // Optional server-side order ID
      handler: function (response: any) {
        alert(`Payment successful! ID: ${response.razorpay_payment_id}`);
        // Here you would typically call your backend to verify the payment
      },
      prefill: {
        name: userName,
        email: userEmail,
      },
      theme: {
        color: "#c2a055", // AILT Gold
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }, []);

  return { processPayment };
}
