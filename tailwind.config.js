/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line import/no-extraneous-dependencies
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      screens: {
        sm: "600px",
        md: "750px",
        lg: "1100px",
        xl: "1200px",
        "2xl": "1500px",
        "3xl": "1750px",
      },
    },
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    function addHoverUnderline({ addUtilities }) {
      addUtilities({
        ".hover-underline": {
          position: "relative",
          borderBottomWidth: "2px",
          borderColor: "transparent",
          transitionProperty: "all",
          transitionDuration: "300ms",
          "&:hover": {
            borderColor: "white",
          },
        },
        ".custom-underline": {
          position: "relative",
          borderBottomWidth: "2px",
          borderColor: "white",
        },
      });
    },
  ],
};
