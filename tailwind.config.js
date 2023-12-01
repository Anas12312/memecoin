/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#4f9843',
        'primary-2': '#4c9540'
      },
      fontFamily: {
        'Poppins': ['"Poppins"','sans-serif'],
        'Next-Bravo': ['"Next-Bravo"', 'sans-serif']
      }
    },
    
  },
  plugins: [],
}