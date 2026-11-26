/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Noto Serif SC Variable", "Noto Serif SC", "serif"],
        serif: ["Noto Serif SC Variable", "Noto Serif SC", "serif"]
      }
    }
  },
  plugins: []
};
