/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      'alimama': ['AlimamaFangYuanTiVF-Square', 'sans-serif'],
    },
    extend: {
      colors: {
        'sky': '#8CA9F1',
        'floor': '#665CDF',
      }
    },
  },
  plugins: [],
}

