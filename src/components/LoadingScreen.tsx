'use client';

import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-transparent z-50"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.2 }}
    >
      <h1 className="text-4xl md:text-6xl font-clash shimmer-text tracking-wide">
        MetrixLab AI
      </h1>
    </motion.div>
  );
}
