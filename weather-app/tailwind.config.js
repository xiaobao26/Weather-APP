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
        'cur-sky': '#7B89E8',
        'cur-floor': '#5F4CDC',
      },
      gridTemplateColumns: {
        'container': '0.6fr repeat(6, minmax(0, 1fr)) 0.6fr',
        'card': '0.1fr repeat(6, minmax(0, 1fr)) 0.1fr',

      },
      gridTemplateRows: {
        'container': '0.6fr repeat(4, minmax(0, 1fr)) 0.6fr',
        'card': '0.15fr repeat(4, minmax(0, 1fr)) 0.15fr'
      },
      gridColumn: {
        'span-2-7': '2 / span 6',
        'span-2-3': '2 / span 2',
      },
      gridRow: {
        'span-2-5': '2 / span 4',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(130, 154, 237, 1), rgba(95, 76, 220, 1)), url('/src/assets/background/Rain_background.png')",
      },
    },
  },
  plugins: [],
}

