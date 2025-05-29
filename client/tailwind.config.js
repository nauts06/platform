/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a", // e.g., dark blue
        secondary: "#facc15", // e.g., yellow
      },
    },
  },
  plugins: [],
};
