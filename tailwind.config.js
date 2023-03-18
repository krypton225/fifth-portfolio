/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: "1.3rem",
      center: true,
    },
    extend: {
      colors: {
        "primary": "#0801FE",
        "dark-1": "#000101",
        "dark-2": "#161313",
        "dark-3": "#1F1F1F",
        "gray-color": "#828383",
        "custom-white-1": "#FEFFFE",
        "custom-white-2": "#F6F5F5",
      }
    },
  },
  plugins: [],
};