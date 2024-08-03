/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
  theme: {
    fontFamily: {
      'alimama': ['AlimamaFangYuanTiVF-Square', 'sans-serif'],
    },
    extend: {
      width: {
        '7/8': '90%',
      },
      maxHeight: {
        'customer-lg': '500px',
      },
      colors: {
        'sky': '#8CA9F1',
        'floor': '#665CDF',
        'cur-sky': '#7B89E8',
        'cur-floor': '#5F4CDC',
        'history-1-sky': '#88AEF5',
        'history-1-floor': '#4F84EE',
        'history-2-sky': '#8EB0F3',
        'history-2-floor': '#588BEF',
        'history-3-sky': '#8195F3',
        'history-3-floor': '#4853CF',
        'history-4-sky': '#8584E5',
        'history-4-floor': '#7F7AE5',
      },
      gridTemplateColumns: {
        'container': '0.4fr repeat(6, minmax(0, 1fr)) 0.4fr',
        'card': '0.1fr repeat(6, minmax(0, 1fr)) 0.1fr',

      },
      gridTemplateRows: {
        'container': '1.2fr repeat(4, minmax(0, 1fr)) 1.2fr',
        'card': '0.15fr repeat(4, minmax(0, 1fr)) 0.15fr',
      },
      gridColumn: {
        'span-2-7': '2 / span 6',
        'span-2-3': '2 / span 2',
        'span-4-7': '4 / span 4',
        'span-4-5': '4 / span 2',
      },
      gridRow: {
        'span-2-5': '2 / span 4',
        'span-2-4': '2 / span 2',
        'span-4-5': '4 / span 1',
        'span-5-6': '5 / span 1',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to right bottom, rgba(130, 154, 237, 1), rgba(95, 76, 220, 1)), url('/src/assets/background/Rain_background.png')",
      },
    },
  },
  plugins: [],
}

