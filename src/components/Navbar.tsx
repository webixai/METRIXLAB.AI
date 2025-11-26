"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-display font-bold text-primary">MetrixLab AI</h1>
        <div className="flex space-x-6">
          <a href="#features" className="nav-item">Features</a>
          <a href="#templates" className="nav-item">Templates</a>
          <a href="#pricing" className="nav-item">Pricing</a>
          <a href="#login" className="nav-item">Login</a>
        </div>
      </div>
    </motion.nav>
  );
}
