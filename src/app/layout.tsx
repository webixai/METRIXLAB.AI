'use client';

import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from '@/components/LoadingScreen';
import NavBar from '@/components/NavBar';
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
              <motion.div
                key="content"
                className="relative z-10 m-4 md:m-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              >
                {/* navbar fade-in */}
                <motion.div
                  className="glass rounded-xl mb-6 p-4 shadow-lg"
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                >
                  <NavBar />
                </motion.div>

                {/* main content fade-in */}
                <motion.main
                  className="glass rounded-2xl shadow-xl p-6 md:p-10"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.9, ease: 'easeOut' }}
                >
                  {children}
                </motion.main>
              </motion.div>
            )}
          </AnimatePresence>
        </body>
      </html>
    </ClerkProvider>
  );
}
