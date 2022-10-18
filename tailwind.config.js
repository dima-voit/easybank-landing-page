/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px'
    },
    extend: {
      colors: {
        darkblue: 'hsl(233, 26%, 24%)',
        limegreen: 'hsl(136, 65%, 51%)',
        brightcyan: 'hsl(192, 70%, 51%)',
        grayishblue: 'hsl(233, 8%, 62%)',
        lightgrayishblue: 'hsl(220, 16%, 96%)',
        verylightgray: 'hsl(0, 0%, 98%)',
        white: 'hsl(0, 0%, 100%)'
      },
      backgroundImage: {
        'bg-intro-desktop': "url('/images/bg-intro-desktop.svg')",
        'bg-intro-mobile': "url('/images/bg-intro-mobile.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
