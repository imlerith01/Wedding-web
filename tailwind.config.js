/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          primary: '#1F3A2D',      // Forest / bamboo green
          secondary: '#2F5D43',     // Deep moss
          accent: '#7FAE6A',        // Leaf highlight
          dark: '#1C1F1D',          // Charcoal / text
          background: '#F2EFE6',    // Warm sand
          card: '#E7E2D6',          // Soft stone
          muted: '#6B5A4A',         // Muted brown
          'text-secondary': '#2C3A33', // Secondary text
        },
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

