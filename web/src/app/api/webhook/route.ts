import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || "ayatech_tech_5001";

    if (!signature) {
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

    // Verify webhook authenticity
    const expectedSignature = crypto
      .createHmac("sha256", webhookSecret)
      .update(body)
      .digest("hex");

    if (signature !== expectedSignature) {
      console.error("Invalid Razorpay Webhook Signature");
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(body);
    console.log("Razorpay Webhook Event:", event.event);

    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;
      const { email, contact, notes, order_id } = payment;
      const studentName = notes?.student_name || "Student";
      const amount = payment.amount / 100;

      console.log(`Webhook: Processing captured payment ${payment.id} for ${email}`);

      // 1. Find the payment record by order_id and update it
      const { data: existingPayment } = await supabaseAdmin
        .from("payments")
        .select("id, application_id")
        .eq("razorpay_order_id", order_id)
        .maybeSingle();

      if (existingPayment) {
        // Update existing payment record
        await supabaseAdmin
          .from("payments")
          .update({
            razorpay_payment_id: payment.id,
            status: "Captured",
            updated_at: new Date().toISOString(),
          })
          .eq("id", existingPayment.id);

        // Update application status to Paid
        if (existingPayment.application_id) {
          await supabaseAdmin
            .from("applications")
            .update({
              status: "Paid",
              updated_at: new Date().toISOString(),
            })
            .eq("id", existingPayment.application_id);

          console.log(`✅ Webhook: Updated application ${existingPayment.application_id} to Paid`);
        }
      } else {
        // Fallback: Payment arrived via webhook but no order exists yet
        // Create a new application + payment record
        console.log("Webhook: No matching order found, creating new records");

        const { data: newApp } = await supabaseAdmin
          .from("applications")
          .insert({
            student_name: studentName,
            email: email || "",
            phone: contact || "",
            status: "Paid",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          })
          .select()
          .single();

        if (newApp) {
          await supabaseAdmin.from("payments").insert({
            application_id: newApp.id,
            razorpay_order_id: order_id,
            razorpay_payment_id: payment.id,
            amount: amount,
            status: "Captured",
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
          });
          console.log(`✅ Webhook: Created fallback application ${newApp.id}`);
        }
      }
    }

    if (event.event === "payment.failed") {
      const payment = event.payload.payment.entity;
      console.warn(`❌ Webhook: Payment failed - ${payment.id}, order: ${payment.order_id}`);

      // Mark the pending payment as Failed
      await supabaseAdmin
        .from("payments")
        .update({
          status: "Failed",
          updated_at: new Date().toISOString(),
        })
        .eq("razorpay_order_id", payment.order_id);
    }

    return NextResponse.json({ status: "ok" });
  } catch (err: any) {
    console.error("Webhook Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
