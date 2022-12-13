/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        euclid: ['Android Euclid', 'inter'],
      },
    },
  },
  plugins: [],
};
