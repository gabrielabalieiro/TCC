/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily:{
        titulo : 'RocknRollOne',
        paragrafo : 'Halant',
        topico: 'Inter'
      },
    },
    colors: {
      'purple': '#5C6898',
      'black': '#000000',
      'white': '#ffffff',
      'gray' : '#5b5a5a',
      'light-blue': '#A9DFE2',
      'grey': '#D9D9D9',
      'light-grey': 'rgba(120, 120, 120, 0.29)',
      'grey-popup': 'rgba(69, 69, 69, 1)'
    },
  },
  plugins: [],
}