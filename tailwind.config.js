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
          // Světlejší šalvějová – luční, svatební
          primary: '#7FAF86',           // Světlejší šalvějová (hlavní CTA)
          'primary-hover': '#6E9E76',  // Hover
          'primary-light': '#E8F2EA',  // Jemný zelený podklad (akcent pozadí)
          secondary: '#9AB89F',         // Světlejší zelená
          accent: '#D4A5A5',          // Jemná květinová (tlumená růžová) pro detaily
          dark: '#2C3A2F',             // Tmavě olivová (text – zachován kontrast)
          background: '#FAF8F3',       // Teplá smetanová (základ pozadí)
          surface: '#FFFFFF',          // Bílá pro karty a formuláře
          card: '#FFFFFF',             // Bílá pro karty
          muted: '#6B7A6A',            // Šedo-olivová pro sekundární text
          'text-secondary': '#5A6B5A', // Sekundární text
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

