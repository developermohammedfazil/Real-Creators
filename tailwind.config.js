/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#daf0e3',
          200: '#b8e1ca',
          300: '#8bcba8',
          400: '#5aaf82',
          500: '#3a9464',
          600: '#2a7750',
          700: '#225f41',
          800: '#1d4c35',
          900: '#193f2d',
        },
        accent: {
          50: '#fef8ee',
          100: '#fdefd7',
          200: '#fadcae',
          300: '#f7c47a',
          400: '#f3a244',
          500: '#f08820',
          600: '#e16f16',
          700: '#ba5514',
          800: '#944318',
          900: '#783916',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
