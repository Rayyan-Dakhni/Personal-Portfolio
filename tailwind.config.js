/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 7s linear infinite",
      },
      colors: {
        primary: "#292D3E",
        secondary: "#30374B",
        "tx-primary": "#D2B48A",
      },
    },
  },
  plugins: [],
};
