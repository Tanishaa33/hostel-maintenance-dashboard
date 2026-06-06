/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonBlue: '#00D4FF',
        electricBlue: '#0099FF',
        offWhite: '#EAEAEA',
        spaceNavy: '#050816', // Lighter than deepNavy, richer
        cardDark: '#0F172A',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 15px rgba(0, 212, 255, 0.4)',
        hoverGlow: '0 0 25px rgba(0, 212, 255, 0.6)',
      },
      backdropBlur: {
        xs: '2px',
        xl: '16px',
      }
    },
  },
  plugins: [],
}