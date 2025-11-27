"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ShowcaseSection() {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const templates = [
    "Portfolio Design",
    "Startup Landing",
    "Restaurant Site",
    "Medical Clinic",
    "Fitness Studio",
    "Custom Design",
  ];

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplate(template);
    setPrompt("");
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a prompt to generate your website!");
      return;
    }

    setIsGenerating(true);

    try {
      // Call the AI generation API
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          template: selectedTemplate,
          prompt: prompt,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        // Store the generated HTML and redirect to preview
        localStorage.setItem("generatedHTML", data.code);
        window.location.href = "/preview";
      } else {
        alert("Failed to generate website. Please try again.");
      }
    } catch (error) {
      console.error("Generation error:", error);
      alert("An error occurred while generating your website.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <section>
      <ScrollReveal>
        <h2 className="text-3xl font-display text-center mb-8">Beautiful AI Templates</h2>
      </ScrollReveal>
      <div className="grid-art">
        {templates.map((template, index) => (
          <ScrollReveal key={template} delay={0.1 * (index + 1)}>
            <motion.div
              className="card p-6 cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleTemplateSelect(template)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {template}
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Prompt Modal */}
      <AnimatePresence>
        {selectedTemplate && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedTemplate(null)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
            >
              <div className="rounded-xl shadow-2xl w-full max-w-lg overflow-hidden border flex flex-col" style={{ borderColor: "#e0e0e0", backgroundColor: "#FFFFFF" }}>
                {/* Header - White with Dark Green Accent */}
                <div
                  className="p-5 border-b"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderBottomColor: "#e0e0e0",
                  }}
                >
                  <h3 className="text-2xl font-display mb-1" style={{ color: "#3d4c41" }}>
                    {selectedTemplate}
                  </h3>
                  <p className="font-body text-sm" style={{ color: "#666666" }}>
                    Describe your vision and let AI create it
                  </p>
                </div>

                {/* Content - Pure White */}
                <div
                  className="p-6 space-y-4 flex-1"
                  style={{
                    backgroundColor: "#FFFFFF",
                  }}
                >
                  <div>
                    <label
                      htmlFor="prompt"
                      className="block text-sm font-body font-semibold mb-3"
                      style={{ color: "#3d4c41" }}
                    >
                      Enter Your Prompt
                    </label>
                    <motion.textarea
                      id="prompt"
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      disabled={isGenerating}
                      placeholder={`Describe the perfect ${selectedTemplate.toLowerCase()} for your needs...`}
                      className="w-full px-4 py-3 border rounded-lg font-body focus:outline-none focus:ring-2 transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{
                        borderColor: "#e0e0e0",
                        backgroundColor: "#FFFFFF",
                        color: "#2a2a2a",
                      }}
                      rows={5}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = "#3d4c41";
                        e.currentTarget.style.boxShadow = "0 0 0 3px rgba(61, 76, 65, 0.1)";
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = "#e0e0e0";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* Info text */}
                  <p className="text-xs font-body" style={{ color: "#888888" }}>
                    The more details you provide, the better your generated website will be!
                  </p>
                </div>

                {/* Footer Actions - White with Subtle Border */}
                <div
                  className="px-6 py-4 flex gap-3 border-t"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderTopColor: "#e0e0e0",
                  }}
                >
                  <motion.button
                    onClick={() => setSelectedTemplate(null)}
                    disabled={isGenerating}
                    className="flex-1 px-4 py-2 border-2 rounded-lg font-accent font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      borderColor: "#3d4c41",
                      color: "#3d4c41",
                      backgroundColor: "#FFFFFF",
                    }}
                    whileHover={{ backgroundColor: "#f5f5f5" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Cancel
                  </motion.button>

                  <motion.button
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="flex-1 px-4 py-2 rounded-lg font-accent font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: "#3d4c41",
                    }}
                    whileHover={{ scale: isGenerating ? 1 : 1.05, backgroundColor: "#2f3f37" }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isGenerating ? (
                      <>
                        <motion.div
                          className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        <span>Generating...</span>
                      </>
                    ) : (
                      <>
                        <span>✨</span>
                        <span>Let the Magic Happen</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
