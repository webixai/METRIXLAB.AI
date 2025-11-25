"use client";

import RazorpayButton from "@/components/RazorpayButton";
import { UserButton } from "@clerk/nextjs";

export default function UpgradePage() {
  return (
    <main className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, #3d4c41, #e6e6e6)' }}>
      <div className="absolute top-4 right-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="max-w-2xl w-full text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Upgrade to Premium</h1>
          <p className="text-white text-lg mb-8">
            Unlock advanced tools and features to take your website building to the next level.
          </p>
          
          <div className="bg-white rounded-lg p-8 shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4" style={{ color: '#999999' }}>Premium Features</h2>
            <ul className="text-left space-y-3 text-gray-700 mb-8">
              <li>✨ <strong>AI Copywriter</strong> - Advanced AI text generation</li>
              <li>📊 <strong>SEO Optimizer</strong> - Built-in SEO optimization</li>
              <li>🎬 <strong>Animation Controls</strong> - Add dynamic animations</li>
              <li>🎨 <strong>Full CSS Editor</strong> - Complete CSS control</li>
              <li>💡 <strong>Advanced Responsive Editor</strong> - Expert-level design tools</li>
              <li>🚀 <strong>Priority Support</strong> - 24/7 dedicated help</li>
            </ul>
            
            <div className="mb-8 pb-8 border-b border-gray-300">
              <p className="text-3xl font-bold text-gray-900 mb-2">₹1,500<span className="text-lg">/month</span></p>
              <p className="text-gray-600">Secure payment powered by Razorpay</p>
            </div>
            
            <RazorpayButton />
          </div>
          
          <p className="text-white text-sm">
            Cancel anytime. Secure and trusted payment.
          </p>
        </div>
      </div>
    </main>
  );
}
