/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '15px',
      },
      clipPath: {
        mypolygon: "polygon(0 0, 39% 0, 88% 100%, 0% 100%)",
      }
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#ff4057',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('autoprefixer'),
    require("tailwind-clip-path"),

  ],
}
