/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Millik', 'sans-serif'],
      }, fontSize: {
        'xs': '13px',
        'sm': '17px',
      },

      colors: {
        primary: {
          DEFAULT: '#335F32',
          100: "#EAFFEA",
          200: "#F5F5DE",
        },
        secondary: {
          DEFAULT: '#EAA315',
          100: "#FFEDCB"
        },
        gray: {
          DEFAULT: '#D9D9D9',
          100: "#F9FAFB"
        },
        successBg: "#FAFFFA",
        deepGray: "#979797",
        lightGray: "#F0F0F0",
        mideGray: "#E1E1E1",
        white: '#fff',
        grayBorder: '#D9D9D9',
        darkRed: '#C90000',
      },
      greenAccent: {
        DEFAULT: "#EAFFEA"
      },
      borderRadius: {
        DEFAULT: '100px',
      },

      screens: {
        maxWidth: "1226px"

      }
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}