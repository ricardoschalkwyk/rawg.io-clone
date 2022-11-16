/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        rawg: {
          black: "#151515",
          white: "#FFFFFF",
          gray: "#FFFFFF29",
          dark: "#FFFFFF12",
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
