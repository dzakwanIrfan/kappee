/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'display': ['PerfectlyVintages', 'sans-serif'],
      },
      colors: {
        'brown1': '#543310',
        'brown2': '#74512D',
        'brown3': '#AF8F6F',
        'brown4': '#F8F4E1',
        'myBlack': '#222222',
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-100% - 40px))' },
        }
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 40s linear infinite',
      },
    },
  },
  plugins: [],
}