'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/nextjs';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-3 bg-[rgba(10,10,25,0.7)] backdrop-blur-lg border-b border-[#00E5FF]/30 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide font-['Clash_Display'] text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#7C3AED]">
          MetrixLab AI
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-[#7C3AED]/20 transition-all"
        >
          <Menu className="w-6 h-6 text-[#00E5FF]" />
        </button>
      </div>

      {open && (
        <div className="absolute right-6 mt-3 w-48 bg-[#0b0b20]/90 backdrop-blur-xl rounded-lg border border-[#00E5FF]/20 shadow-xl">
          <ul className="flex flex-col text-sm font-medium text-white">
            <li
              onClick={() => {
                router.push('/dashboard');
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#7C3AED]/30 cursor-pointer"
            >
              Dashboard
            </li>
            <li
              onClick={() => {
                router.push('/editor');
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#7C3AED]/30 cursor-pointer"
            >
              Editor
            </li>
            <li
              onClick={() => {
                router.push('/billing');
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-[#7C3AED]/30 cursor-pointer"
            >
              Billing
            </li>
            <li
              onClick={() => {
                signOut();
                router.push('/sign-in');
              }}
              className="px-4 py-2 text-[#FF4B91] hover:bg-[#7C3AED]/20 rounded-b-lg cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
