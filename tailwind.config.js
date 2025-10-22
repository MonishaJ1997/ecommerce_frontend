/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ ensures all your React files are scanned
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#f47c26", // your orange brand color
          100: "#fde6cf",
          200: "#fbc29a",
          300: "#f79b5f",
          400: "#f47c26",
          500: "#db6d08",
        },
      },
    },
  },
  plugins: [],
};
