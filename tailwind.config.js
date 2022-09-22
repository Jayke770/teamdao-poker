/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'teamdao-default-bg': '#0e1018',
        'teamdao-primary': '#2afe30',
        'teamdao-secondary': '#1b8520'
      },
    },
  },
  plugins: [],
}
