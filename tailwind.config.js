/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient1': 'linear-gradient(45deg, rgba(255, 243, 0, 0.2), rgba(255, 255, 255, 0.1))'
      }
    },
  },
  plugins: [],
}