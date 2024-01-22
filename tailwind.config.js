/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons"
      },
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
      },
    },
  },
  plugins: [],
}