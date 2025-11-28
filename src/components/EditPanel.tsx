'use client';

import { motion } from 'framer-motion';
import { X, Lock } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import { useEditorStore } from '@/store/useEditorStore';
import { useUser } from '@clerk/nextjs';

interface Props {
  onClose: () => void;
}

const importedFonts = [
  'Beckan', 'Narnia', 'Bropella', 'Ardent', 'Titan One', 'Rammetto One',
  'Bethany Elingston', 'Vanilla Ravioli', 'Liber', 'Roboto', 'Poppins',
  'Open Sans', 'Montserrat', 'Lora', 'Playfair Display', 'Nunito', 'Raleway',
  'Caveat', 'Satoshi', 'Bebas Neue', 'Outfit', 'Manrope', 'DM Sans',
  'Orbitron', 'Work Sans', 'Space Grotesk', 'Cabinet Grotesk',
  'Poppins', 'Roboto', 'Inter', 'Ubuntu', 'Raleway', 'Montserrat', 'Open Sans', 'Lato', 'Source Sans Pro', 'Titillium Web',
  'Karla', 'Work Sans', 'Manrope', 'Nunito', 'Quicksand', 'Mulish', 'DM Sans', 'Comfortaa', 'Cabin', 'Prompt',
  'Sora', 'Lexend', 'Jost', 'Outfit', 'Space Grotesk', 'IBM Plex Sans', 'Georama', 'Oxygen', 'Varela Round', 'Tahoma',
  'Verdana', 'Segoe UI', 'Trebuchet MS', 'Arial', 'Helvetica', 'Calibri', 'Gotham', 'Futura', 'Century Gothic', 'Candara',
  'Noto Sans', 'Public Sans', 'Plus Jakarta Sans', 'Urbanist', 'Hanken Grotesk', 'Red Hat Display', 'Barlow', 'Dm Display', 'Faustina', 'Syne',
  'Playfair Display', 'Lora', 'Merriweather', 'Bitter', 'Droid Serif', 'Cormorant Garamond', 'Prata', 'Crimson Text', 'Cambria', 'Georgia',
  'Garamond', 'Times New Roman', 'Palatino', 'Baskerville', 'Bodoni', 'Caladea', 'Noto Serif', 'IM Fell English', 'Cinzel', 'Cardo',
  'Abril Fatface', 'Charm', 'Cormorant', 'Domine', 'DM Serif Display', 'Fraunces', 'Gidole', 'Kaisei Tokuriki', 'Overpass',
  'Rozha One', 'Sohne', 'Spectral', 'Yrsa', 'Zilla Slab', 'Bebas Neue', 'Oswald', 'Anton', 'Fredoka One', 'Righteous',
  'Pacifico', 'Lobster', 'Caveat', 'Indie Flower', 'Permanent Marker', 'Sacramento', 'Fredoka', 'Alfa Slab One', 'Bungee', 'Rubik Mono One',
  'Space Mono', 'JetBrains Mono', 'IBM Plex Mono', 'Courier Prime', 'Courier New', 'Courier', 'Inconsolata', 'Source Code Pro', 'Victor Mono', 'Operator Mono',
  'Monaco', 'Menlo', 'Roboto Mono', 'Fira Code', 'Hack', 'Liberation Mono', 'Overpass Mono', 'PT Mono', 'Roboto Condensed', 'Bungee Shade',
];

