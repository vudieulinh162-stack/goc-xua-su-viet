/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'viet-red': '#DC143C',
        'viet-gold': '#FFD700',
        'viet-cream': '#FFFDD0',
        'viet-brown': '#8B4513',
        'viet-dark': '#2C2C2C',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
