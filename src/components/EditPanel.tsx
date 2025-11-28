'use client';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

interface EditPanelProps {
  onClose: () => void;
}

export default function EditPanel({ onClose }: EditPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-[#11111a] border border-[#b78bfa]/30 rounded-lg p-6 max-w-md w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-bold text-white mb-4">Edit Your Site</h2>
        <p className="text-gray-300 mb-6">Coming soon: Customize colors, fonts, and layout</p>

        <div className="space-y-4">
          <div className="p-3 bg-[#1a1a22] rounded border border-[#b78bfa]/20">
            <p className="text-sm text-gray-400">Theme & Colors</p>
            <p className="text-white text-sm mt-1">Customization panel</p>
          </div>
          <div className="p-3 bg-[#1a1a22] rounded border border-[#b78bfa]/20">
            <p className="text-sm text-gray-400">Typography</p>
            <p className="text-white text-sm mt-1">Font family & sizes</p>
          </div>
          <div className="p-3 bg-[#1a1a22] rounded border border-[#b78bfa]/20">
            <p className="text-sm text-gray-400">Layout</p>
            <p className="text-white text-sm mt-1">Spacing & structure</p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="mt-6 w-full bg-[#b78bfa] hover:bg-[#9b6efc] text-white font-medium py-2 rounded transition"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
}
