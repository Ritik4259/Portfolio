/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slatebase: "#09090f",
        night: "#0f172a",
        electric: "#7dd3fc",
        mint: "#6ee7b7",
        violetglass: "#a78bfa",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 40px rgba(125, 211, 252, 0.18)",
        panel: "0 30px 80px rgba(2, 6, 23, 0.45)",
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(125,211,252,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,0.08) 1px, transparent 1px)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.45", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 6s ease-in-out infinite",
        marquee: "marquee 18s linear infinite",
      },
    },
  },
  plugins: [],
};
