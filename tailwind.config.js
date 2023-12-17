/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./public/pages/*.{html, jsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "fantasy", "night", "cupcake"],
  },
};
