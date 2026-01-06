/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'modulerz-blue': '#143060',
        'modulerz-gold': '#dda152',
        'modulerz-cream': '#f8f5ed',
      },
      fontFamily: {
        'griggs': ['Griggs:Flare', 'serif'],
        'gotham': ['Gotham:Book', 'Gotham:Medium', 'sans-serif'],
        'inter': ['Inter:Regular', 'Inter:Medium', 'Inter:Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

