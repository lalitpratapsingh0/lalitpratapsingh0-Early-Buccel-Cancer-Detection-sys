/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          500: '#0284c7',
          600: '#026597',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          dark: '#0a1120',
          accent: '#0d9488',
        },
      },
      animation: {
        'scan': 'scan 2.5s infinite ease-in-out',
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        scan: {
          '0%, 100%': { top: '0%' },
          '50%': { top: '95%' },
        }
      }
    },
  },
  plugins: [],
}
