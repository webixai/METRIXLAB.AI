"use client";
import { motion } from "framer-motion";

export default function StyleGuidePage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="max-w-6xl mx-auto px-6 py-24 space-y-24">
      {/* BRAND IDENTITY SECTION */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="text-center space-y-6"
      >
        <h1 className="text-5xl font-[Narnia] text-primary">MetrixLab AI</h1>
        <p className="text-lg text-gray-600 italic font-[Beckan]">
          "Create. Edit. Publish. All with AI."
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-8">
          {/* Logo Placeholder */}
          <div className="p-8 bg-[#F8F6F2] rounded-2xl shadow-lg border border-[#E1D5B8] flex flex-col items-center justify-center">
            <img
              src="/logo.svg"
              alt="MetrixLab Logo"
              className="h-20 w-auto mb-4 opacity-90"
            />
            <p className="text-sm text-gray-700 font-[Beckan]">Primary Logo</p>
          </div>

          {/* Favicon Placeholder */}
          <div className="p-8 bg-[#F8F6F2] rounded-2xl shadow-lg border border-[#E1D5B8] flex flex-col items-center justify-center">
            <img
              src="/favicon.ico"
              alt="Favicon"
              className="h-12 w-12 mb-4 rounded-full opacity-90"
            />
            <p className="text-sm text-gray-700 font-[Beckan]">App Icon / Favicon</p>
          </div>
        </div>
      </motion.section>

      {/* TYPOGRAPHY */}
      <motion.section
        className="space-y-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-300 pb-2">
          Typography
        </h2>
        <div className="space-y-6">
          <div>
            <h1 className="text-6xl font-[Bropella] text-primary">
              H1 – Narnia / Bropella
            </h1>
            <p className="text-sm text-gray-500">
              Used for hero titles and page headers
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-[Bropella] text-soft">H2 – Bropella</h2>
            <p className="text-sm text-gray-500">Used for section titles</p>
          </div>
          <div>
            <p className="text-lg font-[Beckan] text-gray-800">
              Body text – Beckan <br />
              This is used for paragraphs, descriptions, and interface labels.
            </p>
          </div>
        </div>
      </motion.section>

      {/* COLOR SYSTEM */}
      <motion.section
        className="space-y-10"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-300 pb-2">
          Color Palette
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div
            className="p-6 rounded-xl shadow-md text-center"
            style={{ backgroundColor: "#A3A86D" }}
          >
            <p className="text-white font-semibold">Primary</p>
            <p className="text-xs text-white/80">#A3A86D</p>
          </div>
          <div
            className="p-6 rounded-xl shadow-md text-center"
            style={{ backgroundColor: "#E1D5B8" }}
          >
            <p className="text-gray-900 font-semibold">Warm Beige</p>
            <p className="text-xs text-gray-700">#E1D5B8</p>
          </div>
          <div
            className="p-6 rounded-xl shadow-md text-center"
            style={{ backgroundColor: "#D6C7A7" }}
          >
            <p className="text-gray-900 font-semibold">Soft Sand</p>
            <p className="text-xs text-gray-700">#D6C7A7</p>
          </div>
          <div className="p-6 rounded-xl shadow-md text-center bg-[#F8F6F2] border border-gray-300">
            <p className="text-gray-800 font-semibold">Background</p>
            <p className="text-xs text-gray-700">#F8F6F2</p>
          </div>
        </div>
      </motion.section>

      {/* FONT SAMPLES */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="space-y-10"
      >
        <h2 className="text-4xl font-bold mb-6 border-b border-gray-300 pb-2">
          Font Samples
        </h2>
        <div className="space-y-6">
          <p className="text-4xl font-[Bropella] text-primary">
            Bropella – Elegant Serif
          </p>
          <p className="text-4xl font-[Beckan] text-soft">
            Beckan – Clean Serif
          </p>
          <p className="text-4xl font-[Narnia] text-primary">
            Narnia – Fantasy Display
          </p>
        </div>
      </motion.section>
    </main>
  );
}
