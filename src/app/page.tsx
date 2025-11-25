"use client";

import { useState } from "react";
import BuilderInterface from "@/components/BuilderInterface";

export default function Home() {
  return (
    <main 
      className="min-h-screen dark:from-gray-900 dark:to-gray-800"
      style={{
        background: 'linear-gradient(to bottom right, #3d4c41, #e6e6e6)',
      }}
    >
      <BuilderInterface />
    </main>
  );
}
