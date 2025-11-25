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
    setGeneratedCode("");

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 90000);

      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, template }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate website");
      }

      if (data.code) {
        setGeneratedCode(data.code);
      } else {
        throw new Error("No code generated. Please try again.");
      }
    } catch (err: any) {
      let errorMessage = "Failed to generate website. Please try again.";
      
      if (err.name === "AbortError") {
        errorMessage = "Request timed out after 90 seconds. The AI is taking too long. Please try a simpler prompt or try again.";
      } else if (err.message) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
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
