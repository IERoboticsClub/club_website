/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ie-color-dark': 'var(--ie-color-dark)',
        'ie-color-light': 'var(--ie-color-light)',
      }
    },
  },
  plugins: [],
}

