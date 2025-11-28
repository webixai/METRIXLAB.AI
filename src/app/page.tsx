"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import { BuilderInterface } from "@/components/editor";
import ShowcaseSection from "@/components/ShowcaseSection";
import HeroSection from "@/components/HeroSection";
import ParallaxSection from "@/components/ParallaxSection";
import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import { motion } from "framer-motion";

export default function Home() {
  const { isSignedIn, isLoaded } = useAuth();

  if (!isLoaded) {
    return (
      <main 
        className="min-h-screen flex flex-col items-center justify-center"
        style={{
          background: 'linear-gradient(to bottom right, #3d4c41, #e6e6e6)',
        }}
        suppressHydrationWarning
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="mb-6"
        >
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full" />
        </motion.div>
        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-white text-xl font-light tracking-widest"
        >
          Loading
        </motion.div>
      </main>
    );
  }

  if (!isSignedIn) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen bg-background space-y-20 pt-24" suppressHydrationWarning>
          <HeroSection />
          <ParallaxSection
            backgroundImage="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80"
            title="Design Beautifully"
            subtitle="Bring your imagination to life with AI-powered creativity."
          />
          <ShowcaseSection />
        </main>
      </>
    );
  }

  return (
    <main 
      className="min-h-screen dark:from-gray-900 dark:to-gray-800"
      style={{
        background: 'linear-gradient(to bottom right, #3d4c41, #e6e6e6)',
      }}
      suppressHydrationWarning
    >
      <Menu />
      <div className="absolute top-4 right-4">
        <UserButton afterSignOutUrl="/" />
      </div>
      <BuilderInterface />
    </main>
  );
}
