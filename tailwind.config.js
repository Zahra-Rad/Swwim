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
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        DEFAULT: "4px",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "12px",
        primary: "33% 67% 32% 68% / 32% 28% 72% 68%",
      },
      animation: {
        format: "format 10s ease-in-out infinite alternate",
        format2:"format2 10s ease-in-out infinite alternate",
        grain: "grain 1.5s steps(6) infinite",
        wiggle: "wiggle 4.5s ease-in-out infinite alternate",
        wiggleFast: "wiggle 1s ease-in-out infinite alternate",
        marquee: "marquee 30s linear infinite",
        marquee11: "marquee 12.5s linear infinite",
        marquee2: "marquee2 30s linear infinite",
        marquee22: "marquee2 12.5s linear infinite",
        bounce: "bounce 3.5s ease-in-out infinite",
        letterBounce: "letterBounce 4.5s ease-in-out infinite",
        spin: "spin 10s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animation-delay"),
    require("tailwind-scrollbar-hide"),
  ],
};
