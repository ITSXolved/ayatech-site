import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const { amount, courseName, userName, userEmail, userPhone, grade } = await req.json();

    if (!amount || !userEmail || !userName) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Create Razorpay order via Razorpay API
    const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || "";
    const keySecret = process.env.RAZORPAY_KEY_SECRET || "";

    if (!keyId || !keySecret) {
      return NextResponse.json({ error: "Razorpay keys not configured" }, { status: 500 });
    }

    const razorpayResponse = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + Buffer.from(`${keyId}:${keySecret}`).toString("base64"),
      },
      body: JSON.stringify({
        amount: 100, // TEMPORARY 1 RUPEE TEST (100 paise = 1 INR)
        currency: "INR",
        receipt: `rcpt_${Date.now()}`,
        notes: {
          course_name: courseName,
          student_name: userName,
          student_email: userEmail,
          student_phone: userPhone,
        },
      }),
    });

    if (!razorpayResponse.ok) {
      const errText = await razorpayResponse.text();
      console.error("Razorpay order creation failed:", errText);
      return NextResponse.json(
        { error: "Failed to create Razorpay order", details: errText },
        { status: 500 }
      );
    }

    const order = await razorpayResponse.json();
    console.log("Razorpay order created:", order.id);

    // 2. Pre-save application in Supabase as 'Pending'
    const { data: app, error: appError } = await supabaseAdmin
      .from("applications")
      .insert({
        student_name: userName,
        email: userEmail,
        phone: userPhone || "",
        class: grade || "",
        status: "Pending",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      })
      .select()
      .single();

    if (appError) {
      console.error("Error creating application:", appError);
      // Don't fail — still return order so payment can proceed
      // The webhook will handle recording if needed
    }

    // 3. Pre-create payment record as 'Pending'
    if (app) {
      await supabaseAdmin.from("payments").insert({
        application_id: app.id,
        razorpay_order_id: order.id,
        amount: amount,
        status: "Pending",
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      });
    }

    return NextResponse.json({
      orderId: order.id,
      applicationId: app?.id || null,
      currency: order.currency,
      amount: order.amount,
    });
  } catch (err: any) {
    console.error("Create order error:", err);
    return NextResponse.json({ error: "Internal Server Error", details: err.message }, { status: 500 });
  }
}
