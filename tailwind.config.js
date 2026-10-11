/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#0B1B33", 800: "#0F2342", 700: "#17325C" },
        gold: { DEFAULT: "#D4A52C", 600: "#B98A12", 100: "#FBF3DC" },
        ink: "#1F2937",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 6px 24px -8px rgba(11, 27, 51, 0.18)",
      },
    },
  },
  plugins: [],
};
