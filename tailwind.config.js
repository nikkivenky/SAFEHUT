/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0EA5E9', // Sky 500 - Primary Action
          darkBlue: '#0369A1', // Sky 700 - Hover/Darker
          light: '#F0F9FF', // Sky 50 - Backgrounds
          accent: '#38BDF8', // Sky 400 - Accents
          text: '#0F172A', // Slate 900 - Headings
          muted: '#64748B', // Slate 500 - Body text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
