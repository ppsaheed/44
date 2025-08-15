/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'uae-gold': '#D4AF37',
        'uae-red': '#FF0000',
        'uae-green': '#00732F',
        'uae-black': '#000000',
        'primary': '#1e40af',
        'secondary': '#64748b',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
