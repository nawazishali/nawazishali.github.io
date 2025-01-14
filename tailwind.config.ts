/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./themes/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [require("tailwindcss-primeui")],
  theme: {
    container: {
      center: true,
    },
  },
};