export default function EditPanel({ onClose }: Props) {
  const { user, isLoaded } = useUser();
  const plan = user?.publicMetadata?.plan || 'free';
  const isPremium = plan === 'premium';

  const {
    backgroundColor,
    textColor,
    accentColor,
    fontFamily,
    padding,
    spacing,
    setBackgroundColor,
    setTextColor,
    setAccentColor,
    setFontFamily,
    setPadding,
    setSpacing,
    hydrateFromMetadata,
  } = useEditorStore();

  useEffect(() => {
    if (isLoaded && user?.unsafeMetadata?.theme) {
      const savedTheme = user.unsafeMetadata.theme as any;
      hydrateFromMetadata(savedTheme);
    }
  }, [isLoaded, user, hydrateFromMetadata]);

  const availableFonts = useMemo(() => {
    const freeLimit = Math.ceil(importedFonts.length * 0.7);
    return isPremium ? importedFonts : importedFonts.slice(0, freeLimit);
  }, [isPremium]);

  const handleSave = async () => {
    if (!isPremium || !user) return;
    try {
      await user.update({
        unsafeMetadata: {
          ...user.unsafeMetadata,
          theme: {
            backgroundColor,
            textColor,
            accentColor,
            fontFamily,
            padding,
            spacing,
          },
        },
      });
      alert('✅ Preferences saved successfully!');
    } catch (err) {
      console.error('❌ Failed to save preferences', err);
    }
  };

  const PremiumLock = ({ text }: { text: string }) => (
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center text-center text-sm font-medium rounded border border-white/10">
      <Lock size={22} className="text-[#b78bfa] mb-1" />
      <span>{text}</span>
      <button
        onClick={() => alert('Redirecting to upgrade...')}
        className="mt-2 text-xs px-2 py-1 bg-[#b78bfa]/40 hover:bg-[#b78bfa]/60 rounded transition"
      >
        Upgrade Now
      </button>
    </div>
  );

  return (
    <motion.aside
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 180 }}
      className="fixed top-0 right-0 h-full w-96 bg-[#11111a]/90 backdrop-blur-xl border-l border-white/10 p-6 z-50 text-white flex flex-col"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#b78bfa]">
          {isPremium ? 'Full Editor Access' : 'Free Editor (70%)'}
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-md">
          <X size={22} />
        </button>
      </div>

      <div className="flex flex-col gap-4 overflow-y-auto pr-2 relative">
        <div className="relative">
          <label className="block text-sm mb-1">Background Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full h-10 border border-white/20 bg-transparent rounded"
          />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Text Color</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full h-10 border border-white/20 bg-transparent rounded"
          />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Accent Color</label>
          <input
            type="color"
            value={accentColor}
            onChange={(e) => setAccentColor(e.target.value)}
            disabled={!isPremium}
            className={`w-full h-10 border border-white/20 bg-transparent rounded ${
              !isPremium && 'opacity-40'
            }`}
          />
          {!isPremium && <PremiumLock text="Accent Color – Premium Only" />}
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Font Family</label>
          <select
            value={fontFamily}
            onChange={(e) => setFontFamily(e.target.value)}
            className="w-full bg-transparent border border-white/20 p-2 rounded"
          >
            {availableFonts.map((f) => (
              <option key={f} value={f}>
                {f}
              </option>
            ))}
          </select>
          {!isPremium && <PremiumLock text="Full Font Library – Premium Only" />}
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Padding</label>
          <input
            type="range"
            min="0"
            max={isPremium ? '64' : '24'}
            value={padding}
            onChange={(e) => setPadding(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="relative">
          <label className="block text-sm mb-1">Spacing</label>
          <input
            type="range"
            min="0"
            max={isPremium ? '64' : '20'}
            value={spacing}
            onChange={(e) => setSpacing(Number(e.target.value))}
            className="w-full"
          />
        </div>

        {isPremium ? (
          <button
            onClick={handleSave}
            className="bg-[#b78bfa] hover:bg-[#9b6efc] transition mt-4 py-2 rounded"
          >
            Save Preferences
          </button>
        ) : (
          <div className="relative mt-4">
            <button
              disabled
              className="w-full py-2 bg-gray-700/40 text-gray-400 rounded cursor-not-allowed"
            >
              Save Preferences (Premium)
            </button>
            <PremiumLock text="Save Preferences – Premium Only" />
          </div>
        )}
      </div>

      {!isPremium && (
        <p className="text-xs text-gray-500 mt-6 text-center">
          Upgrade to unlock full editor controls & permanent saves.
        </p>
      )}
    </motion.aside>
  );
}
