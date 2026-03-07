import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0d0d0d",
        "bg-card": "#161616",
        "bg-elevated": "#1a1a1a",
        "text-muted": "#a3a3a3",
        accent: "#c9a227",
        "accent-hover": "#d4af37",
        border: "#2a2a2a",
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
