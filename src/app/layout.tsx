'use client';

import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import { useState, useEffect, ReactNode } from 'react';

export default function RootLayout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className="relative min-h-screen overflow-x-hidden">
          <AnimatePresence mode="wait">
            {loading ? (
              <LoadingScreen key="loader" />
            ) : (
              <motion.main
                key="content"
                className="relative z-10 glass m-4 p-6 md:p-10 rounded-2xl shadow-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                {children}
              </motion.main>
            )}
          </AnimatePresence>
        </body>
      </html>
    </ClerkProvider>
  );
}
