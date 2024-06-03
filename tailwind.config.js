/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: false, // Disable all DaisyUI themes globally
  },
  plugins: [
    require("daisyui"),
    require("tailwindcss"),
    require("autoprefixer"),
  ],
};
