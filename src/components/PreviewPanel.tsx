"use client";

import { useState } from "react";

interface PreviewPanelProps {
  code: string;
}

export default function PreviewPanel({ code }: PreviewPanelProps) {
  const [showCode, setShowCode] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleExport = () => {
    const blob = new Blob([code], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "website.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full lg:w-2/3 flex flex-col" style={{ backgroundColor: '#D6C7A7' }}>
      <div className="border-b px-6 py-4 flex items-center justify-between" style={{ backgroundColor: '#A3A86D', borderColor: '#8f9352' }}>
        <h2 className="text-lg font-semibold text-white">Preview</h2>
        {code && (
          <div className="flex gap-3">
            <button
              onClick={() => setShowCode(!showCode)}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {showCode ? "Show Preview" : "Show Code"}
            </button>
            <button
              onClick={handleCopy}
              className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
            >
              {copySuccess ? "Copied!" : "Copy Code"}
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 text-sm font-medium text-white rounded-lg transition-colors"
              style={{ backgroundColor: '#A3A86D' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#8f9352';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#A3A86D';
              }}
            >
              Export HTML
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 overflow-hidden">
        {!code ? (
          <div className="h-full flex items-center justify-center">
            <div className="text-center">
              <svg
                className="mx-auto h-24 w-24 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                No website generated yet
              </h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                Enter a prompt and generate your first website
              </p>
            </div>
          </div>
        ) : showCode ? (
          <div className="h-full overflow-auto p-6">
            <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
              <code className="text-sm">{code}</code>
            </pre>
          </div>
        ) : (
          <iframe
            srcDoc={code}
            className="w-full h-full border-0"
            title="Website Preview"
            sandbox="allow-scripts"
          />
        )}
      </div>
    </div>
  );
}
