/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#FA4A0C',
        dark: '#252B42',
      },
      backgroundImage: {
        'logo-fb': "url('src/assets/images/fb_logo.png')",
      },
    },
  },
  plugins: [],
};
