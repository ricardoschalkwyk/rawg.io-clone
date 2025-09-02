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
          "side-dark": "#2d2c2c",
          "light-gray": "#767676",
          "light-text-gray": "#737373",
          "text-gray": "#969696",
          "scorpion-gray": "#5f5f5f",
          "meta-green": "#6dc849",
        },

        rating: {
          "blue-light": "#649bff",
          "blue-dark": "#4354b9",

          "green-light": "#b4ec51",
          "green-dark": "#429321",

          "orange-light": "#fad961",
          "orange-dark": "#f76b1c",

          "red-light": "#ff5764",
          "red-dark": "#f11a2a",
        },
      },
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
};
