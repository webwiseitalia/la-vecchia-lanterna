/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary
        'wood-dark': '#2C1810',
        'wood-warm': '#8B4513',
        'cream': '#FFF8F0',
        'ivory': '#FFFAF5',
        // Accent
        'wine': '#C41E3A',
        'wine-dark': '#A01830',
        'gold': '#D4AF37',
        'forest': '#2E5A1C',
        // Neutral
        'coffee': '#4A3728',
        'warm-gray': '#6B5B4F',
        'sand': '#D4C4B5',
        'charcoal': '#1A1A1A',
      },
      fontFamily: {
        'heading': ['Playfair Display', 'Georgia', 'serif'],
        'body': ['Open Sans', 'system-ui', 'sans-serif'],
        'accent': ['Dancing Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
