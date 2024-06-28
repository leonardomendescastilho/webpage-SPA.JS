/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.svg')",
        'explorer-pattern': "url('/src/assets/explorer.svg')",
        'universe-pattern': "url('/src/assets/universe.svg')",
      },
    },
  },
  plugins: [],
};
