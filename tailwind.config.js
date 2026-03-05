/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#f7f4ee",
        jet: "#1b1a18",
        ivory: "#1f1e1b",
        gold: "#c79a2b"
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        sans: ['"Manrope"', "sans-serif"]
      },
      boxShadow: {
        soft: "0 16px 42px rgba(24, 20, 12, 0.14)",
        goldGlow: "0 10px 26px rgba(199, 154, 43, 0.32)"
      }
    }
  },
  plugins: []
};
