/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'mobilXS': '420px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1380px',
    },
    colors: {
      bgPrimaryColor: "#FCFBFD",
      bgSecondaryColor: "black",
      bgTertiaryColor: "#85734D",
      textPrimary: "#FEFEFE",
      textSecondary: "black",
      buttonsPrimaryColor: "#85734D",
      buttonsSecondaryColor: "black",
    }
  },
  plugins: [],
}