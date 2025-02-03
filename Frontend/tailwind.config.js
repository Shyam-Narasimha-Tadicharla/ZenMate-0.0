/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust this path based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e2',
          200: '#d1d9d0',
          300: '#b3c0b1',
          400: '#a2b3a0',
          500: '#8fa58d',
          600: '#6b796a',
          700: '#4c5449',
          800: '#2d3229',
          900: '#1e211c',
        },
        cream: {
          50: '#fdfbf7',
          100: '#f9f3e8',
          200: '#f3e7d2',
          300: '#e9d5b1',
          400: '#dfc08b',
          500: '#d1a55f',
          600: '#c18a3f',
          700: '#a16d32',
          800: '#85592d',
          900: '#6d4a28',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
};
