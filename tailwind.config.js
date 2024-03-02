/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "nucleon-main": ["Nucleon-Main"],
        "nucleon-secondary": ["Nucleon-Secondary"],
      },
      borderWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
      },
      colors: {
        secondary: "#BDBDBD",
        "dark-gray": "#3A3A3A",
        "silver-gray": "#7f7f7f",
        black: "#272727",
        success: "#17B017",
        info: "#36a9e1",
        warning: "#ffa500",
        danger: "#DB3549",
        navy: {
          100: "#c2c9d6",
          300: "#697a9b33",
          500: "#384766",
          600: "#313e59",
          700: "#26334d",
          800: "#202b40",
          900: "#192132",
        },
        transparent: "transparent",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      preferredStrategy: "pseudoelements",
      nocompatible: true,
    }), // default: 'standard'
  ],
};
