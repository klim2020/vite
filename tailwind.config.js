/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      transitionDuration: {
        '2000': '2000ms',
      },
      transitionProperty: {
        'height': 'height',
        'padding': 'padding',
      }
    },
  },
  plugins: [],
}

