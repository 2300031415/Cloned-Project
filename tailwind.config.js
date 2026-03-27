/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0c67c4',
          light: '#0d83fd',
          dark: '#0a56a3',
        },
        secondary: {
          DEFAULT: '#2d465e',
          dark: '#1e2f3f',
        },
        accent: '#f3f9ff',
        'brand-text': '#212529',
        'brand-muted': '#5f6f7d',
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #f3f9ff 0%, #ffffff 100%)',
      }
    },
  },
  plugins: [],
}
