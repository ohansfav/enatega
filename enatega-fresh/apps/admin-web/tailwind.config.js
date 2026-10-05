/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#75d04b',
        'primary-dark': '#659a3b',
        'primary-light': '#a8e681',
        'secondary': '#ff6b47',
      },
    },
  },
  plugins: [],
}