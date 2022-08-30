/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-blue': 'hsl(215, 51%, 70%)',
        'primary-cyan': 'hsl(178, 100%, 50%)',
        'very-dark-blue-bg': 'hsl(217, 54%, 11%)',
        'very-dark-blue-card-bg': 'hsl(216, 50%, 16%)',
        'very-dark-blue-line': 'hsl(215, 32%, 27%)',
        'custom-white': 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        outfit: ['Outfit'],
      },
      fontSize: {
        custom: ['18px'],
      },
    },
  },
  plugins: [],
}
