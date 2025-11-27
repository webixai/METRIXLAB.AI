"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function PreviewPage() {
  const [html, setHtml] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Retrieve generated HTML from localStorage
    const generatedHTML = localStorage.getItem("generatedHTML");
    if (generatedHTML) {
      setHtml(generatedHTML);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-gray-200 border-t-amber-400 rounded-full"
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
          <h1 className="text-3xl font-display mb-4" style={{ color: "#1a1a1a" }}>
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
            style={{ backgroundColor: "#FBBF24" }}
          >
            Go Back Home
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header with back button */}
      <div
        className="fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center"
        style={{ backgroundColor: "#FEF3C7", borderBottom: "1px solid #FBBF24" }}
      >
        <h1 className="font-display text-xl" style={{ color: "#1a1a1a" }}>
          Your Generated Website
        </h1>
        <motion.button
          onClick={() => {
            const link = document.createElement("a");
            link.href = `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
            link.download = "generated-website.html";
            link.click();
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded-lg font-accent font-bold"
          style={{ backgroundColor: "#FBBF24", color: "white" }}
        >
          Download
        </motion.button>
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
      />
    </div>
  );
}
