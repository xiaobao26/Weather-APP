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
      },
      gridTemplateColumns: {
        'container': '0.6fr repeat(6, minmax(0, 1fr)) 0.6fr',

      },
      gridTemplateRows: {
        'container': '0.6fr repeat(4, minmax(0, 1fr)) 0.6fr'
      },
      gridColumn: {
        'span-2-7': '2 / span 6',
      },
      gridRow: {
        'span-2-5': '2 / span 4',
      }
    },
  },
  plugins: [],
}

