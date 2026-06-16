import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#1F4D3A",
          "green-light": "#2A6B50",
          "green-dark": "#163829",
          "green-50": "#F0F7F4",
          "green-100": "#D6EDE6",
          gold: "#D4AF37",
          "gold-light": "#E8C84A",
          "gold-dark": "#B8971E",
        },
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #1F4D3A 0%, #163829 60%, #0F2A1F 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #D4AF37 0%, #E8C84A 50%, #B8971E 100%)",
        "section-gradient":
          "linear-gradient(180deg, #F0F7F4 0%, #FFFFFF 100%)",
      },
      boxShadow: {
        card: "0 4px 24px rgba(31,77,58,0.08)",
        "card-hover": "0 8px 40px rgba(31,77,58,0.16)",
        gold: "0 4px 24px rgba(212,175,55,0.25)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
