import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "#F8FAFC",
        foreground: "#0F172A",
        brand: {
          amber: "#F59E0B",
          "amber-light": "#FBBF24",
          "amber-dark": "#D97706",
          red: "#EF4444",
          "red-dark": "#DC2626",
          blue: "#2563EB",
          dark: "#0F172A",
          "dark-soft": "#1E293B",
          card: "#FFFFFF",
          "card-hover": "#F8FAFC",
          elevated: "#FFFFFF",
          border: "#E2E8F0",
          "border-subtle": "#F1F5F9",
          muted: "#64748B",
          silver: "#475569",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      boxShadow: {
        "amber-glow": "0 4px 20px -2px rgba(245, 158, 11, 0.25)",
        "amber-glow-lg": "0 10px 30px -5px rgba(245, 158, 11, 0.35)",
        "red-glow": "0 4px 20px -2px rgba(239, 68, 68, 0.25)",
        "card-soft": "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 12px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)",
        "inner-light": "inset 0 1px 0 0 rgba(255, 255, 255, 0.8)",
      },
      backgroundImage: {
        "dot-pattern": "radial-gradient(#CBD5E1 1px, transparent 1px)",
        "gold-gradient": "linear-gradient(135deg, #FBBF24 0%, #F59E0B 50%, #D97706 100%)",
        "red-gradient": "linear-gradient(135deg, #F87171 0%, #EF4444 50%, #DC2626 100%)",
        "light-gradient": "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
