'use client';

import { useClerk } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';

export default function NavBar() {
  const { signOut } = useClerk();
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between w-full px-6 py-3 rounded-xl bg-[rgba(255,255,255,0.25)] backdrop-blur-md shadow-md border border-white/30">
      {/* Left: logo and brand name */}
      <div className="flex items-center space-x-3">
        <Menu className="w-6 h-6 text-gray-800" />
        <h1 className="text-xl font-bold tracking-wide text-[#6D4AFF] font-['Clash_Display']">
          MetrixLab AI
        </h1>
      </div>

      {/* Right: logout button */}
      <button
        onClick={() => {
          signOut();
          router.push('/sign-in');
        }}
        className="px-4 py-1.5 text-sm font-medium text-white rounded-lg bg-[#6D4AFF] hover:bg-[#5a3ae0] transition-all duration-200 shadow-sm"
      >
        Logout
      </button>
    </nav>
  );
}
