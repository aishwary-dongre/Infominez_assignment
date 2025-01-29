/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00FFB9',
        secondary: '#535bf2',
      },
      backgroundColor: {
        'hero': '#020B2D',
      },
    },
  },
  plugins: [],
}