/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#BDBDBD",
        "dark-gray": "#3A3A3A",
        "silver-gray": "#7f7f7f",
        black: "#272727",
        success: "#17B017",
        info: "#31CDFE",
        warning: "warning",
        danger: "#DB3549",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
