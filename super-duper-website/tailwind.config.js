/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xl: ["17px"],
        "2xl": ["20px"],
        "20xl": ["200px", "10.9rem"],
      },
      animation: {
        "slow-spin": "spin 4s linear infinite", // 4 seconds for one rotation
      },
    },
  },
  plugins: [],
};
