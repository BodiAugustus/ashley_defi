const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '374px',
      ...defaultTheme.screens,
    },
  
    extend: {
      fontFamily: {
        economica: "Economica, sans-serif",

      },
      screens: {
        // 'sm': '400px',
        // 'ms': '539px',
        // 'mx': '767px',
  


      }
    },
  },
  plugins: [],
}