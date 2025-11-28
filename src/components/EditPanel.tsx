'use client';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useEditorStore } from '@/store/useEditorStore';

interface Props {
  onClose: () => void;
}

export default function EditPanel({ onClose }: Props) {
  const {
    backgroundColor,
    textColor,
    accentColor,
    fontFamily,
    setBackgroundColor,
    setTextColor,
    setAccentColor,
    setFontFamily,
    setPadding,
    setSpacing,
  } = useEditorStore();

  const fonts = [
    // Sans Serif
    'Poppins', 'Roboto', 'Inter', 'Ubuntu', 'Raleway', 'Montserrat', 'Open Sans', 'Lato', 'Source Sans Pro', 'Titillium Web',
    'Karla', 'Work Sans', 'Manrope', 'Nunito', 'Quicksand', 'Mulish', 'DM Sans', 'Comfortaa', 'Cabin', 'Prompt',
    'Sora', 'Lexend', 'Jost', 'Outfit', 'Space Grotesk', 'IBM Plex Sans', 'Georama', 'Oxygen', 'Varela Round', 'Tahoma',
    'Verdana', 'Segoe UI', 'Trebuchet MS', 'Arial', 'Helvetica', 'Calibri', 'Gotham', 'Futura', 'Century Gothic', 'Candara',
    'Noto Sans', 'Public Sans', 'Plus Jakarta Sans', 'Urbanist', 'Hanken Grotesk', 'Red Hat Display', 'Barlow', 'Dm Display', 'Faustina', 'Syne',
    // Serif
    'Playfair Display', 'Lora', 'Merriweather', 'Bitter', 'Droid Serif', 'Cormorant Garamond', 'Prata', 'Crimson Text', 'Cambria', 'Georgia',
    'Garamond', 'Times New Roman', 'Palatino', 'Baskerville', 'Bodoni', 'Caladea', 'Noto Serif', 'IM Fell English', 'Cinzel', 'Cardo',
    'Abril Fatface', 'Charm', 'Cormorant', 'Domine', 'DM Serif Display', 'Fraunces', 'Gidole', 'Kaisei Tokuriki', 'Lora', 'Overpass',
    'Rozha One', 'Slab', 'Sohne', 'Spectral', 'Yrsa', 'Zilla Slab',
    // Display/Decorative
    'Bebas Neue', 'Oswald', 'Anton', 'Fredoka One', 'Righteous', 'Pacifico', 'Lobster', 'Righteous', 'Caveat', 'Indie Flower',
    'Permanent Marker', 'Sacramento', 'Fredoka', 'Alfa Slab One', 'Bungee', 'Rubik Mono One', 'Space Mono', 'JetBrains Mono', 'IBM Plex Mono',
    'Courier Prime', 'Courier New', 'Courier', 'Inconsolata', 'Source Code Pro', 'Victor Mono', 'Operator Mono', 'Monaco',
    'Menlo', 'Roboto Mono', 'Fira Code', 'Hack', 'Liberation Mono', 'Courier', 'Overpass Mono', 'PT Mono', 'Roboto Condensed',
    'Oswald', 'Bebas Neue', 'Anton', 'Righteous', 'Fredoka One', 'Alfa Slab One', 'Bungee', 'Rubik Mono One', 'Bungee Shade',
    'Fredoka One', 'Fredoka Two', 'Fredoka Three', 'Fredoka Four', 'Fredoka Five', 'Fredoka Six', 'Fredoka Seven', 'Fredoka Eight',
  ];

  return (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 180 }}
      className="fixed top-0 right-0 h-full w-80 bg-[#11111a]/90 backdrop-blur-xl border-l border-white/10 p-6 z-50 text-white flex flex-col"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#b78bfa]">Edit Your Website</h2>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-md">
          <X size={22} />
        </button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto">
        <div>
          <label className="block text-sm mb-1">Background Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full h-10 border border-white/20 bg-transparent rounded"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Text Color</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full h-10 border border-white/20 bg-transparent rounded"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Accent Color</label>
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            className="w-full h-10 border border-white/20 bg-transparent rounded"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Font Family</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full bg-transparent border border-white/20 p-2 rounded"
          >
            {fonts.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm mb-1">Padding</label>
          <input
            type="range"
            min="0"
            max="64"
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Spacing</label>
          <input
            type="range"
            min="0"
            max="64"
            onChange={(e) => setSpacing(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </motion.aside>
  );
}
