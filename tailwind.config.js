/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        'orangeColor': '#F17228',
        'yellowColor': '#FFB30E',
        'greyColor': '#F5F5F5',
      },

      screens: {
        'phone': '640px',
        'laptop': '1024px',
        'desktop': '1280px'
      }
    },
  },
  plugins: [],
}