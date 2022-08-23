/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'brightorange': 'hsl(31, 77%, 52%)',
        'darkcyan': 'hsl(184, 100%, 22%)',
        'verydarkcyan': 'hsl(179, 100%, 13%)',
        'transparentwhite': 'hsla(0, 0%, 100%, 0.75)',
        'lightgray': 'hsl(0, 0%, 95%)',
      },
      fontFamily: {
        lexend: ['Lexend Deca'],
        bigshoulder: ['Big Shoulders Display'],
      },
      fontSize: {
        custom: ['15px'],
      },
    },
  },
  plugins: [],
}
