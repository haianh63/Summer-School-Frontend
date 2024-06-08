/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '385px',
        '460': '460px',
        '640': '640px',
        '740': '740px',
        'md': '880px',
        '1500': '1500px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
