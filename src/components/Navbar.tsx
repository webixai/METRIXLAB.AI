'use client';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import SlideMenu from './SlideMenu';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-2xl font-bold tracking-wide text-[#b78bfa]">MetrixLab AI</h1>

        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="p-2 rounded-md hover:bg-white/10 transition"
        >
          <Menu size={26} />
        </button>
      </div>

      <SlideMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </nav>
  );
}
