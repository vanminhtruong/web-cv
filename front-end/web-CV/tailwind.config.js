export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
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
}
