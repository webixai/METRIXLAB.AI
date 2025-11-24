"use client";

import { useState } from "react";
import PromptPanel from "./PromptPanel";
import PreviewPanel from "./PreviewPanel";

export default function BuilderInterface() {
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string>("");

  const handleGenerate = async (prompt: string, template: string) => {
    setIsGenerating(true);
    setError("");

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, template }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate website");
      }

      setGeneratedCode(data.code);
    } catch (err: any) {
      setError(err.message);
      console.error("Generation error:", err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <PromptPanel
        onGenerate={handleGenerate}
        isGenerating={isGenerating}
        error={error}
      />
      <PreviewPanel code={generatedCode} />
    </div>
  );
}
