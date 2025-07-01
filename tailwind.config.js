export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'tablet': {'min': '768px', 'max': '1270px'},
        'lg': {'min': '1272px', 'max': '1279px'},
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          text: '#E0E0E0',
          border: '#333333',
          primary: '#6366F1',
          secondary: '#8B5CF6'
        }
      }
    },
  },
  plugins: [],
  safelist: [
    'grid-cols-2',
    'md:grid-cols-2',
    'xl:grid-cols-2'
  ],
}
