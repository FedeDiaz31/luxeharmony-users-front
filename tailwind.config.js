/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primaryFont: ['"Bebas Neue"', "cursive"],
      secondaryFont: ['"Nanum Gothic"', "sans-serif"],
    },
    extend: {},
    screens: {
      mobilXS: "420px",
      tablet: "640px",
      laptop: "1050px",
      desktop: "1380px",
    },
    colors: {
      bgPrimaryColor: "#FCFBFD",
      bgSecondaryColor: "black",
      bgTertiaryColor: "#85734D",
      bgFourthColor: "#a3a3a386",
      textPrimary: "#FEFEFE",
      textSecondary: "black",
      buttonsPrimaryColor: "#85734D",
      buttonsSecondaryColor: "black",
      headerAndFooterColor: "#292728",
    },
    fonts: {},
  },
  plugins: [],
};
