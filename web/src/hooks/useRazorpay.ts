"use client";

import { useCallback } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export function useRazorpay() {
  const router = useRouter();

  const processPayment = useCallback(
    async ({
      amount,
      courseName,
      userName = "Student",
      userEmail = "",
      userPhone = "",
    }: {
      amount: number;
      courseName: string;
      userName?: string;
      userEmail?: string;
      userPhone?: string;
    }) => {
      if (!window.Razorpay) {
        alert("Payment gateway is loading. Please wait a moment and try again.");
        return;
      }

      // Step 1: Create a Razorpay order on the server
      let orderId = "";
      let applicationId = "";

      try {
        const res = await fetch("/api/create-order", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount, courseName, userName, userEmail, userPhone }),
        });

        if (!res.ok) {
          const data = await res.json();
          throw new Error(data.error || "Failed to create order");
        }

        const data = await res.json();
        orderId = data.orderId;
        applicationId = data.applicationId || "";
        console.log("Razorpay order created:", orderId);
      } catch (err: any) {
        console.error("Order creation failed:", err);
        alert("Could not initiate payment: " + err.message);
        return;
      }

      // Step 2: Open Razorpay checkout
      const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";

      const options = {
        key: keyId,
        amount: amount * 100,
        currency: "INR",
        name: "AyaTech",
        description: `Enrollment: ${courseName}`,
        image: "/logo_transparent.png",
        order_id: orderId,

        // Step 3: Server-side signature verification on success
        handler: async function (response: {
          razorpay_payment_id: string;
          razorpay_order_id: string;
          razorpay_signature: string;
        }) {
          try {
            const verifyRes = await fetch("/api/verify-payment", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
                applicationId,
                amount,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok && verifyData.success) {
              // Step 4: Redirect to success page
              router.push(
                `/payment-success?paymentId=${response.razorpay_payment_id}&course=${encodeURIComponent(courseName)}&name=${encodeURIComponent(userName)}`
              );
            } else {
              alert("Payment verification failed. Please contact support with your payment ID: " + response.razorpay_payment_id);
            }
          } catch (err) {
            console.error("Verification error:", err);
            // Payment went through but verification call failed — still redirect with warning
            router.push(
              `/payment-success?paymentId=${response.razorpay_payment_id}&course=${encodeURIComponent(courseName)}&name=${encodeURIComponent(userName)}&warn=1`
            );
          }
        },

        prefill: {
          name: userName,
          email: userEmail,
          contact: userPhone,
        },

        theme: {
          color: "#c2a055",
        },

        modal: {
          ondismiss: function () {
            console.log("Payment modal dismissed by user");
          },
        },
      };

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (response: any) {
        console.error("Payment failed:", response.error);
        alert(
          `Payment failed: ${response.error.description || "Unknown error"}. Please try again.`
        );
      });

      rzp.open();
    },
    [router]
  );

  return { processPayment };
}
