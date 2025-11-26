"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { BuilderInterface } from "@/components/editor";
import ShowcaseSection from "@/components/ShowcaseSection";
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
      <main className="min-h-screen bg-background space-y-20">
        <HeroSection />
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
