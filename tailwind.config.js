/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Lora", "Noto Serif SC", "Source Han Serif SC", "Songti SC", "serif"]
      }
    }
  },
  plugins: []
};
