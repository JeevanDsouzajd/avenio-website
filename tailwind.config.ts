import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Avenio brand tokens - pulled from the logomark
        navy: {
          DEFAULT: "#0A1220", // primary dark background
          light: "#101B2D",
          dark: "#060B14",
        },
        ink: "#F5F7FA", // primary text on dark
        mist: "#94A3B8", // muted/secondary text
        cyan: {
          DEFAULT: "#2FD8F0",
          soft: "#7BE8F7",
        },
        azure: "#3B6FF0", // mid-tone blue from the logo gradient
        violet: {
          DEFAULT: "#8B3FE8",
          deep: "#6E23C9",
        },
        line: "rgba(148, 163, 184, 0.14)", // hairline dividers on navy
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      backgroundImage: {
        "avenio-gradient": "linear-gradient(135deg, #2FD8F0 0%, #3B6FF0 55%, #8B3FE8 100%)",
        "avenio-gradient-soft": "linear-gradient(135deg, rgba(47,216,240,0.15) 0%, rgba(59,111,240,0.15) 55%, rgba(139,63,232,0.15) 100%)",
        "avenio-mesh": "radial-gradient(60% 50% at 20% 0%, rgba(47,216,240,0.16) 0%, rgba(47,216,240,0) 60%), radial-gradient(50% 40% at 85% 15%, rgba(139,63,232,0.18) 0%, rgba(139,63,232,0) 60%)",
      },
      boxShadow: {
        glow: "0 0 60px rgba(47,216,240,0.15)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
