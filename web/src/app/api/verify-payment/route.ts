import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_payment_id,
      razorpay_order_id,
      razorpay_signature,
      applicationId,
      amount,
    } = await req.json();

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      return NextResponse.json({ error: "Missing payment details" }, { status: 400 });
    }

    // 1. Verify Razorpay HMAC signature
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "";
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    if (expectedSignature !== razorpay_signature) {
      console.error("Payment signature verification FAILED");
      return NextResponse.json({ error: "Invalid payment signature" }, { status: 400 });
    }

    console.log(`Payment verified: ${razorpay_payment_id} for order ${razorpay_order_id}`);

    // 2. Update payment record to Captured
    const { error: paymentUpdateError } = await supabaseAdmin
      .from("payments")
      .update({
        razorpay_payment_id: razorpay_payment_id,
        status: "Captured",
        updated_at: new Date().toISOString(),
      })
      .eq("razorpay_order_id", razorpay_order_id);

    if (paymentUpdateError) {
      console.error("Error updating payment record:", paymentUpdateError);
      // Try inserting if update failed (edge case)
      if (applicationId) {
        await supabaseAdmin.from("payments").insert({
          application_id: applicationId,
          razorpay_order_id: razorpay_order_id,
          razorpay_payment_id: razorpay_payment_id,
          amount: amount || 0,
          status: "Captured",
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        });
      }
    }

    // 3. Update application status to 'Paid'
    if (applicationId) {
      const { error: appUpdateError } = await supabaseAdmin
        .from("applications")
        .update({
          status: "Paid",
          updated_at: new Date().toISOString(),
        })
        .eq("id", applicationId);

      if (appUpdateError) {
        console.error("Error updating application status:", appUpdateError);
      }
    }

    return NextResponse.json({
      success: true,
      paymentId: razorpay_payment_id,
    });
  } catch (err: any) {
    console.error("Verify payment error:", err);
    return NextResponse.json({ error: "Internal Server Error", details: err.message }, { status: 500 });
  }
}
