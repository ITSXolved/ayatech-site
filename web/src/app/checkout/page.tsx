'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { verifyRazorpayPayment } from '../apply/razorpay-actions';

function CheckoutContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const orderId = searchParams.get('order_id');
    const amount = searchParams.get('amount');
    const name = searchParams.get('name');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');
    const applicationId = searchParams.get('application_id');
    const courseName = searchParams.get('course_name');

    useEffect(() => {
        if (!orderId || !amount) {
            setError('Invalid checkout session. Please return to the application form.');
            setLoading(false);
            return;
        }

        const loadRazorpay = async () => {
            const script = document.createElement('script');
            script.src = 'https://checkout.razorpay.com/v1/checkout.js';
            script.async = true;
            script.onload = () => {
                const options = {
                    key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                    amount: parseInt(amount),
                    currency: 'INR',
                    name: 'Ayatech Technical School',
                    description: `Payment for ${courseName || 'Course'}`,
                    order_id: orderId,
                    handler: async function (response: any) {
                        try {
                            const result = await verifyRazorpayPayment({
                                orderId: orderId,
                                paymentId: response.razorpay_payment_id,
                                signature: response.razorpay_signature,
                                applicationId: applicationId || '',
                                amount: parseInt(amount)
                            });

                            if (result.success) {
                                router.push(`/payment-success?paymentId=${response.razorpay_payment_id}&course=${encodeURIComponent(courseName || 'Course')}&name=${encodeURIComponent(name || '')}`);
                            } else {
                                setError(result.error || 'Payment verification failed.');
                            }
                        } catch (err) {
                            console.error('Payment verify error:', err);
                            setError('Something went wrong. Please check your bank or contact support.');
                        }
                    },
                    prefill: {
                        name: name || '',
                        email: email || '',
                        contact: phone || '',
                    },
                    theme: {
                        color: '#4F46E5',
                    },
                };

                const rzp = new (window as any).Razorpay(options);
                rzp.open();
                setLoading(false);
            };
            document.body.appendChild(script);
        };

        loadRazorpay();
    }, [orderId, amount, name, email, phone, applicationId, courseName, router]);

    return (
        <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center p-4">
            <div className="max-w-md w-full text-center space-y-6">
                {loading ? (
                    <>
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mx-auto"></div>
                        <h1 className="text-2xl font-bold text-white">Opening Secure Payment Portal...</h1>
                        <p className="text-gray-400">Please do not refresh this page.</p>
                    </>
                ) : error ? (
                    <div className="bg-red-500/10 border border-red-500/50 p-6 rounded-2xl">
                        <div className="text-red-500 text-4xl mb-4">⚠️</div>
                        <h1 className="text-xl font-bold text-white mb-2">Payment Interrupted</h1>
                        <p className="text-red-400 mb-6">{error}</p>
                        <button 
                            onClick={() => window.location.href = 'https://erp.ayatech.org/apply'}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl transition-all"
                        >
                            Return to Application
                        </button>
                    </div>
                ) : (
                    <h1 className="text-xl font-semibold text-white">Please follow the payment instructions in the popup...</h1>
                )}
            </div>
        </div>
    );
}

export default function CheckoutPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <CheckoutContent />
        </Suspense>
    );
}
