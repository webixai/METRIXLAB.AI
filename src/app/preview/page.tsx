"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PreviewPage() {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const generatedHTML = localStorage.getItem("generatedHTML");
    if (generatedHTML) {
      setHtml(generatedHTML);
    }
    setLoading(false);
  }, []);

  const handleCopyHTML = () => {
    if (html) {
      navigator.clipboard.writeText(html);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (html) {
      const link = document.createElement("a");
      link.href = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
      link.download = "generated-website.html";
      link.click();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-gray-200 border-t-amber-500 rounded-full"
        />
      </div>
    );
  }

  if (!html) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <h1 className="text-3xl font-display mb-4" style={{ color: "#3d4c41" }}>
            No Website Generated
          </h1>
          <p className="font-body mb-6" style={{ color: "#666" }}>
            Go back and create a website first
          </p>
          <motion.button
            onClick={() => router.push("/")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-lg font-accent text-white"
            style={{ backgroundColor: "#3d4c41" }}
          >
            Go Back Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header with controls */}
      <div
        className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center shadow-sm"
        style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid #e0e0e0" }}
      >
        <h1 className="font-display text-xl" style={{ color: "#3d4c41" }}>
          Your Generated Website
        </h1>
        <div className="flex gap-3">
          <motion.button
            onClick={handleCopyHTML}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg font-accent font-semibold border-2"
            style={{
              backgroundColor: copied ? "#3d4c41" : "#FFFFFF",
              color: copied ? "white" : "#3d4c41",
              borderColor: "#3d4c41",
            }}
          >
            {copied ? "✓ Copied!" : "Copy HTML"}
          </motion.button>
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-lg font-accent font-semibold text-white"
            style={{ backgroundColor: "#3d4c41" }}
          >
            Download
          </motion.button>
        </div>
      </div>

      {/* Preview iframe */}
      <iframe
        srcDoc={html}
        title="Generated Website Preview"
        className="w-full"
        style={{
          height: "calc(100vh - 60px)",
          marginTop: "60px",
          border: "none",
        }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
      />
    </div>
  );
}
