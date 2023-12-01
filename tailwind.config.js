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
        'Mouse Memoirs': [  '"Mouse Memoirs"' , 'sans-serif'],
        'Bungee-Spice': ['"Bungee Spice"', 'sans-serif'],
        'DotGothic16': ['"DotGothic16"', 'sans-serif'] ,
        'Roadway': ['"Roadway"', 'sans-serif'] ,
        'Urban-Melted': ['"Urban Melted"'] ,
        'Urban-Melted-Extrude': ['"Urban Melted Extrude"'] ,
        'Next-Bravo': ['"Next-Bravo"']
      }
    },
    
  },
  plugins: [],
}