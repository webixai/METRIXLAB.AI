"use client";

import { useState } from "react";
import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { BuilderInterface } from "@/components/editor";
import ShowcaseSection from "@/components/ShowcaseSection";
import MotionWrapper from "@/components/MotionWrapper";
import HeroSection from "@/components/HeroSection";

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
      <main className="min-h-screen bg-background">
        <div className="min-h-screen flex flex-col items-center justify-center gap-6 py-20 px-4">
          <div className="text-center max-w-2xl">
            <MotionWrapper>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-4 text-primary">METRIXLAB CREATION</h1>
            </MotionWrapper>
            <MotionWrapper delay={0.2}>
              <p className="text-xl mb-8 text-text">Build stunning, AI-powered websites in seconds</p>
            </MotionWrapper>
            <MotionWrapper delay={0.4}>
              <div className="flex gap-4 justify-center flex-wrap">
                <button
                  onClick={() => router.push('/auth/sign-in')}
                  className="px-8 py-3 rounded-xl text-white font-semibold bg-primary hover:bg-primary/90 transition"
                >
                  Sign In
                </button>
                <button
                  onClick={() => router.push('/auth/sign-up')}
                  className="px-8 py-3 rounded-xl text-white font-semibold bg-secondary hover:bg-secondary/90 transition"
                >
                  Sign Up
                </button>
              </div>
            </MotionWrapper>
          </div>
        </div>
        <ShowcaseSection />
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
