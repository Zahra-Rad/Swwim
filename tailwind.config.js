/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    colors: {
      blue: "#205BAD",
      dark: "#0D3B85",
      light: "#82A2CF",
      pale: "#A5BCDD",
      sharp: "#0E62E2",
      white: "#fff",
    },
    extend: {
      fontFamily: {
        greyReg: "greyReg",
        greyMed: "greyMed",
        greyBold: "greyBold",
        beton: "beton",
      },
      animation: {
        grain: "grain 1.5s steps(6) infinite",
        wiggle: "wiggle 4.5s ease-in-out infinite alternate",
        marquee: "marquee 30s linear infinite",
        marquee2: "marquee2 30s linear infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
