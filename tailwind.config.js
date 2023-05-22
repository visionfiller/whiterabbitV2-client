/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#50324D",
        secondary:  "#26183D",
        third: "#AC948C",
        fourth: "#5E473B",
        fifth: "#D4C2B1ff",
        
        },
      
      fontFamily: {
        body: ['Bitter'],
      },
    },
  },
  plugins: [
    require("daisyui"),
    require('flowbite/plugin')
  ],
}
