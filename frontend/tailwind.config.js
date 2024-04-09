/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
    screens:{
      'sm':'640px',
      'xsm':'480px',
      '2xsm':'400px'
    }
  },
  plugins: [],
  darkMode: 'class',
}