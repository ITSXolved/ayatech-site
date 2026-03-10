import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get("x-razorpay-signature");
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET || "ayatech_secret_123";

    if (!signature) {
      return NextResponse.json({ error: "No signature" }, { status: 400 });
    }

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

    // Handle the event
    if (event.event === "payment.captured") {
      const payment = event.payload.payment.entity;
      console.log(`Payment Captured: ${payment.id} for ${payment.amount / 100} ${payment.currency}`);
      // TODO: Update your database, send email to student, etc.
    }

    return NextResponse.json({ status: "ok" });
  } catch (err: any) {
    console.error("Webhook Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
