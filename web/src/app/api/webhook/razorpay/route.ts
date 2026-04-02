import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@supabase/supabase-js';

// Service Role client for bypassing RLS
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const signature = req.headers.get('x-razorpay-signature');
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!signature || !webhookSecret) {
      return NextResponse.json({ error: 'Missing signature or secret' }, { status: 400 });
    }

    // 1. Verify Webhook Signature
    const expectedSignature = crypto
      .createHmac('sha256', webhookSecret)
      .update(body)
      .digest('hex');

    if (expectedSignature !== signature) {
      console.error('Invalid Razorpay Webhook Signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    }

    const event = JSON.parse(body);
    console.log('Razorpay Webhook Event:', event.event);

    // 2. Handle Payment Completion
    // We handle both direct payments and Payment Link payments
    if (event.event === 'payment.captured' || event.event === 'payment_link.paid') {
      const payment = event.payload.payment.entity;
      const paymentId = payment.id;
      const orderId = payment.order_id || event.payload.payment_link?.entity?.id;
      const amount = payment.amount / 100; // convert to INR
      
      // Get application_id from notes or reference_id
      const applicationId = payment.notes?.application_id || 
                           event.payload.payment_link?.entity?.reference_id ||
                           payment.notes?.applicationId;

      if (!applicationId) {
        console.warn('Webhook: No application_id found in payment notes/link metadata.');
        return NextResponse.json({ success: true, message: 'No application associated' });
      }

      // Record successful payment (idempotent)
      const { error: paymentError } = await supabaseAdmin
        .from('payments')
        .upsert({
          application_id: applicationId,
          razorpay_order_id: orderId,
          razorpay_payment_id: paymentId,
          amount: amount,
          status: 'Successful',
          updated_at: new Date().toISOString()
        }, { onConflict: 'razorpay_order_id' });

      if (paymentError) {
        console.error('Webhook Payment Update Error:', paymentError);
      }

      // Update application status to 'Enrolled'
      const { error: appError } = await supabaseAdmin
        .from('applications')
        .update({ status: 'Enrolled', updated_at: new Date().toISOString() })
        .eq('id', applicationId);

      if (appError) {
        console.error('Webhook Application Update Error:', appError);
      }

      // --- NEW: TRIGGER AUTOMATION (LMS + EMAILS + COMMISSIONS) ---
      try {
        const { processApplicationAutomation } = await import('@/lib/automation');
        await processApplicationAutomation(applicationId);
        console.log(`Successfully completed automation for Application: ${applicationId}`);
      } catch (autoErr) {
        console.error('Webhook Automation Error:', autoErr);
      }

      console.log(`Successfully processed payment for Application: ${applicationId}`);
    }

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Razorpay Webhook Error:', err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
