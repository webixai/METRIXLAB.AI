"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  height?: string;
}

export default function ParallaxSection({
  backgroundImage,
  title,
  subtitle,
  height = "80vh",
}: ParallaxSectionProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height }}>
      <motion.div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          y,
        }}
        className="absolute inset-0"
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black/40 text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-display font-bold mb-3">{title}</h1>
        {subtitle && (
          <p className="text-xl md:text-2xl font-light max-w-2xl">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
