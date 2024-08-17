/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        mavyellow: {
          DEFAULT: '#ebb930',
        },
        mavblack: {
          DEFAULT: '#000000',
        },
        mavwhite: {
          DEFAULT: '#ffffff',
        },
      },
    },
  },
  plugins: [],
};

