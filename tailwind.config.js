/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          background: '#000000',
          foreground: '#ffffff',
          primary: '#7C3AED',
          accent: '#3B82F6',
          warning: '#F97316',
        },
        fontFamily: {
          sans: ['General Sans', 'sans-serif'],
        },
        animation: {
          'marquee': 'marquee 25s linear infinite',
          'marquee2': 'marquee2 25s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0%)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          marquee2: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0%)' },
          },
        },
      },
    },
    plugins: [],
  }
