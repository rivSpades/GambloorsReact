/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#242423',
        primaryWhite: '#bdbdbd',
        highlight: '#c7a54b',
        highlightAccent: '#d2b76f',
        highlightWhite: '#fcf1d3',
        secondary: '#202020',
        diceGreen: '#9bed9a',
        diceRed: '#ff9999',
        accent: '#3a3a39',
      },
      screens: {
        xxl: '1921px',
        tall: { 'raw': '(max-height: 450px)' },
      },
    },
  },
  plugins: [],
};
