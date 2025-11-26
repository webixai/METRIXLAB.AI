import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#8B5CF6",      // Vibrant violet
        secondary: "#FBBF24",    // Warm amber accent
        background: "#F9F7F3",   // Soft off-white base
        accent: "#10B981",       // Muted green artistic touch
        text: "#1E293B",         // Rich slate for strong contrast
        muted: "#CBD5E1",        // Gentle gray for dividers and subtle details
      },
      fontFamily: {
        display: ['Playfair Display', 'Titan One'],
        body: ['Poppins', 'Titan One'],
        accent: ['Rammetto One'],
      },
      boxShadow: {
        card: "0 4px 14px rgba(0,0,0,0.08)",
        soft: "0 2px 8px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl: "1rem",
      },
      gridTemplateColumns: {
        'art-grid': 'repeat(auto-fit, minmax(280px, 1fr))',
      },
    },
  },
  plugins: [],
};

export default config;
