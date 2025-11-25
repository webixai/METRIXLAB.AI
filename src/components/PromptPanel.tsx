"use client";

import { useState } from "react";

interface PromptPanelProps {
  onGenerate: (prompt: string, template: string) => void;
  isGenerating: boolean;
  error: string;
}

const templates = [
  { id: "landing", name: "Landing Page", description: "Modern landing page with hero section" },
  { id: "portfolio", name: "Portfolio", description: "Showcase your work and skills" },
  { id: "blog", name: "Blog", description: "Simple blog layout with articles" },
  { id: "business", name: "Business", description: "Professional business website" },
  { id: "custom", name: "Custom", description: "Describe your own design" },
];

export default function PromptPanel({ onGenerate, isGenerating, error }: PromptPanelProps) {
  const [prompt, setPrompt] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState("landing");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isGenerating) {
      onGenerate(prompt, selectedTemplate);
    }
  };

  return (
    <div className="w-full lg:w-1/3 bg-white dark:bg-gray-900 p-6 overflow-y-auto border-r border-gray-200 dark:border-gray-700">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            METRIXLAB CREATION
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Describe your dream website and watch it come to life
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Choose a Template
            </label>
            <div className="grid grid-cols-1 gap-3">
              {templates.map((template) => (
                <button
                  key={template.id}
                  type="button"
                  onClick={() => setSelectedTemplate(template.id)}
                  className={`text-left p-4 rounded-lg border-2 transition-all ${
                    selectedTemplate === template.id
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                  }`}
                >
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {template.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {template.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Describe Your Website
            </label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Create a modern landing page for a fitness app with a hero section, feature cards, and a pricing table. Use energetic colors and bold typography."
              className="w-full h-40 px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-800 dark:text-white resize-none"
              disabled={isGenerating}
            />
          </div>

          {error && (
            <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
              <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={!prompt.trim() || isGenerating}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            {isGenerating ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </span>
            ) : (
              "Generate Website"
            )}
          </button>
        </form>

        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Tips for better results:</h3>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
            <li>• Be specific about colors, layout, and style</li>
            <li>• Mention the type of content you need</li>
            <li>• Include any specific sections or features</li>
            <li>• Describe your target audience</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
