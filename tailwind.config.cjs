/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#151515",
          gray: "#3b3b3b",
          dark: "#202020",
          white: "#FFFFFF",
          "light-gray": "#767676",
          "scorpion-gray": "#5f5f5f",
          "meta-green": "#6dc849",
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  plugins: ["@tailwindcss/forms"],
};
