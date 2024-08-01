/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
         eternal:{
          light: '#FFE1E1',
          dark: '#E95F62',
          textcolor:'#DA8686'
         }
      }
    },
    fontFamily: {
      dancing: ["Dancing Script", "cursive"],
      poppins: ["Poppins", "sans-serif"],
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
};
