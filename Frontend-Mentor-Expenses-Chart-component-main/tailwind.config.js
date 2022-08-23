/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-red': 'hsl(10, 79%, 65%)',
        'primary-cyan': 'hsl(186, 34%, 60%)',
        'dark-brown': 'hsl(25, 47%, 15%)',
        'medium-brown': 'hsl(28, 10%, 53%)',
        'cream': 'hsl(27, 66%, 92%)',
        'pale-orange': 'hsl(33, 100%, 98%)',
      },
      fontFamily: {
        dm: ['DM Sans'],
      },
      fontSize: {
        custom: ['18px'],
      },
    },
  },
  plugins: [],
}
