/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-1': '#235AB9',
        'primary-2': '#376ac3'
      },
      fontFamily: {
        'Poppins': ['"Poppins"','sans-serif'],
        'Next-Bravo': ['"Next-Bravo"', 'sans-serif']
      }
    },
    
  },
  plugins: [],
}