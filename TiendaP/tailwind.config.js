/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
    theme: {
      extend: {
        colors: {
          'azul-marino': '#001f54',
          'burdeos': '#800020',
          'burdeos-claro': '#a03345',
          'dorado': '#bfa76f',
        },
      },
    },
  
  plugins: [],
}