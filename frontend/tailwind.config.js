/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      keyframes: {
        wiggle: {
          '0%': 
          { 
            transform: 'translateY(0%)'
          },
          // '25%': {
          //    transform: 'rotate(-3deg)' 
          //   },
            '50%': {
              transform: 'translateY(50%)' 
             },
          '100%': {
            transform: 'translateY(0%)'
          }
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },

      colors: {
        white: "#ffffff",
        tropaz: "#235391",
        brightGreen: "#57cc02",
        silver: "#bcbcbc",
      },
      fontFamily: {
        sans: ['Asap', "sans-serif"],
        alata: ["Alata"],
      },
      letterSpacing: {
        widest: ".3em",
      },
    },
  },
  plugins: [],
}

