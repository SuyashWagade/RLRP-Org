/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#0284c7',
          darkBlue: '#0369a1',
          navy: '#0f172a',
          orange: '#f97316',
          amber: '#d97706',
          green: '#16a34a',
          emerald: '#059669',
          lightBg: '#f8fafc',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
        'card-hover': '0 20px 30px -10px rgba(0, 0, 0, 0.15)',
      }
    },
  },
  plugins: [],
}
