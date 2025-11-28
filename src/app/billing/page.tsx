'use client';

import React, { useState } from 'react';
import { useUser } from '@clerk/nextjs';
import Script from 'next/script';
import { useRouter } from 'next/navigation';

export default function BillingPage() {
  const { user } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    // Normally you'd request this order from your backend:
    const orderData = {
      id: 'order_demo_12345',
      amount: 24900, // ₹249 in paise
      currency: 'INR',
    };

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || 'rzp_test_placeholder',
      amount: orderData.amount,
      currency: orderData.currency,
      name: 'MetrixLab Plus',
      description: '₹249/month (Auto-Renewing)',
      order_id: orderData.id,
      handler: function (response: any) {
        console.log('Payment Success:', response);
        router.push('/success');
      },
      prefill: {
        name: user?.fullName || '',
        email: user?.primaryEmailAddress?.emailAddress || '',
      },
      theme: { color: '#8b5cf6' },
    };

    const paymentObject = new (window as any).Razorpay(options);
    paymentObject.open();
    setLoading(false);
  };

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#0a0a0a] text-gray-100 px-4">
        <h1 className="text-4xl font-bold text-purple-400 mb-2">MetrixLab Plus</h1>
        <p className="text-lg mb-6 text-gray-400">₹249/month (Auto-Renewing)</p>

        <div className="bg-[#111] p-6 rounded-2xl border border-purple-700 shadow-lg w-full max-w-md text-center">
          <p className="text-gray-300 mb-4">
            Get access to all premium editing features, complete AI tools, and faster builds.
          </p>
          <button
            onClick={handlePayment}
            disabled={loading}
            className="bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white px-6 py-3 rounded-lg font-semibold w-full"
          >
            {loading ? 'Processing...' : 'Subscribe with Razorpay'}
          </button>
        </div>
      </div>
    </>
  );
}
