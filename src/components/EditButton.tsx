'use client';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Pencil } from 'lucide-react';
import EditPanel from './EditPanel';

export default function EditButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-[#b78bfa] hover:bg-[#9b6efc] text-white p-3 rounded-full shadow-lg z-50 transition"
        aria-label="Edit site"
      >
        <Pencil size={22} />
      </button>

      <AnimatePresence>{open && <EditPanel onClose={() => setOpen(false)} />}</AnimatePresence>
    </>
  );
}
