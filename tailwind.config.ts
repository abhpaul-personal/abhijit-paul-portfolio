import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0E1116",
        surface: "#161B22",
        surface2: "#1D242D",
        border: "#262E38",
        text: "#E9EDF1",
        textSecondary: "#8B95A1",
        textMuted: "#5B6472",
        signal: "#5FBF9F",
        metric: "#E0A458",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
    },
  },
  plugins: [],
};
export default config;
