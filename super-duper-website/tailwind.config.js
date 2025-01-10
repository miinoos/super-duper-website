/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xl: ["16px"],
      "2xl": ["20px"],
      "20xl": ["200px", "10.5rem"],
    },
  },
  plugins: [],
};
