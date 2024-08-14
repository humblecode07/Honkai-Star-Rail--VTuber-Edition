/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'darkerGrotesque': ["Darker Grotesque"],
        'notoSansJP': ["Noto Sans JP"]
      }
    },
  },
  plugins: [],
}

