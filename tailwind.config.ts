import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9FAFB",
        foreground: "#111827",
        primary: "#8B5CF6",
        secondary: "#5EEAD4",
        muted: "#E0E7FF",
        border: "#E5E7EB",
        accent: "#b78bfa",
        highlight: "#00e0b8",
      },
      fontFamily: {
        clash: ["'Clash Display'", "sans-serif"],
        outfit: ["'Outfit'", "sans-serif"],
        inter: ["'Inter'", "sans-serif"],
        poppins: ["'Poppins'", "sans-serif"],
        jetbrains: ["'JetBrains Mono'", "monospace"],
        grotesk: ["'Space Grotesk'", "sans-serif"],
      },
      backgroundImage: {
        "animated-gradient":
          "linear-gradient(120deg, #E0C3FC, #8EC5FC, #A7F3D0, #E0C3FC)",
      },
    },
  },
  plugins: [],
};
export default config;
