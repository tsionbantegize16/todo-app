/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'serio-dark': '#17252A',
        'serio-medium-dark': '#2B7A78',
        'serio-primary': '#3AAFA9',
        'serio-light': '#DEF2F1',
        'serio-white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}