"use client";

import { useState } from "react";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import BuilderInterface from "@/components/BuilderInterface";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  if (!isLoaded) {
    return (
      <main 
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom right, #3d4c41, #e6e6e6)',
        }}
      >
        <div className="text-white text-xl">Loading...</div>
      </main>
    );
  }

  if (!isSignedIn) {
    return (
      <main 
        className="min-h-screen flex flex-col items-center justify-center gap-6"
        style={{
          background: 'linear-gradient(to bottom right, #3d4c41, #e6e6e6)',
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">METRIXLAB CREATION</h1>
          <p className="text-white text-lg mb-8">Build amazing websites with AI</p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => router.push('/auth/sign-in')}
              className="px-6 py-3 rounded-lg text-white font-semibold transition-colors"
              style={{ backgroundColor: '#999999' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a7a7a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#999999'}
            >
              Sign In
            </button>
            <button
              onClick={() => router.push('/auth/sign-up')}
              className="px-6 py-3 rounded-lg text-white font-semibold transition-colors"
              style={{ backgroundColor: '#999999' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#7a7a7a'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#999999'}
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main 
      className="min-h-screen dark:from-gray-900 dark:to-gray-800"
      style={{
        background: 'linear-gradient(to bottom right, #3d4c41, #e6e6e6)',
      }}
    >
      <div className="absolute top-4 right-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <BuilderInterface />
    </main>
  );
}
