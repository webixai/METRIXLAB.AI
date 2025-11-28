'use client';

import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NavBar() {
  const { user, isLoaded } = useUser();

  return (
    <nav className="flex items-center justify-between w-full">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Link href="/" className="text-2xl font-clash text-[#8B5CF6] font-bold tracking-wide">
          MetrixLab AI
        </Link>
      </motion.div>

      {/* Navigation Links */}
      <motion.div
        className="flex items-center gap-6 md:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {isLoaded && user ? (
          <>
            <Link
              href="/dashboard"
              className="text-sm md:text-base font-outfit text-[#111827] hover:text-[#8B5CF6] transition-colors"
            >
              Dashboard
            </Link>
            <Link
              href="/editor"
              className="text-sm md:text-base font-outfit text-[#111827] hover:text-[#8B5CF6] transition-colors"
            >
              Editor
            </Link>
            <button
              onClick={() => window.location.href = '/api/auth/signout'}
              className="px-4 py-2 bg-[#8B5CF6] text-white rounded-lg font-poppins font-medium hover:bg-[#7C3AED] transition-colors"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <Link
              href="/auth/sign-in"
              className="text-sm md:text-base font-outfit text-[#111827] hover:text-[#8B5CF6] transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/auth/sign-up"
              className="px-4 py-2 bg-[#8B5CF6] text-white rounded-lg font-poppins font-medium hover:bg-[#7C3AED] transition-colors"
            >
              Sign Up
            </Link>
          </>
        )}
      </motion.div>
    </nav>
  );
}
