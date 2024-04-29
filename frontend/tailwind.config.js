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
        'ie-color-lighter': 'var(--ie-color-lighter)',
      },
      margin: {
        'indent': '3rem',
        'standard': '5rem',
        'standard-1.5': '7.5rem',
        'standard-2': '10rem',
      },

      padding: {
        'indent': '3rem',
        'standard': '5rem',
        'standard-1.5': '7.5rem',
        'standard-2': '10rem',
      },
      


      keyframes: {
        blinkCaret: {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'var(--ie-color-dark)' },
        }
      },
      
      animation: {
        blinkCaret: 'blinkCaret 0.75s step-end infinite',
      },

      
    },
  },
  plugins: [],
}

