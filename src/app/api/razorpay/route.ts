import Razorpay from "razorpay";
import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST() {
  try {
    const { userId } = auth();
    if (!userId) {
      return NextResponse.json({ error: "You must sign in first." }, { status: 401 });
    }

    const order = await razorpay.orders.create({
      amount: 600 * 100, // ₹600 in paise
      currency: "INR",
      receipt: `receipt_${userId}_${Date.now()}`,
    });

    return NextResponse.json({ order });
  } catch (error: any) {
    console.error("Razorpay error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
