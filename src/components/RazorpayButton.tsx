"use client";
import Script from "next/script";
import { useUser } from "@clerk/nextjs";

export default function RazorpayButton() {
  const { user } = useUser();

  async function handlePayment() {
    const res = await fetch("/api/razorpay", { method: "POST" });
    const data = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: "INR",
      name: "METRIXLAB CREATION",
      description: "Premium Subscription",
      order_id: data.order.id,
      prefill: {
        name: user?.fullName || "User",
        email: user?.primaryEmailAddress?.emailAddress,
      },
      theme: {
        color: "#A3A86D",
      },
      handler: function (response: any) {
        alert("Payment successful!");
      },
    };

    // @ts-ignore
    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
      <button
        onClick={handlePayment}
        className="bg-[#A3A86D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#8E955D] transition"
      >
        Upgrade to Premium
      </button>
    </>
  );
}
