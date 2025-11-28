'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-5xl font-bold text-purple-400 mb-4">Payment Successful 🎉</h1>
      <p className="text-gray-300 mb-6">
        Welcome to <span className="text-purple-500 font-semibold">MetrixLab Plus</span>!
        <br />Your subscription is now active.
      </p>

      <button
        onClick={() => router.push('/')}
        className="bg-purple-600 hover:bg-purple-700 transition-colors duration-200 text-white px-6 py-3 rounded-lg font-semibold"
      >
        Go to Dashboard
      </button>
    </div>
  );
}
