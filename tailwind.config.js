import { pink } from '@mui/material/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#00abff",
        regal: "#243c5a" ,
        pink: "#172B44",
        main: "#FFFFFF",
        main2: "#172B44"

      },
      fontFamily: {
        dancing: ['Dancing Script', 'cursive'],
        pacifico: ['Pacifico', 'cursive'],
        greatvibes: ['Great Vibes', 'cursive'],
        casual: ['Rouge Script', 'cursive'],
        casual2: ['Winky Rough', 'sans-serif']
      },
    },
  },
  plugins: [require("daisyui")],
  
  
  
  
  
}