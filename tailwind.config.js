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
          // Luční barevné schéma
          primary: '#6B8E5A',           // Šalvějově zelená (hlavní CTA)
          'primary-hover': '#5A7A4A',   // Tmavší zelená pro hover
          secondary: '#8FA67A',         // Světlejší zelená
          accent: '#D4A5A5',            // Jemná květinová (tlumená růžová) pro detaily
          dark: '#2C3A2F',              // Tmavě olivová / uhlová (text)
          background: '#FAF8F3',        // Teplá smetanová (základ pozadí)
          surface: '#FFFFFF',           // Bílá/krémová pro karty a formuláře
          card: '#FFFFFF',              // Bílá pro karty
          muted: '#6B7A6A',            // Šedo-olivová pro sekundární text
          'text-secondary': '#5A6B5A',  // Sekundární text
          border: '#D4D4C4',           // Jemná olivovo-šedá pro rámečky
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

