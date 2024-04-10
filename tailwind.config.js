/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2b7cff",
        secondary: "#1f1f1f",
        success: "#22c55e",
        warning: "#eab308",
        danger: "#ef4444"
      },
      screens: {
        tab: "770px"
      }
    }
  },
  plugins: []
};
